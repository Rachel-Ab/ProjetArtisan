import React, { useState, useEffect } from "react";

export default function Entreprises() {
    const [entreprises, setEntreprises] = useState([]);
    const [materials, setMaterials] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8000/api/entreprise/all")
            .then((res) => res.json())
            .then((json) => setEntreprises(json.data));
    }, []);
    useEffect(() => {
        fetch("http://localhost:8000/api/material/all")
            .then((res) => res.json())
            .then((json) => setMaterials(json.data));
    }, []);
    return (
        <div className="dashboard-body">
            {entreprises.map((entreprise, key) => {
                return (
                    <div className="chart-block" key={key}>
                        <div className="card">
                            <div className="card-body">
                                <div className="card-header-block">
                                    <h5 className="card-title">
                                        {entreprise.name}
                                    </h5>
                                    <h6>{entreprise.mail}</h6>
                                </div>
                                Materiaux :
                                {materials.map((mat, key) => {
                                    if (mat.entreprise === entreprise.name) {
                                        return <li key={key}>{mat.name}</li>;
                                    }
                                })}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
