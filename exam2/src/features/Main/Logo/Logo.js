import React from 'react';
import './Logo.css';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom";

export default class Logo extends React.Component {
    state = {
        css:false
    }
    componentDidMount() {
        const { css } = this.props;
        this.setState({
            css:css
        })    
    }
    componentDidUpdate() {
        const { css } = this.props;
        if (css) {
            document.querySelector('.logo').style.position = 'static';
            document.querySelector('.logo').style.top = 'default';
            document.querySelector('.logo').style.width = 'default';
            document.querySelector('.logo').style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        } else {
            document.querySelector('.logo').style.position = 'absolute';
            document.querySelector('.logo').style.top = '0';
            document.querySelector('.logo').style.width = '100%';
            document.querySelector('.logo').style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        }
    }
    render() {
        const { css } = this.props;
        return (
            <div className='logo'>
                <Router>
                    <div className='icon-container'>
                        <Link to="/" style={{ textDecoration: 'none' }}><div className='icon'></div></Link>
                    </div>
                    <div className='nav'>
                        <ul>
                            <li><Link to="/" style={{ textDecoration: 'none' }}><h6>Home</h6></Link></li>
                            <li><Link to="/portfolio" style={{ textDecoration: 'none' }}><h6>Portfolio</h6></Link></li>
                            <li><Link to="/contact" style={{ textDecoration: 'none' }}><h6>Contact</h6></Link></li>
                        </ul>
                    </div>
                </Router>
            </div>
        )
    }
}