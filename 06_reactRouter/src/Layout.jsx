import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet, useNavigation } from 'react-router-dom'

const Layout = () => {
  const navigation = useNavigation();
  if (navigation.state==="loading") return <h1>Loading....  </h1>
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout
