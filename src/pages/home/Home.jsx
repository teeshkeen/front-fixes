import React from 'react'
import About from "./ui/about/About";
import Catalog from "./ui/catalog/Catalog";
import Contacts from "../../shared/ui/Contacts";
import Feedback from "./ui/feedback/Feedback";
import Footer from "../../shared/ui/Footer";
import GetInTouch from "../../features/get-in-touch/GetInTouch";
import Header from "../../shared/ui/Header";
import Lead from "./ui/main/Main";
import Qualities from "./ui/qualities/Qualities";
import Wrapper from '../../shared/ui/Wrapper';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ScrollToTopButton from '../../features/scroll/ui/Scroll';

const Home = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  }, [hash]);
  return (
    <div>
      <Wrapper>
        <Header />
        <Lead /> 
        <About />
        <Qualities />
        <Catalog />
        <GetInTouch />
        <Feedback />
        <Contacts />
        <Footer /> 
        
        </Wrapper>
        <ScrollToTopButton />
    </div>
  )
}

export default Home