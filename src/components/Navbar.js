// Naziya = 'naziya'
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

    render() {
        const { title, about, themechange } = this.props;

        return (
            <>
                <nav className="navbar navbar-expand-lg darktheme mt-0">
                    <Link className="navbar-brand darktheme" style={{ fontSize: '35px', fontWeight: '500',color:'transparent' }} to="/">{title}</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto darktheme">
                            <li className="nav-item active">
                                <Link className="nav-link darktheme" style={{ fontSize: '18px' }} to="/">Home<span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link darktheme" style={{ fontSize: '18px' }} to="/Business">Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link darktheme" style={{ fontSize: '18px' }} to="/Science">Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link darktheme" style={{ fontSize: '18px' }} to="/Health">Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link darktheme" style={{ fontSize: '18px' }} to="/Sports">Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link darktheme" style={{ fontSize: '18px' }} to="/Technology">Technology</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link darktheme" style={{ fontSize: '18px' }} to="/Entertainment">Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link darktheme" style={{ fontSize: '18px' }} to="/About">{about}</Link>
                            </li>
                        </ul>
                    </div>
                    <div style={{width:'115px'}} className='buttoncss'>
                    <button className="btn mr-2 buttoncss" onClick={themechange}>
                        <img src="assets/icon/sun.png" alt="Icon" id='themeimg' style={{ width: '25px' }} />
                    </button>
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

