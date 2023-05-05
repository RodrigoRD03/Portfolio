import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsFillPlayCircleFill, BsFillCalendar2CheckFill } from "react-icons/bs"
import images from "../../constants/images";
import "./About.css";

const About = () => {
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    function handleResize() {
      setHeight(window.innerHeight);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    AOS.refresh();
  });

  return (
    <div
      id="About"
      className="app__about bg__clean"
      style={{ height: `${height}px` }}
    >
      <div className="app__about-title">
        <h2>About</h2>
      </div>
      <div className="app__about-sections">
        <div
          className="app__about-section_me section"
          data-aos="flip-left"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <img src={images.Num1} className="img-number" alt="Number 1" />
          <div className="app__about-section_me-title">
            <h2>Me</h2>
          </div>
          <div className="app__about-section_me-text">
            <div>
              <FaMapMarkerAlt className="icon-mapmarket"/>
              <p>I live in Tecamac, Estado de Mexico, Mexico.</p>
            </div>
            <div className="line-row" />
            <div>
              <BsFillPlayCircleFill className="icon-playcircle"/>
              <p>I started Designing in 2020 and Developing Software in 2022.</p>
            </div>
            <div className="line-row" />
            <div>
              <BsFillCalendar2CheckFill className="icon-calendarcheck"/>
              <p>I currently work through my university developing software for other companies that have an agreement with the institution.</p>
            </div>
          </div>
        </div>
        <div
          className="app__about-section_studies section"
          data-aos="flip-left"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <img src={images.Num2} className="img-number" alt="" />
          <div>
            <h2>My Studies</h2>
          </div>
        </div>
        <div
          className="app__about-section_hobbies section"
          data-aos="flip-left"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <img src={images.Num3} className="img-number" alt="" />
          <div>
            <h2>My Hobbies</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
