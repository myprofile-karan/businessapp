import MakingCard from "./MakingCard";
import "./Making.css";

const Making = () => {
  

  return (
    <div className="container-fluid py-5">
      <div className="container py-4">
        <div className="top">
          <h1>
            Making Internet A Brand New Experience
          </h1>
          <p className="text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
            <br /> iste! Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
        </div>
        <div className="row py-5">
          <MakingCard heading1="Online Business" />
          <MakingCard heading2="Business Plan" />
          <MakingCard heading3="Mobile Bank" />
          <MakingCard heading4="Online Deposite" />
        </div>
      </div>
    </div>
  );
};

export default Making;
