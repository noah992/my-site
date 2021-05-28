import React from 'react';
import './Layout.css';
import About from '../About/About';
import Summary from '../Summary/Summray';
import Projects from '../Projects/Projects';
import Main from '../Main/Main';
import Contact from '../Contact/Contact';


export default class Layout extends React.Component {
    render() {
        return (
            <>
                <Main></Main>
                <About></About>
                <Summary></Summary>
                <Projects></Projects> 
                <Contact></Contact>
            </>
        )
    }
}