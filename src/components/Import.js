import React from 'react'
// import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { MoreVert } from '@material-ui/icons'

// function createData(id, make, actions) {
//     return {
//         id, make, actions
//     }
// }

const Import = (props) => {
    // fill out this component
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [makeIndex, setIndex] = React.useState(0)
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleMakeIndex = (index) => {
      setIndex(index);
    }

    return (
    <div className='table'>
      <Button variant="contained" onClick={props.fetchMakes}>Import</Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="left">ID</TableCell>
            <TableCell align="left">Make</TableCell>
            <TableCell align="left">Actions</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {props.makes.map((e, indx) => (
            <TableRow key={indx}>
              <TableCell>{e.MakeId}</TableCell>
              <TableCell>{e.MakeName}</TableCell>
              <TableCell>
                <IconButton aria-controls="simple-menu" index={indx} aria-haspopup="true" onClick={(e) => {handleMakeIndex(indx); handleClick(e)}}>
                  <MoreVert></MoreVert>
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}>
          <MenuItem onClick={()=>{props.deleteMake(makeIndex); handleClose()}}>Delete</MenuItem>
      </Menu>
    </div>
  )
}

export default Import