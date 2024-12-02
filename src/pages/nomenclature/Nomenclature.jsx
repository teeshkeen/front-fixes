import React from 'react'
import Header from '../../shared/ui/Header'
import Contacts from '../../shared/ui/Contacts'
import Footer from '../../shared/ui/Footer'
import NomenclatureList from './ui/NomenclatureList'
import Wrapper from '../../shared/ui/Wrapper'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import ScrollToTopButton from '../../features/scroll/ui/Scroll'

const Nomenclature = () => {
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

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div>
    <Wrapper>
        <Header />
        <NomenclatureList />
        <Contacts />
        <Footer />
    </Wrapper>
    <ScrollToTopButton />
    </div>
  )
}

export default Nomenclature