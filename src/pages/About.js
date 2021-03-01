import React from "react";
import "../styling/About.css";
import "../styling/Cards.css";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import ScrollAnimation from "react-animate-on-scroll";

const About = () => {
  return (
    <div
      style={{ background: "linear-gradient(90deg, #141E30 0%, #243B55 100%)" }}
    >
      <div className="main-about">
        <img
          alt="avatar"
          src="https://res.cloudinary.com/dnkxmjpxy/image/upload/v1614404429/headshot2_atbms6.png"
          className="image"
        />
        <p className="about-text">
          <br />{" "}
          <p className="header-text">
            Aspiring Software Engineer{" "}
            {/* <hr
              style={{
                display: "inline",
                fontSize: "18px",
                backgroundImage: "#CD6E12",
              }}
            ></hr> */}
          </p>{" "}
          <p style={{ margin: "1rem 0", fontSize: "30px" }}>
            <strong>
              Based in NYC,
              <br /> I'm a student and developer.
            </strong>
          </p>
          Constantly learning and exploring new skills. Passionate about
          science, creativity, and new technologies and what problems can they
          solve plus how can I use them to build better and scalable products.{" "}
          <br />
          <br />
          {/* Eager to secure roles/opportunities that demand use of the skills and
          experience gained during my studies.
          <br />I love to connect with new people and build new relationships,
          so feel free to contact me and send me a message on LinkedIn. */}
        </p>
      </div>

      <br />
      <br />
      <div className="downArrow bounce">
        <i className="fas fa-arrow-circle-down fa-5x"></i>
      </div>
      {/* <img alt="gif" className="image1" src={video1} /> */}

      <ScrollAnimation animateIn="bounceInRight" animateOut="bounceOutLeft">
        <h2 style={{ marginTop: "7rem" }}>Experience</h2>
        <div className="experience-container">
          <Experience
            title="Talent Pipeline Residency Full Stack Development Bootcamp"
            subtitle="Software Development Student	"
            first="Interviewed and selected to participate in a full stack development bootcamp in where topics on use of MongoDB,
       Express, React.js, Node,js, GraphQL were first taught and then applied to delivering a minimum viable product in an agile environment"
            second="Learned in-demand technologies such as Node.js, Express, PostgreSQL and MongoDB in order to interface with a database via API endpoints and
       then rendering images on a custom-built website using React.js"
            third="Applied industry best practices for design, implementation, and deployment of architectural patterns such as Model-View-Controller,
       and version control with Git/GitHub"
            date="January 2021 - Present"
          />
          <hr />
          <Experience
            title="CSI-CSTEP program"
            subtitle="College Assistant/Tutor"
            first="Created study plans and lessons for intermediate programming and discrete math for students in need"
            second="Worked with college-level students inside and outside classroom in understanding different computer science and math concepts. "
            third="led and taught an introduction to programming class for high-school students on weekends in CSI. "
            date="October 2019 - August 2020"
          />
          <hr />
          <Experience
            title="Payless Shoe-source"
            subtitle="Assistant Manager, Key Holder"
            first="Promoted in the first year from a sales associate to a store assistant manager for showing exceptional
      performance and leadership skills through fast-paced environment"
            second="Managed and coordinated all retail store operations"
            third="Motivated sales employees to improve morale, performance and sales revenue."
            date="June 2016 - August 2019"
          />
        </div>
      </ScrollAnimation>

      <ScrollAnimation animateIn="bounceInLeft" animateOut="bounceOutRight">
        <h2 style={{ color: "#d9d9d9", marginTop: "7rem" }}>Activities</h2>
        <div className="activities-container">
          <ul className="experience-item">
            <li
              style={{
                marginBottom: "0rem",
                textAlign: "center",
                textDecoration: "underline",
              }}
            >
              <strong>Git into GitHub Workshop</strong>
            </li>
            <p
              style={{
                marginTop: "0.2rem",
                textAlign: "center",
                textDecoration: "underline",
              }}
            >
              Beginner's introduction to Git and Github
            </p>
            <li>
              - Hosted and facilitated a beginner's Git/Github workshop at
              College of Staten Island, computer science department.{" "}
            </li>
            <li>
              - Covered basic and critical skills for developers: version
              control, Git, GitHub, terminology and best practices
            </li>
            <li>- Sponsored by Major League hacking and CUNY2X</li>

            <li style={{ marginTop: "1rem", textAlign: "center" }}>
              February 2021
            </li>
          </ul>
        </div>
      </ScrollAnimation>

      <ScrollAnimation animateIn="bounceInUp" animateOut="bounceOutdown">
        <div className="cards__container skills">
          <Skills />
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default About;
