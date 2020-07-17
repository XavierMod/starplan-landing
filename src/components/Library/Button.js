import React from 'react'
import styled from 'styled-components'

const ButtonWrapper = styled.a`
    font-family: ${props => props.theme.fonts.buttons};
    font-weight: bold;
    letter-spacing: -1px;
    border: 1px solid ${props => props.theme.colors.text};
    padding: 20px;
    display: inline-block;
    font-size: ${props => props.theme.fontSizes.paragraphs_small};
    cursor: pointer;
    transition: all ease .3s;
    margin: 10px;
    text-transform: uppercase;

    &:hover {
        background: ${props => props.theme.colors.text};
        color: ${props => props.theme.colors.main_bg};

    }
`;

const ButtonSolid = styled(ButtonWrapper)`
    background: ${props => props.theme.colors.text};
    color: ${props => props.theme.colors.main_bg};

    &:hover {
        background: ${props => props.theme.colors.grey};
        border: 1px solid ${props => props.theme.colors.grey};
        color: ${props => props.theme.colors.text};
    }
`;

const ButtonNavBar = styled(ButtonSolid)`
    padding: 15px;

    &:hover {
        background: ${props => props.theme.colors.grey};
        border: 1px solid ${props => props.theme.colors.grey};
        color: ${props => props.theme.colors.text};
    }
`;

const Button = (props) => {
    if (props.type == 'bordered') {
        return (
            <ButtonWrapper href={props.link} target={props.target} onClick={props.onClick}>
                {props.body}
            </ButtonWrapper>
        )
    } else if (props.type == 'solid') {
        return (
            <ButtonSolid onClick={props.onClick}>
                {props.body}
            </ButtonSolid>
        )
    } else if (props.type == 'navbar') {
        return (
            <ButtonNavBar onClick={props.onClick}>
                {props.body}
            </ButtonNavBar>
        )
    }
}

export default Button
