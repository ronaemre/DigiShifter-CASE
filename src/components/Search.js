import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { getMaterials } from '../api/api';
import '../../src/index.css'

const useStyles = makeStyles((theme) => ({
    SearchArea: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '30px',
    },
    input: {
        width: '709px',
        height: '46px',
        border: '2px solid #585858',
        boxSizing: 'border-box',
        borderRadius: '8px',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '18px',
        lineHeight: '21px',
        color: '#888888',
        '&:hover': {
            background: 'rgba(100, 100, 100, 0.08)',
            border: '2px solid green'
        },
    },
}));
const Search = ({ setSearchTerm, setMaterials }) => {
    const classes = useStyles();

    const handlesetSearchTerm = e => {
        setSearchTerm(e.target.value)
        getMaterials(setMaterials)
        setMaterials([])
    }


    return (
        <div className={classes.SearchArea}>
            <input
                id="input"
                autoComplete="off"
                className={classes.input}
                type="text"
                placeholder="Search Material"
                onChange={(e) => handlesetSearchTerm(e)}
            />

        </div>
    )
}

export default Search
