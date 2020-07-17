import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Button from '../Library/Button';
import {largerThan, smallerThan} from '../../helpers/mediaQueries'
import { Link } from 'gatsby';

const LandingHeaderWrapper = styled.div`
    height: 620px;
    overflow: hidden;
    position: relative;
    z-index: 0;
`;

const ImageWrapper = styled.div`
    opacity: 0.2;
    margin: auto;
    height: 650px !important;

    div {
      height: 100%;
    }
`;

const CenteredText = styled.div`
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 30px;
    h1 {
      line-height: 60px;
    }

`;

const Content = styled.div`

    svg {
      width: 40px;
      padding: 20px 0;
    }


    p {
      margin: 30px 0;
    }
`;

const Buttons = styled.div`

`;

const LandingHeader = (props) => {
    console.log(props);
    const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "images/landing-header-bg.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
    return (
        <LandingHeaderWrapper>
            <CenteredText>
                <Content>
                <svg fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10.26 4.171c-.58-.286-1.093-.517-1.581-.719.77-2.08 1.882-3.452 3.321-3.452 1.402 0 2.494 1.301 3.26 3.292-.492.211-.998.447-1.572.739-.588-1.567-1.258-2.275-1.688-2.275-.442 0-1.14.75-1.74 2.415zm1.74 18.073c-.429 0-1.1-.708-1.688-2.275-.58.295-1.081.528-1.572.739.767 1.991 1.858 3.292 3.26 3.292 1.439 0 2.551-1.372 3.321-3.452-.485-.201-.997-.431-1.581-.719-.6 1.665-1.298 2.415-1.74 2.415zm-4.708-2.216c-1.917.705-4.778 1.392-5.916-.317-.562-.845-.771-2.468 1.42-5.408.582-.78 1.254-1.545 1.937-2.249 1.531-1.554 3.256-3.05 5.505-4.598-1.083-.596-2.264-1.166-3.416-1.591-1.18-.434-2.219-.675-3.015-.675-.508 0-.886.107-1.009.289-.131.192-.138.783.445 1.842l.21-.012c1.048 0 1.897.865 1.897 1.932s-.85 1.932-1.897 1.932-1.897-.865-1.897-1.932c0-.345.089-.669.246-.95-1.11-1.96-.881-3.139-.419-3.815.324-.476 1.009-1.042 2.424-1.042 2.514 0 5.901 1.66 8.082 2.946 2.214-1.363 5.717-3.16 8.304-3.16 1.421 0 2.106.581 2.431 1.069.562.845.771 2.468-1.42 5.407-3.084 4.137-9.216 8.606-13.912 10.332zm12.538-11.394c1.506-2.019 1.552-3.082 1.366-3.361-.126-.189-.492-.298-1.003-.298-1.953 0-4.926 1.459-6.638 2.447 1.265.837 2.445 1.719 3.522 2.617-.407.413-.834.819-1.271 1.211-1.195-.984-2.523-1.947-3.9-2.811-1.581 1.037-3.173 2.254-4.603 3.551 1.075.951 2.356 1.949 3.721 2.873-.522.331-1.05.648-1.652.98l-.013-.009c-1.144-.811-2.271-1.701-3.316-2.632-2.818 2.878-3.612 4.964-3.239 5.525.126.189.492.298 1.003.298 2.35 0 6.08-2.017 8.287-3.464 2.709-1.776 5.799-4.328 7.736-6.927zm2.377 7.091c.141-.27.22-.577.22-.903 0-1.067-.849-1.932-1.897-1.932s-1.897.865-1.897 1.932.849 1.932 1.897 1.932l.258-.018c.553 1.024.544 1.598.415 1.787-.124.181-.501.288-1.009.288-1.602 0-3.833-.945-5.27-1.658-.48.342-1.077.748-1.659 1.119 1.926 1.037 4.758 2.295 6.929 2.295 1.415 0 2.1-.566 2.424-1.042.461-.674.69-1.85-.411-3.8z"/></svg>
                  <h1>{props.data.landingTitle}</h1>
                  <p>{props.data.landingDescription}</p>
                  <Buttons>
                  <Link to="/contact">
                    <Button 
                      type="solid"
                       body="JOIN THE ALPHA"/>
                  </Link>
                  </Buttons>
                </Content>
            </CenteredText>
            <ImageWrapper>
                <Img 
                    fluid={data.file.childImageSharp.fluid} 
                    imgStyle={{objectPosition: '50% 50%'}}/>
            </ImageWrapper>
        </LandingHeaderWrapper>
    )
}

export default LandingHeader
