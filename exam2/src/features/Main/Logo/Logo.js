import React from 'react';
import './Logo.css';
import { Link } from 'react-router-dom';

export default class Logo extends React.Component {
    render() {
        return (
            <div className='logo'>
                <div className='icon'></div>
                <div className='nav'>
                    <ul>
                        <li><Link to="/" style={{ textDecoration: 'none' }}><h4>Home</h4></Link></li>
                        <li><Link to="/portfolio" style={{ textDecoration: 'none' }}><h4>Portfolio</h4></Link></li>
                        <li><Link to="/contact" style={{ textDecoration: 'none' }}><h4>Contact</h4></Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}