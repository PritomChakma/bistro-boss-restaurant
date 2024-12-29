import React from "react";
import Banner from "../Components/Banner";
import BistroBossSection from "./Home/BistroBossSection";
import Category from "./Home/Category";
import FeaturedItems from "./Home/FeaturedItem/FeaturedItems";
import PopularMenu from "./Home/PopularMenu";
import Review from "./Home/Review/Review";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <BistroBossSection></BistroBossSection>
      <PopularMenu></PopularMenu>
      <FeaturedItems></FeaturedItems>
      <Review></Review>
    </div>
  );
};

export default Home;
