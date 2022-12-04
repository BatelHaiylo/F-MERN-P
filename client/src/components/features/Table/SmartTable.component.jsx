import React from "react";
import { DataGrid } from '@mui/x-data-grid'
import { Paper } from '@mui/material'

export default function SmartTable({data}) {
    // console.log(data)
  const customersColumns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 90, headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'role',
      headerName: 'Role',
      type: 'string',
      width: 178,
      editable: true,
      headerAlign: 'center',
      align: 'center',
  
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      type: 'string',
      width: 178,
      editable: true,
      headerAlign: 'center',
      align: 'center',
  
    },
    {
      field: 'phone',
      headerName: 'Phone',
      type: 'string',
      width: 110,
      editable: true,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'email',
      headerName: 'Email',
      type: 'string',
      width: 178,
      editable: true,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'dateOfBirth',
      headerName: 'Birth date',
      type: 'date',
      width: 178,
      editable: true,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'location',
      headerName: 'Location',
      type: 'string',
      width: 178,
      editable: true,
      headerAlign: 'center',
      align: 'center',
    }
  ];

 const customersRows = [
    { id: 1, role: 'Snow', fullName: 'Jon', phone: 35, email: 'dateOfBirth', dateOfBirth: 103, location: 'USA' }
  ];

  return (
    <div className="customers">
      <Paper  style={{ height: '50vh', width: '40vw', marginTop: '1rem' }}>
        <DataGrid
          rows={customersRows}
          columns={customersColumns}
          pageSize={9}
          checkboxSelection
          disableSelectionOnClick
        />
      </Paper>
    </div>
  );
};