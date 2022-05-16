import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "Python", ratingPercentage: 75 },
    { skill: "TensorFlow", ratingPercentage: 70 },
    { skill: "PyTorch", ratingPercentage: 70 },
    { skill: "JavaScript", ratingPercentage: 75 },
    { skill: "React JS", ratingPercentage: 75 },
    { skill: "React Native", ratingPercentage: 70 },
    { skill: "Express JS", ratingPercentage: 60 },
    { skill: "Node JS", ratingPercentage: 60 },
    { skill: "Mongo Db", ratingPercentage: 60 },
    { skill: "C#", ratingPercentage: 80 },
  ];

  const projectsDetails = [
    {
      title: "Questions Pour Un Cogniticien",
      duration: { fromDate: "2022", toDate: "2022" },
      description:
        "Online quiz game based on the TV show going for gold (Questions Pour Un Champion in France) on the theme of my engineering school.",
      subHeading: "Technologies Used: React JS, Node JS, Express JS, Mongo Db",
    },
    {
      title: "GOT Mobile",
      duration: { fromDate: "2022", toDate: "2022" },
      description:
        "Mobile application using the public API anApiofIceAndFire to display, filter and search information about the Game of Thrones saga.",
      subHeading: "Technologies Used: React-Native",
    },
    {
      title: "Valhalla",
      duration: { fromDate: "2021", toDate: "2021" },
      description:
        "Rogue-like programmed in C# using the RogueSharp library. he game features random stage generation, replayability, equipment, spells and items, bosses and a bestiary for each world. The console font has been modified within the program so that tiles made in pixel art are displayed instead of letters.",
      subHeading: "Technologies Used:  C#",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Ecole Nationale Supérieure de Cognitique (ENSC), France"}
        subHeading={"Diplôme d'ingénieur cogniticien"}
        fromDate={"2020"}
        toDate={"2023"}
      />

      <ResumeHeading
        heading={"Tohoku University, Japan"}
        subHeading={
          "Special Research Student in Visual Cognition and Systems Laboratory"
        }
        fromDate={"2021"}
        toDate={"2022"}
      />
      <ResumeHeading
        heading={"Cycle Préparatoire de Bordeaux (CPBx), France "}
        subHeading={
          "Preparatory class specializing in Maths/Physics, Vice Treasurer of the student council"
        }
        fromDate={"2018"}
        toDate={"2020"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Sogeti"}
          subHeading={"DEVELOPMENT AND INNOVATION INTERN"}
          fromDate={"2022"}
          toDate={"Present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Currently working as a data scientist and full stack developer on
            various internal projects. Bibliographic research on image detection
            and description in the context of web accessibility.
          </span>
          <br />
          <br />
        </div>
        <ResumeHeading
          heading={"Tohoku University"}
          subHeading={"SPECIAL RESEARCH STUDENT"}
          fromDate={"2021"}
          toDate={"2022"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Research student attached to the Visual Cognition and Systems
            laboratory as part of the COLABS graduate exchange program. Study of
            the observation and detection of emotions felt through the analysis
            of facial expressions.
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Music"
        description="Listening to or playing music is part of my daily life. Whether it's browsing through my playlists and those of others or picking up my guitar to play a song."
      />
      <ResumeHeading
        heading="Sport"
        description="I do most of my traveling on my bike. I also love to watch or play sports, no matter what kind. Soccer, basketball, handball, running, F1 or table tennis."
      />
      <ResumeHeading
        heading="Reading"
        description="I enjoy reading, especially outside in the sun. I like to read books like manga but also classic literature and thrillers."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
