import "../Style/Projects.css";
import "../index.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import project1 from "../images/carmanagement.png";
import project2 from "../images/IT_project.png";
import project3 from "../images/coming soon.png";
import { FaGithub } from "react-icons/fa";
export default function Projects(props) {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;
    const componentPosition = document.getElementById("projects").offsetTop;

    if (currentScroll >= componentPosition - window.innerHeight / 1.5) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
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
      <div id="projects" className={`fade-in ${isVisible ? "appear" : ""}`}>
        <div className="row">
          <div className="col-sm-12">
            <h1 className="h1 pt-5 pb-5">Projects</h1>
          </div>
          <div className="card col-sm-4">
            <img
              src={project1}
              className="card-image rounded"
              alt="Project"
              max-width={200}
              max-height={300}
            />
            <div className="card-body">
              <h5 className="card-header">Car Management System</h5>
              <p>
              This is a system which enable you to manage car for selling and buying. you can watch it by clicking link below
                <br />
                <a
                  className="card-footer"
                  href="https://besmellahsolaimankhil14.github.io/bootstrap-js-project/"
                >
                  <FaGithub className="foot-icon" />
                </a>
              </p>
            </div>
          </div>

          <div className="card col-sm-4">
            <img
              src={project2}
              className="card-image rounded"
              alt="Project"
              max-width={200}
              max-height={300}
            />
            <h5 className="card-header">IT Company</h5>
            <div className="card-body">
              <p>
                Static template designed with Html Css and bootstrap
               
              </p>
            </div>
          </div>
          <div className="card col-sm-4">
            <img
              src={project3}
              className="card-image rounded"
              alt="Project"
              max-width={200}
              max-height={300}
            />
            <h5 className="card-header">Coming Soon Page</h5>
            <div className="card-body">
              <p>
                Static template designed with Html and Css
               
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
