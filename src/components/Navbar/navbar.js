import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {

    const downloadHandle = () => {
        const link = document.createElement("a");
        link.download = "Zaheen-Khan-Resume.pdf";
        // link.href = resume;
        link.click();
        window.open(
            "https://drive.google.com/file/d/16caDGDoLkJFx6PDRHYXmib5UXfVx6A8p/view?usp=sharing",
            "_blank"
        );
    };

    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className='logo'/>
            <div className="desktopMenu">
                <Link className="desktopMenuListItem">Home</Link>
                <Link className="desktopMenuListItem">About</Link>
                <Link className="desktopMenuListItem">Projects</Link>
                <Link className="desktopMenuListItem">Contact</Link>
            </div>
            <button className="desktopMenuBtn"
             onClick={() => { downloadHandle(); }}>Resume</button>
            <a href="https://github.com/Zaheen04" target="_blank">
                <button className="desktopMenuBtn">Github</button>
            </a>
        </nav>
    )
}

export default Navbar;