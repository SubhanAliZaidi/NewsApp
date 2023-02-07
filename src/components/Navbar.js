// Naziya = 'naziya'
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        const { title, about } = this.props;
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" style={{ fontSize: '30px', fontWeight: '500' }} href="/">{title}</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" style={{ fontSize: '18px' }} to="/">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={{ fontSize: '18px' }} href="/">Business</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={{ fontSize: '18px' }} href="/">Health</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={{ fontSize: '18px' }} href="/">Sports</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={{ fontSize: '18px' }} href="/">Bollywood</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={{ fontSize: '18px' }} href="/">{about}</a>
                            </li>
                        </ul>
                        <button className="mr-2" style={{backgroundColor:'transparent',border:'none'}}>
                            <img src="assets/icon/sun.png" alt="theme icon" style={{width:'25px'}}/>
                        </button>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </>
        )
    }
}

Navbar.defaultProps = {
    title: 'Nazloop',
    about: 'About Me'
}

