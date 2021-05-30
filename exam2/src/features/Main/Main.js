import React from 'react';
import './Main.css';
import Button from 'react-bootstrap/Button';

export default class Main extends React.Component {
    render() {
        return (
            <div className='main'>
                <div className='main-opacity'>
                <div className='main-row'>
                    <div className='hello'>
                        <h3>Hello, I'm</h3>
                    </div>
                </div>
                <div className='main-row'>
                    <div className='xxx'>
                        <p>XXXX</p>
                    </div>
                </div>
                <div className='main-row'>
                    <div className='uid'>
                        <h3>UI Developer. UX Designer. Problem Solver</h3>
                    </div>
                </div>
                <div className='main-row'>
                    <div className='main-container'>
                        <div className='info-btn'>
                            <a href='#about'><Button variant="outline-light">Info</Button></a>
                        </div>
                        <div className='port-btn'>
                            <a href='#projects'><Button variant="outline-light">Portfolio</Button></a>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}