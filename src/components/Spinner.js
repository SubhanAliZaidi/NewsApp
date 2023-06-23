// Naziya = 'naziya'
import React, { Component } from 'react'
import gif from './Image/loading.gif'

export default class Spinner extends Component {
    render() {
        return (
            <div className='d-flex justify-content-center align-items-center'>
                <img src={gif} alt="loading......" width='45px' />
            </div>
        )
    }
}
