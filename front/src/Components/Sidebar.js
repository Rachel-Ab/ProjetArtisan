import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MeubleDetail from "../Pages/MeubleDetail";

function Sidebar() {
    const [meubles, setMeubles] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8000/api/meuble/all")
            .then((res) => res.json())
            .then((json) => setMeubles(json.data));
    }, []);

    function meubleDetail(name) {
        <MeubleDetail name={name} />;
    }
    return (
        <aside id="sidebar" className="sidebar">
            <ul className="sidebar-nav" id="sidebar-nav">
                <li className="nav-item">
                    <Link to="/dashboard" className="nav-link collapsed">
                        <i className="bi bi-grid"></i>
                        <span>Dashboard</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <a
                        className="nav-link collapsed"
                        data-bs-target="#tables-nav"
                        data-bs-toggle="collapse"
                        href="#"
                        aria-expanded="false"
                    >
                        <i className="bi bi-bar-chart"></i>
                        <span>Charts</span>
                        <i className="bi bi-chevron-down ms-auto"></i>
                    </a>
                    <ul
                        id="tables-nav"
                        className="nav-content collapse "
                        data-bs-parent="#sidebar-nav"
                    >
                        <li>
                            <Link to="/dashboard/meubles">
                                <i className="bi bi-circle"></i>
                                <span>Meubles</span>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className="nav-item">
                    <a
                        className="nav-link collapsed"
                        data-bs-target="#charts-nav"
                        data-bs-toggle="collapse"
                        href="#"
                        aria-expanded="false"
                    >
                        <i className="bi bi-card-list"></i>
                        <span>Meubles Detail</span>
                        <i className="bi bi-chevron-down ms-auto"></i>
                    </a>
                    <ul
                        id="charts-nav"
                        className="nav-content collapse "
                        data-bs-parent="#sidebar-nav"
                    >
                        {meubles.map((meuble, key) => (
                            <li key={key}>
                                <Link
                                    to={
                                        "/dashboard/meuble-detail/" +
                                        meuble.name
                                    }
                                >
                                    <i className="bi bi-circle"></i>
                                    <span>{meuble.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </li>

                <li className="nav-heading">Managing</li>
                <li className="nav-item">
                    <Link
                        to={"/dashboard/manage/meubles"}
                        className="nav-link collapsed"
                    >
                        <i className="bi bi-journal-text"></i>
                        <span>Meubles</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to={"/dashboard/manage/materials"}
                        className="nav-link collapsed"
                    >
                        <i className="bi bi-journal-text"></i>
                        <span>Materials</span>
                    </Link>
                </li>
                <li className="nav-heading">Infos</li>

                <li className="nav-item">
                    <Link
                        to="/dashboard/entreprises"
                        className="nav-link collapsed"
                    >
                        <i className="bi bi-envelope"></i>
                        <span>Contact Entreprises</span>
                    </Link>
                </li>
            </ul>
        </aside>
    );
}

export default Sidebar;
