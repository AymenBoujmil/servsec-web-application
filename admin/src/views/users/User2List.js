import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { CIcon } from "@coreui/icons-react";

import { lighten, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
// import DeleteIcon from "@material-ui/icons/Delete";
// import UpdateIcon from "@material-ui/icons/Update";
// import TextFields from "@material-ui/icons/TextFields";
// import FilterListIcon from "@material-ui/icons/FilterList";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// import { deleteService, getServices } from "../actions/services";
import { useLocation, useHistory, Redirect } from "react-router-dom";
import { Link, Route } from "react-router-dom";
// import AddServiceForm from "../components/Services/Forms/AddServiceForm";
import { getCategories } from "src/actions/categories";
import { getServices } from "src/actions/services";
import { getUsers } from "src/actions/users";
import { deleteUser } from "src/actions/users";

function ListCat() {
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(getUsers());
  }, [location]);

  const rows = useSelector((state) =>
    state.users.filter((u) => u.role === "Client")
  );
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  if (!user) return <Redirect to="/login" />;
  console.log(rows);
  // console.log(categories);
  //   console.log(rows);
  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  function getComparator(order, orderBy) {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }

  const headCells = [
    { id: "url", numeric: false, disablePadding: false, label: "Image" },

    {
      id: "firstname",
      numeric: false,
      disablePadding: false,
      label: "First Name",
    },
    {
      id: "lastname",
      numeric: false,
      disablePadding: false,
      label: "Last Name",
    },

    {
      id: "date",
      numeric: false,
      disablePadding: false,
      label: "Birthday ",
    },

    {
      id: "email",
      numeric: false,
      disablePadding: false,
      label: "email",
    },
    {
      id: "phone",
      numeric: false,
      disablePadding: false,
      label: "phone",
    },
  ];

  function EnhancedTableHead(props) {
    const { classes, order, orderBy, onRequestSort } = props;
    const createSortHandler = (property) => (event) => {
      onRequestSort(event, property);
    };

    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox"></TableCell>
          {headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
              align={"center"}
              padding={headCell.disablePadding ? "none" : "default"}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <span className={classes.visuallyHidden}>
                    {order === "desc"
                      ? "sorted descending"
                      : "sorted ascending"}
                  </span>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }

  EnhancedTableHead.propTypes = {
    classes: PropTypes.object.isRequired,
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    order: PropTypes.oneOf(["asc", "desc"]).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
  };

  const useToolbarStyles = makeStyles((theme) => ({
    root: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(1),
    },
    highlight:
      theme.palette.type === "light"
        ? {
            color: theme.palette.secondary.main,
            backgroundColor: lighten(theme.palette.secondary.light, 0.85),
          }
        : {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.secondary.dark,
          },
    title: {
      flex: "1 1 100%",
    },
  }));

  const EnhancedTableToolbar = (props) => {
    const classes = useToolbarStyles();
    const { numSelected } = props;
    const numSelectedInt = parseInt(numSelected);

    const handleDelete = (e) => {
      e.preventDefault();
         dispatch(deleteUser(numSelected));
    };

    const handleupdate = (e) => {
      e.preventDefault();
      //   history.push(`updateService/${numSelected}`);
    };

    const handleRequestForm = (e) => {
      e.preventDefault();
      //   history.push(`service/RequestForm/${numSelected}`);
    };

    return (
      <Toolbar
        className={clsx(classes.root, {
          [classes.highlight]: numSelectedInt > 0,
        })}
      >
        {numSelectedInt > -1 ? (
          <Typography
            className={classes.title}
            color="inherit"
            variant="subtitle1"
            component="div"
          >
            Entreprise selected
          </Typography>
        ) : (
          <Typography
            className={classes.title}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            Client
          </Typography>
        )}

        {numSelectedInt > -1 ? (
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Tooltip title="Delete" onClick={handleDelete}>
              <IconButton aria-label="delete">
                 <CIcon name="cilTrash" /> 
              </IconButton>
            </Tooltip>
            <Tooltip title="update">
              <IconButton aria-label="update">
                {/* <UpdateIcon onClick={handleupdate} /> */}
              </IconButton>
            </Tooltip>
            <Tooltip title="Request Data">
              <IconButton aria-label="update">
                {/* <TextFields onClick={handleRequestForm} /> */}
              </IconButton>
            </Tooltip>
          </div>
        ) : (
          <Tooltip title="Filter list">
            <IconButton aria-label="filter list">
              {/* <FilterListIcon /> */}
            </IconButton>
          </Tooltip>
        )}
      </Toolbar>
    );
  };

  EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.string.isRequired,
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
    },
    paper: {
      width: "100%",
      marginBottom: theme.spacing(2),
    },
    table: {
      minWidth: 750,
    },
    visuallyHidden: {
      border: 0,
      clip: "rect(0 0 0 0)",
      height: 1,
      margin: -1,
      overflow: "hidden",
      padding: 0,
      position: "absolute",
      top: 20,
      width: 1,
    },
  }));

  function EnhancedTable() {
    const classes = useStyles();
    const [order, setOrder] = React.useState("asc");
    const [orderBy, setOrderBy] = React.useState("calories");
    const [selected, setSelected] = React.useState(-1);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleRequestSort = (event, property) => {
      const isAsc = orderBy === property && order === "asc";
      setOrder(isAsc ? "desc" : "asc");
      setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
      if (event.target.checked) {
        const newSelecteds = rows.map((n) => n.name);
        setSelected(newSelecteds);
        return;
      }
      setSelected([]);
    };

    const handleClick = (event, id) => {
      if (selected === id) setSelected("-1");
      else setSelected(id);
    };

    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };

    const handleChangeDense = (event) => {
      setDense(event.target.checked);
    };

    const isSelected = (id) => selected === id;

    const emptyRows =
      rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    return (
      <div>
        <Paper className={classes.paper}>
          <EnhancedTableToolbar numSelected={selected} />
          <TableContainer>
            <Table
              className={classes.table}
              aria-labelledby="tableTitle"
              size={dense ? "small" : "medium"}
              aria-label="enhanced table"
            >
              <EnhancedTableHead
                classes={classes}
                numSelected={selected}
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
              />
              <TableBody>
                {stableSort(rows, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const isItemSelected = isSelected(row._id);
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <TableRow
                        hover
                        onClick={(event) => handleClick(event, row._id)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row._id}
                        selected={isItemSelected}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox
                            checked={isItemSelected}
                            inputProps={{ "aria-labelledby": labelId }}
                          />
                        </TableCell>
                        <TableCell align="center">
                          <img
                            style={{ width: "30px", borderRadius: "50%" }}
                            src={row.url}
                          ></img>
                        </TableCell>
                        <TableCell
                          component="th"
                          id={labelId}
                          scope="row"
                          align="center"
                        >
                          {row.firstname}
                        </TableCell>
                        <TableCell align="center">{row.lastname}</TableCell>
                        {/* <TableCell align="center">
                          {users.find((u) => u._id === row.owner).name}
                        </TableCell>*/}
                        <TableCell align="center">
                          {/* {users.find((u) => u._id === row.owner)} */}
                          {row.date}
                        </TableCell>{" "}
                        <TableCell align="center">{row.email}</TableCell>
                        <TableCell align="center">{row.phone}</TableCell>
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>
        <FormControlLabel
          control={<Switch checked={dense} onChange={handleChangeDense} />}
          label="Dense padding"
        />
      </div>
    );
  }
  return (
    <div>
      {!rows.length ? (
        <div style={{ paddingTop: "50px" }}>
          <div
            class="alert alert-info"
            role="alert"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            You currently have no entreprises !
            {/* <Link to="/addService">
              <button type="button" class="btn btn-outline-primary">
                Lets Add more
              </button>
            </Link> */}
            {/* <Route path="/addService" component={AddServiceForm}></Route> */}
          </div>
        </div>
      ) : (
        <div>
          <EnhancedTable />
          <div>
            {/* <Link to="/categories-add">
              <button type="button" class="btn btn-outline-primary">
                Lets Add more
              </button>
            </Link> */}
            {/* <Route path="/addService" component={AddServiceForm}></Route> */}
          </div>
        </div>
      )}
    </div>
  );
}

export default ListCat;
