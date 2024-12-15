import "../Style/About.css";
import p4 from "../images/myImg.jpg";
import "../index.css";
import { useEffect, useState } from "react";
export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;
    const componentPosition = document.getElementById("about").offsetTop; // Replace with your component's actual ID

    if (currentScroll >= componentPosition - window.innerHeight / 1.5) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div id="about" className={`fade-in ${isVisible ? "appear" : ""}`}>
      <div className="row text-light pb-5 pt-5 mt-5">
        <div className="col-sm-6 about">
          <h1 className="headings">Hello,</h1>
          <h3 className="headings">Thank you for visiting my page!</h3>
          <p>
          I am Besmellah Solaimankhil, a proud graduate of Herat Afghan-Turk Boys High School with a strong academic foundation and a passion for technology and education. Currently, I am a junior at Ghalib University, pursuing a degree in Computer Science with a specialization in Software Development.
          </p>
          <p>
            In addition to my academic journey, I work as an English Instructor at AIELS International Academy in Herat, Afghanistan. This role allows me to share my language skills and help others develop their proficiency in English. I am a certified English speaker with a TOEFL score of 85, reflecting my strong command of the language.
          </p>
          <p>
          As a junior web developer, I have developed several single and static web pages, showcasing my growing expertise in creating functional and user-friendly digital solutions. While I am still honing my skills, I am deeply passionate about designing impactful websites and look forward to advancing further in this field.
          </p>
        </div>

        <div className="col-sm-6 about">
          <img src={p4} alt="profile-pic" className="profile"></img>
        </div>
      </div>
    </div>
  );
}
