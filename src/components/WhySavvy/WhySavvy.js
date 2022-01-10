import React from 'react';
import './WhySavvy.css'

import img1 from '../../images/1.png';
import img2 from '../../images/2.png';
import img3 from '../../images/3.png';
import img4 from '../../images/4.png';
import img5 from '../../images/5.png';
import img6 from '../../images/6.png';
import img7 from '../../images/7.png';
import img8 from '../../images/8.png';

const WhySavvy = () => {
    return (
        <div className='WhySavvy-container'>
            <div>
                <h1 className='text-white py-4'>Why Savvy- STR</h1>
            </div>
            <div className=''>
                <div class="row card-deck">
                    <div class="col-md-3 col-sm-6 col-6 card">
                        <img class="card-img-top card-Img" src={img1} alt="" />
                        <div class="card-body">
                            <h5 class="card-title mt-3">Saas services &
                                technical support</h5>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6 col-6 card">
                        <img class="card-img-top card-Img" src={img2} alt="" />
                        <div class="card-body">
                            <h5 class="card-title mt-3">24x7 Complaint
                                Support</h5>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6 col-6 card">
                        <img class="card-img-top card-Img" src={img3} alt="" />
                        <div class="card-body">
                            <h5 class="card-title mt-3">Request
                                Exception</h5>
                        </div>
                    </div>

                    <div class="col-md-3 col-sm-6 col-6 card">
                        <img class="card-img-top card-Img" src={img4} alt="" />
                        <div class="card-body">
                            <h5 class="card-title mt-3">Location
                                request</h5>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6 col-6 card">
                        <img class="card-img-top card-Img" src={img5} alt="" />
                        <div class="card-body">
                            <h5 class="card-title mt-3">Notification
                                Alert</h5>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6 col-6 card">
                        <img class="card-img-top card-Img" src={img6} alt="" />
                        <div class="card-body">
                            <h5 class="card-title mt-3">Property
                                Managment</h5>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6 col-6 card">
                        <img class="card-img-top card-Img" src={img7} alt="" />
                        <div class="card-body">
                            <h5 class="card-title mt-3">Administration
                                Support</h5>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6 col-6 card">
                        <img class="card-img-top card-Img" src={img8} alt="" />
                        <div class="card-body">
                            <h5 class="card-title mt-3">Multi-User
                                Managment</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhySavvy;