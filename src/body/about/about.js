import React from 'react'
import './about.css'
import web from '../../images/profile_pic.jpg';
import resume from '../../images/JayaChandra_Resume_Formatted.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons'
function about(){
    return(
        <div className=" container-fluid about px-0" id="aboutID">
                <div className="col-lg-8 col-md-12 col-sm-12 content">
                    <h1>Hey there,<br/> I'm Jaya Chandra Thottempudi</h1><br/>
                    <p>Results-driven Software Developer with 6+ years of experience in building scalable, high-performance web and mobile applications. Strong expertise in React.js, Node.js, and PHP for full-stack development, along with hands-on experience in developing native Android applications using Java.
                    <br /> For the past year, actively working as a Guidewire Jutro Digital Platform (JDP) Developer, developing and customizing Digital Applications integrated with Guidewire PolicyCenter, ClaimCenter, and BillingCenter using the Jutro framework and Guidewire Edge APIs.</p>
                    <br/><br/>
                    
                <div className="about">
                    <span className="btn-outline-primary btn btn-color"><a href="https://github.com/jayachandra56?tab=repositories" target="_blank">GitHub Profile</a></span>
                    <span className="btn-outline-primary btn btn-color"><a href="https://www.linkedin.com/in/thottempudi7056/" target="_blank">LinkedIn Profile</a></span>
                    <span className="btn-outline-primary btn btn-color">
                        <a href={resume} target="_blank" rel="noopener noreferrer">Download Resume</a>
                    </span>
                </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12">
                    <img src={web} className="imageAbt" alt="Web Development"/><br/>    
                </div> 
        </div>

    )
}
export default about