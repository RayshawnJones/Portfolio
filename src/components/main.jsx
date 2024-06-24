import IntroSection from "./introComp/introComp";
import SkillList from "./skillsComp/skillsComp";

export default function Main({ devData }) {
  return (
    <main className="d-flex flex-column gap-desktop gap-mobile mb-5">
      <IntroSection dev={devData.basics} />
      <SkillList skillsData={devData.skills} />
      
    </main>
  );
}
