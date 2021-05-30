import React from 'react';
import './Footer.css';

export default class Footer extends React.Component {
    render() {
        return (
            <div className='footer'>
                <div className='footer-sns'>
                    <div className='footer-fb-container'>
                        <a href='#'><div className='footer-fb'></div></a>
                    </div>
                    <div className='footer-in-container'>
                        <a href='#'><div className='footer-in'></div></a>
                    </div>
                    <div className='footer-pi-container'>
                        <a href='#'><div className='footer-pi'></div></a>
                    </div>
                    <div className='footer-em-container'>
                        <a href='#'><div className='footer-em'></div></a>
                    </div>
                </div>
                <div className='footer-contact'>
                    <div className='footer-phone'>Phone:XXXXXX</div>
                    <div className='footer-email'>Email:XXXXX@gmail.com</div>
                </div>
                <div className='footer-menu'>
                    <div className='footer-copy'>
                        <div className='copy-container'>
                            <p>XXXX</p>
                            <p>Copyright&copy;2021</p>
                            <p>NY</p>
                        </div>
                    </div>
                    <div className='footer-nav'>
                        <div className='footer-col'>
                            <div className='footer-home'><a href='#'>Home</a></div>
                            <div className='home-item'></div>
                        </div>
                        <div className='footer-col'>
                            <div className='footer-portfolio'><a href='#'>Portfolio</a></div>
                            <div className='portfolio-item'>
                                <ul>
                                    <li><a href='#'>Project 1</a></li>
                                    <li><a href='#'>Project 2</a></li>
                                    <li><a href='#'>Project 3</a></li>
                                    <li><a href='#'>See All</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className='footer-col'>
                            <div className='footer-resume'><a href='#'>Resume</a></div>
                            <div className='resume-item'>
                                <ul>
                                    <li><a href='#'>Download</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className='footer-col'>
                            <div className='footer-contact'><a href='#'>Contact</a></div>
                            <div className='contact-item'></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}