export default function Header({ devData }) {
  return (
    <header>
      <SocialMedia socialMedia={devData.basics} />
    </header>
  );
}

function SocialMedia({ socialMedia }) {
  return (
    <div className="container">
      <div className="row py-2 py-lg-4 py-lg-2 gap-4 justify-content-center align-items-center">
        <div className="col-6 col-lg text-center text-lg-start">
          <h3 className="heading-dev">
            Rayshawn<span className="brand-color">.</span>Jones
          </h3>
        </div>
        <div className="col-6 col-lg">
          <ul className="d-flex align-items-center p-0 m-lg-0 justify-content-center justify-content-lg-end gap-5">
            {socialMedia.profiles.map((profile) => (
              <li className="list-style" key={profile.network}>
                <a href={profile.url}>
                  <img src={profile.icon} alt={profile.network} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
