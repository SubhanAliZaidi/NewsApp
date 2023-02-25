// Naziya = 'naziya'
import './App.css';
import './components/index'
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import Footer from './components/Footer';
import About from './components/About'
import Loading from './components/Loading'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export function themechange(){
    let r = document.querySelector(':root')
    let rs = getComputedStyle(document.body)
    let themeimage = document.getElementById('themeimg')
    if (rs.getPropertyValue('--bg-color') === 'white') {
        r.style.setProperty('--button-shadow', '#1d1d1d')
        r.style.setProperty('--cardshadow-color2', '#9f9f9f')
        r.style.setProperty('--card-border-color', '#ffffff2c')
        r.style.setProperty('--cardshadow-color', '#141414')
        r.style.setProperty('--logo-color', '#e1e1e1')
        r.style.setProperty('--blend-mode', 'color-dodge')
        r.style.setProperty('--bg-color', 'black')
        r.style.setProperty('--fg-color', 'white')
        themeimage.src = 'assets/icon/sun.png';
        themeimage.classList.add('themeimage');
        themeimage.classList.remove('themeimage2');
        
    } else {
        r.style.setProperty('--card-border-color', '#0000002c')
        r.style.setProperty('--button-shadow', 'white')
        r.style.setProperty('--cardshadow-color2', 'white')
        r.style.setProperty('--cardshadow-color', 'white')
        r.style.setProperty('--logo-color', '#181818')
        r.style.setProperty('--blend-mode', 'color-burn')
        r.style.setProperty('--bg-color', 'white')
        r.style.setProperty('--fg-color', 'black')
        themeimage.src = 'assets/icon/moon.png';
        themeimage.classList.add('themeimage2');
        themeimage.classList.remove('themeimage');
    }
}

export default class App extends Component {

    apiKey = process.env.REACT_APP_NEWS_API
    render() {
        return (
            <>
                <Router>
                    <Loading/>
                    <Navbar themechange={themechange} />
                    <Routes>
                        <Route exact path="/" element={<News key='general' apiKey={this.apiKey} category='general'/>} />
                        <Route exact path="/Home" element={<News key='home' apiKey={this.apiKey} category='general'/>} />
                        <Route exact path="/Business" element={<News key='business' apiKey={this.apiKey} category='business' />} />
                        <Route exact path="/Science" element={<News key='science' apiKey={this.apiKey} category='science' />} />
                        <Route exact path="/Health" element={<News key='health' apiKey={this.apiKey} category='health' />} />
                        <Route exact path="/Sports" element={<News key='sports' apiKey={this.apiKey} category='sports' />} />
                        <Route exact path="/Technology" element={<News key='technology' apiKey={this.apiKey} category='technology' />} />
                        <Route exact path="/Entertainment" element={<News key='entertainment' apiKey={this.apiKey} category='entertainment' />} />
                        <Route exact path="/About" element={<About key='about'/>} />
                    </Routes>
                    <Footer />
                </Router>
            </>
        )
    }
}
