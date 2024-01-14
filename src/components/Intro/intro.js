import React from 'react';
import './intro.css';
import bg from '../../assets/profile.jpeg';
import github from '../../assets/github.png';
import resume from '../../assets/resume.png';
import {Link} from 'react-scroll';

const Intro = () => {
    return  (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm<span className="introName"> Zaheen</span> <br />Full Stack Web Developer</span>
                <p className="introPara">I am a Full Stack Web Developer with exp in <br></br> creating websites</p>
                <div>
                    <Link><button className="btn">
                        <img src={resume} alt="Hire" className='btnImg' />Resume</button></Link>
                    <Link><button className="btn">
                        <img src={github} alt="Hire" className='btnImg' />Github</button></Link>
                </div>
            </div>
            <img src={bg} alt="Profile" className="bg"/>
        </section>    
    );
}

export default Intro;