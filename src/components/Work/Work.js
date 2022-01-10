import React from 'react';
import './Work.css'
import work from '../../images/work.png'

const Work = () => {
    return (
        <div class="work-container row">
            {/* <div class="row"> */}
            <div class="col-md-6 col-12">
                <h1 className='work-text text-start p-3'>What we do</h1>
                <p className='work-text-details text-start p-3'>Redesigning of an STR software
                    i.e, which will help property owner to make the
                    short-term property rental process  completely
                    complaint  i.e making the process completely
                    comply with the government defined rules, regulations
                    and policies. Not only this but this website also provide
                    holistic approach for the client to manage their
                    end-to-end rental services, tracking and keeping
                    it complaint</p>
            </div>
            <div class="col-md-6 col-12">
                <img className='work-img' src={work} alt="" /></div>
        </div>
        // </div>
    );
};

export default Work;