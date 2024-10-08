import React from "react";
import { Link } from "react-router-dom";
import styles from '../css/Navbar.module.css'

export default function Navbar() {
    return (
        <div className={styles.Navbar}>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand text-white fw-bold">My Profile</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className={styles["nav-link"]} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={styles["nav-link"]} aria-current="page" to="/about">About Me</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={styles["nav-link"]} aria-current="page" to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}