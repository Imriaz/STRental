import React from 'react';
import { Link } from "react-router-dom";
import Navbar from '../shared/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar />
            <Link style={{ textDecoration: 'none', color: 'black' }} to={'/home'}>
                <button sx={{ m: 1, borderRadius: 2, backgroundColor: 'skyblue' }} variant="contained" color="inherit">Home</button>
            </Link>

            <Link style={{ textDecoration: 'none', color: 'black' }} to={'/work'}>
                <button sx={{ m: 1, borderRadius: 2, backgroundColor: 'skyblue' }} variant="contained" color="inherit">Work</button>
            </Link>

            <Link style={{ textDecoration: 'none', color: 'black' }} to={'/work'}>
                <button sx={{ m: 1, borderRadius: 2, backgroundColor: 'skyblue' }} variant="contained" color="inherit">Why Savvy</button>
            </Link>

            <Link style={{ textDecoration: 'none', color: 'black' }} to={'/contactus'}>
                <button sx={{ m: 1, borderRadius: 2, backgroundColor: 'skyblue' }} variant="contained" color="inherit">Contact Us</button>
            </Link>
        </div>
    );
};

export default Main;