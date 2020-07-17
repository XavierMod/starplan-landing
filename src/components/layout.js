/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import NavBar from './NavBar/NavBar'
import "./layout.css"

import { GlobalStyle } from './Styling/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import theme from "./Styling/theme"
import Footer from "./Footer/Footer"

const Layout = (props) => {
  const {currentGameVersion, landingTitle, navBarLinks, socialLinks} = props.data;

  return (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <NavBar 
          currentGameVersion={currentGameVersion} 
          navBarLinks={navBarLinks}
          socialLinks={socialLinks}/>
        <main>{props.children}</main>
        <Footer 
          currentGameVersion={currentGameVersion}  
          navBarLinks={navBarLinks}
          socialLinks={socialLinks}/>
    </ThemeProvider>
  )
}

export default Layout
