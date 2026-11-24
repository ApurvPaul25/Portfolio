
import "./contactme.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";


export default function ContactMe(){
    const formRef = useRef(null);
    const [status, setStatus] = useState("");

    const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const sendEmail = async (e) => {
    e.preventDefault()
    setStatus("Sending...")

    try {
        await emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            formRef.current,
            {
                publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
            }
        )
        setStatus("Message sent succesfully!")
        formRef.current.reset()
    } catch (error) {
        console.error("Email error:", error)
        setStatus("Unable to send ur msg. Pls try again.")
    }
  }

    return(
        <div className="footer">
            <div className="contact-footer">
                <div className="footer-left">
                    <h2 onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>KYDEN</h2>
                    <p>Apurva Paul</p>
                    <p>Pune<br/>Maharastra, India</p>
                    <p>Role: Software Engineer</p>
                    <div className="social-icons">
                    <a href="https://github.com/ApurvPaul25" target="_blank" rel="noreferrer" aria-label="GitHub">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="#" target="_blank" rel="noreferrer" aria-label="Instagram">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://www.linkedin.com/in/apurva-paul-1402851b3/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    </div>
                    <button className="back-to-top" onClick={scrollToTop}>
                    Back to Top
                    </button>
                </div>

                <div className="footer-right">
                    <form ref={formRef} onSubmit={sendEmail}>
                        <h3>Let's work together.</h3>
                        <p>Have a project or an interesting idea? Let's talk.</p>
                        <input
                        type="text"
                        name="from_name"
                        placeholder="Your Name"
                        required
                        />
                        <input
                        type="email"
                        name="from_email"
                        placeholder="Your Email"
                        required
                        />
                        <textarea
                        name="message"
                        placeholder="Tell me about your project..."
                        required
                        />
                        <button type="submit" disabled={status === "Sending..."}>
                        {status === "Sending..." ? "Sending..." : "Send Message ↗"}
                        </button>
                        {status && (
                        <p className="form-status" role="status">
                            {status}
                        </p>
                        )}
                    </form>

                </div>
            </div>
            
        </div>
    )
    
}