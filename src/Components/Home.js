import React from "react";
import photo from "../Assets/photo.png";
import CountUp from "react-countup";
import { TypeAnimation } from "react-type-animation";
import { FaDownload, FaLinkedin, FaGithub, FaPinterest } from "react-icons/fa";
import resume from "../Assets/ChiragGuptaResume.pdf";

const Home = () => {
  return (
    <div className="homeWrap">
      <div className="introWrap">
        <div className="introTxt">
          <h3>Hello World!</h3>
          <h2>I'm Chirag</h2>
          <h1>
            <TypeAnimation
              sequence={[
                "A UI/UX Developer",
                1500,
                "A React Developer",
                1500,
                "A Front-end Developer",
                1500,
                "A Next JS Developer",
                1500,
                "An Angular Developer",
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p>
          I’m a frontend developer dedicated to crafting seamless digital experiences using React and Next.js, skillfully blending creativity with functionality to bring ideas to life.
          </p>
          <div className="socialIconsWrap">
            <ul>
              <li>
                <a href={resume} target='_blank'>
                  Download CV <FaDownload />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/chiragtech/" target="_blank">
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a href="https://github.com/chiragtech91" target="_blank">
                  <FaGithub />
                </a>
              </li>
              <li>
                <a href="https://in.pinterest.com/chirag2891/ui-development/" target="_blank">
                  <FaPinterest />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="photoWrap">
          <img src={photo} alt="" />
        </div>
      </div>

      <div className="profileData">
        <ul>
          <li>
            <span>
              <CountUp end={10} />+{" "}
            </span>
            <span>Years of experience</span>
          </li>
          <li>
            <span>
              <CountUp end={80} />+{" "}
            </span>
            <span>Project completed</span>
          </li>
          <li>
            <span>
              <CountUp end={10} />+{" "}
            </span>
            <span>Technologies Mastered</span>
          </li>
          <li>
            <span>
              <CountUp end={60} />+{" "}
            </span>
            <span>Clients served</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
