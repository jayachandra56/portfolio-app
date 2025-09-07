import React from 'react';
import './skills.css';
import web from '../../images/web.jpg';
import mobile from '../../images/mobile.jpg';
import backend from '../../images/backend.jpg';
import databases from '../../images/databases.jpg';
import tools from '../../images/tools.jpg';
import aiTools from '../../images/aiTools.jpg';

function skills() {
    return (
        <div className="container-fluid skills" id="skillsID">
            <h1>Skills</h1>
            <div className="container">
                <div className="row p-1 rounded">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <h3>Mobile Developer</h3>
                        <div className="flip-card shadow">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src={mobile} className="imageSkill" alt="Mobile Development" />
                                </div>
                                <div className="flip-card-back">
                                    <h5>Java, Flutter, React Native</h5>
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
                                    <h5>HTML, CSS, JavaScript, ReactJS, TypeScript, RTL, Guidewire JDP.</h5>
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
                                    <h5>PHP, NodeJS, GraphQL</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <h3>Databases</h3>
                        <div className="flip-card shadow">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src={databases} className="imageSkill" alt="Databases" />
                                </div>
                                <div className="flip-card-back">
                                    <h5>MySQL (SQL), Firebase Firestore, MongoDB (NoSQL)</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <h3>Tools</h3>
                        <div className="flip-card shadow">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src={tools} className="imageSkill" alt="Tools" />
                                </div>
                                <div className="flip-card-back">
                                    <h5>VS Code, Postman, Git, Adobe (XD, Photoshop, Premiere Pro)</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <h3>AI Tools</h3>
                        <div className="flip-card shadow">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src={aiTools} className="imageSkill" alt="AI Tools" />
                                </div>
                                <div className="flip-card-back">
                                    <h5>GitHub Copilot, ChatGPT</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default skills;