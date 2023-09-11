# Drevol-practice

import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";

function App() {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "name",
      headerName: "Name",
      width: 150,
      renderCell: (params) => (
        <>
          <TextField
            value={params.value}
            onChange={(e) => handleNameChange(e, params.id)}
          />
          <Select
            value={params.value}
            onChange={(e) => handleStatusChange(e, params.id)}
          >
            <MenuItem value="active">Active</MenuItem>
            <MenuItem value="inactive">Inactive</MenuItem>
          </Select>
          <button onClick={handlechick}>submit</button>
        </>
      )
    },
    {
      field: "status",
      headerName: "Status",
      width: 150
    }
  ];

  const initialRows = [
    { id: 1, name: "John", status: "active" },
    { id: 2, name: "Doe", status: "inactive" }
  ];
  const [rows, setRows] = React.useState(initialRows);

  const handleNameChange = (e, id) => {
    const updatedRows = rows.map((row) =>
      row.id === id ? { ...row, name: e.target.value } : row
    );
    setRows(updatedRows);
  };

  const handlechick = () => {
    console.log(rows);
  };
  const handleStatusChange = (e, id) => {
    const updatedRows = rows.map((row) =>
      row.id === id ? { ...row, status: e.target.value } : row
    );
    setRows(updatedRows);
  };

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} />
    </div>
  );
}
export default App;
