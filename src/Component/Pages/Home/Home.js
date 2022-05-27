import React from "react";
import Banner from "./Banner";
import Carousel from "./Carousel";
import BusinessStat from "./BusinessStat";
import Footer from "./Footer";
import Reviews from "./Reviews";
import Tools from "./Tools";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div>
      <Carousel></Carousel>
      <BusinessStat></BusinessStat>
      <Tools></Tools>
      <Banner></Banner>
      <Testimonial></Testimonial>
      <Reviews></Reviews>
      <Footer></Footer>
    </div>
  );
};

export default Home;
