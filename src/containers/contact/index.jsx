import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import "./styles.scss";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="My Contact"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <h3 className="text-align-center contact__content__header-text">Let's Talk</h3>

        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <div className="contact__content__form">
            <div className="contact__content__form__controlswrapper">
              <div>
                <input
                  required
                  name="name"
                  className="inputName"
                  type={"text"}
                  value={"Rajat Atrahe"}
                />
                <label htmlFor="name" className="mt-10 nameLabel">
                  Full Name
                </label>
              </div>
              <div>
                <input
                  required
                  name="mobile"
                  className="inputName"
                  type={"text"}
                  value={"8522872763"}
                  
                />
                <label htmlFor="name" className="nameLabel">
                  Mobile No.
                </label>
              </div>
              <div>
                <input
                  required
                  name="email"
                  className="inputEmail"
                  type={"text"}
                  value={"atraherajat@gmail.com"}
                />
                <label htmlFor="email" className="emailLabel">
                  Email
                </label>
              </div>
              <div>
                <input
                  required
                  name="email"
                  className="inputEmail"
                  type={"text"}
                  value={"https://www.linkedin.com/in/iamrajatatrahe/"}
                />
                <label htmlFor="email" className="emailLabel">
                  Linkedin Profile
                </label>
              </div>
            </div>
           
          </div>
        </Animate>
      </div>
    </section>
  );
};
export default Contact;
