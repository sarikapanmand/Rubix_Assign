import React from 'react';
import './Home.css';
import Header from './Components/Header';
import Banner from './Components/Banner';
import AboutUs from './Components/AboutUs';
import TechForTeens from './Components/TechForTeens';
import ContactUs from '.Components/ContactUs';
import Footer from './Components/Footer';
function Home() {
  return (
    <div>
        <section><Header/></section>
        <section><Banner/></section>
        <section><AboutUs/></section>
        <section><TechForTeens/></section>
        <section><ContactUs/></section>
        <section><Footer/></section>
    </div>
  )
}

export default Home;
