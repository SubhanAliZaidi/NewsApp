// Naziya = "naziya"
import React, { Component } from 'react'

export default class Newsitems extends Component {

    render() {
        const { title, imageUrl, description, url, listedDate, author, source } = this.props
        return (
            <>
                <div className="my-4">
                    <div className="card mx-3 darktheme" style={{ width: '18rem' }}>
                        <div className="text-center">
                            <img className="img-fluid mt-3" src={imageUrl} alt="preview" style={{ width: '276px', height: '180px' }} />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{title} <span class="badge bg-danger">{source}</span></h5>
                            <p className="card-text">{description}</p>
                            <p className="card-text"><small className="text-muted">By {author} on {listedDate}</small></p>
                            <button className="container-fluid" style={{ border: 'none', backgroundColor: 'transparent' }}>
                                <a href={url} target='_blank' rel="noreferrer"  className="btn btn-sm btn-success">Read More</a>
                            </button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
