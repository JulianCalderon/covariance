import React, { useState } from 'react'
import { TextField, Button, Box } from '@material-ui/core'

const AddForm = (props) => {
    const [esfuerzo, setEsfuerzo] = useState()
    const [coste, setCoste] = useState()
    return (
        <Box p={5}>
            <TextField id="standard-basic" label="Esfuerzo" value={esfuerzo} onChange={e => {setEsfuerzo(e.target.value)}}/>
            <TextField id="standard-basic" label="Coste" value={coste} onChange={e => {setCoste(e.target.value)}}/>
            <Button onClick={() => {props.addValue(esfuerzo, coste)}}>Añadir</Button>
        </Box>
    )
}

export default AddForm
