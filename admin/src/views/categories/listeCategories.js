import React, { useState, useEffect, Component } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { Link } from "react-router-dom";
import { CButton, CIcon } from "@coreui/react";
import { getCategories } from "src/services/categorie";
import * as api from "../../api/index.js";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const columns = [
  { field: "_id", headerName: "ID", width: 70 },
  { field: "definition", headerName: "Definition", width: 200 },
  { field: "label", headerName: "Label", width: 430 },

  // { field: "update", headerName: "update", sortable: false },

  // {
  //   field: "fullName",
  //   headerName: "Full name",
  //   description: "This column has a value getter and is not sortable.",
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.getValue("firstName") || ""} ${
  //       params.getValue("lastName") || ""
  //     }`,
  // },
];



const rows = [
  {
    id: 1,
    label: "Snow",
    definition: "Jon afqfqvquhfihqsipdjqsiohb;idjhfqufsgmsdsuqhiiqhfiq",
    age: 35,
  },
  {
    id: 2,
    lastName: "Lannister",
    firstName: "Cerseivyqdqhdhioqhiqshdiqqslkndbhqsiygudhiq",
    age: 42,
  },
  {
    id: 3,
    lastName: "Lannister",
    firstName: "Jaime qfugqoifqsiuldghiqsbfqsfsqfuqs",
    age: 45,
  },
  {
    id: 4,
    lastName: "Stark",
    firstName: "Arya qsdgmujqsbdfyqsubqsmidfqsfqshikqs",
    age: 16,
  },
  {
    id: 5,
    lastName: "Targaryen",
    firstName: "Daenerys mhqjd!qsufguqsfsqfqsbjdqsuihdkqs",
    age: null,
  },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  {
    id: 7,
    lastName: "Clifford",
    firstName: "Ferrara qhvydiumqslbfhyqsfqsfqssdobjqsdusqd",
    age: 44,
  },
  {
    id: 8,
    lastName: "Frances",
    firstName: "Rossini guoqkfbclqysudfqsfsqbkqismuodqsd",
    age: 36,
  },
  {
    id: 9,
    lastName: "Roxie",
    firstName: "Harvey qsmdviyukqscfdzikqfqsfsqfsqfqsndyqsdb",
    age: 65,
  },
];
export default function DataGridDemo() {
  const dispatch = useDispatch();
  const history = useHistory();
  // const data = api.fetchCategories();
  const [cat, setCat] = useState(null);
  useEffect(() => {
    // const abortController = new AbortController();
    // allCategs();
    // console.log(cat);
    // return () => {
    //   // abortController.abort();
    // };
  }, []);
  // dispatch(getCategories());

  const categories = useSelector((state) => state.categories);

  // const allCategs = async () => {
  //   const result = await api.fetchCategories();
  //   setCat(result);
  // };
  // allCategs();
  // console.log(cat);
  console.log(categories);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <CButton
        color="info"
        size="sm"
        className="ml-5"
        onClick={() => history.push("/categories-add")}
      >
        Add categorie
      </CButton>
      *{" "}
      <DataGrid
        className="bg-white"
        rows={rows}
        columns={columns}
        pageSize={5}
        hover
        stripped
        // checkboxSelection
        clickableRows
        onRowClick={(item) => history.push(`/categorie/${item.id}`)}
      />
      <h1>{categories[0]._id}</h1>
    </div>
  );
}
// import React, { useState, useEffect } from "react";
// import { useHistory, useLocation } from "react-router-dom";
// import {
//   CBadge,
//   CCard,
//   CCardBody,
//   CCardHeader,
//   CCol,
//   CDataTable,
//   CRow,
//   CPagination,
//   CButton,
// } from "@coreui/react";

// // import { uploadFile, allTeachers } from "src/services/api.teacher.service";
// const getBadge = (status) => {
//   switch (status) {
//     case "Active":
//       return "success";
//     case "Inactive":
//       return "secondary";
//     case "Pending":
//       return "warning";
//     case "Banned":
//       return "danger";
//     default:
//       return "primary";
//   }
// };

// const DataGridDemo = () => {
//   const history = useHistory();
//   const queryPage = useLocation().search.match(/page=([0-9]+)/, "");
//   const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1);
//   const [cat, setCat] = useState(null);
//   const [page, setPage] = useState(currentPage);
//   // const { addToast } = useToasts();

//   const pageChange = (newPage) => {
//     currentPage !== newPage && history.push(`/students?page=${newPage}`);
//   };

//   const getAllTeachers = async () => {
//     // const result = await allTeachers();
//     // setTeachers(result);
//   };

//   useEffect(() => {
//     // getAllTeachers();
//     const cate = [
//       { id: 1, label: "Snow", definition: "Jon" },
//       { id: 2, label: "Lannister", definition: "Cersei" },
//       { id: 3, label: "Lannister", definition: "Jaime" },
//       { id: 4, label: "Stark", definition: "Arya" },
//       { id: 5, label: "Targaryen", definition: "Daenerys" },
//       { id: 6, label: "Melisandre", definition: null },
//       { id: 7, label: "Clifford", definition: "Ferrara" },
//       { id: 8, label: "Frances", definition: "Rossini" },
//       { id: 9, label: "Roxie", definition: "Harvey" },
//     ];
//     setCat(cate);
//   }, []);

//   useEffect(() => {
//     currentPage !== page && setPage(currentPage);
//   }, [currentPage, page]);

//   return (
//     <CRow>
//       <CCol xl={12}>
//         <CCard>
//           <CCardHeader>
//             Categories
//             <CButton
//               color="primary"
//               size="sm"
//               className="ml-5"
//               onClick={() => history.push("/categories-add")}
//             >
//               Ajouter Categorie
//             </CButton>
//           </CCardHeader>
//           <CCardBody>
//             <CDataTable
//               items={cat}
//               fields={[
//                 { key: "id", _classes: "font-weight-bold" },
//                 "Label",
//                 "Definition",
//               ]}
//               hover
//               striped
//               itemsPerPage={5}
//               activePage={page}
//               clickableRows
//               onRowClick={(item) => history.push(`/categorie/${item.id}`)}
//             />
//             <CPagination
//               activePage={page}
//               onActivePageChange={pageChange}
//               pages={5}
//               doubleArrows={false}
//               align="center"
//             />
//           </CCardBody>
//         </CCard>
//       </CCol>
//     </CRow>
//   );
// };

// export default DataGridDemo;
