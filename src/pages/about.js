import React from "react"
import { Link } from "gatsby"
import { ThemeProvider } from "styled-components";
import { graphql } from 'gatsby';
import styled from 'styled-components'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Stepper from '../components/About/Stepper'
import Team from "../components/About/Team";
import landingInfo from '../data/landingInfo.json'

const AboutHeader = styled.div`
    padding: 150px 30px; 
    text-align: center;
    max-width: 700px;
    margin: auto;

    h1 {
      padding: 20px 0;
    }
`;

const TextWrapper = styled.div`
    max-width: 600px;
    margin: 30px auto;
    padding: 30px;
`;

const About = () => {
  return (
    <Layout data={landingInfo}>
      <SEO title="About" />
      <AboutHeader>
          <h1>We're bringing back browser games</h1>
          <br />
          <p>Build your own empire by conquesting other player's regions, trading, spying, researching technology, crafting perks... and much more!</p>
          <br />
          <p>Starplan takes inspiration of those text-based browser games that defined the 2000s such as Ogame, Grepolis, Ikariam... and pushes the medium forward by implementing highly innovative and modern new functionalities.</p>
          <br />
          <p>Starplan is an independent project (no big names behind it), and can be downloaded or played directly in the browser.</p>
          <br />
      </AboutHeader>
      <Stepper />
      <Team />
    </Layout>
    )
}

export default About
