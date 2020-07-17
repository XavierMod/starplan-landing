import React from 'react'
import styled from 'styled-components'
import { Link } from "gatsby"

const CurrentGameVersionWrapper = styled.div`
    display: inline-block;
    padding: 10px;
    background: ${props => props.theme.colors.grey};
    font-size: ${props => props.theme.fontSizes.paragraphs_small};
    border-radius: 3px;
    margin: 0 20px;

    h3 {
        font-size: ${props => props.theme.fontSizes.paragraphs_small};
        display: inline-block;
        margin-right: 5px;
    }
`;

const Circle = styled.div`
    border-radius: 100px;
    width: 10px;
    height: 10px;
    background: ${props => props.color};
    display: inline-block;
    margin-right: 5px;
`;

const JoinButton = styled.span`
    a {
        color: ${props => props.theme.colors.text};
        background: ${props => props.theme.colors.main_bg};
        padding: 2px 5px;
        border-radius: 2px;
        margin: 10px;
    }
`;

const CurrentGameVersion = (props) => {
    if (props.currentGameVersion == 'preAlpha') {
        return (
            <CurrentGameVersionWrapper>
                <Circle color="#3955F8" />
                <h3>Status:</h3> pre-alpha
                <JoinButton><Link to="/contact">Join</Link></JoinButton>
                </CurrentGameVersionWrapper>
        )
    } else if (props.currentGameVersion == 'alpha') {
        return (
            <CurrentGameVersionWrapper>
                <Circle color="#1A84EB" />
                <h3>Status:</h3> Alpha
                <JoinButton><Link to="/contact">Join</Link></JoinButton>
                </CurrentGameVersionWrapper>
        )
    } else if (props.currentGameVersion == 'beta') {
        return (
            <CurrentGameVersionWrapper>
                <Circle color="#28BD93" />
                <h3>Status:</h3> Beta
                <JoinButton><Link to="/contact">Join</Link></JoinButton>
                </CurrentGameVersionWrapper>
        )
    } else if (props.currentGameVersion == 'closedBeta') {
        return (
            <CurrentGameVersionWrapper>
                <Circle color="#28BD93" />
                <h3>Status:</h3> Closed Beta
                </CurrentGameVersionWrapper>
        )
    } else if (props.currentGameVersion == '1') {
        return (
            <CurrentGameVersionWrapper>
                <Circle color="#09CF65" />
                <h3>Status:</h3> v{props.currentGameVersion}.0
                <JoinButton><Link to="/contact">Play</Link></JoinButton>
                </CurrentGameVersionWrapper>
        )
    } else {
        return (
            <span>Status unavailable</span>
        )
    }
}

export default CurrentGameVersion
