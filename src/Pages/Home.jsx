import React from "react";
import Banner from "../Components/Banner";
import BistroBossSection from "./Home/BistroBossSection";
import Category from "./Home/Category";
import PopularMenu from "./Home/PopularMenu";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <BistroBossSection></BistroBossSection>
      <PopularMenu></PopularMenu>
    </div>
  );
};

export default Home;
