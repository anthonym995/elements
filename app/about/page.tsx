import React from "react";
import AboutTitle from "./components/AboutTitle";
import AboutDetails from "./components/AboutDetails";
import Cta from "./components/Cta";

export default function page() {
  return (
    <React.Fragment>
      <AboutTitle />
      <AboutDetails />
      <Cta />
    </React.Fragment>
  );
}
