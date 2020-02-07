import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Background from "../../assets/main.bg.jpg";
import Restaurants from "../../pages/Restaurants";

var sectionStyle = {
  width: "100%",
  minHeight: "600px",
  backgroundImage: `url(${Background})`
};

export default function Layout(props) {
  return (
    <div>
      <Header />
      <section style={sectionStyle}>{props.children}</section>
      <Footer />
    </div>
  );
}
