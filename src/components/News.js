import React, { Component } from 'react'
import Newsitems from './Newsitems'

export default class News extends Component {
    render() {
        const articles = {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Simone McCarthy, Nectar Gan",
            "title": "'Total miscalculation': China goes into crisis management mode on balloon fallout - CNN",
            "description": "As the new year got underway in China, hopes appeared to be running high that an easing of tensions with the United States could unfold in the months ahead.",
            "url": "https://www.cnn.com/2023/02/06/china/china-response-suspected-spy-balloon-intl-hnk/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230207103140-02-spy-balloon-recovery.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-02-07T16:28:00Z",
            "content": "As the new year got underway in China, hopes appeared to be running high that an easing of tensions with the United States could unfold in the months ahead.\r\nChinas Foreign Ministry expressed as much… [+7624 chars]"
        }


        console.log(articles['urlToImage'])
        console.log(articles['url'])

        return (
            <>
                <div className="container my-4 text-center">
                    <h2>What's Happening In The World ?</h2>

                    <Newsitems imageUrl="https://www.reuters.com/resizer/gQ-c_qw_XLyzZhTzByQgZoQyJa4=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/PIXIKH5C3NLL5HBCMLC35DXY4U.jpg" />
                    <Newsitems title='this is second new' />
                    <Newsitems title='this is third new' />
                </div>
            </>
        )
    }
}
