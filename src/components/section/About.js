import React from 'react'
import Skills from '../layouts/Skills'
import { about, skillsBar, section2title } from '../../profile'

const About = (props) => {
    return (
        <div id="about" className="effect2">
            <div data-aos="zoom-in-up" data-aos-once="true" className="row">
                {props.topic != "about_us" ? (<div className="col-12 d-none d-md-block offset-md-1 col-md-4 Photo inverse-dark" id="not-dark2"></div>) : (<div className="col-12 d-none d-md-block offset-md-1 col-md-4 Phot inverse-dark" id="not-dark2"></div>)}

                < div className="col-12 offset-md-1 col-md-6 about">
                    <div className="About-title-box">
                        {props.topic == "about_us" ? (<h1 id="About" className="red-line">{section2title}</h1>) : (<h1 id="About" className="red-line">About Project</h1>)}
                    </div>
                    {props.topic == "about_us" ? (
                        <p className="lead about-text">
                            {about.about_us}
                        </p>
                    ) : (
                        <p className="lead about-text">
                            {about.project}
                        </p>
                    )}



                </div>
            </div>
            {/*<div id="Skills">
                <div className="row d-flex justify-content-center skills">
                    {skillsBar.map((x) =>
                        <Skills key={x.name} faClass={x.faClass} svg={x.svg} label={x.name} />
                    )}̀
                </div>
            </div>
                    */}
        </div >
    )
}

export default About
