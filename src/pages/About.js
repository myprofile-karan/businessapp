import { Link } from "react-router-dom";
import "./About.css";
import AboutCard from "../components/AboutCard";
import ImageSection from "../components/ImageSection";

const About = () => {
  return (
    <>
      <div className="container-fluid imgabout">
        <div className="col-12 col-sm-3 col-md-3 col-lg-3 mx-auto">
          <p>
            <Link to="/" className="text-decoration-none">
              Home
            </Link>
            > About
          </p>
        </div>
      </div>

      <div className="container py-5">
        <div className="row">
          <div className="top">
            <h1>
              We Are Here To Ease The Financial
              <br /> Obstacles
            </h1>
            <p className="text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
              <br /> iste! Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
          </div>
        </div>

        <div className="row gy-2 py-5">
          <AboutCard heading2="Professional Support" />
          <AboutCard heading2="Advice and Guides" />
          <AboutCard heading3="Live Support" />
          <AboutCard heading4="Super Growth" />
        </div>
      </div>
      <div className="container-fluid growimg my-5">
        <div className="container py-5">
          <div className="col-12 col-sm-6 col-md-6 col-lg-6">
            <h1 className="text-white">Easily grow your business save more money</h1>
            <h4 className="text-white py-3">A unique innovative company that will allow you to</h4>
            <p>Qui ducimus vero aliquam odit deserunt voluptatum itaque, enim perspiciatis animi ipsam quasi deleniti nam asperiores ullam, obcaecati veniam, eaque eius consequatur.</p>
          </div>
        </div>
      </div>
      <ImageSection />
    </>
  );
};

export default About;
