import React from 'react';
import { Helmet } from 'react-helmet';
import FillInfo from "../components/FillInfo";
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from "../components/Hero";
import OurValue from "../components/OurValue";
import '../styles/index.css';
function Index() {
  return (
    <main className="overflow-hidden">
      <Helmet>
        <title>DEV TEST</title>
      </Helmet>
      <Header />
      <Hero />
      <OurValue />
      <FillInfo />
      <Footer />
    </main>
  );
}

export default Index;
