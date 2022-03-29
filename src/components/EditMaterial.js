import React, { Fragment, useState } from "react";
import Checkbox from '@mui/material/Checkbox';
import { updateMaterial } from "../api/api";
import TextField from '@mui/material/TextField';


const EditTodo = ({ product, setMaterials }) => {

    const [numbers, setNumbers] = useState(product.numbers);
    const [details, setDetails] = useState(product.details);
    const [tedarikci, setTedarikci] = useState(product.tedarikci);
    const [weight, setWeight] = useState(product.weight);
    const [status, setStatus] = useState(product.status);
    const [registerdate, setRegisterdate] = useState(product.registerdate);
    const [updatedate, setupdateDate] = useState(product.updatedate);
    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-warning"
                data-toggle="modal"
                data-target={`#id${product.id}`}
            >
                Edit
            </button>

            <div
                className="modal"
                id={`id${product.id}`}

            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Edit Material</h4>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                            >
                                &times;
                            </button>
                        </div>

                        <div className="modal-body">
                            numbers
                            <input
                                autoComplete="off"
                                type="number"
                                className="form-control"
                                value={numbers}
                                onChange={e => setNumbers(e.target.value)}
                            />
                            details
                            <input
                                autoComplete="off"
                                type="text"
                                className="form-control"
                                value={details}
                                onChange={e => setDetails(e.target.value)}
                            />
                            supplier
                            <input
                                autoComplete="off"
                                type="text"
                                className="form-control"
                                value={tedarikci}
                                onChange={e => setTedarikci(e.target.value)}
                            />
                            weights
                            <input
                                autoComplete="off"
                                type="number"
                                className="form-control"
                                value={weight}
                                onChange={e => setWeight(e.target.value)}
                            />
                            Status
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <Checkbox
                                    checked={status}
                                    value={status}
                                    onChange={(e) => setStatus(!status)}
                                />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                Update Date
                                <TextField
                                    hiddenLabel
                                    autoComplete="off"
                                    id="filled-hidden-label-normal"
                                    defaultValue="Normal"
                                    variant="filled"
                                    type="date"
                                    onChange={(e) => setupdateDate(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-warning"
                                data-dismiss="modal"
                                onClick={e => updateMaterial(numbers, details, tedarikci, weight, status, e, registerdate, updatedate, product, setMaterials)}
                            >
                                Edit
                            </button>
                            <button
                                type="button"
                                className="btn btn-danger"
                                data-dismiss="modal"
                            /*  onClick={() => setDescription(todo.description)} */
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default EditTodo;