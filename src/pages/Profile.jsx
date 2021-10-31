import React from 'react'
import Avatar from "../assets/img/ava.jpg";
import {Link} from "react-router-dom";

const Profile = () => {
    return (
        <div className='Profile'>
            <Link to='/'>
                <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.29 12l3.54-3.54a1 1 0 10-1.42-1.41l-4.24 4.24a1 1 0 000 1.42L13.41 17a1 1 0 00.71.29 1 1 0 00.71-.29 1 1 0 000-1.41L11.29 12z" fill="#303034"/>
                </svg>
            </Link>
            <div className="info">
                <div className="info-container">
                    <div className="img-icon">
                        <img src={Avatar} alt="avatar" />
                    </div>
                    <div className="user-info">
                        <h3>Алиса Иванова&nbsp;<span>an</span></h3>
                        <p>Analyst Team Lead</p>
                    </div>
                </div>
            </div>
            <div className="birthDay">
                <div className="age">
                    <p>5 июня 1999</p>
                    <span>24 года</span>
                </div>
                <div className="number">
                    <a href="tel: +7(999)9009090"><p>+7(999) 900 90 90</p></a>
                </div>
            </div>
        </div>
    )
}

export default Profile