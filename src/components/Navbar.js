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
                                <Link className="nav-link testing darktheme" style={{ fontSize: '18px' }} to="/"><span>Home</span><span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link testing1 darktheme" style={{ fontSize: '18px' }} to="/Business"><span>Business</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link testing darktheme" style={{ fontSize: '18px' }} to="/Science"><span>Science</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link testing1 darktheme" style={{ fontSize: '18px' }} to="/Health"><span>Health</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link testing darktheme" style={{ fontSize: '18px' }} to="/Sports"><span>Sports</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link testing1 darktheme" style={{ fontSize: '18px' }} to="/Technology"><span>Technology</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link testing darktheme" style={{ fontSize: '18px' }} to="/Entertainment"><span>Entertainment</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link testing darktheme" style={{ fontSize: '18px' }} to="/About"><span>{about}</span></Link>
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

