import React from "react";
import Banner from "./Banner";
import BusinessStat from "./BusinessStat";
import Footer from "./Footer";
import Tools from "./Tools";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Tools></Tools>
      <BusinessStat></BusinessStat>
      <Footer></Footer>
    </div>
  );
};

export default Home;
