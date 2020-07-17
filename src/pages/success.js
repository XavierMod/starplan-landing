import React from 'react'
import Layout from "../components/layout"
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Button from '../components/Library/Button';
import landingInfo from '../data/landingInfo.json'

const SuccessWrapper = styled.div`
    text-align: center;
    padding: 100px 0;

    svg {
        margin-bottom: 20px;
    }

    span {
        display: inline-block;
        margin: 30px;
    }
`;

const success = () => {
    return (
        <Layout data={landingInfo}>
            <SuccessWrapper>
                <svg fill="white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>
                <h3>Amazing! You've contacted us!</h3>
                <span>We will take around 24-48 hours to reply.</span>
                <br />
                <Button 
                      type="bordered"
                      body="Take me home"
                      link="/" />
            </SuccessWrapper>
        </Layout>
    )
}


export default success
