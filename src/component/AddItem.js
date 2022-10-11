import React, { useState } from 'react';
import { Button, OutlinedInput } from '@mui/material';
import { createItem, updateItem } from "../service/service";
import { useStyles } from "../style/dashboard";

export default function AddItem(comp, item) { 
  const [description, setDescription] = useState('')
  const [complete, setComplete] = useState(false)
  const classes = useStyles()

  const handleSubmit = () =>{
    comp === '' ? updateItem(item.id, item.description, item.complete) : createItem(description, complete)
  }

  return (
    <div className={classes.addItem} >
      <h1 className={classes.tableCell} >Add Items  </h1>
      <div className={classes.items}>
        <span className={classes.tableCell} >Description:  </span>
        <OutlinedInput 
          value={item?.description ? item.description : description}
          onChange={(e)=>setDescription(e.target.value)}
        />
      </div>
      <Button className={classes.submit} onClick={handleSubmit}>Submit</Button>
    </div>
  );
}
