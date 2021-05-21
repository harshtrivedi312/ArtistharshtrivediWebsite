import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import logo from '../../Assets/img/harsh_BW.png'
import '../../Assets/vendor/boxicons/css/boxicons.css';



export default class NaviBar extends Component {
    render() {
        return (
            <div>
                <header id="header">
                    <div className="d-flex flex-column">
                        <div className="profile">
                            <Link to="/">
                                <img src={logo} alt=" not found " ></img>

                                <h1 className="text-light">
                                    Harsh Trivedi
                            </h1></Link>
                            <div className="social-links mt-3 text-center">
                                <a href="https://twitter.com/harshtrivedi312" className="twitter"><i className="bx bxl-twitter"></i></a>
                                <a href="https://www.facebook.com/harshtrivedi312" className="facebook"><i className="bx bxl-facebook"></i></a>
                                <a href="https://www.instagram.com/artistharshtrivedi/" className="instagram"><i className="bx bxl-instagram"></i></a>
                                <a href="https://www.behance.net/harshtrivedi2" className="behance"><i className="bx bxl-behance"></i></a>
                                <a href="https://github.com/harshtrivedi312" className="github"><i className="bx bxl-github"></i></a>
                                <a href="https://www.linkedin.com/in/harsh-radheshaym-t-713330b6/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                            </div>
                        </div>
                        <nav className="nav-menu">
                            <ul>
                                <Link to="/">
                                    <li><i className="bx bx-home"></i><span>Home</span></li>
                                </Link>

                                <Link to="/About">
                                    <li><i className="bx bx-user"></i> <span>About</span></li>
                                </Link>

                                <Link to="/Portfolio">
                                    <li><i className='bx bx-camera-movie'></i><span>Portfolio</span></li>
                                </Link>

                                <Link to="/Breakdowns">
                                    <li><i className='bx bx-film'></i><span>Breakdowns</span></li>
                                </Link>

                                <Link to="/Blog">
                                    <li><i className='bx bx-photo-album'></i><span>Blog</span></li>
                                </Link>

                                <Link to="/Tutorials">
                                    <li><i className='bx bxs-shapes'></i><span>Tutorials</span></li>
                                </Link>

                                <Link to="/Resume">
                                    <li><i className='bx bx-id-card'></i><span>Resume</span></li>
                                </Link>

                                <Link to="/Contact">
                                    <li><i className="bx bx-envelope"></i><span> Contact</span></li>
                                </Link>

                            </ul>
                        </nav>

                        <label className="switch">
                            <input type="checkbox" onClick="ToggleFunction()" />
                            <span className="slider round"></span>
                            <p className="Darkmode">Dark Mode</p>
                        </label>
                    </div>


                </header>

            </div>
        )
    }
}
