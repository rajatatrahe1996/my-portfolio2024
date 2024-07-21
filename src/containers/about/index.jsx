import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import { RiReactjsFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { FaDev } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";




const personalDetails = [
  {
    label: "Name",
    value: "Rajat Atrahe",
  },
  {
    label: "Age",
    value: "28",
  },
  {
    label: "Address",
    value: "Gondia, Maharashtra, India",
  },
  {
    label: "Email",
    value: "atraherajat@gmail.com",
  },
  {
    label: "Contact No",
    value: "+91 7276327273",
  },
];

const jobSummary =
  "Dynamic and self-driven Front End Developer with over 4.5 years of experience, blending design artistry with programming precision to create engaging user experiences. Renowned for delivering visually stunning websites through meticulous development, feature optimization, and debugging, I am proficient in ReactJS, Tailwind CSS, React Redux, HTML5, CSS3, Bootstrap, Next.js, Jest, and Chart.js. Passionate about UI design, I transform concepts into functional, user-friendly solutions, consistently exceeding expectations with a keen eye for detail and adherence to design principles. Ready to bring innovative ideas and elevate digital experiences to new heights.";

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3>Senior Software Developer - React</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <FaDev size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <SiRedux size={60} color="var( --yellow-theme-main-color)" />
              </div>

              <div>
                <FaHtml5 size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <RiReactjsFill size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>

              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};
export default About;
