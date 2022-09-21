import React from "react";
import Layout from "../Components/Layout";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import RouteWithSubRoutes from "../Components/RouteWithSubRoutes";

function Dashboard({ routes }) {
    return (
        <Layout>
            <div className="dashboard-body">
                <div className="dashboard-header">
                    <h1>Dashboard</h1>
                    <h2>Hello Admin</h2>
                </div>
            </div>
            <Switch>
                {routes.map((route, i) => {
                    return <RouteWithSubRoutes key={i} {...route} />;
                })}
            </Switch>
        </Layout>
    );
}

export default Dashboard;
