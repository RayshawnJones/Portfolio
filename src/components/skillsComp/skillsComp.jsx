// Returns a section element with a container class
export default function SkillList({ skillsData }) {
  return (
    <section className="container">
      {/* Creates a div element with specific classes and attributes */}
      <div className="row gap-2 row-gap-lg-5 justify-content-center justify-content-lg-between">
        {/* Creates a horizontal rule element with a border class */}
        <hr className="border" />
        {/* Creates an h2 element with specific classes */}
        <h2 className="heading-l text-center">
          {/* Renders the text "My growing Tech" */}
          My growing Tech
          {/* Creates a span element with a brand-color class */}
          <span className="brand-color">.</span>
          {/* Renders the text "Stack" */}
          Stack
        </h2>
        {/* Maps over the skillsData array and render SkillItem components */}
        {skillsData.map((skill) => (
          <SkillItem key={skill.name} name={skill.name} icon={skill.icon} />
        ))}
      </div>
    </section>
  );
}

// Defines a function SkillItem that takes in name and icon as parameters
function SkillItem({ name, icon }) {
  // Returns a div element with specific classes
  return (
    <div className="col-6 col-md-3 col-lg-2 p-0">
      {/* Creates a div element with specific classes and attributes */}
      <div className="d-flex align-items-center justify-content-start">
        {/* Creates an img element with specific classes, source, and alt text */}
        <img className="icon-layout" src={icon} alt={icon} />
        {/* Creates an h3 element with specific classes and render the skill name */}
        <h3 className="heading-m">{name}</h3>
      </div>
    </div>
  );
}