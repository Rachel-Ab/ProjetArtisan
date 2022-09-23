import React, { useState, useEffect } from "react";
import AddMeubleForm from "../Components/AddMeubleForm";

export default function ManageMaterials() {
    const [materials, setMaterials] = useState([]);
    const [status, setStatus] = useState("none");
    const [create, setCreate] = useState("none");
    let num = 0;
    useEffect(() => {
        fetch("http://localhost:8000/api/material/all")
            .then((res) => res.json())
            .then((json) => setMaterials(json.data));
    }, []);

    // function addMeuble(meuble) {
    //     num = meuble.quantity+1;
    //     const requestOptions = {
    //         method: "PATCH",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify({ quantity: num }),
    //     };
    //     fetch("http://localhost:8000/api/meuble/edit/"+meuble._id, requestOptions)
    //         .then((response) => response.json())
    // }
    // function minusMeuble(meuble) {
    //     num = meuble.quantity-1;
    //     const requestOptions = {
    //         method: "PATCH",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify({ quantity: num }),
    //     };
    //     fetch("http://localhost:8000/api/meuble/edit/"+meuble._id, requestOptions)
    //         .then((response) => response.json())
    // }

    return (
        <div className="dashboard-body">
            <div className="chart-block material-block-cards">
                {materials.map((mat, key) => {
                    return (
                        <div className="card material-card" key={key}>
                            <div className="card-body bk-white">
                                <h5 className="card-title">
                                    Special title treatment
                                </h5>
                                <p className="card-text">
                                    With supporting text below as a natural
                                    lead-in to additional content.
                                </p>
                                <a href="#" className="btn btn-primary">
                                    Go somewhere
                                </a>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
