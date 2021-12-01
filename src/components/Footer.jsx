import { Link } from "gatsby";
import React from "react";
import fb from "../assets/images/icon/fb.png";
import Twitter from "../assets/images/icon/Twitter.png";
import Linkedin from "../assets/images/icon/Linkedin.png";
import mail from "../assets/images/icon/mail.png";

const Footer = () => {
  return (
    <footer class="footer-section">
      <div class="container">
        <div class="row my-5">
          <div class="col-lg-3">
            <h3>About Us</h3>
            <p className="footer-about">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum,
              ac, leo adipiscing lorem ultrices eget gravida lorem. Sed rutrum
              eget nisl viverra tincidunt
            </p>
          </div>
          <div class="col-lg-3">
            <h3>Follow Us</h3>
            <div className="follow-us">
              <Link to="/" className="mr-3"><img src={fb} /></Link>
              <Link to="/" className="mr-3"><img src={Twitter} /></Link>
              <Link to="/" className="mr-3"><img src={Linkedin} /></Link>
            </div>
          </div>
          <div class="col-lg-3">
            <h3>Resource</h3>
            <div className="resources">
              <Link to="/">Case Studi</Link>
              <Link to="/">Process</Link>
              <Link to="/">Capabilities</Link>
              <Link to="/">Contact</Link>
              <Link to="/">Request a Quote</Link>
              <Link to="/">Careers</Link>
              <Link to="/">Private Policy</Link>
              <Link to="/">Terms of Conditions</Link>
            </div>
          </div>
          <div class="col-lg-3">
            <h3>Get In Touch</h3>
            <div className="info">
              <img src={mail} />
              <span>info@loremipsum.com</span>
            </div>
          </div>
        </div>
        <hr className="footer-hr" />
        <div className="copyright">&copy; 2021 Legit Bytes</div>
      </div>
    </footer>
  );
};

export default Footer;
