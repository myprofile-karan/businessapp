import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div> 
      <nav className="navbar navbar-expand-lg bg-body-tertiary py-2">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/businessapp">
            <span>
              <i className="fa-solid fa-building-columns text-primary fs-2"><span className="ms-2 fs-4">Easy Cash</span></i>
            </span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
              <li className="nav-item active">
                <Link to="/businessapp" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">Contacts</Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">132456789</Link>
              </li>
            </ul>
            <button className="btn btn-primary btn-md">Get Started</button>

          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
