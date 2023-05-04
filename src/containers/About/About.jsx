import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaMapMarkerAlt } from "react-icons/fa";
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
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <div>
            <h2>Me</h2>
          </div>
          <div>
            <FaMapMarkerAlt />
          </div>
        </div>
        <div
          className="app__about-section_studies section"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <div>
            <h2>My Studies</h2>
          </div>
        </div>
        <div
          className="app__about-section_hobbies section"
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <div>
            <h2>My Hobbies</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
