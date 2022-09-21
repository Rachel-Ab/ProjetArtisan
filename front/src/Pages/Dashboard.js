import React from "react";
import Layout from "../Components/Layout";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import RouteWithSubRoutes from "../Components/RouteWithSubRoutes";
import {MeublesChart} from "../Components/MeublesChart";

function Dashboard({ routes }) {
    return (
        <Layout>
            <div className="dashboard-body">
                <h1>Dashboard</h1>
                {/* <MeublesChart /> */}
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
