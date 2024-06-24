import rings from "../../assets/images/pattern-rings.svg";
import circle from "../../assets/images/pattern-circle.svg";
import Anchor from "../miscellaneous/anchor";
import Button from "../miscellaneous/button";

import cv from "../../assets/cv/resume.pdf";

export default function IntroSection({ dev }) {
  return (
    <section className="container mx-auto">
      <div className="row flex-column flex-lg-row-reverse gap-3 gap-lg-0 align-items-lg-center">
        <DevImage dev={dev} />
        <Description dev={dev} />
      </div>
    </section>
  );
}

function DevImage({ dev }) {
  return (
    <div className="col col-lg-4 d-flex justify-content-center position-relative">
      <img
        src={rings}
        alt={rings}
        className="position-absolute end-50 z-1 mobileRings"
      />
      <div className="img-bg z-2">
        <img
          src={dev.image}
          alt={dev.name}
          className="img-layout img-fluid z-3"
        />
      </div>
      <img
        src={circle}
        alt={circle}
        className="position-absolute top-50 start-50 z-1 mobileRings"
      />
    </div>
  );
}

function Description({ dev }) {
  function handleDownload(url) {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  }
  return (
    <div className="d-flex flex-column gap-3 gap-lg-4 col position-relative">
      <img
        src={rings}
        alt={rings}
        className="position-absolute end-50 z-1 desktopRings"
      />
      <div className="text-center text-lg-start">
        <h1 className="d-flex flex-column heading-lg align-items-center align-items-lg-start">
          <span>Hello! 👋</span>
          <span>
            My name is <span className="text-underline-style">{dev.name}.</span>
          </span>
        </h1>
      </div>
      <div className="text-center text-lg-start col col-lg-9">
        <p>{dev.summary}</p>
      </div>
      <div className="col d-flex flex-column gap-4 align-items-center align-items-lg-start">
        <Button onClick={() => handleDownload(cv)}>DOWNLOAD CV - ENG</Button>
        <Anchor link="#contactForm">CONTACT ME</Anchor>
      </div>
    </div>
  );
}
