import "./MakingCard.css";

const MakingCard = (props) => {
  return (
    <div className="col-12 col-sm-6 col-md-6 col-lg-3 gy-3">
      <div className="card">
        <i className="fa fa-desktop fs-1"></i>
        <h4>{props.heading1}{props.heading2}{props.heading3}{props.heading4}</h4>
        <p className="text-secondary">
          Vivamus a ligula quam. Duis feugiat tortor sed Ut blandit. Duis
          feugiat tortor sed.
        </p>
        <a href="#">Read More</a>
      </div>
    </div>
  );
};

export default MakingCard;
