import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

// function createData(id, make, actions) {
//     return {
//         id, make, actions
//     }
// }

const Import = (props) => {
    // fill out this component

  return (
    <div className='table'>
      <Button variant="contained">Import</Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="left">ID</TableCell>
            <TableCell align="left">Make</TableCell>
            <TableCell align="left">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.makes.map(e => {
            <TableRow>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          })}
        </TableBody>
      </Table>
    </div>
  )
}

export default Import