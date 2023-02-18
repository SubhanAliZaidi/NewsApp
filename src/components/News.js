// Naziya = "naziya"
import React, { Component } from 'react'
import Newsitems from './Newsitems'
import image from './Image/img.jpg'
import PropTypes from 'prop-types'
import Spinner from './Spinner'

export default class News extends Component {

    static defaultProps = {
        category: 'general',
        country: 'in',
        pageSize: 15,
    }

    static propsTypes = {
        category: PropTypes.string,
        country: PropTypes.string,
        pageSize: PropTypes.number,
    }

    capitalize = (Naziya) =>{
        return Naziya.charAt(0).toUpperCase() + Naziya.slice(1)
    }
    
    constructor(props) {
        super(props);
        console.log('hello Naziya')
        this.state = {
            articles: [],
            loading: false,
            pagenumber: 1,
            array: []
        }
        document.title = `${this.capitalize(this.props.category) === 'General'?'Home':this.capitalize(this.props.category)} - Nazloop`
    }

    async componentDidMount() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=43889aab3ab7429296b748a62e431f32&page=${this.state.pagenumber}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        let arr = [];
        for (let i = 1; i < Math.ceil(this.state.totalResults / this.props.pageSize) + 1; i++) {
            arr.push(i)
        }
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false, array: arr })
    }

    previousButton = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=43889aab3ab7429296b748a62e431f32&page=${this.state.pagenumber - 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, pagenumber: this.state.pagenumber - 1, loading: false })
    }

    nextButton = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=43889aab3ab7429296b748a62e431f32&page=${this.state.pagenumber + 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, pagenumber: this.state.pagenumber + 1, loading: false })
    }

    pageButton = /*async*/ (elements) => {
        console.log(elements)
        // const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=43889aab3ab7429296b748a62e431f32&page=${pageNumber}&pageSize=${this.props.pageSize}`;
        // this.setState({ loading: true })
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // this.setState({ articles: parsedData.articles, loading: false })
    }

    render() {
        return (
            <>
                {<div className="container-fluid my-5" style={{ maxWidth: '1000px' }}>
                    <h1 className='text-center'>Top Headlines!</h1>
                    <h3 className='text-center'>What's Happening In The {this.capitalize(this.props.category) === 'General' ? '' : this.capitalize(this.props.category)} World ?</h3>
                    <h6 className='text-center mb-4'>- {this.state.totalResults ? this.state.totalResults : '0'} Results Found</h6>
                    {this.state.loading && <Spinner />}
                    <div className="row">
                        {!this.state.loading && this.state.articles.map((e) => {
                            return <>
                                <div className='mx-auto' key={e.url}>
                                    <Newsitems title={e.title !== null ? e.title.slice(0, 45) : 'No Title Available'} description={e.description ? e.description.slice(0, 80) : 'No Description Available'} imageUrl={e.urlToImage ? e.urlToImage : image} url={e.url} listedDate={new Date(e.publishedAt).toGMTString()} author={e.author ? e.author : 'Unknown'} source={e.source.name ? e.source.name : 'Unknown'} />
                                </div>
                            </>
                        })}
                    </div>
                </div>}

                <div className="container-fluid text-center mx-auto my-3">
                    <div className="btn-group">
                        <button disabled={this.state.pagenumber === 1} className="btn btn-secondary" onClick={this.previousButton}>Previous</button>

                        {this.state.array.map((elements) => {
                            return <>
                                <button className="btn btn-primary" onClick={this.pageButton(elements)}>{elements}</button>
                            </>
                        })}

                        <button disabled={this.state.pagenumber === Math.ceil(this.state.totalResults / 15 || this.state.totalResults !== 0)} type="button" className="btn btn-secondary" onClick={this.nextButton}>Next</button>
                    </div>
                </div>
            </>
        )
    }
}
