import React from 'react'
// import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am 
                    <span> Lorem Ipsum</span>
                </h1>
                <p className="h-sub-text">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                 Aenean commodo ligula eget dolor. Aenean massa. 
                 Cum sociis natoque penatibus et magnis dis parturient
                 montes, nascetur ridiculus mus. Donec quam felis, 
                 ultricies nec, pellentesque eu, pretium quis, sem. 
                 Nulla consequat massa quis enim. Donec pede justo, 
                 fringilla vel, aliquet nec, vulputate eget, arcu.  
                </p>
                <div className="icons">
                    <Link className="icon-link">
                        <FontAwesomeIcon icon={faFacebook} className="icon fb" />
                    </Link>
                    <Link className="icon-link">
                        <FontAwesomeIcon icon={faGithub } className="icon gh" />
                    </Link>
                    <Link className="icon-link">
                        <FontAwesomeIcon icon={faYoutube} className="icon yt" />
                    </Link>
                </div>
            </header>
        </div>
    )
} 

export default HomePage
