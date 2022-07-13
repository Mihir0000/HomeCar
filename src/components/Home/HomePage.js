import React from "react";
import Header from "../Header/header";
import Footer from "../Footer/Footer";
import Health from "../Health/Health";
import Knowledge from "../Knowledge/Knowledge";
import News from "../News/News";
import Contact from "../Contact/Contact";
import Client from "../Client/Client";
import Data from "../../Data/Data"
const HomePage = () => {
  console.log(Data);
  return (
    <div>
      <Header/>
      <Health text = {Data.text}/>
      <Knowledge/>
      <News time = {Data.time}/>
      <Contact author = {Data.author}/>
      <Client/>
      <Footer email={Data.email} phone= {Data.phone} address = {Data.address} />
    </div>
  );
};

export default HomePage;
