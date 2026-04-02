import React from 'react'
import './Footer.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {

   const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <footer className="footer">
      <div className="footer-left">
        <h2 onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>MyStore</h2>
        <p>123, Example Street<br/>City, Country</p>
        <p>Email: info@mystore.com</p>
        <p>Phone: +123 456 7890</p>
        <div className="social-icons">
          <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
        <button className="back-to-top" onClick={scrollToTop}>
          Back to Top
        </button>
      </div>

      <div className="footer-right">
        <form>
          <h3>Contact Me</h3>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </footer>
  )
}

export default Footer
