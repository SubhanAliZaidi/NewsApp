import React, { Component } from 'react'

export default class Newsitems extends Component {
    render() {
        const { title, imageUrl } = this.props
        return (
            <>
                <div className="container">
                    <div className="row my-5">
                        <div className="card col-md-4 my-2" style={{ width: '18rem' }}>
                            <img className="card-img-top" src={imageUrl} alt="preview" />
                            <div className="card-body">
                                <h5 className="card-title">{title}</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="/" className="btn btn-success">Read More</a>
                            </div>
                        </div>
                        <div className="card col-md-4 my-2" style={{ width: '18rem' }}>
                            <img className="card-img-top" src="" alt="preview" />
                            <div className="card-body">
                                <h5 className="card-title">{title}</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="/" className="btn btn-success">Read More</a>
                            </div>
                        </div>
                        <div className="card col-md-4 my-2" style={{ width: '18rem' }}>
                            <img className="card-img-top" src="" alt="preview" />
                            <div className="card-body">
                                <h5 className="card-title">{title}</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="/" className="btn btn-success">Read More</a>
                            </div>
                        </div>

                    </div>
                </div>
            </>
        )
    }
}
