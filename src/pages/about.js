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
    padding: 100px 30px; 
    text-align: center;

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
          <h1>fds</h1>
          <p>Starplan is a real-time browser multiplayer game (MMO) where players build their own galactic empires.</p>
      </AboutHeader>
      <Stepper />
      <Team />
    </Layout>
    )
}

export default About
