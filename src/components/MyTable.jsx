import React, { useState } from 'react'
import { Table, TableBody, TableRow, TableCell, TableHead, TableContainer, Paper, TablePagination, TableFooter } from "@material-ui/core";

const MyTable = (props) => {
    const [page, setPage] = useState(0);
    const [rows_number, setRows_number] = useState(4)
    return (
      <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Esfuerzo</TableCell>
            <TableCell align="center">Costo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map((row, i) => (
            <TableRow key={i}>
              <TableCell size="small" align="center">{row.x}</TableCell>
              <TableCell size="small" align="center">{row.y}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
          {/* <TablePagination
            component="div"
            count={props.data.length}
            page={page}
            onChangePage={(e,p) => {setPage(p)}}
            rowsPerPage={rows_number}
            // onChangeRowsPerPage={handleChangeRowsPerPage}
          /> */}
          </TableRow>
          <TableRow>
            <TableCell>Covariance: {}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  )};

export default MyTable
