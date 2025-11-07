import React from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMobileScreenButton,
  faComment,
  faLaptop,
  faCloud,
  faCog,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHtml5,
  faTwitter,
  faFacebookF,
  faInstagram,
  faApple,
} from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <div className="App">
      {/* Top Header Bar */}
      <div className="top-header">
        <div className="container">
          <div className="header-info">
            <span className="header-contact">
              <FontAwesomeIcon icon={faPhone} /> Phone 010-020-0340
            </span>
            <span className="header-contact">
              <FontAwesomeIcon icon={faEnvelope} /> Email writershaven@gmail.com
            </span>
          </div>
          <div className="header-social">
            <span>Meet us on</span>
            <div className="social-icons">
              <FontAwesomeIcon icon={faFacebookF} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faApple} />
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="main-header">
        <div className="container">
          <div className="logo">
            <h1>The Writers' Haven</h1>
          </div>
          <nav className="main-nav">
            <ul>
              <li>
                <a href="#home" className="active">
                  HOME
                </a>
              </li>
              <li>
                <a href="#about">ABOUT</a>
              </li>
              <li>
                <a href="#team">TEAM</a>
              </li>
              <li>
                <a href="#service">SERVICE</a>
              </li>
              <li>
                <a href="#portfolio">PORTFOLIO</a>
              </li>
              <li>
                <a href="#contact">CONTACT</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <h1>Writing the Future, One</h1>
          <h1>
            <span className="highlight">Word</span> at a Time
          </h1>
          <p>Expressing unique thoughts a</p>
          <button className="cta-button">GET STARTED</button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <h2>
            WE ARE <span className="highlight">The Writers' Haven</span>
          </h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <FontAwesomeIcon icon={faMobileScreenButton} />
              </div>
              <h3>FULLY RESPONSIVE</h3>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <FontAwesomeIcon icon={faComment} />
              </div>
              <h3>FREE SUPPORT</h3>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <FontAwesomeIcon icon={faHtml5} />
              </div>
              <h3>Grammar Support</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="team-section">
        <div className="container">
          <h2>
            <span className="highlight">The Writers' Haven</span> TEAM
          </h2>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-image">
                <img src="/person3.jpg" alt="Andrew" />
              </div>
              <div className="team-info">
                <h3>Andrew</h3>
                <p className="highlight">Designer</p>
              </div>
            </div>
            <div className="team-card">
              <div className="team-image">
                <img src="/person1.webp" alt="Mary" />
              </div>
              <div className="team-info">
                <h3>MARY</h3>
                <p className="highlight">Developer</p>
              </div>
            </div>
            <div className="team-card">
              <div className="team-image">
                <img src="/person2.avif" alt="Julia" />
              </div>
              <div className="team-info">
                <h3>JULIA</h3>
                <p className="highlight">Director</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="service" className="services-section">
        <div className="container">
          <h2>
            <span className="highlight">The Writers' Haven</span> THINGS
          </h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <FontAwesomeIcon icon={faLaptop} />
              </div>
              <h3 className="highlight">Web Design</h3>
              <p>
                Web Design focuses on creating visually appealing and
                user-friendly websites that enhance the overall user experience.
                It involves designing the layout, graphics, and interactive
                elements to ensure a seamless and engaging interaction for
                visitors, aligning with both aesthetic and functional goals.
              </p>
            </div>
            <div className="service-card highlighted">
              <div className="service-icon">
                <FontAwesomeIcon icon={faCloud} />
              </div>
              <h3 className="highlight">Cloud Computing</h3>
              <p>
                Cloud Computing refers to the delivery of computing
                services—such as servers, storage, databases, networking
                software, and analytics—over the internet (the cloud). This
                model enables businesses and individuals to access and manage
                resources on-demand, scale efficiently, and reduce the need for
                physical infrastructure and maintenance.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <FontAwesomeIcon icon={faCog} />
              </div>
              <h3 className="highlight">UX Design</h3>
              <p>
                UX Design (User Experience Design) focuses on optimizing the
                overall experience users have when interacting with a product or
                service. It involves understanding user needs, designing
                intuitive interfaces, and ensuring that the product is easy to
                use, engaging, and meets the goals and expectations of its
                users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio-section">
        <div className="container">
          <h2>
            <span className="highlight">The Writers' Haven</span> PORTFOLIO
          </h2>
          <div className="portfolio-grid">
            <div className="portfolio-item">
              <img src="/portfolio-img1.jpg" alt="Portfolio Project 1" />
            </div>
            <div className="portfolio-item">
              <img src="/portfolio-img2.jpg" alt="Portfolio Project 2" />
            </div>
            <div className="portfolio-item">
              <img src="/portfolio-img3.jpg" alt="Portfolio Project 3" />
            </div>
            <div className="portfolio-item">
              <img src="/portfolio-img4.jpg" alt="Portfolio Project 4" />
            </div>
            <div className="portfolio-item">
              <img src="/portfolio-img1.jpg" alt="Portfolio Project 5" />
            </div>
            <div className="portfolio-item">
              <img src="/portfolio-img2.jpg" alt="Portfolio Project 6" />
            </div>
            <div className="portfolio-item">
              <img src="/portfolio-img3.jpg" alt="Portfolio Project 7" />
            </div>
            <div className="portfolio-item">
              <img src="/portfolio-img4.jpg" alt="Portfolio Project 8" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2>
            CONTACT <span className="highlight">The Writers' Haven</span>
          </h2>
          <div className="contact-content">
            <div className="contact-form">
              <form>
                <div className="form-group">
                  <label>NAME</label>
                  <input type="text" name="name" />
                </div>
                <div className="form-group">
                  <label>EMAIL</label>
                  <input type="email" name="email" />
                </div>
                <div className="form-group">
                  <label>MESSAGE</label>
                  <textarea name="message" rows="5"></textarea>
                </div>
                <button type="submit" className="submit-button">
                  Submit
                </button>
              </form>
            </div>
            <div className="contact-info">
              <h3>CONTACT US</h3>
              <div className="contact-item">
                <FontAwesomeIcon icon={faPhone} />
                <span>010-020-0340</span>
              </div>
              <div className="contact-item">
                <FontAwesomeIcon icon={faEnvelope} />
                <span>writershaven@gmail.com</span>
              </div>
              <div className="contact-item">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <span>123 Street, Chennai</span>
              </div>
              <div className="social-section">
                <h4>WE ARE SOCIAL</h4>
                <div className="contact-social">
                  <FontAwesomeIcon icon={faFacebookF} />
                  <FontAwesomeIcon icon={faTwitter} />
                  <FontAwesomeIcon icon={faInstagram} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>Copyright © 2024 The Writers' Haven</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
