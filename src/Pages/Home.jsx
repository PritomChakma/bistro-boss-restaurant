import React from "react";
import Banner from "../Components/Banner";
import BistroBossSection from "./Home/BistroBossSection";
import Category from "./Home/Category";
import FeaturedItems from "./Home/FeaturedItem/FeaturedItems";
import PopularMenu from "./Home/PopularMenu";
import Review from "./Home/Review/Review";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
       <Helmet>
              <title>Bistro Boss / Home</title>
            </Helmet>
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
