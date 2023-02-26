// Naziya = "naziya"
import React, { Component } from 'react';
import Newsitems from './Newsitems';
import image from './Image/img.jpg';
import PropTypes from 'prop-types';
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';

export default class News extends Component {

    static defaultProps = {
        category: 'general',
        country: 'in',
        pageSize: 20,
    };

    static propsTypes = {
        category: PropTypes.string,
        country: PropTypes.string,
        pageSize: PropTypes.number,
    };

    capitalize = (Naziya) => {
        return Naziya.charAt(0).toUpperCase() + Naziya.slice(1);
    };

    constructor(props) {
        super(props);
        console.log('hello Naziya');
        this.state = {
            articles: [],
            loading: false,
            pagenumber: 1,
            array: [],
            totalResults: 0,
        };
        document.title = `${this.capitalize(this.props.category) === 'General' ? 'Home' : this.capitalize(this.props.category)} - Nazloop`;
    }

    updatePage = async (Naziya) => {
        let topLoadingBar = document.querySelector('.topLoadingBar');
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${Naziya}&pageSize=${this.props.pageSize}`;
        topLoadingBar.style.display = 'block';
        topLoadingBar.style.width = '10%';
        this.setState({ loading: true });
        let data = await fetch(url);
        topLoadingBar.style.width = '50%';
        let parsedData = await data.json();
        topLoadingBar.style.width = '70%';
        this.setState({ articles: parsedData.articles, pagenumber: Naziya, loading: false });
        topLoadingBar.style.width = '100%';
        setTimeout(() => {
            topLoadingBar.style.display = 'none';
            topLoadingBar.style.width = '0%';
        }, 1500);
    };

    async componentDidMount() {
        let topLoadingBar = document.querySelector('.topLoadingBar');
        topLoadingBar.style.display = 'none';
        topLoadingBar.style.width = '0%';
        if (topLoadingBar.checkVisibility() === false) {
            topLoadingBar.style.display = 'block';
            topLoadingBar.style.width = '0%';
        }
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.pagenumber}&pageSize=${this.props.pageSize}`;
        topLoadingBar.style.width = '10%';
        this.setState({ loading: true });
        let data = await fetch(url);
        topLoadingBar.style.width = '50%';
        let parsedData = await data.json();
        topLoadingBar.style.width = '70%';
        let arr = [];
        for (let i = 1; i < Math.ceil(this.state.totalResults / this.props.pageSize) + 1; i++) {
            arr.push(i);
        }
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false, array: arr });
        topLoadingBar.style.width = '100%';
        setTimeout(() => {
            topLoadingBar.style.display = 'none';
            topLoadingBar.style.width = '0%';
        }, 1500);
    }

    // async componentDidUpdate() {
    //     let bdy = document.querySelector('#root');
    //     let heig = bdy.offsetHeight;
    //     let blurfg = document.querySelector('.blurfg');
    //     blurfg.style.height = `${heig}px`;
    // }

    previousButton = async () => {
        this.updatePage(this.state.pageNumber - 1);
    };

    nextButton = async () => {
        this.updatePage(this.state.pagenumber + 1);
    };

    pageButton = async (pageNumber) => {
        this.updatePage(pageNumber);
    };

    fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.pagenumber+1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: this.state.articles.concat(parsedData.articles) , pagenumber:this.state.pagenumber+1});
    };

    render() {
        return (
            <>
                <h1 className='text-center mt-5'>Top Headlines!</h1>
                <h3 className='text-center'>What's Happening In The {this.capitalize(this.props.category) === 'General' ? '' : this.capitalize(this.props.category)} World ?</h3>
                <h6 className='text-center mb-4'>- {this.state.totalResults ? this.state.totalResults : '0'} Results Found</h6>
                {this.state.loading && <Spinner />}

                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    next={this.fetchMoreData}
                    loader = {<Spinner/>}
                >
                    {<div className="container-fluid" style={{ maxWidth: '1000px' }}>
                        <div className="row">
                            {this.state.articles.map((e) => {
                                return <>
                                    <div className='mx-auto' key={e.url}>
                                        <Newsitems title={e.title !== null ? e.title.slice(0, 45) : 'No Title Available'} description={e.description ? e.description.slice(0, 80) : 'No Description Available'} imageUrl={e.urlToImage ? e.urlToImage : image} url={e.url} listedDate={new Date(e.publishedAt).toGMTString()} author={e.author ? e.author : 'Unknown'} source={e.source.name ? e.source.name : 'Unknown'} />
                                    </div>
                                </>;
                            })}
                        </div>
                    </div>}
                </InfiniteScroll>

                <div className="container-fluid text-center mx-auto my-3">
                    <div className="btn-group">
                        <button disabled={this.state.pagenumber === 1} className="btn btn-secondary" onClick={this.previousButton}>Previous</button>

                        {this.state.array.map((elements) => {
                            return <>
                                <button key={elements} className="btn btn-primary" onClick={() => this.pageButton(elements)}>{elements}</button>
                            </>;
                        })}

                        <button disabled={this.state.pagenumber === Math.ceil(this.state.totalResults / 15 || this.state.totalResults !== 0)} type="button" className="btn btn-secondary" onClick={this.nextButton}>Next</button>
                    </div>
                </div>
            </>
        );
    }
}
