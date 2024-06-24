export default function SkillList({ skillsData }) {
  return (
    <section className="container">
      <div className="row gap-2 row-gap-lg-5 justify-content-center justify-content-lg-between">
        <hr className="border" />
        <h2 className="heading-l text-center">
          My  Growing Development Tech<span className="brand-color">.</span>Stack
        </h2>
        {skillsData.map((skill) => (
          <SkillItem key={skill.name} name={skill.name} icon={skill.icon} />
        ))}
      </div>
    </section>
  );
}

function SkillItem({ name, icon }) {
  return (
    <div className="col-6 col-md-3 col-lg-2 p-0">
      <div className="d-flex align-items-center justify-content-start">
        <img className="icon-layout" src={icon} alt={icon} />
        <h3 className="heading-m">{name}</h3>
      </div>
    </div>
  );
}
