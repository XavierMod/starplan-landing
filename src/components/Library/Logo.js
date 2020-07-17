import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components'

const LogoWrapper = styled.div`
  width: 150px;
`;

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "images/starplan-logo.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <LogoWrapper>
      <Img fluid={data.file.childImageSharp.fluid} />
    </LogoWrapper>
  )
}

export default Logo
