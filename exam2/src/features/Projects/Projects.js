import React from 'react';
import './Projects.css';
import Button from 'react-bootstrap/Button';

export default class Projects extends React.Component {
    render() {
        return (
            <div className='projects'>
                <a name='projects'></a>
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
                                <h4>Personal Website</h4>
                                <p>
                                Enjoyable side project that was created to expriment with more HTML and CSS, 
                                but also progided an oujtlet to showcase my abilities and interests.
                                </p>
                                <div className='projects-btn'>
                                    <a href='#'><Button variant="outline-light">More</Button></a>
                                </div>
                            </div>
                        </div>
                        <div className='projects-card' id='mlb'>
                            <div className='projects-opacity'>
                                <h4>Strike Zone Analysis</h4>
                                <p>
                                Data analytics project completed during my time at the illiois Math and 
                                Science Academy which studuied the baseball strike zone based on the 
                                state of the game.
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