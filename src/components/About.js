import React from 'react'

export default function About() {
    document.title = 'Nazloop - About';
    return (
        <>
            <div className="container mt-5">
                <section class="section about-section gray-bg" id="about">
                    <div class="container">
                        <div class="row align-items-center justify-content-around flex-row">
                            <div class="col-lg-5 text-center">
                                <div class="about-img">
                                    <img src="assets/Image.jpg" alt='self logo' width='280px' />
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="about-text">
                                    <h4 class="theme-color">Software Developer, UI / UX Designer &amp; Web Developer</h4>
                                    <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through the bold interface and meaningful interactions.</p>
                                    <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.</p>
                                    <div class="btn-bar">
                                        <button class="btn btn-primary" href="/">Download CV</button>
                                        <button class="btn btn-primary mx-3" href="/">View All Work</button>
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
