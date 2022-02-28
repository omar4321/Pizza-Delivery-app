import React from 'react'

import About from '../Components/About/About'
import Banner from '../Components/Banner/Banner'
import Clients from '../Components/Clients/Clients'
import Footer from '../Components/Footer/Footer'
import Menu from '../Components/Menu/Menu'
import Navbarr from '../Components/Navbar/Navbar'

export default function Home() {
  return (
    <div>
        <Navbarr></Navbarr>
        <Banner></Banner>
        <About></About>
        <Clients></Clients>
        <Menu></Menu>
        <Footer></Footer>
    </div>
  )
}
