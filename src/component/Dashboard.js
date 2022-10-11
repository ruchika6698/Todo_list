import React, { useEffect, useState } from "react";
import { getData, deleteData } from "../service/service";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useStyles } from "../style/dashboard";
import AddItem from "./AddItem";

export default function Dashboard() {
const [data, setData] = useState([])    
const classes = useStyles()

    useEffect(()=>{
        getData().then((response) =>{
            setData(response)
        })
    },[])

    const handleDelete = (item) =>{
        deleteData(item.id).then((response)=>{

        })
    }

    const handleEdit = (item) =>{
      return <AddItem item={item} comp='update' />
    }

  return (
    <div className={classes.container}>
    <TableContainer component={Paper} sx={{ width: 650 }}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableCell} >ID</TableCell>
            <TableCell className={classes.tableCell}>Description</TableCell>
            <TableCell className={classes.tableCell}>Edit</TableCell>
            <TableCell className={classes.tableCell}>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((item, index) => (
            <TableRow
              key={item.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item.id}
              </TableCell>
              <TableCell>{item.description}</TableCell>
              <TableCell><EditIcon className={classes.edit} onClick={()=>handleEdit(item)} /></TableCell>
              <TableCell><DeleteIcon className={classes.delete} onClick={()=>handleDelete(item)} /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </div>
  );
}
