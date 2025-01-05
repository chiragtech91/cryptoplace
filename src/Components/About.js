import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import {
  FaReact,
  FaAngular,
  FaHtml5,
  FaCss3,
  FaBootstrap,
  FaGithub,
  FaConfluence,
  FaHandshake,
  FaComments,
} from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { DiMaterializecss, DiJqueryLogo, DiJira } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import { SiDaisyui, SiZoom, SiWebex, SiRedux } from "react-icons/si";
import { VscAzureDevops } from "react-icons/vsc";
import { BsMicrosoftTeams } from "react-icons/bs";
import { HiOutlineLightBulb } from "react-icons/hi";
import { IoDocumentsOutline } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { GiTeamIdea } from "react-icons/gi";

const About = () => {
  return (
    <div className="aboutWrap">
      <Tabs>
        <TabList>
          <Tab>About</Tab>
          <Tab>Skills</Tab>
          <Tab>Experience</Tab>
          <Tab>Education</Tab>
        </TabList>

        <TabPanel>
          <div className="tabHeadWrap">
            <h3>About me</h3>
            <p>
              Below is some basic information about me, including my contact
              details and how you can reach out.
            </p>
          </div>
          <div className="aboutDataWrap">
            <ul>
              <li>
                <span>Name: </span>
                <span>Chirag Gupta</span>
              </li>
              <li>
                <span>Phone: </span>
                <span>+91 9582037475</span>
              </li>
              <li>
                <span>Experience: </span>
                <span>10+ Years</span>
              </li>
              <li>
                <span>Nationality: </span>
                <span>Indian</span>
              </li>
              <li>
                <span>Email: </span>
                <span>
                  <a href="mailto:chiragtech91@gmail.com">chiragtech91@gmail.com</a>
                </span>
              </li>
              <li>
                <span>Freelance: </span>
                <span>Available</span>
              </li>
              <li>
                <span>Languages: </span>
                <span>English, Hindi</span>
              </li>
              <li>
                <span>LinkedIn: </span>
                <span><a href="https://www.linkedin.com/in/chiragtech/" target="_blank">Click here</a></span>
              </li>
            </ul>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="tabHeadWrap">
            <h3>My skills</h3>
            <p>
              Below is a brief summary of my technical skills, showcasing the
              tools, technologies, and frameworks I’ve mastered over the years.
            </p>
          </div>
          <div className="skillWrap">
            <div className="skillSet">
              <h4>Technical Skills</h4>
              <ul>
                <li>
                  <FaReact /> <span>React</span>
                </li>
                <li>
                  <SiRedux /> <span>Redux</span>
                </li>
                <li>
                  <TbBrandNextjs /> <span>Next JS</span>
                </li>
                <li>
                  <FaAngular /> <span>Angular</span>
                </li>
                <li>
                  <DiMaterializecss /> <span>Material UI</span>
                </li>
                <li>
                  <IoLogoJavascript /> <span>JavaScript/ES6+</span>
                </li>
                <li>
                  <FaHtml5 /> <span>HTML5</span>
                </li>
                <li>
                  <FaCss3 /> <span>CSS3/SCSS</span>
                </li>
                <li>
                  <FaBootstrap /> <span>Bootstrap</span>
                </li>
                <li>
                  <SiTailwindcss /> <span>Tailwind CSS</span>
                </li>
                <li>
                  <DiJqueryLogo /> <span>jQuery</span>
                </li>
                <li>
                  <SiDaisyui /> <span>Daisy UI</span>
                </li>
              </ul>
            </div>
            <div className="skillSet">
              <h4>Soft Skills</h4>
              <ul>
                <li>
                  <FaComments /> <span>Excellent Communica.</span>
                </li>
                <li>
                  <FaHandshake /> <span>Client Handling</span>
                </li>
                <li>
                  <GiTeamIdea /> <span>Team Handling</span>
                </li>
                <li>
                  <HiOutlineLightBulb /> <span>Problem Solving</span>
                </li>
              </ul>
            </div>

            <div className="skillSet">
              <h4>Project Management/Collaboration</h4>
              <ul>
                <li>
                  <VscAzureDevops /> <span>VSTS</span>
                </li>
                <li>
                  <FaGithub /> <span>GIT/GITHUB</span>
                </li>
                <li>
                  <DiJira /> <span>JIRA</span>
                </li>
                <li>
                  <FaConfluence /> <span>Confluence</span>
                </li>
                <li>
                  <SiZoom /> <span>Zoom</span>
                </li>
                <li>
                  <BsMicrosoftTeams /> <span>Microsoft Teams</span>
                </li>
                <li>
                  <SiWebex /> <span>Webex</span>
                </li>
                <li>
                  <IoDocumentsOutline /> <span>Documentation</span>
                </li>
              </ul>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="tabHeadWrap">
            <h3>My experience</h3>
            <p>
              Below is a brief summary of my professional experience, showcasing
              the companies I’ve collaborated with and the skills I’ve honed.
            </p>
          </div>
          <div className="expWrap">
            <div className="expBox">
              <div className="duration">Nov 2018 - Present</div>
              <div className="position">Associate Technical Lead</div>
              <div className="company">GalaxE Solutions</div>
            </div>
            <div className="expBox">
              <div className="duration">Apr 2015 - Nov 2018</div>
              <div className="position">Web Developer, Band 30</div>
              <div className="company">American Express GBT</div>
            </div>
            <div className="expBox">
              <div className="duration">Apr 2014 - Mar 2015</div>
              <div className="position">Web Developer</div>
              <div className="company">Wieden + Kennendy</div>
            </div>
            <div className="expBox">
              <div className="duration">Sep 2012 - Mar 2014</div>
              <div className="position">Web Designer/Developer</div>
              <div className="company">Brands Academy</div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="tabHeadWrap">
            <h3>My education</h3>
            <p>
              Below is a brief overview of my educational background,
              highlighting the qualifications and institutions that shaped my
              career.
            </p>
          </div>
          <div className="expWrap">
            <div className="expBox">
              <div className="duration">2009 - 2011</div>
              <div className="position">Diploma in Animation & Multimedia</div>
              <div className="company">Arena Animation</div>
            </div>
            <div className="expBox">
              <div className="duration">2008 - 2011</div>
              <div className="position">Graduation (B.Com Pass)</div>
              <div className="company">Delhi University</div>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default About;
