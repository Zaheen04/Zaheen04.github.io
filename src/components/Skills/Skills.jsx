import React from 'react'
import "./Skills.css";
import Github from './Github';


const skills = [
    {
        name: "React Js",
        image:
            "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
    },
    {
        name: "Redux",
        image:
            "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
    },
    {
        name: "Node Js",
        image: "https://nodejs.org/static/images/logo.svg",
    },
    {
        name: "JavaScript",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
    },
    {
        name: "Java",
        image:
            "https://www.vectorlogo.zone/logos/java/java-icon.svg",
    },
    {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
    },
    {
        name: "CSS",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
    },


    {
        name: "Selenium",
        image:
            "data:image/png;base64,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",
    },
    {
        name: "Python",
        image:
            "data:image/png;base64,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",
    },
   
];

const otherSkills = [
    {
        name: "Git",
        image:
            "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
    },
    {
        name: "Chakra Ui",
        image:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAP1BMVEVHcExTysVTycZsy9Byy9FwytFyzNGE1tVoys2n4eDZ8/Jgysv8/v5YychQycVSycZHyMI8yL44x7wwx7o0x7vTVANiAAAAFXRSTlMAF0uUzOr////////////C//+U/9EDm5HIAAABMElEQVR4AW3NCQKEIAgFUNAJy631/mcdoMK21wZ8U2jQ+V9H1P28Q3hDzyEFvanz+Irp4b4Ef/TyQzCOPjn7v1d0XH0I0vCN5/46N0NMR3Wc4vurFPKQzsbvB3CfLB9ybI0e4lOf5FYl5Eyp8QDYJWX5UFLTIbhUEt9Fc8o5B+13pTjwhaUiauB8qKVJxcNoXaXMyt0ILQ/5IpwbQa2liokeed1BPYSYTaSp1seCqSeVZF3f8grjJOq0mwP/Xy6DERauqw1KzPHsqlwLuOli1fzKAfK+srfmQ45czW20IcAiI74Z5WGV0ibTAgAokfZr5HyyVh4EtswHye8WELhps4ZXviEonNd1XufAb7n10kJz4bizW+yFA4PbaiQSur/BZX1YLLcl2zN+Qrev2RZ3if8Lnii4MfVtFwAAAABJRU5ErkJggg==",
    },
    {
        name: "Firebase",
        image: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
    },
    {
        name: "GitHub",
        image:
            "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    },
    {
        name: "Netlify",
        image:
            "https://seeklogo.com/images/N/netlify-logo-BD8F8A77E2-seeklogo.com.png",
    },
    {
        name: "Vercel",
        image:
            "https://karmanivero.us/assets/images/logo-vercel.png",
    },
    {
        name: "VS Code",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
    },
]
const ImageAnimate = {
    offscreen: { y: 0, opacity: 0 },
    onscreen: {
        y: 0,
        opacity: 1,
        viewport: { once: false, amount: 1 },
        transition: { duration: 1 },
    },

};
// console.log("first")
export default function Skills() {
    return (
        <div id='skills'

        >
            <h1 style={{ fontWeight: 500 }}>Skills</h1>
            <div id='skill_section'>
                <h2>Web development</h2>
                <div className='skills-card'

                >
                    {
                        skills.map((e) => {
                            return (<div className='skill_box' key={e.name}>
                                <img src={`${e.image}`} alt="" className="skills-card-img" />
                                <span className="skills-card-name">{e.name}</span>
                            </div>)
                        })

                    }
                </div>
                <h2>Other Skills</h2>
                <div className='skills-card'

                >
                    {
                        otherSkills.map((e) => {
                            return (<div className='skill_box' key={e.name}>
                                <img src={`${e.image}`} alt="" className="skills-card-img" />
                                <span className="skills-card-name">{e.name}</span>
                            </div>)
                        })
                    }
                </div>
            </div>
            <h1 style={{ fontWeight: 500 }}>My Github Activity</h1>
            <div className="githubConatiner">
                <div>
                    <div>
                        <a href="https://git.io/streak-stats"><img id="github-streak-stats" src="https://github-readme-streak-stats.herokuapp.com?user=Zaheen04&theme=buefy-dark&hide_border=true&background=191924&border=854CE6&ring=854CE6&currStreakNum=854CE6&sideLabels=854CE6&currStreakLabel=854CE6&stroke=854CE6" alt="GitHub Streak" /></a>
                    </div>
                    <div className='react-activity-calendar'>
                        <Github />
                    </div>
                </div>
                <div>
                    <a href="https://git.io/streak-stats"><img id="github-streak-stats" src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=Zaheen04&theme=shades_of_purple" alt="GitHub Streak" /></a>
                </div>

                <div style={{ height: "0px" }} >
                    <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Zaheen04&layout=compact&theme=dark" alt="" id="github-top-langs" style={{ height: "0px" }} />
                </div>
                <div style={{ height: "0px" }}
                >
                    <img src="https://github-readme-stats.vercel.app/api?username=Zaheen04&show_icons=true&theme=transparent" id="github-stats-card" alt="" style={{ height: "0px" }} />
                </div>
            </div>
        </div >
    )
}