import React, { useEffect ,useState} from 'react'
import netflixLogo from '../../netflix-logo.png'
import { useHistory } from 'react-router';
import './Navbar.css'

function Navbar() {

    const [show,handleShow]=useState(false)

    const history=useHistory();

    const transitionNavBar = () => {
        if(window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar);
        return () => {
            window.removeEventListener('scroll', transitionNavBar);
        }
    }, [])

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img onClick={()=>history.push("/")}className="nav__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix Logo"></img>
            
            <img onClick={()=>history.push("/profile")} className="nav__avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="Netflix Avatar"></img>
        </div>
    )
}

export default Navbar
