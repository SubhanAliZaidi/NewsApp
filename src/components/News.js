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
        }
    }

    // async componentDidMount() {
    //     const url = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=43889aab3ab7429296b748a62e431f32';
    //     let data = await fetch(url);
    //     let parsedData = await data.json();
    //     this.setState({ articles: parsedData.articles })
    // }

    render() {
        return (
            <>
                {/* <div className="container-fluid my-3">
                    <h1 className='text-center'>Top Headlines</h1>
                    <h3 className='text-center'>What's Happening In The World ?</h3>
                    <div className="row">
                        {this.state.articles.map((e) => {
                            return <>
                                <div className='mx-auto' key={e.url}>
                                    <Newsitems title={e.title.slice(0, 45)} description={e.description.slice(0, 80)} imageUrl={e.urlToImage} url={e.url} />
                                    <Newsitems title={e.title !== null ? e.title.slice(0, 45) : 'No Title Available'} description={e.description.slice(0, 80)} imageUrl={e.urlToImage} url={e.url} />
                                </div>
                            </>
                        })}
                    </div>
                </div> */}

                <Newsitems />

                <div className="container-fluid text-center mx-auto my-3">
                    <div class="btn-group" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-secondary rounded mr-2">Previous</button>
                        <button type="button" class="btn btn-secondary rounded ml-2">Next</button>
                    </div>
                </div>
            </>
        )
    }
}
