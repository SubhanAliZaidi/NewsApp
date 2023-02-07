import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        const {title,about} = this.props;
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" style={{fontSize:'30px',fontWeight:'500'}} href="/">{title}</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link"  style={{fontSize:'20px'}} href="/">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"   style={{fontSize:'20px'}} href="/">{about}</a>
                            </li>
                        </ul>
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
    title:'Nazloop',
    about:'About Me'
}

