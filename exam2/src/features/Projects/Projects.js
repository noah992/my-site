import React from 'react';
import './Projects.css';
import Button from 'react-bootstrap/Button';

export default class Projects extends React.Component {
    render() {
        return (
            <div className='projects'>
                <div className='projects-row'>
                    <div className='projects-title'>
                        <h3>Projects and Portfolio</h3>
                    </div>
                </div>
                <div className='projects-row'>
                    <div className='projects-description'>
                        <h5>Sharing my endeavors and passions...</h5>
                    </div>
                </div>
                <div className='projects-row'>
                    <div className='projects-container'>
                        <div className='projects-card' id='luv'>
                            <div className='projects-opacity'>
                                <h4>LUV TALK Website</h4>
                                <p>
                                Website, created during my first internship, 
                                which utilized HTML, CSS, PHP, Ajax, Javascript/jQuery, and Wordpress.
                                </p>
                                <div className='projects-btn'>
                                    <a href='#'><Button variant="outline-light">More</Button></a>
                                </div>
                            </div>
                        </div>
                        <div className='projects-card' id='fl'>
                            <div className='projects-opacity'>
                                <h4>LUV TALK Website</h4>
                                <p>
                                Website, created during my first internship, 
                                which utilized HTML, CSS, PHP, Ajax, Javascript/jQuery, and Wordpress.
                                </p>
                                <div className='projects-btn'>
                                    <a href='#'><Button variant="outline-light">More</Button></a>
                                </div>
                            </div>
                        </div>
                        <div className='projects-card' id='mlb'>
                            <div className='projects-opacity'>
                                <h4>LUV TALK Website</h4>
                                <p>
                                Website, created during my first internship, 
                                which utilized HTML, CSS, PHP, Ajax, Javascript/jQuery, and Wordpress.
                                </p>
                                <div className='projects-btn'>
                                    <a href='#'><Button variant="outline-light">More</Button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='projects-row'>
                    <div className='more-projects'>
                        <a href='#'><Button variant="outline-light">More Projects</Button></a>
                    </div>
                </div>
            </div>
        )
    }
}