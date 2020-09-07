import React from 'react';

// import HTML from 'assets/images/icons8-html-5-50.png';
// import CSS from 'assets/images/icons8-css3-50.png';
// import JS from 'assets/images/icons8-javascript-50.png';
// import NODEJS from 'assets/images/icons8-nodejs-50.png';
// import REACT from 'assets/images/icons8-react-50.png';
// import SASS from 'assets/images/icons8-sass-50.png';

const REACT = 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png';
const JS = 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png';
const HTML = 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png';
const CSS = 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png';
const NODEJS = 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png';
const SASS = 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sass/sass.png';
const ANGULAR = 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/angular/angular.png';
const VUE = 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/vue/vue.png';

const TechnicalSkills = () => {
    return (
        <section className="technical-skills">
            <div className="technical__description">
                <h3 className="title">Technical Skills</h3>
                <p className="paragraph">
                    Becoming better everyday keeps me going. Continuous learning to broaden my knowledge and sharpen my 
                    skill to the thingss that needed to be done. And to share the knowledge and showcase it to the given task/project(s).
                    And to choose wisely for the right stack that's going to be used.
                </p>
                <p className="paragraph">
                    Technologies I work with consist of Html5, Css3, Javascript, ReactJs, NodeJs, Redux, MobX, Firebase, Npm, 
                    Sass, Styled Components, Gulp, Gsap, MaterialUI, Git and Github.
                </p>
            </div>
            <div className="technical__box">
                <img src={HTML} alt="HTML" />
                <img src={CSS} alt="CSS" />
                <img src={JS} alt="JS" />
                <img src={NODEJS} alt="NODEJS" />
                <img src={REACT} alt="REACT" />
                <img src={SASS} alt="SASS" />
            </div>
        </section>
    )
}

export default TechnicalSkills;