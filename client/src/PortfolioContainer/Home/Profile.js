import React from "react";
import Typical from "react-typical";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <a href="https://www.linkedin.com/in/evan-jannot">
              <i class="fa fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/EvanJannot">
              <i class="fa fa-brands fa-github-square"></i>
            </a>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {""}
              Hello, I'm <span className="highlighted-text">Evan</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {""}
              <h1>
                {""}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Data Scientist 🧪",
                    1000,
                    "Full Stack Developer 💻",
                    1000,
                    "AI engineer ⚙️",
                    1000,
                    "UX Designer 🖌️",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Thinking technologies in relation to the human for the world of
                tomorrow.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
              {""}
              Hire me{""}
            </button>
            <a href="JannotCV.pdf" download="Evan Jannot CV.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
