import React from 'react'
import './about.css'
import web from '../../images/about.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons'
function about(){
    return(
        <div className=" container-fluid about px-0" id="aboutID">
            <div className="background px-3">
                <div className="col-lg-6 col-md-12 col-sm-12  content">
                    <h1>Hey there,<br/> I'm Jaya Chandra Thottempudi</h1><br/>
                    <p>Having total of 5+ Years of experience in Softwaare Development.</p>
                    <p>Having 3+ Years of experience as a MERN Stack Developer.</p>
                    <p>Having 2+ Years of experience as a Native Android Developer using Java.</p>
                    <br/><br/>
                    <span className="btn-outline-primary btn btn-color"><a href="https://github.com/jayachandra56?tab=repositories" target="_blank">GitHub Profile</a></span>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <img src={web} className="imageAbt" alt="Web Development"/><br/>    
                </div> 
            </div>
        </div>

    )
}
export default about