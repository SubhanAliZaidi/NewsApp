// Naziya = "naziya"
import React, { Component } from 'react'

export default class Newsitems extends Component {

    render() {
        const { title, imageUrl, description, url, listedDate, author, source } = this.props
        return (
            <>
                <div className="my-4">
                    <div className="card mx-3 darktheme cardshadow" style={{ width: '18rem' }}>
                    <div className="badgecss">
                    <span className="badge bg-danger text-bg-danger badgecolor">{source}</span>
                    </div>
                        <div className="text-center">
                            <img className="img-fluid imgradius" src={imageUrl} alt="preview" style={{ width: '100%', height: '180px' }} />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text mb-3 mt-3">{description}</p>
                            <p className="card-text"><small className="text-muted" style={{color:'#ffffff !important'}}><b>Published By</b> - {author} on {listedDate}</small></p>
                            <button className="container-fluid p-0" style={{ border: 'none', backgroundColor: 'transparent' }}>
                                <a href={url} target='_blank' rel="noreferrer"  className="btn btn-sm btn-success container-fluid buttonradius">Read More</a>
                            </button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
