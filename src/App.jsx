import React, { useState } from 'react';
// import MyTable from './components/MyTable'
import data from './data.json'
import { calc } from "node-correlation";
// import MyScatter from './components/MyScatter';
// import AddForm from './components/AddForm';
import { Container, Table, TableRow, TableCell, TableHead, TableBody, Button, TextField, Typography, Box } from '@material-ui/core';
import { Scatter } from 'react-chartjs-2';

function App() {
  const calcCovariance = (data) => {
    const x = data.map(item => item.x)
    const y = data.map(item => item.y)
    return calc(x,y);
  }
  const [rows, setRows] = useState(data)
  const config = {
    labels: ['Scatter'],
    datasets: [{
        label: 'Esfuerzo',
        data: rows,
        backgroundColor: "red"
    }],
  }
  const addItem = () => {setRows([...rows, {x: esfuerzo, y:costo}]); setCovariance(calcCovariance(rows))};

  const [esfuerzo, setEsfuerzo] = useState(0)
  const [costo, setCosto] = useState(0)
  const [covariance, setCovariance] = useState(calcCovariance(rows))
  return (
    <Container>
      {/* <MyTable data={data}/>
      <MyScatter data={data}/>
      <AddForm addValue={addValue}/> */}
      <Box display="flex" flexDirection="column" justifyContent="center">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">
                Esfuerzo
              </TableCell>
              <TableCell align="center">
                Coste
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, i) => (
              <TableRow key={i}>
                <TableCell size="small" align="center">{row.x}</TableCell>
                <TableCell size="small" align="center">{row.y}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Box display="flex" justifyContent="center">
          <TextField label="Esfuerzo" type="number" onChange={e => {setEsfuerzo(e.target.value)}}/>
          <TextField label="Costo" type="number" onChange={e => {setCosto(e.target.value)}}/>
          <Button onClick={addItem}>Añadir</Button>
        </Box>
        <Typography align="center">Covarianza: {covariance}</Typography>
        <Scatter data={config} />
      </Box>
    </Container>
  );
}

export default App;
