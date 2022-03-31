import React, { Fragment, useEffect, useState } from "react";
import { getMaterials } from '../api/api';
import { makeStyles } from '@material-ui/core/styles';
import EditMaterial from "./EditMaterial";
import { deleteMaterial } from "../api/api";


import ReactHTMLTableToExcel from "react-html-table-to-excel"
import Search from "./Search";


const useStyles = makeStyles((theme) => ({
    results: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginTop: '10px',
    },
    editDiv: {
        marginTop: '10px'
    },
    tableHeader: {
        color: 'gray'
    }
}));


const ListMaterials = ({ materials, setMaterials }) => {
    const classes = useStyles();
    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        getMaterials(setMaterials);
    }, []);


    return (
        <Fragment >
            {" "}
            <div className={classes.results}>
                <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                <table className="table mt-5 text-center" id="excelltable">
                    <thead>
                        <tr className={classes.tableHeader}>
                            <th>numbers</th>
                            <th>details</th>
                            <th>supplier</th>
                            <th>weight</th>
                            <th>status</th>
                            <th>registerdate</th>
                            <th>updatedate</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {materials.filter((filtered) => {
                            if (filtered.details.toLowerCase().includes(searchTerm.toLowerCase())) {
                                return filtered
                            }
                        })
                            .map(product => (
                                <tr key={product.id}>
                                    <td>{product.numbers}</td>
                                    <td>{product.details}</td>
                                    <td>{product.tedarikci}</td>
                                    <td>{product.weight}</td>
                                    <td>{product.status === true ? "avaliable" : "not avaliable"}</td>
                                    <td>{product.registerdate}</td>
                                    <td>{product.updatedate ? product.updatedate : "There is no update"}</td>
                                    <div className={classes.editDiv}>
                                        <EditMaterial product={product} materials={materials} setMaterials={setMaterials} />
                                    </div>
                                    <td>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => deleteMaterial(product.id, setMaterials)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
                <ReactHTMLTableToExcel
                    className="btn btn-info"
                    table="excelltable"
                    filename="Sheet"
                    buttonText="Export to Excel"
                />

            </div>
        </Fragment >
    );
};

export default ListMaterials;
