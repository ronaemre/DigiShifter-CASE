import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@mui/material/Button';
import { addMaterial } from '../api/api';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const useStyles = makeStyles((theme) => ({
    inputArea: {
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: '50px',
        padding: '30px',
        borderBottom: '1px solid #585858',

    }
}));

const AddMaterials = ({ setMaterials }) => {
    const classes = useStyles();

    const [numbers, setNumbers] = useState("");
    const [details, setDetails] = useState("");
    const [tedarikci, setTedarikci] = useState("");
    const [weight, setWeight] = useState("");
    const [status, setStatus] = useState("");
    const [registerdate, setRegisterdate] = useState("");
    const [updatedate, setupdateDate] = useState("");


    return (
        <div className={classes.inputArea}>
            <TextField
                autoComplete='off'
                label="numbers"
                type="number"
                onChange={(e) => setNumbers(e.target.value)}
            />
            <TextField
                autoComplete='off'
                label="details"
                onChange={(e) => setDetails(e.target.value)}
            />
            <TextField
                autoComplete='off'
                label="supplier"
                onChange={(e) => setTedarikci(e.target.value)}
            />
            <TextField
                autoComplete='off'
                label="weight"
                type="number"
                onChange={(e) => setWeight(e.target.value)}
            />
            <FormGroup>
                <FormControlLabel control={<Checkbox defaultUnChecked />} label="Avaliable" onChange={(e) => setStatus(e.target.checked)} />
            </FormGroup>
            <TextField
                autoComplete='off'
                hiddenLabel
                id="filled-hidden-label-normal"
                defaultValue="Normal"
                variant="filled"
                type="date"
                onChange={(e) => setRegisterdate(e.target.value)}
            />
            <Button
                variant="contained"
                color="success"
                onClick={() => addMaterial(numbers, details, tedarikci, weight, status, registerdate, updatedate, setMaterials)}
            >
                ADD MATERIAL
            </Button>
        </div>
    )
}

export default AddMaterials
