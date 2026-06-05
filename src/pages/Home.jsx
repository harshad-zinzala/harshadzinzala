import Introduction from "../components/introduction/Introduction";

import WorkProcess from "../components/workProcess/WorkProcess";
import Portfolio from "../components/portfolio/Portfolio";
import Profession from "../components/profession/Profession";
import Contact from "../components/contact/Contact";
import "../../index.css";

const Home = () => {
  return (
    <div className="relative">
      <div className="introduction-profile-background">
        <div className="content">
          <Introduction />
          
        </div>
      </div>
      <div className="bg-soft-white">
        <WorkProcess />
      </div>
      <div className="bg-soft-white">
        <Profession />
      </div>
      <Portfolio />
      <Contact />
    </div>
  );
};

export default Home;
