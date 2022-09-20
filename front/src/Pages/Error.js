import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Error() {
    return (
        <div class="container">
            <section class="section error-404 min-vh-100 d-flex flex-column align-items-center justify-content-center">
                <h1>404</h1>
                <h2>The page you are looking for doesn't exist.</h2>
                <Link to="/" className="btn">
                    Back to home
                </Link>
                <img
                    src="assets/img/not-found.svg"
                    class="img-fluid py-5"
                    alt="Page Not Found"
                />
                <div class="credits">
                    Designed by{" "}
                    <a href="https://bootstrapmade.com/">BootstrapMade</a>
                </div>
            </section>
        </div>
    );
}
