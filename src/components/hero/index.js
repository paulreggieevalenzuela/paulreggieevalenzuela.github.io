import React from 'react';

const Hero = () => {
    return (
        <section className="hero">
            <h1 className="hero__title">Hello, I'm</h1>
            <h1 className="hero__title">Paul Reggie Valenzuela</h1>

            <div className="hero__content">
                <div className="hero__inner-content">
                    <p className="paragraph paragraph--bold">Front End Developer</p>
                    <p className="paragraph paragraph--bold">Web Consultant</p>
                    <p className="paragraph paragraph--bold">Car Enthusiast</p>
                    <p className="paragraph paragraph--bold">Stock Trader</p>
                </div>
                <div className="hero__inner-content">
                    <p className="paragraph">
                        A web developer based in Manila, Philippines and passionate about designing and developing clean, minimal and modern applications.
                    </p>
                    <p className="paragraph paragraph--light">
                        I specialize in Front End Development using modern technologies and its complementing technologies to develop from scratch to deployment web and mobile apps. A passionate, keen to details, flexible and self motivated guy. Most of my skills and knowledge are self taught.
                    </p>
                    <p className="paragraph paragraph--light">
                    Aside in this field, I like cars, doing some backpack adventures and do stock trading too. While doing this thinking how I will improve as an individual and daily lives.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Hero;