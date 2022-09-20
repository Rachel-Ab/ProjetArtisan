import React from "react";

function Sidebar() {
    return (
        <aside id="sidebar" className="sidebar">
            <ul className="sidebar-nav" id="sidebar-nav">
                <li className="nav-item">
                    <a className="nav-link collapsed" href="">
                        <i className="bi bi-grid"></i>
                        <span>Dashboard</span>
                    </a>
                </li>

                <li className="nav-item">
                    <a
                        className="nav-link collapsed"
                        data-bs-target="#charts-nav"
                        data-bs-toggle="collapse"
                        href="#"
                    >
                        <i className="bi bi-bar-chart"></i>
                        <span>Charts</span>
                        <i className="bi bi-chevron-down ms-auto"></i>
                    </a>
                    <ul
                        id="charts-nav"
                        className="nav-content collapse "
                        data-bs-parent="#sidebar-nav"
                    >
                        <li>
                            <a href="">
                                <i className="bi bi-circle"></i>
                                <span>Chart.js</span>
                            </a>
                        </li>
                    </ul>
                </li>

                <li className="nav-heading">Infos</li>

                <li className="nav-item">
                    <a className="nav-link collapsed" href="">
                        <i className="bi bi-person"></i>
                        <span>Profile</span>
                    </a>
                </li>

                <li className="nav-item">
                    <a className="nav-link collapsed" href="">
                        <i className="bi bi-envelope"></i>
                        <span>Contact</span>
                    </a>
                </li>
            </ul>
        </aside>
    );
}

export default Sidebar;
