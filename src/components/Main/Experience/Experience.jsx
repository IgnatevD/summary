/** @format */

import MainInfoComponent from "../../_shured/MainInfoComponent/MainInfoComponent";
import Project from "../../_shured/Project/Project";

function Experience() {
  return (
    <div>
      <MainInfoComponent title={"PROJECT EXPERIENCE"}>
        <Project
          key={"Online shop"}
          title={"Online shop"}
          linkGit={"https//github.com/IgnatevD/react_time_planning"}
          linkProject={"https//job-scheduler-react-project-team-al.netlify.app"}
          skils={"REACT - JS - HTML5 - SASS - AXIOS - FORMIK - BEM"}
          description={
            "Adaptive web application forschedu lingthetimeof created projects for completing tasksandana lyzingper for mance."
          }
        />
        <Project
          key={"Test shop"}
          title={"Test shop"}
          linkGit={"github.com/IgnatevD/pro-test-be-react-nodejs-project"}
          linkProject={"pro-test-react-nodejs-project.netlify.app/auth"}
          skils={
            "NODE.JS-REACT-JS-HTML5-SASS-AXIOS-EXPRESS-CORSS-REDUXJS-MONGOOSE-BCRYPTJS-JOI-MONGODB"
          }
          description={
            "Adaptive web application forschedu lingthetimeof created projects for completing tasksandana lyzingper for mance."
          }
        />
      </MainInfoComponent>
      <MainInfoComponent title={"WORKE XPERIENCE"} />
      <MainInfoComponent title={"EDUCATION"} />
    </div>
  );
}

export default Experience;
