import React from 'react';
import './Summary.css';
import dev from "../../images/developerdesign.png";

export default class Summary extends React.Component {
    render() {
        return (
            <div className='summary'>
                <div className='summary-container'>
                    <div className='summary-row'>
                        <div className='summary-item'>
                            <div className='summary-img'>
                                <div className='dev-img'></div>
                            </div>
                            <div className='summary-text'>
                                <h4>
                                Development and Design
                                </h4>
                                <p>
                                I aim to put my creativity to the test, 
                                designing and building unique, meaningful products for 
                                clients or merely for my own interests.
                                </p>
                            </div>
                        </div>
                        <div className='summary-item'>
                            <div className='summary-img'>
                                <div className='resp-img'></div>
                            </div>
                            <div className='summary-text'>
                                <h4>
                                Responsive Layouts
                                </h4>
                                <p>
                                Development and design isn't merely putting 
                                information on the site or preferred media outlet. 
                                I organize content and present information in an engaging 
                                fashion, driving new and unique layouts in tandem with novel 
                                solutions and cool animations.
                                </p>
                            </div>
                        </div>     
                    </div>
                    <div className='summary-row'>
                        <div className='summary-item'>
                            <div className='summary-img'>
                                <div className='inov-img'></div>
                            </div>
                            <div className='summary-text'>
                                <h4>
                                Ideas and Solutions
                                </h4>
                                <p>
                                There are still many problems that exist in today's society, including laziness. 
                                Luckily, I hope to combat these issues by innovating, developing easy-to-use programs, 
                                solutions, or products.
                                </p>
                            </div>
                        </div>
                        <div className='summary-item'>
                            <div className='summary-img'>
                                <div className='pas-img'></div>
                            </div>
                            <div className='summary-text'>
                                <h4>
                                Passion and Dedication
                                </h4>
                                <p>
                                With my profound interest and commitment to my field of study, 
                                my projects rarely go unfinished and my problems are never left unresolved.
                                </p>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        )
    }
}