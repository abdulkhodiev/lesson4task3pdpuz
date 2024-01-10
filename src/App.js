import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import img from "./img.jpg";

function App() {
    return (
        <div className="App">
            <nav className="navbar align-items-center p-3 container">
                <div className="logo-links d-flex align-items-center gap-3">
                    <p className="mb-0 fs-2">Start Bootstrap</p>
                    <div className="links d-flex gap-3">
                        <a href="/">Home</a>
                        <a href="/">About</a>
                        <a href="/">Shop</a>
                    </div>
                </div>
                <div className="shop-link">Cart</div>
            </nav>
            <header className="bg-dark p-5">
                <h2 className="text-white fs-1 display-1 fw-bold text-center pt-5">
                    Shop in Style
                </h2>
                <p className="text-center text-white fs-3 pb-5">
                    With this shop homepage template
                </p>
            </header>
            <div className="card-container container p-5">
                <div className="row g-5">
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="card" style={{ width: "15rem" }}>
                            <img
                                src={img}
                                className="card-img-top"
                                alt="Card"
                            />
                            <div className="card-body text-center">
                                <h5 className="card-title">Fancy Product</h5>
                                <p className="card-text">$40.00 - $80.00</p>
                                <a
                                    href="#"
                                    className="btn border border-1  rounded-1">
                                    Go somewhere
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="card" style={{ width: "15rem" }}>
                            <img
                                src={img}
                                className="card-img-top"
                                alt="Card"
                            />
                            <div className="card-body text-center">
                                <h5 className="card-title">Fancy Product</h5>
                                <p className="card-text">$40.00 - $80.00</p>
                                <a
                                    href="#"
                                    className="btn border border-1  rounded-1">
                                    Go somewhere
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="card" style={{ width: "15rem" }}>
                            <img
                                src={img}
                                className="card-img-top"
                                alt="Card"
                            />
                            <div className="card-body text-center">
                                <h5 className="card-title">Fancy Product</h5>
                                <p className="card-text">$40.00 - $80.00</p>
                                <a
                                    href="#"
                                    className="btn border border-1  rounded-1">
                                    Go somewhere
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="card" style={{ width: "15rem" }}>
                            <img
                                src={img}
                                className="card-img-top"
                                alt="Card"
                            />
                            <div className="card-body text-center">
                                <h5 className="card-title">Fancy Product</h5>
                                <p className="card-text">$40.00 - $80.00</p>
                                <a
                                    href="#"
                                    className="btn border border-1  rounded-1">
                                    Go somewhere
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="card" style={{ width: "15rem" }}>
                            <img
                                src={img}
                                className="card-img-top"
                                alt="Card"
                            />
                            <div className="card-body text-center">
                                <h5 className="card-title">Fancy Product</h5>
                                <p className="card-text">$40.00 - $80.00</p>
                                <a
                                    href="#"
                                    className="btn border border-1  rounded-1">
                                    Go somewhere
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="card" style={{ width: "15rem" }}>
                            <img
                                src={img}
                                className="card-img-top"
                                alt="Card"
                            />
                            <div className="card-body text-center">
                                <h5 className="card-title">Fancy Product</h5>
                                <p className="card-text">$40.00 - $80.00</p>
                                <a
                                    href="#"
                                    className="btn border border-1  rounded-1">
                                    Go somewhere
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="card" style={{ width: "15rem" }}>
                            <img
                                src={img}
                                className="card-img-top"
                                alt="Card"
                            />
                            <div className="card-body text-center">
                                <h5 className="card-title">Fancy Product</h5>
                                <p className="card-text">$40.00 - $80.00</p>
                                <a
                                    href="#"
                                    className="btn border border-1  rounded-1">
                                    Go somewhere
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="card" style={{ width: "15rem" }}>
                            <img
                                src={img}
                                className="card-img-top"
                                alt="Card"
                            />
                            <div className="card-body text-center">
                                <h5 className="card-title">Fancy Product</h5>
                                <p className="card-text">$40.00 - $80.00</p>
                                <a
                                    href="#"
                                    className="btn border border-1  rounded-1">
                                    Go somewhere
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="bg-dark p-5">
                <p className="text-center text-white">
                    Copyright © Your Website 2023
                </p>
            </footer>
        </div>
    );
}

export default App;
