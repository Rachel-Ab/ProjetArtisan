import React, { useState, useEffect } from "react";
import AddMeubleForm from "../Components/AddMeubleForm";

export default function ManageMeuble() {
    const [meubles, setMeubles] = useState([]);
    const [status, setStatus] = useState("none");
    const [create, setCreate] = useState("none");
    let num = 0;
    useEffect(() => {
        fetch("http://localhost:8000/api/meuble/all")
            .then((res) => res.json())
            .then((json) => setMeubles(json.data));
    }, []);
    function deleteMeuble(meuble) {
        fetch("http://localhost:8000/api/meuble/delete/" + meuble._id, {
            method: "DELETE",
        }).then(() => setStatus(""));
    }
    function showCreate() {
        setCreate("block");
    }
    function addMeuble(meuble) {
        num = meuble.quantity + 1;
        const requestOptions = {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ quantity: num }),
        };
        fetch(
            "http://localhost:8000/api/meuble/edit/" + meuble._id,
            requestOptions
        ).then((response) => response.json());
    }
    function minusMeuble(meuble) {
        num = meuble.quantity - 1;
        const requestOptions = {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ quantity: num }),
        };
        fetch(
            "http://localhost:8000/api/meuble/edit/" + meuble._id,
            requestOptions
        ).then((response) => response.json());
    }

    return (
        <div className="dashboard-body">
            <div
                className="alert alert-success alert-dismissible fade show"
                role="alert"
                style={{ display: status }}
            >
                <i className="bi bi-check-circle me-1"></i> Meuble delete,
                please refresh the page to see the changes
                <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                ></button>
            </div>
            <button
                type="button"
                className="btn btn-success add-meuble"
                onClick={() => showCreate()}
            >
                Add new meuble
            </button>
            <AddMeubleForm show={create} />
            {meubles.map((meuble, key) => {
                return (
                    <div className="chart-block" key={key}>
                        <div className="card">
                            <div className="card-body">
                                <div className="card-header-block">
                                    <h5 className="card-title">
                                        {meuble.name}
                                    </h5>
                                    <h6>
                                        <button
                                            type="button"
                                            className="btn "
                                            onClick={() => minusMeuble(meuble)}
                                        >
                                            <i className="bi bi-dash-circle"></i>
                                        </button>
                                        quantity : {meuble.quantity}
                                        <button
                                            type="button"
                                            className="btn "
                                            onClick={() => addMeuble(meuble)}
                                        >
                                            <i className="bi bi-plus-circle"></i>
                                        </button>
                                    </h6>
                                </div>
                                Materiaux :
                                {meuble.materials.map((mat, key) => {
                                    return <li key={key}>{mat.name}</li>;
                                })}
                                <div className="button-edition-block">
                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                        onClick={() => deleteMeuble(meuble)}
                                    >
                                        <i className="bi bi-trash"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
