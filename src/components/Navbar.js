import React from "react";
import './StylingCSS/Navbar.css';
import { Link } from "react-router-dom";



function Navbar() {
    return (
        <>
            <div class="fixed-top">
                <nav className="navbar navbar-expand-md bg-light">
                    <div className="container-fluid">
                        <Link className="navbar-brand brand-edit" to="/">JA</Link>
                        {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}
                        {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button> */}
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse position-absolute top-0 end-0" style={{ margin: '10px 0' }}>


                        </div>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            {/* <form className="d-flex"> */}
                            <ul className="navbar-nav mx-3 mt-2 mb-1 mb-lg-0 ml-auto float-right">
                                <li className="nav-item edit ">
                                    <Link className="nav-link active mx-3 hov" aria-current="page" to="/">Home</Link>
                                </li>

                                <li className="nav-item edit">
                                    <Link className="nav-link active mx-3 hov" aria-current="page" to="/About">About</Link>
                                </li>
                                <li className="nav-item edit">
                                    <Link className="nav-link active mx-3 hov" aria-current="page" to="/Portfolio">Portfolio</Link>
                                </li>
                                <li className="nav-item edit">
                                    <Link className="nav-link active mx-3 hov" aria-current="page" to="/Services">Services</Link>
                                </li>
                                <li className="nav-item edit">
                                    <Link className="nav-link active mx-3 hov" aria-current="page" to="/Resume">Resume</Link>
                                </li>
                                <li className="nav-item edit">
                                    <Link className="nav-link active mx-3 hov" aria-current="page" to="/HappyClients">Feedback</Link>
                                </li>
                                <li className="nav-item edit">
                                    <Link className="nav-link active mx-3 hov" aria-current="page" to="/Blog">Blog</Link>
                                </li>
                                <li className="nav-item edit">
                                    <Link className="nav-link active mx-3 hov" aria-current="page" to="/Contact">Contact</Link>
                                </li>
                            </ul>
                            {/* </form> */}
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}
export default Navbar;