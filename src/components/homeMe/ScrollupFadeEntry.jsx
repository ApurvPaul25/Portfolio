import './scrollupFadeEntry.css'
import avatar from "../../assets/avatar.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, 
        faReact, 
        faLinkedin, 
        faInstagram, 
        faDocker, 
        faHtml5, 
        faCss3, 
        faTailwindCss, 
        faNodeJs,
        faPostgresql,
        faAws,
        faJenkins,
        faVuejs
    } 
    from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import Code from '../../rough/Code';
import GoldCoinLoader from '../CoinLoader/GoldCoinLoader';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import { useRef } from "react";
import resume from "../../assets/Resume_Apurva_Paul.pdf";

gsap.registerPlugin(ScrollTrigger, useGSAP);


export default function ScrollUpFadeEntry(){

    const transitionRef = useRef(null)
    const profileRef = useRef(null)
    const skillsRef = useRef(null)

    useGSAP(() => {
        const transition = transitionRef.current
        const profile = profileRef.current
        const skills = skillsRef.current

        if (!profile || !skills || !transition) return;

        gsap.set(profile, {
            width: "100%",
            xPercent: 0,
        })
        gsap.set(skills, {
            width: "60%",
            xPercent: 100,
            pointerEvents: "auto",
        })

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: transition,
                start: "top top",
                end: "+=250%",
                scrub: 1.5,
                pin: true,

                onUpdate: (self) => {
                    profile.classList.toggle(
                        "compact",
                        self.progress >= 0.5
                    )
                }
            }, 
            
        })

        tl.to(profile, {
            width: "40%",
            ease: "power2.inOut"
        }, 0)
        tl.to(skills, {
            xPercent: 0,
            ease: "power2.inOut"
        }, 0)
    }, {scope: transitionRef})

    return(

        <div className="main">
            <div className="transition-wrapper" ref={transitionRef}>
                <div className="profile-section" ref={profileRef}>
                    
                        <div className="left-column">
                            <div className="heading">
                                <span className="greeting">Hi, I'm</span> 
                                <h1 className="name">Apurva</h1>
                            </div>
                            <h2 className="title">Backend focused fullstack engineer</h2>
                            
                            <div className="availability">
                                <span className="location">Based in Pune, India ||</span>
                                <span className="status">Available for projects</span>
                            </div>
                            
                            <p className="description">
                                Building and engineering scalable web applications with{' '}
                                <a href="https://react.dev/" className="highlight">React</a>,{' '}
                                <a href="https://vite.dev/" className="highlight">Vite.js</a>,{' '}
                                and <a href="https://www.typescriptlang.org/" className="highlight">TypeScript</a>,{' '}
                                while developing robust backend systems using{' '}
                                <a href="https://nodejs.org/en" className="highlight">Node.js</a>,{' '}
                                <a href="https://expressjs.com/" className="highlight">Express.js</a>,{' '}
                                and <a href="https://www.mongodb.com/" className="highlight">MongoDB</a>{' '}
                                focusing on intuitive design, performance, security, and efficient data management.
                            </p>
                            
                            <div className="actions">
                                <button className="btn-resume"><a href={resume} target="_blank" rel="noreferrer">Resume</a></button>
                                <button className="btn-chat" id="chat" onClick={() => document.getElementById("page-5")?.scrollIntoView({ behavior: "smooth" })}>Let's Chat</button>
                            </div>
                        </div>

                        <div className="right-column">
                            <div className="image-container">
                                <img src={avatar} alt="profileRef" className="avatar-img" />
                                <GoldCoinLoader />
                            </div>
                            <div className="social-links">
                                <a href="#" target="_blank" rel="noreferrer" aria-label="Instagram">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                                <a href="https://www.linkedin.com/in/apurva-paul-1402851b3/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                                <a href="https://github.com/ApurvPaul25" target="_blank" rel="noreferrer" aria-label="GitHub">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                            </div>
                        </div>

                </div>

                <div className="skills" ref={skillsRef}>
                        <div className="skills-header">
                            <div className="skills-heading">
                                <span className="section-number">01 /</span>
                                <h1 className="skills-title-text">TECHNOLOGY</h1>
                                <p>The tools I use to build interfaces, products and backend systems.</p>
                            </div>

                            <div className="git">
                                <Code/>
                            </div>
                            
                        </div>
                        
                        <div className="skills-container">
                            <div className="skill-category">
                                <div className="category-top">
                                    <span className="category-number">01</span>
                                    <h2>Backend</h2>
                                </div>

                                <div className="tools">
                                    <span><FontAwesomeIcon icon={faNodeJs} />Node.js</span>
                                    <span>Express.js</span>
                                    <span>Spring Boot</span>
                                    <span><FontAwesomeIcon icon={faDatabase} />SQL</span>
                                </div>
                            </div>

                            <div className="skill-category">
                                <div className="category-top">
                                    <span className="category-number">02</span>
                                    <h2>Frontend</h2>
                                </div>

                                <div className="tools">
                                    <span><FontAwesomeIcon icon={faHtml5} />HTML5</span>
                                    <span><FontAwesomeIcon icon={faCss3} />CSS</span>
                                    <span>JavaScript</span>
                                    <span><FontAwesomeIcon icon={faReact} />React</span>
                                    <span><FontAwesomeIcon icon={faVuejs} />Vue</span>
                                    <span>Tailwind</span>
                                </div>
                            </div>

                            <div className="skill-category">
                                <div className="category-top">
                                    <span className="category-number">03</span>
                                    <h2>DevOps & Tools</h2>
                                </div>

                                <div className="tools">
                                    <span><FontAwesomeIcon icon={faDocker} />Docker</span>
                                    <span>Postman</span>
                                    <span><FontAwesomeIcon icon={faAws} /> AWS</span>
                                    <span><FontAwesomeIcon icon={faGithub} />GitHub</span>
                                    <span><FontAwesomeIcon icon={faJenkins} />Jenkins</span>
                                    <span>Vercel</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
        </div>
    )
}
