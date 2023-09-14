import React from "react";
import plant from "../images/plant.jpg"

const ImageSection = () => {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row pb-5">
          <div className="col-12 col-sm-6 col-md-6 col-lg-6 py-3">
            <h4>Progressive Percentage</h4>
            <p className="pb-3 text-secondary">
              Mollitia placeat modi explicabo voluptatum corporis unde Dicta,
              provident Rem adipisci Mollitia placeat modi.
            </p>
            <h4>Easy Documentation</h4>
            <p className="pb-3 text-secondary">
              Mollitia placeat modi explicabo voluptatum corporis unde Dicta,
              provident Rem adipisci Mollitia placeat modi.
            </p>
            <h4>Competitive Percentage</h4>
            <p className="pb-3 text-secondary">
              Mollitia placeat modi explicabo voluptatum corporis unde Dicta,
              provident Rem adipisci Mollitia placeat modi.
            </p>
          </div>

          <div className="col-12 col-sm-6 col-md-6 col-lg-6 d-flex justify-content-center">
          <img src={plant} className="img rounded-3" alt="plant" width="90%" height="90%" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSection;
