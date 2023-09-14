import "./Home.css";
import Making from "../components/Making";
import ImageSection from "../components/ImageSection";
import Financial from "../components/Financial";

const Home = () => {
  return (
    <>
      <div className="home container-fluid">
        <div className="row">
          <div className="col-12">
            <h1>Connecting All your banking needs</h1>
            <p>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in
              massa egestas mollis varius; dignissim elementum. Mollis tincidunt
              mattis hendrerit dolor eros enim, nisi ligula ornare.
            </p>
            <button className="btn btn-primary btn-lg rounded-0">
              Find Out More
            </button> 
          </div>
        </div>
      </div>
      <Making />
      <ImageSection />
      <Financial />
    </>
  );
};

export default Home;
