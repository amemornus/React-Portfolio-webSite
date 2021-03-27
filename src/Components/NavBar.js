import React from 'react'
import avatar3 from '../img/avatar3.jpg';
import {NavLink} from 'react-router-dom';

function NavBar() {
    return (
        <div className="NavBar"> 
            <nav className="nav">
                <div className="profile">
                    <img src={avatar3} alt=""></img>
                </div>
                <ul className='nav-items'>
                    <li className='nav-item'>
                        <NavLink to="/" exact activeClassName="active">
                            HomePage
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to="/about" exact activeClassName="active">
                            AboutPage
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to="/potfolios" exact activeClassName="active">
                            PotfoliosPage
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to="/blogs" exact activeClassName="active">
                            BlogPage
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to="/contacts" exact activeClassName="active">
                            ContactPage
                        </NavLink>
                    </li>
                </ul>
                <footer className="footer">
                    <p>
                        @2021 amemornus
                    </p>
                </footer>
                </nav>
                
        </div>
    )
}

export default NavBar;
