import { NextPage } from "next";
import About from "../components/about";
import Footer from "../components/footer";
import Header from "../components/header";

const AboutPage: NextPage = () => {
  return (
    <>
      <Header />
      <About />
      <Footer />
    </>
  );
};
export default AboutPage;
