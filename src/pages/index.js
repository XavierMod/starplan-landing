import React from "react"
import { Link } from "gatsby"
import { ThemeProvider } from "styled-components";
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import LandingHeader from "../components/Landing/LandingHeader";
import Features from "../components/Landing/Features";
import landingInfo from '../data/landingInfo.json'

const IndexPage = () => {
  return (
    <Layout data={landingInfo}>
      <SEO title="Home" />
      <LandingHeader data={landingInfo} />
      <Features data={landingInfo} />
    </Layout>
    )
}

export default IndexPage
