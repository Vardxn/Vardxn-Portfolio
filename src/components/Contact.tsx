import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
                <a href="mailto:vardan2701@gmail.com" data-cursor="disable">
                  vardan2701@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
                <a href="tel:+918279696707" data-cursor="disable">
                  +91 8279 696 707
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
                href="https://github.com/Vardxn"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
                href="https://linkedin.com/in/vardxn"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
                href="https://www.instagram.com/vardxnn/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
                Designed and Developed <br /> by <span>Vardan Pal</span>
            </h2>
            <h5>
                <MdCopyright /> {currentYear}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
