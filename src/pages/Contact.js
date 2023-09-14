import "./Contact.css";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <div className="container-fluid imgcontact">
        <div className="col-3 mx-auto">
          <p>
            <Link to="/" className="text-decoration-none">
              Home
            </Link>
            Contact
          </p>
        </div>
      </div>
      <div className="container py-5">
        <div className="row">
          <div className="top">
            <h1>Get In Touch</h1>
            <p className="text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
              <br /> iste! Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
          </div>
        </div>

        <div className="row py-5 gy-5">
          <div className="col-6 col-sm-4 col-md-4 col-lg-4 py-0">
            <i className="fa fa-phone fs-5"></i>
            <span className="ms-2 fs-4">Call Us</span>
            <br />
            <span>+123 45 67 89</span>
          </div>
          <div className="col-6 col-sm-4 col-md-4 col-lg-4">
            <i className="fa fa-envelope fs-5"></i>
            <span className="ms-2 fs-4">Email Us</span>
            <br />
            <span>example@mail.com</span>
          </div>
          <div className="col-12 col-sm-4 col-md-4 col-lg-4">
            <i className="fa fa-location-dot fs-5"></i>
            <span className="ms-2 fs-4">Address</span>
            <br />
            <span>
              California, #32841 block, #221DRS 75 West Rock, Maple Building,
              UK.
            </span>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mb-5">
        <div className="col-12 col-sm-6 col-md-6 col-lg-6">
          <form>
            <div class="row">
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="First name"
                />
              </div>
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Last name"
                />
              </div>
            </div>
            <div className="row my-3">
              <div className="col-12">
                <input type="text" class="form-control" placeholder="Subject" />
              </div>
              <div className="col-12 mt-4">
                <textarea className="form-control" value="Messages.." id="" cols="83" rows="7"></textarea>
              </div>
            </div>
          </form>
        </div>

        <div className="col-12 col-sm-6 col-md-6 col-lg-6">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.903271501525!2d77.08625617538321!3d28.692539975632055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d041b31428bbf%3A0xf1d36f88f7f129cf!2sM.Computer%20Academy!5e0!3m2!1sen!2sin!4v1686061388429!5m2!1sen!2sin" width="100%" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="googleMap"></iframe>
        </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
