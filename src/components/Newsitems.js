// Naziya = "naziya"
import React, { Component } from 'react'

export default class Newsitems extends Component {

    render() {
        const { title, imageUrl, description, url } = this.props
        return (
            <>
                <div className="my-4">
                    <div className="card mx-3" style={{ width: '18rem' }}>
                        <div className="text-center">
                            <img className="img-fluid mt-3" src={imageUrl} alt="preview" style={{width:'276px', height:'180px'}} />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <a href={url} className="btn btn-sm btn-success">Read More</a>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
