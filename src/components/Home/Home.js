
import React from 'react';
import { Link } from "react-router-dom";
import Banner from '../Banner/Banner';
import Navbar from '../shared/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            {/* <Link style={{ textDecoration: 'none', color: 'black' }} to={'/login'}>
                <Button sx={{ m: 1, borderRadius: 2, backgroundColor: 'skyblue' }} variant="contained" color="inherit">Login</Button>
            </Link> */}
        </div>
    );
};

export default Home;