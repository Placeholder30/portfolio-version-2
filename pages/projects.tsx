import { NextPage } from "next";
import { Fragment } from "react";
import Footer from "../components/footer";
import HomePage from "../components/header";
import Work from "../components/work";

const Project: NextPage = () => {
  return (
    <Fragment>
      <HomePage />
      <Work />
      <Footer />
    </Fragment>
  );
};

export default Project;
