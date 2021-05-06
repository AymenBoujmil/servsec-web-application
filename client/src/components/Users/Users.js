import React from 'react'
import { useSelector} from 'react-redux';
import { CircularProgress  } from '@material-ui/core';
import {DataGrid} from '@material-ui/data-grid';
import Popup from 'reactjs-popup';

const Users= () => {
    const users = useSelector((state) => state.users);

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstname', headerName: 'First name', width: 130 },
        { field: 'name', headerName: 'Last name', width: 130 },
        {
          field: 'email',
          headerName: 'email',
          width: 200,
        },
        {
          field: 'full name',
          headerName: 'full name',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 160,
          valueGetter: (params) =>
            `${params.getValue('firstname') || ''} ${params.getValue('name') || ''}`,
        },
        {
            field: 'phone',
            headerName: 'phone',
            type:'number',
            width: 160,
          },
      ];
      console.log(users);
      const rows = users;
      
      const handlerow=(row,column,event)=>
      {
        <Popup trigger={<span>a</span>} position="right center">
        <div>Popup content here !!</div>
        </Popup>
      }

        return (
            !rows.length ? (
              <div>
                  <section className="breadcrumb_part">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="breadcrumb_iner">
                          <h2>Users List</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <div style={{paddingTop:'50px'}}>
                    <div className="container card border-0 shadow my-5 card-body p-5" > 
                      <div style={{display:'flex',justifyContent:'center'}}>
                          <CircularProgress/> 
                        </div>
                    </div>
                </div>
            </div>)
            : (
              <>
              <section className="breadcrumb_part">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="breadcrumb_iner">
                      <h2>Users List </h2>
                    </div>
                  </div>
                </div>
              </div>
            </section>
              <div className="container card border-0 shadow my-5 card-body p-5" style={{display:'flex',justifyContent:'center'}}> 
              <div style={{ height: 400, width: '100%' }}>
              <DataGrid rows={rows} columns={columns} pageSize={4}  onRowClick={handlerow}  />
                  </div>
               </div>  
               </>
            )
        )
}

export default Users;