import React from 'react';
import './ContactUs.css'

const ContactUs = () => {
    return (
        <div className='contact-us-section'>
            <div>
                <h1 className='text-white pt-5'>Let's make it happen!</h1>
                <p className='text-white'>We are all ready to help you</p>
            </div>

            <div>
                <form className='container contact-form'>
                    <div class="row">
                        <div class="form-group col-md-6">
                            <input type="text" class="form-control" id="Name" placeholder="Full Name" />
                        </div>
                        <div class="form-group col-md-6">
                            <input type="email" class="form-control" id="email" placeholder="Email Address" />
                        </div>
                    </div>

                    <br />

                    <div class="row">
                        <div class="form-group col-md-6">
                            <input type="text" class="form-control" id="subject" placeholder="Subject" />
                        </div>
                        <div class="form-group col-md-6">
                            <input type="text" class="form-control" id="phone" placeholder="Phone Number" />
                        </div>
                    </div>

                    <br />

                    <div class="form-row">
                        <div class="form-group col-md-12">
                            <input type="text" class="form-control" id="message" placeholder='Your Message' />
                        </div>
                    </div>
                    <br />

                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
            <div className='footer-icon'>
                <i class="fab fa-youtube p-3 fs-3"></i>
                <i class="fab fa-facebook p-3 fs-3"></i>
                <i class="fab fa-instagram p-3 fs-3"></i>
                <i class="fab fa-twitter p-3 fs-3"></i>
            </div>
        </div>
    );
};

export default ContactUs;