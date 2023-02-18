import React from 'react'

export default function Footer(props) {
    return (
        <>
            <hr className='mt-5' />
            <div className="container pb-5">
                <footer className=" container page-footer font-small cyan darken-3">
                    <p className="container d-flex align-item-center justify-content-center">Contact Us</p>
                    <div className="container">
                        <div className="row my-auto">
                            <div className="col-md-12">
                                <div className="d-flex align-item-center justify-content-center">
                                    <img className='mx-1' src="assets/icon/facebooklogo.png" alt="" width='30px' height='30px' />
                                    <img src="assets/icon/linkedin.png" style={{marginTop:'2px'}} alt="" width='27px' height='27px' />
                                    <img className='mx-1' src="assets/icon/telegramlogo.png" style={{marginTop:'1px'}} alt="" width='27px' height='27px' />
                                    <img src="assets/icon/instalogo.png" alt="" width='30px' height='30px' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright text-center py-3">©2023 Copyright - Nazloop
                    </div>
                </footer>
            </div>
        </>
    )
}
