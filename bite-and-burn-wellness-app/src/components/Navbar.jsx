import React from 'react';

function Navbar() {
    return (
        <nav class="navbar navbar-expand-sm bg-light navbar-light">
    <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="index.html">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="user_template.html">User Profile</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="tbd">Progress Photos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="tbd">Trends</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="tbd">Fitness Targets</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
    );
}

export default Navbar;