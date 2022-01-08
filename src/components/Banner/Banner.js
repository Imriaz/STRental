import React from 'react';
import './Banner.css'

import banner1 from '../../images/banner1.png';
import banner2 from '../../images/banner2.png';
import banner3 from '../../images/banner3.png';

const Banner = () => {
    return (
        <div className='banner-section'>
            <div>
                <h1 className='banner-heading'>A single stop powerful platform for making renting out properties easier than ever</h1>
                <p className='text-white'>Hassle free rental process from convience of your home</p>
                <br />

                <button type="button" class="btn btn-light banner-button-1 m-2 ">Get Started <i class="fas fa-long-arrow-alt-right"></i></button>

                <button className='btn btn-light banner-button-2 m-2' type="button"><i class="far fa-play-circle"></i>Play Video</button>
            </div>

            <div class="banner-image-section">
                <div class="row">
                    <div class="col-sm">
                        <img className='banner-img-1' src={banner1} alt="" />
                    </div>
                    <div class="col-sm">
                        <img className='banner-img-2' src={banner2} alt="" />
                    </div>
                    <div class="col-sm">
                        <img className='banner-img-3' src={banner3} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;