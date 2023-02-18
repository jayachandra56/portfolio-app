import React from 'react'
import './skills.css'
import web from '../../images/web.jpg';
import mobile from '../../images/mobile.jpg';
import backend from '../../images/backend.jpg';
import databases from '../../images/databases.jpg';
import tools from '../../images/tools.jpg';
function skills() {
    return (
        <div className="container-fluid skills" id="skillsID">
            <h1>Skills</h1>
            <div className="container ">
                <div className="row p-1 rounded">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <h3>Mobile Developer</h3>
                        <div className="flip-card  shadow">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src={mobile} className="imageSkill" alt="Mobile Development" />
                                </div>
                                <div className="flip-card-back">
                                    <h5>Java, Flutter</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <h3>Web Developer</h3>
                        <div className="flip-card shadow">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src={web} className="imageSkill" alt="Web Development" />
                                </div>
                                <div className="flip-card-back">
                                    <h5>HTML, CSS, Javascript, ReactJS</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <h3>Backend Developer</h3>
                        <div className="flip-card shadow">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src={backend} className="imageSkill" alt="Backend" />
                                </div>
                                <div className="flip-card-back">
                                    <h5>Php, NodeJS</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <h3>Databases</h3>
                        <div className="flip-card shadow">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src={databases} className="imageSkill" alt="DataBases" />
                                </div>
                                <div className="flip-card-back">
                                    <h5>MySQL (SQL), Firebase Firestore (NoSQL)</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <h3>Tools</h3>
                        <div className="flip-card shadow">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src={tools} className="imageSkill" alt="DataBases" />
                                </div>
                                <div className="flip-card-back">
                                    <h5>VS Code, Postman, GIT, Adobe( XD, Photo Shop, Premiere Pro)</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default skills