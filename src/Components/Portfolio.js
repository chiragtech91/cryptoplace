import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { FaLink, FaGithub } from "react-icons/fa";
import project1 from "../Assets/project1.jpg";
import project2 from "../Assets/project2.jpg";

const Portfolio = () => {
  return (
    <div>
      <AwesomeSlider className="sliderWrap">
        <div className="workWrap">
          <div className="workLeftWrap">
            <span>01</span>
            <h3>Food Ordering Site</h3>
            <p>
              A food ordering website built with React, providing a seamless and
              intuitive user experience for browsing menus, placing orders, and
              tracking deliveries.
            </p>
            <ul>
              <li>React</li>
              <li>JavaScript</li>
              <li>HTML5</li>
              <li>CSS3</li>
            </ul>
            <div className="icons">
              <ul>
                <li>
                  <a href="https://foodies-khaki.vercel.app/" target="_blank">
                    <FaLink />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/chiragtech91/foodies"
                    target="_blank"
                  >
                    <FaGithub />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="workRightWrap">
            <a href="https://foodies-khaki.vercel.app/" target="_blank">
              <img src={project1} alt="Project Preview" />
            </a>
          </div>
        </div>
        <div className="workWrap">
          <div className="workLeftWrap">
            <span>02</span>
            <h3>Crypto Place</h3>
            <p>
              Built a cryptocurrency website with React, featuring real-time
              market data, interactive charts, and responsive design.
            </p>
            <ul>
              <li>React</li>
              <li>JavaScript</li>
              <li>HTML5</li>
              <li>CSS3</li>
            </ul>
            <div className="icons">
              <ul>
                <li>
                  <a
                    href="https://cryptoplace-omega-flame.vercel.app/"
                    target="_blank"
                  >
                    <FaLink />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/chiragtech91/cryptoplace"
                    target="_blank"
                  >
                    <FaGithub />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="workRightWrap">
            <a href="https://foodies-khaki.vercel.app/" target="_blank">
              <img src={project2} alt="Project Preview" />
            </a>
          </div>
        </div>
      </AwesomeSlider>

      <div className="respPortfolio">
        <div className="workWrap">
          <div className="workLeftWrap">
            <span>01</span>
            <h3>Food Ordering Site</h3>
            <p>
              A food ordering website built with React, providing a seamless and
              intuitive user experience for browsing menus, placing orders, and
              tracking deliveries.
            </p>
            <ul>
              <li>React</li>
              <li>JavaScript</li>
              <li>HTML5</li>
              <li>CSS3</li>
            </ul>
            <div className="icons">
              <ul>
                <li>
                  <a href="https://foodies-khaki.vercel.app/" target="_blank">
                    <FaLink />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/chiragtech91/foodies"
                    target="_blank"
                  >
                    <FaGithub />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="workRightWrap">
            <a href="https://foodies-khaki.vercel.app/" target="_blank">
              <img src={project1} alt="Project Preview" />
            </a>
          </div>
        </div>
        <div className="workWrap">
          <div className="workLeftWrap">
            <span>02</span>
            <h3>Crypto Place</h3>
            <p>
            Built a cryptocurrency website with React, featuring real-time market data, interactive charts, and responsive design.
            </p>
            <ul>
              <li>React</li>
              <li>JavaScript</li>
              <li>HTML5</li>
              <li>CSS3</li>
            </ul>
            <div className="icons">
              <ul>
                <li>
                  <a href="https://cryptoplace-omega-flame.vercel.app/" target="_blank">
                    <FaLink />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/chiragtech91/cryptoplace"
                    target="_blank"
                  >
                    <FaGithub />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="workRightWrap">
            <a href="https://foodies-khaki.vercel.app/" target="_blank">
              <img src={project2} alt="Project Preview" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
