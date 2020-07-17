import React from 'react'
import styled from 'styled-components'
import Button from '../Library/Button';

const SubFooterWrapper = styled.div`
    max-width: 700px;
    margin: auto;
    background: linear-gradient(#121618, #1e2429);
    padding: 40px;
    -moz-border-radius: 0px;
    -webkit-border-radius: 3px 3px 0px 0px;
    border-radius: 10px 10px 0px 0px;
    text-align: center;

    h1 {
        text-align: center;
        font-size: 23px;
    }
`;

const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;

    img {
        margin-right: 10px;
    }
`;

const SubFooter = () => {
    return (
        <SubFooterWrapper>
            <Title>
                <img width="20px" style={{filter: 'invert()'}} src="https://simpleicons.org/icons/reddit.svg" />
                <h1>Follow us r/StarPlan</h1>
            </Title>
                <p>We post on Reddit our latest news about the game and try to answer as many questions as possible.</p>
                <br />
            <Button 
                body="OPEN REDDIT"
                link="https://www.reddit.com/r/starplan/"
                target="_blank"
                type="bordered" />
        </SubFooterWrapper>
    )
}

export default SubFooter
