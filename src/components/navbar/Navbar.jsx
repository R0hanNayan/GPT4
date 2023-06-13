import React, { useState } from "react";
import './navbar.css';
import logo from '../../assets/logo.svg'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

function Menu() {
    return (
        <>
            <p><a href="#home">Home</a></p>
            <p><a href="#wgpt4">What is GPT4?</a></p>
            <p><a href="#possibility">Open AI</a></p>
            <p><a href="#features">Case Studies</a></p>
            <p><a href="#blog">Library</a></p>
        </>
    );
}

function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="gpt4_navbar">
            <div className="gpt4_navbar-links">
                <div className="gpt4_navbar-links_logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="gpt4_navbar-links_container">
                    <Menu />
                </div>
            </div>
            <div className="gpt4_navbar-sign">
                <p>Sign in</p>
                <button type="button">Sign Up</button>
            </div>
            <div className="gpt4_navbar-menu">
                {toggleMenu ?
                    <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu ?
                    <div className="gpt4_navbar-menu_container scale-up-center">
                        <div className="gpt4_navbar-menu_container-links">
                            <Menu />
                        </div>
                        <div className="gpt4_navbar-menu_container-links-sign">
                            <p>Sign in</p>
                            <button type="button">Sign Up</button>
                        </div>
                    </div>
                    : null
                }
            </div>
        </div>
    );
}

export default Navbar;