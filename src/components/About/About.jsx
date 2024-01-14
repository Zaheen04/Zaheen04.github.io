import React from 'react'
import "./About.css"

function About() {
    return (
        <div id='about' className='about section'>
            <h1>About Me</h1>
            <p id="user-detail-intro">
                A Full Stack Web Developer with expertise in <b>MERN</b> Stack. I've completed a comprehensive <b>Full Stack Web Development Course</b> at Masai. My tech toolkit includes <b>React, Redux, JAVA, Node, Express,HTML, CSS, JavaScript, and Git </b> etc. I'm passionate about creating efficient, elegant code and have experience in both front-end and back-end development. I thrive on problem-solving and love collaborating with teams to build innovative solutions. Let's connect and turn ideas into reality through technology. You can reach me at <a href="#contact" className='contactMe'>Contact Me</a>.
            </p>
        </div>
    )
}

export default About;