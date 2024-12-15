import "../Style/Contact.css";
// import { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

// Add the solid icons to the library
library.add(fas);
export default function Contact() {
  

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, delay: 0.25 }}
    >
      <div id="contact" className="fade-in appear ">
        {/* ----- title ----- */}
        <h1 className="h1 mt-5 pt-5 pb-5">Contact Me</h1>
        {/* ----- Discription ----- */}
        <div className="row text-light mt-5 contact">
          <div className="col-sm-6">
            <h4>GET IN TOUCH</h4>
            <p>
              Feel free to get in touch with me.I am always open to discussing
              new projects,creative ideas or opportunities to be part of your
              vision.
              <br />
              <br />
              <FontAwesomeIcon className="icons" icon="envelope" />
              besmellah.solaimankhil14@gmail.com
              <br />
              <FontAwesomeIcon className="icons" icon="mobile-screen" /> +93 796
              700 808
              <br />
              <FontAwesomeIcon className="icons" icon="map-pin" /> Women's Activities and Social Services Association (WASSA), Herat
            </p>
            {/* ------ Map ------ */}
            <div className="google-map">
             
              <iframe
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3294.2064615656013!2d62.19971457518997!3d34.34522320220439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f3ce736e999da7d%3A0xa9c719221a4f26ea!2sWASSA!5e0!3m2!1sen!2s!4v1734271146668!5m2!1sen!2s"
                title="Map"
                allowFullScreen
                loading="eager"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="col-sm-6">
            {/* ------ form ------- */}
            <form >
              <div className="row">
                <div className="col-sm-6">
                  <label htmlFor="name" className="label">
                    Full Name:
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Jhon Doe"
                  />
                </div>
                <div className="col-sm-6">
                  <label htmlFor="email" className="label">
                    Email:
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="example@gmail.com"
                  />
                </div>
              </div>
              <div className="col-sm-12">
                <label htmlFor="massage" className="label">
                  Massage:
                </label>
                <textarea
                  name="massage"
                  className="form-control"
                  rows={5}
                  placeholder="Massage"
                ></textarea>
                <button
                  type="submit"
                  className="form-control btn btn-light mt-2"
                >
                  <FontAwesomeIcon className="icons" icon="paper-plane" />
                  Send Massage
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
