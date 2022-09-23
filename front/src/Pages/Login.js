import React, { useEffect, useState } from "react";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState(false);
    const [submit, setSubmit] = useState(false);

    const formInfo = {
        email: email,
        password: password,
    };
    useEffect(() => {
        localStorage.setItem("admin", JSON.stringify(token));
        if (JSON.parse(localStorage.getItem("admin"))) {
            window.location.href = "/dashboard";
        }
    }, [submit]);

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:8000/api/user", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(formInfo),
        })
            .then((res) => res.json())
            .then((data) => {
                setSubmit(data.data);
                setToken(data.token);
            });
    };

    return (
        <>
            <div className="container">
                <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                                <div className="d-flex justify-content-center py-4">
                                    <a
                                        href="index.html"
                                        className="logo d-flex align-items-center w-auto"
                                    >
                                        <img src="assets/img/logo.png" alt="" />
                                        <span className="d-none d-lg-block">
                                            NiceAdmin
                                        </span>
                                    </a>
                                </div>

                                <div className="card mb-3">
                                    <div className="card-body">
                                        <div className="pt-4 pb-2">
                                            <h5 className="card-title text-center pb-0 fs-4">
                                                Login to Your Account
                                            </h5>
                                            <p className="text-center small">
                                                Enter your email & password to
                                                login
                                            </p>
                                        </div>

                                        <form
                                            className="row g-3 needs-validation"
                                            noValidate
                                            onSubmit={handleSubmit}
                                        >
                                            <div className="col-12">
                                                <label
                                                    htmlFor="yourUsername"
                                                    className="form-label"
                                                >
                                                    Email
                                                </label>
                                                <div className="input-group has-validation">
                                                    <span
                                                        className="input-group-text"
                                                        id="inputGroupPrepend"
                                                    >
                                                        @
                                                    </span>
                                                    <input
                                                        type="text"
                                                        name="email"
                                                        className="form-control"
                                                        id="yourUsername"
                                                        value={email}
                                                        onChange={(e) =>
                                                            setEmail(
                                                                e.target.value
                                                            )
                                                        }
                                                        required
                                                    />
                                                    <div className="invalid-feedback">
                                                        Please enter your email.
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <label
                                                    htmlFor="yourPassword"
                                                    className="form-label"
                                                >
                                                    Password
                                                </label>
                                                <input
                                                    type="password"
                                                    name="password"
                                                    className="form-control"
                                                    id="yourPassword"
                                                    value={password}
                                                    onChange={(e) =>
                                                        setPassword(
                                                            e.target.value
                                                        )
                                                    }
                                                    required
                                                />
                                                <div className="invalid-feedback">
                                                    Please enter your password!
                                                </div>
                                            </div>

                                            {/* <div className="col-12">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        name="remember"
                                                        value="true"
                                                        id="rememberMe"
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="rememberMe"
                                                    >
                                                        Remember me
                                                    </label>
                                                </div>
                                            </div> */}
                                            <div className="col-12">
                                                <button
                                                    className="btn btn-primary w-100"
                                                    type="submit"
                                                >
                                                    Login
                                                </button>
                                            </div>
                                            {/* <div className="col-12">
                                                <p className="small mb-0">
                                                    Don't have account?{" "}
                                                    <a href="pages-register.html">
                                                        Create an account
                                                    </a>
                                                </p>
                                            </div> */}
                                        </form>
                                    </div>
                                </div>

                                <div className="credits">
                                    Designed by{" "}
                                    <a href="https://bootstrapmade.com/">
                                        BootstrapMade
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
