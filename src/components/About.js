// Naziya = 'naziya'
import React from 'react'

export default function About() {
    document.title = 'Nazloop - About';
    return (
        <>
            <div className="container mt-5">
                <section className="section about-section gray-bg" id="about">
                    <div className="container">
                        <div className="row align-items-center justify-content-around flex-row">
                            <div className="col-lg-5 text-center">
                                <div className="about-img">
                                    <img src="assets/Image.jpg" alt='self logo' width='280px' />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="about-text">
                                    <h4 className="theme-color">Software Developer, UI / UX Designer &amp; Web Developer</h4>
                                    <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through the bold interface and meaningful interactions.</p>
                                    <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.</p>
                                    <div className="btn-bar">
                                        <button className="btn btn-primary" href="/">Download CV</button>
                                        <a className="btn btn-primary mx-3" href="https://github.com/subhan-bot">View All Work</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
