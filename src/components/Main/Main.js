import React from 'react';
import { Link } from "react-router-dom";
import Navbar from '../shared/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar />
            <Link style={{ textDecoration: 'none', color: 'black' }} to={'/home'}>
                <button>Home</button>
            </Link>

            <Link style={{ textDecoration: 'none', color: 'black' }} to={'/work'}>
                <button>Work</button>
            </Link>

            <Link style={{ textDecoration: 'none', color: 'black' }} to={'/WhySavvy'}>
                <button>Why Savvy</button>
            </Link>

            <Link style={{ textDecoration: 'none', color: 'black' }} to={'/contactus'}>
                <button>Contact Us</button>
            </Link>
        </div>
    );
};

export default Main;