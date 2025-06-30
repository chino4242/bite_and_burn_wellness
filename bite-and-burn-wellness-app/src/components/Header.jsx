import React from 'react';
import logo from '../assets/Screenshot 2025-04-03 at 10.40.44 AM.png';

function Header() {
    return (
    <div className="container text-center mt-4">
           <img src={logo}
            className="img-fluid"
            alt="Bite and Burn Wellness logo featuring vibrant colors and healthy food icons, set against a clean background. The logo includes the text Bite and Burn Wellness. The overall tone is energetic and uplifting."
        />
        <br />
        <h3 className="mt-3">Bite the Good Stuff, Burn the Bad—Track Your Way to Happy and Glad!</h3>
    </div>
    );
}

export default Header;