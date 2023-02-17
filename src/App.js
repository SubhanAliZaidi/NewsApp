// Naziya = 'naziya'
import './App.css';
import './components/index'
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import Footer from './components/Footer';
import About from './components/About'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export function themechange(){
    let r = document.querySelector(':root')
    let rs = getComputedStyle(document.body)
    let themeimage = document.getElementById('themeimg')
    if (rs.getPropertyValue('--bg-color') === 'white') {
        r.style.setProperty('--bg-color', '#212529')
        r.style.setProperty('--fg-color', 'white')
        themeimage.src = 'assets/icon/sun.png';
        themeimage.classList.add('themeimage');
        themeimage.classList.remove('themeimage2');
        
    } else {
        r.style.setProperty('--bg-color', 'white')
        r.style.setProperty('--fg-color', 'black')
        themeimage.src = 'assets/icon/moon.png';
        themeimage.classList.add('themeimage2');
        themeimage.classList.remove('themeimage');
    }
}

export default class App extends Component {
    render() {
        
        return (
            <>
                <Router>
                    <Navbar themechange={themechange} />
                    <Routes>
                        <Route exact path="/" element={<News key='general' category='general'/>} />
                        <Route exact path="/Home" element={<News key='home' category='general'/>} />
                        <Route exact path="/Business" element={<News key='business' category='business' />} />
                        <Route exact path="/Science" element={<News key='science' category='science' />} />
                        <Route exact path="/Health" element={<News key='health' category='health' />} />
                        <Route exact path="/Sports" element={<News key='sports' category='sports' />} />
                        <Route exact path="/Technology" element={<News key='technology' category='technology' />} />
                        <Route exact path="/Entertainment" element={<News key='entertainment' category='entertainment' />} />
                        <Route exact path="/About" element={<About />} />
                    </Routes>
                    <Footer />
                </Router>
            </>
        )
    }
}
