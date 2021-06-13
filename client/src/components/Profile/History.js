import React, { useEffect,useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { lighten, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
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
import DeleteIcon from "@material-ui/icons/Delete";
import UpdateIcon from "@material-ui/icons/Update";
import TextFields from "@material-ui/icons/TextFields";
import FilterListIcon from "@material-ui/icons/FilterList";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteService, getServices } from "../../actions/services";
import { useLocation, useHistory } from "react-router-dom";
import { Link, Route } from "react-router-dom";
import AddServiceForm from "../Services/Forms/AddServiceForm";
import { getRqData } from "../../actions/requestsData";
import ServiceList from "../Services/ServiceList";
import { getUsers } from "../../actions/users";
import { getRequests} from "../../actions/requests";
import RequestModal from "../Request/RequestModal";
import '../../assets/ModalButtonStyle.css';
import * as api from './../../api/index'

function History() {
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();
  const [loading,setLoading] = useState(true)
  const [users,setUsers] = useState(null)
  const [services,setServices] = useState(null)
  const [requests,setRequests] = useState(null)
  const [status,setStatus] = useState("None")

  useEffect(() => {

    Promise.all([api.fetchUsers()
    ,api.fetchServices()
    ,api.fetchRequests()]).then((res)=>{
      console.log(res)
      setUsers(res[0].data);
      setServices(res[1].data);
      setRequests(res[2].data.filter((r) => r.clientId === user.result._id));
      setLoading(false);
    })
  },[location]);
  let rows;
  /*const services = useSelector((state) => state.services);
  const requests = useSelector((state) => state.requests);
  const users = useSelector((state) => state.users);*/
  const user = JSON.parse(localStorage.getItem("profile"));
  if (!loading)
  rows = status ==="None"?requests.filter((r) => r.clientId === user.result._id):requests.filter((r) => r.clientId === user.result._id && r.status===status);

  //const rows = services.filter(s => props.id.includes(s._id));
const statuses = ["Pending","In Progress","Canceled","Refused","Completed"]
  function descendingComparator(a, b, orderBy) {
    console.log(a[orderBy]);
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
      ? (a, b) => {
          descendingComparator(a, b, orderBy);
          console.log("hiiiii");
        }
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
    { id: "sector", numeric: false, disablePadding: false, label: "Sector" },
    {
      id: "timestamp",
      numeric: false,
      disablePadding: false,
      label: "Date",
    },
    { id: "status", numeric: false, disablePadding: false, label: "Status" },
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
              //sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
              //active={orderBy === headCell.id}
              //direction={orderBy === headCell.id ? order : "asc"}
              //onClick={createSortHandler(headCell.id)}
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

    const handleStatusChange = (e) =>{
      props.setStatus(e.target.value)
    }
    const classes = useToolbarStyles();
    const { numSelected } = props;
    const numSelectedInt = parseInt(numSelected);
if (loading) return (<div></div>)
    return (
      <Toolbar
        className={clsx(classes.root, {
          [classes.highlight]: numSelectedInt > 0,
        })}
        style={{display:"flex 6 3 3 auto"}}
      >
        {numSelectedInt > -1 ? (
          <Typography
            className={classes.title}
            color="inherit"
            variant="subtitle1"
            component="div"
          >
            Request selected
          </Typography>
        ) : (
          <Typography
            className={classes.title}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            Request History
          </Typography>
        )}

        {numSelectedInt > -1 ? (
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Tooltip title="Delete" /*onClick={handleDelete}*/>
              <IconButton aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </div>
        ) : (
          <>
          <div style={{width:"20%"}}>Filter by</div>
                    <Select
                    variant="filled"
                    style={{flexGrow:3}}
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={props.status}
          onChange={handleStatusChange}
          label="Statuses"
        >
          <MenuItem value="None" >
            <em>None</em>
          </MenuItem>
          {statuses.map((st)=>(
            <MenuItem value={st}>{st}</MenuItem>
          ))}
          </Select>
          </>
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

  const EnhancedTable=(props)=> {
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

    const colors = {
      "Pending": "#FF8C00",
      "Completed": "#ADFF2F",
      "Refused": "#FF6347",
      "In Progress": "#0096FF",
      "Canceled":"#262626"
    };
    return (
      <div>
        <Paper className={classes.paper}>
          <EnhancedTableToolbar status={props.status} setStatus={props.setStatus} numSelected={selected} />
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
                    console.log(row)
                    const isItemSelected = isSelected(row._id);
                    const labelId = `enhanced-table-checkbox-${index}`;
                    console.log(services);
                    const service = services.find(
                      (service) => service._id === row.serviceId
                    );
                    const serviceName = service.sector;
                    const owner = users.find(
                      (user) => user._id === service.owner
                    );

                    console.log(serviceName);

                    return (
                      <TableRow
                        hover
                        onClick={(event) => handleClick(event, row._id)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row._id}
                        selected={isItemSelected}
                        className="parent"
                      >
                        <TableCell padding="checkbox">
                          <Checkbox
                            checked={isItemSelected}
                            inputProps={{ "aria-labelledby": labelId }}
                          />
                        </TableCell>
                        <TableCell
                          component="th"
                          id={labelId}
                          scope="row"
                          align="center"
                        >
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                            }}
                          >
                            <div style={{ alignSelf: "center" }}>
                              {service.sector}
                            </div>
                            <div className ="child" style={{ marginLeft: "auto"}}>
                              <RequestModal
                                service={service}
                                owner={owner}
                                request={row}
                              />
                            </div>
                          </div>
                        </TableCell>
                        <TableCell align="center">{row.timestamp}</TableCell>
                        <TableCell align="center">
                          <Button
                            style={{ backgroundColor: colors[`${row.status}`],color:row.status==="Canceled"?"#FFFFFF":"#000000" }}
                          >
                            {row.status}
                          </Button>
                        </TableCell>
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
  if (loading) return (<div></div>)
  return (
    <div>
      {!rows.length ? (
        <>
        <div>
        <EnhancedTable status={status} setStatus={setStatus}/>
      </div>
        <div style={{ paddingTop: "50px" }}>
          <div
            class="alert alert-info"
            role="alert"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            You currently have no requests made !
            <Link to="/ServiceList">
              <button type="button" class="btn btn-outline-primary">
                Lets Request a service!
              </button>
            </Link>
            <Route path="/ServiceList" component={ServiceList}></Route>
          </div>
        </div>
        </>
      ) : (
        <div>
          <EnhancedTable status={status} setStatus={setStatus}/>
        </div>
      )}
    </div>
  );
}

export default History;
