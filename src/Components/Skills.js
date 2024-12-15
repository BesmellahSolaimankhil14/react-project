import { useEffect, useState } from "react";
import "../Style/Skills.css";

// import React, { useState } from "react";
import { Knob } from "primereact/knob";

export default function Skills() {
  const [animatedValues, setAnimatedValues] = useState({
    html: 0,
    css: 0,
    bootstrap: 0,
    mysql: 0,
    php: 0,
    javascript: 0,
    react: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedValues((prevValues) => ({
        html: prevValues.html < 90 ? prevValues.html + 1 : 90,
        css: prevValues.css < 88 ? prevValues.css + 1 : 88,
        bootstrap: prevValues.bootstrap < 87 ? prevValues.bootstrap + 1 : 87,
        javascript: prevValues.javascript < 80 ? prevValues.javascript + 1 : 80,
        react: prevValues.react < 70 ? prevValues.react + 1 : 70,
      }));
    }, 50); // Adjust the interval for the animation speed

    return () => clearInterval(interval);
  }, []);

  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    const componentPosition = document.getElementById("componentId").offsetTop; // Replace with your component's actual ID

    if (currentScroll >= componentPosition - window.innerHeight / 1.5) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="componentId" className={`fade-in ${isVisible ? "appear" : ""}`}>
      <div className="skills" id="skills">
        <div className="row">
          <div className="col-sm-12 ">
            <h1 className="pt-5">Skills</h1>
            <div className="card pt-5 pb-5 flex justify-content-center">
              <div className="row">
                <div className="col-sm-4 bars">
                  <h4>HTML</h4>
                  <Knob
                    value={animatedValues.html}
                    valueTemplate={`${animatedValues.html}%`}
                    id="knob"
                    valueColor="gold"
                    textColor="gold"
                  ></Knob>
                </div>
                <div className="col-sm-4 bars">
                  <h4>CSS</h4>
                  <Knob
                    value={animatedValues.css}
                    valueTemplate={`${animatedValues.css}%`}
                    id="knob"
                    valueColor="gold"
                    textColor="gold"
                  ></Knob>
                </div>
                <div className="col-sm-4 bars">
                  <h4>Bootstrap</h4>
                  <Knob
                    value={animatedValues.bootstrap}
                    valueTemplate={`${animatedValues.bootstrap}%`}
                    id="knob"
                    valueColor="gold"
                    textColor="gold"
                  ></Knob>
                </div>
              
                <div className="col-sm-4 bars">
                  <h4>JavaScript</h4>
                  <Knob
                    value={animatedValues.javascript}
                    valueTemplate={`${animatedValues.javascript}%`}
                    id="knob"
                    valueColor="gold"
                    textColor="gold"
                  ></Knob>
                </div>
                <div className="col-sm-4 bars">
                  <h4>React</h4>
                  <Knob
                    value={animatedValues.react}
                    valueTemplate={`${animatedValues.react}%`}
                    id="knob"
                    valueColor="gold"
                    textColor="gold"
                  ></Knob>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
