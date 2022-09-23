import React, { useState, useEffect } from "react";

export default function MaterialDetail(props) {
    const [materials, setMaterials] = useState([]);
    let name = props.match.params.name;
    useEffect(() => {
        fetch("http://localhost:8000/api/material/" + name)
            .then((res) => res.json())
            .then((json) => setMaterials(json.data));
    }, [name]);
    return (
        <div className="dashboard-body">
            {materials.map((item, key) => {
                return (
                    <div className="chart-block">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-header-block">
                                    <h5 className="card-title">
                                        {item.type} : {item.name}
                                    </h5>
                                    <h6>Vendeur : {item.entreprise}</h6>
                                </div>
                                {item.descritpion}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
