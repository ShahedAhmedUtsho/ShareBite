import { useEffect } from "react";
import Bannar from "../Bannar/Bannar";
import Contect from "../Contect/Contect";
import FeaturedSection from "../FeaturedSection/FeaturedSection";
import QnA from "../QnA/QnA";
import SocialMediaShare from "../../SocialShare/SocialShare";


const Home = () => {
  useEffect(() => {
    document.title = "ShareBite";
  }, []);
  return (
    <div className="w-full">
      <Bannar></Bannar>
      <div className=" min-h-32  w-full ">
        <FeaturedSection></FeaturedSection>
        <SocialMediaShare></SocialMediaShare>
        {/* <QnA></QnA> */}
        <div id="#contect">
          <Contect></Contect>
        </div>
      </div>
    </div>
  );
};

export default Home;
