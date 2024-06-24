import IntroSection from "./introComp/introComp";
import SkillList from "./skillsComp/skillsComp";
import ProjectsList from "./projectComp/projectComp";

export default function Main({ devData }) {
  return (
    <main className="d-flex flex-column gap-desktop gap-mobile mb-5">
      <IntroSection dev={devData.basics} />
      <SkillList skillsData={devData.skills} />
      <ProjectsList projectsData={devData.projects} />
    </main>
  );
}
