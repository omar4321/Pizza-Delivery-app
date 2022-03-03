import React from 'react'

import About from '../Components/About/About'
import Banner from '../Components/Banner/Banner'
import Clients from '../Components/Clients/Clients'
import ClientSection from '../Components/ClientSection/ClientSection'
import Footer from '../Components/Footer/Footer'
import Menu from '../Components/Menu/Menu'
import Navbarr from '../Components/Navbar/Navbar'
import Restaurant from '../Components/Restaurant/Restaurant'
import Services from '../Components/Services/Services'
import Shop from '../Components/Shop/Shop'

export default function Home() {
  return (
    <div id='home'>
        <Navbarr></Navbarr>
        <Banner></Banner>
        <About></About>
        <Clients></Clients>
        <Menu></Menu>
        <Services></Services>
        <Shop></Shop>
        <Restaurant></Restaurant>
        <ClientSection></ClientSection>
        <Footer></Footer>
    </div>
  )
}
