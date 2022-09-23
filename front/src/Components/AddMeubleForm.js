import React, { useState, useEffect } from "react";

export default function AddMeubleForm({ show }) {
    const token = JSON.parse(localStorage.getItem("admin"));
    const [materials, setMaterials] = useState([]);
    const [test, setTest] = useState([]);
    const [frêne, setfrêne] = useState({
        name: "frêne",
        qty_needed: 0,
    });
    const [plastique, setplastique] = useState({
        name: "plastique",
        qty_needed: 0,
    });
    const [aluminum, setaluminum] = useState({
        name: "aluminum",
        qty_needed: 0,
    });
    const [inox, setinox] = useState({
        name: "inox",
        qty_needed: 0,
    });
    const [acier, setacier] = useState({
        name: "acier",
        qty_needed: 0,
    });
    const [chêne, setchêne] = useState({
        name: "chêne",
        qty_needed: 0,
    });
    const [noyer, setnoyer] = useState({
        name: "noyer",
        qty_needed: 0,
    });
    const [formMaterial, setFormMaterial] = useState([]);

    const [form, setForm] = useState({
        name: "",
        quantity: 0,
        materials: [],
        category: "",
    });
    const [post, setPost] = useState("none");
    let materialArray = [];
    useEffect(() => {
        fetch("http://localhost:8000/api/material/all")
            .then((res) => res.json())
            .then((json) => setMaterials(json.data));
    }, []);
    function postMeuble() {
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
            },
            body: JSON.stringify(form),
        };
        fetch("http://localhost:8000/api/meuble/post", requestOptions)
            .then((response) => response.json())
            .then(() => setPost(""));
    }
    function addMaterial(materialArray) {
        setForm({ ...form, materials: materialArray });
    }
    

    const handleSubmit = (event) => {
        event.preventDefault();
        postMeuble();
    };
    const changeform = () => {
        formMaterial.map((mat, index) => {
            if (mat.qty_needed !== 0) {
                materialArray.push(mat);
            }
            return materialArray;
        });
        addMaterial(materialArray);
    };

    function handleInputChange(event) {
        const target = event.target;
        const value =
            target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        setTest({
            [name]: value,
        });
        if (name === "name") {
            setForm({ ...form, name: value });
        } else if (name === "quantity") {
            setForm({ ...form, quantity: value });
        } else if (name === "category") {
            setForm({ ...form, category: value });
        } else {
            if (name === "frêne") {
                setfrêne({ name: name, qty_needed: value });
            }
            if (name === "noyer") {
                setnoyer({ name: name, qty_needed: value });
            }
            if (name === "chêne") {
                setchêne({ name: name, qty_needed: value });
            }
            if (name === "acier") {
                setacier({ name: name, qty_needed: value });
            }
            if (name === "inox") {
                setinox({ name: name, qty_needed: value });
            }
            if (name === "aluminum") {
                setaluminum({ name: name, qty_needed: value });
            }
            if (name === "plastique") {
                setplastique({ name: name, qty_needed: value });
            }
        }
    }
    useEffect(() => {
        setFormMaterial([
            frêne,
            noyer,
            chêne,
            acier,
            inox,
            aluminum,
            plastique,
        ]);
    }, [test]);

    return (
        <div className="card-body chart-block" style={{ display: show }}>
            <div
                className="alert alert-success alert-dismissible fade show"
                role="alert"
                style={{ display: post }}
            >
                <i className="bi bi-check-circle me-1"></i> Meuble added, please
                refresh the page to see the changes
                <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                ></button>
            </div>
            <h5 className="card-title">Multi Columns Form</h5>
            <form
                className="row g-3"
                onSubmit={handleSubmit}
                onClick={changeform}
            >
                <div className="col-md-6">
                    <label htmlFor="name" className="form-label">
                        Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="col-md-3">
                    <label htmlFor="quantity" className="form-label">
                        Quantity
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="quantity"
                        name="quantity"
                        value={form.quantity}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="col-md-3">
                    <label htmlFor="category" className="form-label">
                        Category
                    </label>
                    <select
                        name="category"
                        id="category"
                        className="form-select"
                        onChange={handleInputChange}
                    >
                        <option value="">...Choose</option>
                        <option value="Armoire">Armoire</option>
                        <option value="Etagère">Etagère</option>
                    </select>
                </div>
                {materials.map((mat, key) => {
                    return (
                        <div className="box-material-form" key={key}>
                            <div className="col-md-6">
                                <label
                                    htmlFor="inputEmail5"
                                    className="form-label"
                                >
                                    {mat.name} quantity
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id={mat.name}
                                    name={mat.name}
                                    value={mat.name.qty_needed}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                    );
                })}

                <div className="text-center">
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}
