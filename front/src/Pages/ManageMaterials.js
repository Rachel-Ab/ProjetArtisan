import React, { useState, useEffect } from "react";

export default function ManageMaterials() {
    const [materials, setMaterials] = useState([]);
    const [status, setStatus] = useState("none");
    const [create, setCreate] = useState("none");
    const [quantityShow, setQuantityShow] = useState("none");
    let num = 0;
    useEffect(() => {
        fetch("http://localhost:8000/api/material/all")
            .then((res) => res.json())
            .then((json) => setMaterials(json.data));
    }, []);

    function addMaterial(material) {
        num = material.quantity + 1;
        const requestOptions = {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ quantity: num }),
        };
        fetch(
            "http://localhost:8000/api/material/edit/" + material._id,
            requestOptions
        )
            .then((response) => response.json())
            .then(() => setQuantityShow(""));
    }
    function minusMaterial(material) {
        num = material.quantity - 1;
        const requestOptions = {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ quantity: num }),
        };
        fetch(
            "http://localhost:8000/api/material/edit/" + material._id,
            requestOptions
        )
            .then((response) => response.json())
            .then(() => setQuantityShow(""));
    }

    return (
        <div className="dashboard-body">
            <div className="chart-block material-block-cards">
                <div
                    className="alert alert-success alert-dismissible fade show"
                    role="alert"
                    style={{ display: quantityShow }}
                >
                    <i className="bi bi-check-circle me-1"></i> Meuble quantity
                    updated, please refresh the page to see the changes
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="alert"
                        aria-label="Close"
                    ></button>
                </div>
                {materials.map((material, key) => {
                    return (
                        <div className="card material-card" key={key}>
                            <div className="card-body bk-white">
                                <h5 className="card-title">{material.name}</h5>
                                <p className="card-text">
                                    {material.descritpion}
                                </p>
                                <div className="button-manage-material">
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => minusMaterial(material)}
                                    >
                                        <i className="bi bi-dash-circle"></i>
                                    </button>
                                    Quantity : {material.quantity}
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => addMaterial(material)}
                                    >
                                        <i className="bi bi-plus-circle"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
