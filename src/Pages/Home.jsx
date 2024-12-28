import React from "react";
import Banner from "../Components/Banner";
import BistroBossSection from "./Home/BistroBossSection";
import Category from "./Home/Category";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <BistroBossSection></BistroBossSection>
    </div>
  );
};

export default Home;
