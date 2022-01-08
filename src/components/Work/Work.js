import React from 'react';
import './Work.css'
import work from '../../images/work.png'

const Work = () => {
    return (
        <div class="work-container">
            <div class="row">
                <div class="col-6">
                    <h1 className='work-text'>What we do</h1>
                    <p className='work-text-details'>Redesigning of an STR software
                        i.e, which will help property owner to make the
                        short-term property rental process  completely
                        complaint  i.e making the process completely
                        comply with the government defined rules, regulations
                        and policies. Not only this but this website also provide
                        holistic approach for the client to manage their
                        end-to-end rental services, tracking and keeping
                        it complaint</p>
                </div>
                <div class="col-6">
                    <img className='work-img' src={work} alt="" /></div>
            </div>
        </div>
    );
};

export default Work;