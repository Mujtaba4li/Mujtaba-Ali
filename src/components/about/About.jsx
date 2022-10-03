import React from "react";
import "./about.css";
import ME from "./../../assets/images/about-image.jpg";
import { FaAward, FaHandshake, FaLaptopCode } from "react-icons/fa";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import About_lottie from "./About_lottie";
import {motion} from 'framer-motion'

export default function About() {
  return (
    <section id="about">
      <h5>GET TO KNOW</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <motion.div
          initial={{ opacity: 0,
          x:-500,
        scale:0.5 }}
            animate={{ opacity: 1,x:1,
              scale:1 }}
            transition={{duration:1.5}}
           className="about__me-img grid">
            {/* <img src={ME} alt="" /> */}
            {/* <div className="grid"> */}
            <figure className="effect-zoe">
              <img src={ME} alt="About me" />
              <figcaption>
                <h2>
                  Mr. <span> MUJTABA</span>
                </h2>
                <p className="icon-links">
                  <a href="https://twitter.com/mujt4ba_ali" target="_blank">
                    <BsTwitter />
                  </a>
                  <a href="https://www.instagram.com/mujt4ba_ali/" target="_blank">
                    <BsInstagram />
                  </a>
                </p>
              </figcaption>
            </figure>
          </motion.div>
        </div>
        <motion.div 
         initial={{ opacity: 0,
          x:500,
        scale:0.5 }}
            animate={{ opacity: 1,x:1,
              scale:1 }}
            transition={{duration:1}}
        className="about__content">
          <div className="about__cards">
            <div className="about__card">
              <div className="about__icon">
                <FaAward />
              </div>
              <h3>Experience</h3>
              <h5 className="text-light">1.5+ years</h5>
            </div>
            <div className="about__card">
              <div className="about__icon">
                <FaLaptopCode />
              </div>
              <h3>Projects</h3>
              <h5 className="text-light">10+</h5>
            </div>
            <div className="about__card">
              <div className="about__icon">
                <FaHandshake />
              </div>
              <h3>Clients</h3>
              <h5 className="text-light">10+</h5>
            </div>
          </div>
          <p>
            Looking for a great, enthusiastic developer team to work for that
            will provide me with challenging, interesting work that I can learn
            from and contribute to. I'd like to contribute more to Website
            development, I love to develop the MERN stack web apps. Currently
            learning React-Native.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </motion.div>
      </div>


      <div className="about__lottie">
      <About_lottie/>
      </div>
    </section>
  );
}
