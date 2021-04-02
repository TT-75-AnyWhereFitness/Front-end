import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import "../assets/css/main.css";


export const Banner= () => {
    return (
      <>
        <HeroImg id="banner">
          <div className="inner">
            <header className="major">
              <h1>Anywhere Fitness</h1>
            </header>
            <p>
              These days, fitness classes can be held anywhere- a park, an
              unfinished basement or a garage- not just at a traditional gym.
              Certified fitness instructors need an easy way to take the
              awkwardness out of attendance taking and client payment processing.
            </p>
            <ul className="actions special">
              <li>
                <NavLink to="/" className="button primary">
                  Explore
                </NavLink>
              </li>
            </ul>
          </div>
        </HeroImg>
      </>
    );
  }
   
  export const Section1 = () => {
      return(
        <section id="one">
          <div className="inner">
            <header className="major">
              <h2>Sed amet aliquam</h2>
            </header>
            <p>
              Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
              magna sed nunc rhoncus condimentum sem. In efficitur ligula tate
              urna. Maecenas massa vel lacinia pellentesque lorem ipsum dolor.
              Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
              libero. Nullam et orci eu lorem consequat tincidunt vivamus et
              sagittis magna sed nunc rhoncus condimentum sem. In efficitur
              ligula tate urna.
            </p>
          </div>
        </section>
      )
  }

  export const Section3 = () => {
      return (
        <section id="three">
        <div className="inner">
          <header className="major">
            <h2>Massa libero</h2>
          </header>
          <p>
            Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
            Pellentesque condimentum sem. In efficitur ligula tate urna.
            Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor.
            Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra
            et feugiat tempus.
          </p>
          <ul className="actions">
            <li>
              <a href="signup" className="button next">
                Get Started
              </a>
            </li>
          </ul>
        </div>
      </section>
      )
  }
  
  export const Spotlights = () => {
    return(
        <section id="two" className="spotlights">
        <section>
          <a href="##" className="image">
            <img
              src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              alt=""
              data-position="center center"
            />
          </a>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Orci maecenas</h3>
              </header>
              <p>
                Nullam et orci eu lorem consequat tincidunt vivamus et
                sagittis magna sed nunc rhoncus condimentum sem. In efficitur
                ligula tate urna. Maecenas massa sed magna lacinia magna
                pellentesque lorem ipsum dolor. Nullam et orci eu lorem
                consequat tincidunt. Vivamus et sagittis tempus.
              </p>
              <ul className="actions">
                <li>
                  <a href="/signup" className="button">
                    Learn more
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <a href="##" className="image">
            <img
              src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
              alt=""
              data-position="top center"
            />
          </a>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Rhoncus magna</h3>
              </header>
              <p>
                Nullam et orci eu lorem consequat tincidunt vivamus et
                sagittis magna sed nunc rhoncus condimentum sem. In efficitur
                ligula tate urna. Maecenas massa sed magna lacinia magna
                pellentesque lorem ipsum dolor. Nullam et orci eu lorem
                consequat tincidunt. Vivamus et sagittis tempus.
              </p>
              <ul className="actions">
                <li>
                  <a href="/signup" className="button">
                    Learn more
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <a href="##" className="image">
            <img
              src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=968&q=80"
              alt=""
              data-position="25% 25%"
            />
          </a>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Sed nunc ligula</h3>
              </header>
              <p>
                Nullam et orci eu lorem consequat tincidunt vivamus et
                sagittis magna sed nunc rhoncus condimentum sem. In efficitur
                ligula tate urna. Maecenas massa sed magna lacinia magna
                pellentesque lorem ipsum dolor. Nullam et orci eu lorem
                consequat tincidunt. Vivamus et sagittis tempus.
              </p>
              <ul className="actions">
                <li>
                  <a href="/signup" className="button">
                    Learn more
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    )
}

export const Contact = () => {
    return (
        <section id="contact">
        <div className="inner">
          <section>
            <form method="post" action="#">
              <div className="fields">
                <div className="field half">
                  <label htmlFor="name">Name</label>
                  <input type="text" name="name" id="name" />
                </div>
                <div className="field half">
                  <label htmlFor="email">Email</label>
                  <input type="text" name="email" id="email" />
                </div>
                <div className="field">
                  <label htmlFor="message">Message</label>
                  <textarea name="message" id="message" rows="6"></textarea>
                </div>
              </div>
              <ul className="actions">
                <li>
                  <input
                    type="submit"
                    value="Send Message"
                    className="primary"
                  />
                </li>
                <li>
                  <input type="reset" value="Clear" />
                </li>
              </ul>
            </form>
          </section>
          <section className="split">
            <section>
              <div className="contact-method">
                <span className="icon solid alt fa-envelope"></span>
                <h3>Email</h3>
                <a href="##">information@untitled.tld</a>
              </div>
            </section>
            <section>
              <div className="contact-method">
                <span className="icon solid alt fa-phone"></span>
                <h3>Phone</h3>
                <span>(000) 000-0000 x12387</span>
              </div>
            </section>
            <section>
              <div className="contact-method">
                <span className="icon solid alt fa-home"></span>
                <h3>Address</h3>
                <span>
                  1234 Somewhere Road #5432
                  <br />
                  Nashville, TN 00000
                  <br />
                  United States of America
                </span>
              </div>
            </section>
          </section>
        </div>
      </section>
    )
}

export const Footer = () => {
    return (
        <footer id="footer">
        <div className="inner">
          <ul className="icons">
            <li>
              <a href="##" className="icon brands alt fa-twitter">
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="##" className="icon brands alt fa-facebook-f">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="##" className="icon brands alt fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a href="##" className="icon brands alt fa-github">
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a href="##" className="icon brands alt fa-linkedin-in">
                <span className="label">LinkedIn</span>
              </a>
            </li>
          </ul>
          <ul className="copyright">
            <li>&copy; Untitled</li>
            <li>
              Design: <a href="https://html5up.net">HTML5 UP</a>
            </li>
          </ul>
        </div>
      </footer>
    )
}
  const HeroImg = styled.section`
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  `;