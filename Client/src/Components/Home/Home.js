import React from "react";
import HomeLandingContainer from "./HomeLandingContainer";
import CardBelowHome from "./CardBelowHome";
import PlanningToAdoptAPet from "./PlanningToAdoptAPet";

const Home = (props) => {
  return (
    <>
      <CardBelowHome/>
      <HomeLandingContainer description={props.description} />
      <PlanningToAdoptAPet />
    </>
  );
};

export default Home;


/*
const Home = (props) => {
  return (
    <>
      <HomeLandingContainer description={props.description} />
      
      <PlanningToAdoptAPet />
    </>
  );
};
*/