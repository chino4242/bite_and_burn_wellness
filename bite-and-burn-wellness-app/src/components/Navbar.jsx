import React from 'react';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm bg-light navbar-light">
    <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="index.html">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="user_template.html">User Profile</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="tbd">Progress Photos</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="tbd">Trends</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="tbd">Fitness Targets</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="tbd">Journal</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
    );
}

export default Navbar;