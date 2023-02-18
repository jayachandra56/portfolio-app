import React, { useEffect, useState } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faBriefcase, faCog, faImages, faEnvelope, faEdit, faPaperPlane, faFileCode, faFileArchive, faCodeBranch } from '@fortawesome/free-solid-svg-icons'

function Header() {
    const [showMenu, setShowMenu] = useState(false)
    const [width, setWindowWidth] = useState(0);
    console.log('width-',width)

    useEffect(() => {

        updateDimensions();

        window.addEventListener('resize', updateDimensions); 
        return () => window.removeEventListener('resize', updateDimensions);
    }, [])    

    const updateDimensions = () => {
        const width = window.innerWidth
        setWindowWidth(width)
    }
    return (
        <div className="header">
            <div className="logo">Jaya Chandra Thottempudi</div>
            <div className='menu-icon' style={{ display: width <= 897 ? 'flex' : 'none' }} onClick={()=>setShowMenu(!showMenu)}>
                <div className='one'></div>
                <div className='one'></div>
                <div className='one'></div>
            </div>
            <div className="menu" style={{ display: width <= 897 ? showMenu ? 'flex' : 'none' : 'flex' }}>
                <ul>
                    <li><a href="#aboutID"><FontAwesomeIcon icon={faUser} size='1x' />&nbsp;ABOUT ME</a></li>
                    <li><a href="#skillsID"><FontAwesomeIcon icon={faEdit} />&nbsp;SKILLS</a></li>
                    {/* <li><a ><FontAwesomeIcon icon={faBriefcase}/>&nbsp;EXPERIENCE</a></li> */}
                    <li><a href="#projectsID"><FontAwesomeIcon icon={faCodeBranch} />&nbsp;PROJECTS</a></li>
                    <li><a href="#reachMe"><FontAwesomeIcon icon={faEnvelope} />&nbsp;REACH ME</a></li>
                    { width <= 897 ? <li onClick={()=>setShowMenu(!showMenu)}>CLOSE</li> : null }
                </ul>
            </div>
        </div>
    )
}
export default Header