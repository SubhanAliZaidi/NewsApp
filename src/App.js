// Naziya = 'naziya'
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import Footer from './components/Footer';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

export default class App extends Component {
    render() {
        return (
            <>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route exact path="/" element={<News />} />
                        <Route exact path="/Home" element={<News />} />
                    </Routes>
                    <Footer/>
                </Router>
            </>
        )
    }
}
