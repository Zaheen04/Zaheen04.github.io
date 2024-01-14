import React from 'react';
import './intro.css';
import Typewriter from 'typewriter-effect';
import bg from '../../assets/profile.jpeg';
import resume from "../../assets/zaheenKhan.pdf"

const Intro = () => {
    const downloadHandle = () => {
        const link = document.createElement("a");
        link.download = "Zaheen-Khan-Resume.pdf";
        link.href = resume;
        link.setAttribute("class", "resume-link-2")
        link.click();

        window.open(
            "https://drive.google.com/file/d/1scoJ-ODP1r_tJwja1w5BuEolVKa0vRch/view?usp=sharing",
            "_blank"
        );
    };

    const githubHandle = () => {
        window.open(
            "https://github.com/Zaheen04",
            "_blank"
        );
    };
    return (
        <div id='home'>
            <div id='left_home'>
                <div>
                    <h1>Hi, I am</h1>
                    <h1 id="user-detail-name">Zaheen Khan</h1>
                    {/* <h3>I am a Full Stack Web Developer</h3> */}
                    <h3>
                        I am a
                        <span>
                            <Typewriter
                                options={{
                                    strings: ["Full Stack Web Developer", "MERN Stack Developer", "Backend Developer", "Fontend Developer"],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </span>
                    </h3>
                    <p> A motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things. You can reach me at <a href="#contact" className='contactMe'>Contact Me</a></p>
                    <div className='home_button'>
                        <button id="resume-button-2"
                            onClick={downloadHandle}>
                            Resume
                        </button>
                        <button onClick={githubHandle} >
                            GitHub
                        </button>
                    </div>
                </div>
            </div>
            <div id='right_home' >
                <img src={bg} alt="" className="home-img" />
            </div>
        </div>
    )
}

export default Intro;