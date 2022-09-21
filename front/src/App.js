import React from "react";
import "./App.css";
import Dashboard from "./Pages/Dashboard";
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";
import Login from "./Pages/Login";
import Error from "./Pages/Error";
import Meuble from "./Pages/Meubles";
import Protected from "./Components/Protected";

function App() {
    const token = JSON.parse(localStorage.getItem("user_connect"));

    const routes = [
        {
            path: "/dashboard/Meuble",
            component: Meuble,
        },
        {
            path: "/dashboard/*",
            component: Error,
        },
    ];

    return (
        <>
            {/* <Router>
                <Switch>
                    <Route exact path="/">
                        <Login />
                    </Route>
                    <Route path="/dashboard">
                        <Protected isLoggedIn={token}>
                            <Dashboard />
                        </Protected>
                    </Route>
                    <Route path="/dashboard/test">
                        <Protected isLoggedIn={token}>
                            <Test />
                        </Protected>
                    </Route>
                    <Route path="*">
                        <Error />
                    </Route>
                </Switch>
            </Router> */}

            {/* {token ? (
                <>
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/dashboard/test" component={Test} />
                </>
            ) : (
                <>
                    <Redirect to={{ pathname: "/" }} />
                </>
            )} */}

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
