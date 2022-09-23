import React from "react";
import "./App.css";
import Dashboard from "./Pages/Dashboard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Pages/Login";
import Error from "./Pages/Error";
import Meubles from "./Pages/Meubles.tsx";
import Protected from "./Components/Protected";
import MeubleDetail from "./Pages/MeubleDetail";
import Entreprises from "./Pages/Entreprises";
import Materials from "./Pages/ManageMeuble";
import MaterialDetail from "./Pages/MaterialDetail";
import ManageMeuble from "./Pages/ManageMeuble";
import ManageMaterials from "./Pages/ManageMaterials";



function App() {
    const token = JSON.parse(localStorage.getItem("user_connect"));

    const routes = [
        {
            path: "/dashboard/meubles",
            component: Meubles,
        },
        {
            path: "/dashboard/meuble-detail/:name",
            component: MeubleDetail,
        },
        {
            path: "/dashboard/entreprises",
            component: Entreprises,
        },
        {
            path: "/dashboard/manage/meubles",
            component: ManageMeuble,
        },
        {
            path: "/dashboard/manage/materials",
            component: ManageMaterials,
        },
        {
            path: "/dashboard/material/:name",
            component: MaterialDetail,
        },
        {
            path: "/dashboard/*",
            component: Error,
        },
    ];

    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Login />
                    </Route>
                    <Route path="/dashboard">
                        <Protected isLoggedIn={token}>
                            <Dashboard routes={routes} />
                        </Protected>
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default App;

// ReactDOM.render(
//     <BrowserRouter>
//         <Routes>
//             <Route path="/test" element={<Login />} />
//             <Route path="/dashboard" element={<Dashboard />} />
//             <Route path="*" element={<Error />} />
//         </Routes>
//     </BrowserRouter>,
//     document.getElementById("root")
// );
