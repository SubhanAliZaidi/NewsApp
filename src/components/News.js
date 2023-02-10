// Naziya = "naziya"
import React, { Component } from 'react'
import Newsitems from './Newsitems'

export default class News extends Component {
    constructor() {
        super();
        console.log('hello Naziya')
        this.state = {
            articles: [],
            loading: false,
            totalResults: '',
        }
    }

    async componentDidMount() {
        const url = `https://newsapi.org/v2/everything?q=Apple&apiKey=43889aab3ab7429296b748a62e431f32&page=${this.state.pagenumber}&pageSize=15`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults })
    }


    render() {
        const previousButton = () => {
            console.log(this.state.totalResults)

        }
        const nextButton = () => {
            console.log('next button was clicked')
        }
        return (
            <>
                {<div className="container-fluid my-3" style={{ maxWidth: '1000px' }}>
                    <h1 className='text-center'>Top Headlines</h1>
                    <h3 className='text-center'>What's Happening In The World ?</h3>
                    <div className="row">
                        {this.state.articles.map((e) => {
                            return <>
                                <div className='mx-auto' key={e.url}>
                                    <Newsitems title={e.title !== null ? e.title.slice(0, 45) : 'No Title Available'} description={e.description.slice(0, 80)} imageUrl={e.urlToImage} url={e.url} />
                                </div>
                            </>
                        })}
                    </div>
                </div>}

                <div className="container-fluid text-center mx-auto my-3">
                    <div className="btn-group">
                        <button className="btn btn-secondary " onClick={previousButton}>Previous</button>

                        <button className="btn btn-primary">1</button>

                        <button type="button" className="btn btn-secondary" onClick={nextButton}>Next</button>
                    </div>
                </div>
            </>
        )
    }
}
