import React from 'react';
import './About.css';
import Button from 'react-bootstrap/Button';

export default class About extends React.Component {
    render() {
        return (
            <div className='about'>
                <a name='about'></a>
                <div className='bg-img'>
                <div className='about-container'>
                    <div className='row-about'>
                        <div className='about-me'>
                            <h2>About Me</h2>
                        </div>
                    </div>
                    <div className='row-about'>
                        <div className='sharing-a'>
                            <p>Sharing a little bit of my story...</p>
                        </div>
                    </div>
                    <div className='row-about'>
                        <div className='general-overview'>
                            <h3>General Overview</h3>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and 
                            typesetting industry. Lorem Ipsum has been the industry's 
                            standard dummy text ever since the 1500s, when an unknown printer 
                            took a galley of type and scrambled it to make a type specimen book. 
                            It has survived not only five centuries, but also the leap into electronic 
                            typesetting, remaining essentially unchanged. It was popularised in the 1960s 
                            with the release of Letraset sheets containing Lorem Ipsum passages, 
                            and more recently with desktop publishing software like Aldus PageMaker 
                            including versions of Lorem Ipsum
                            </p>
                        </div>
                    </div>
                    <div className='row-about'>
                        <div className='statistics'>
                            <h3>Statistics</h3>
                            <p className='statistics-description'>
                                And for those that don't fancy reading:
                            </p>
                            <br></br>
                            <p>Male, 200 years old.</p>
                            <p>Five feet 110 inches</p>
                            <p>Favorite fonts:Roboto</p>
                            <p>Loves to learn new things</p>
                        </div>
                    </div>
                    <div className='row-about'>
                        <div className='contact-btn'>
                            <a href='#contact'><Button variant="outline-secondary">Contact</Button></a>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}