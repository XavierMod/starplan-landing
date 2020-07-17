import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'
import Logo from '../Library/Logo';
import CurrentGameVersion from '../Library/CurrentGameVersion';
import SubFooter from './SubFooter'
import {largerThan, smallerThan} from '../../helpers/mediaQueries'

const MainFooterWrapper = styled.div`
    font-size: ${props => props.theme.fontSizes.paragraphs_small};
    background: ${props => props.theme.colors.main_bg_dark};
`;

const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    ${smallerThan.tablet`
        display: none;
    `};
`;

const FooterWrapper = styled.div`
    padding: 50px;
    display: flex;

    ${smallerThan.tablet`
        display: block;
        text-align: center;
        padding: 0;
    `};
`;

const FooterLayout = styled.div`
    max-width: 1200px;
    margin: auto;
`;

const Column = styled.div`
    flex: 25%;
    padding: 10px;
    display: ${props => props.justifyContent ? 'flex': 'block'};
    justify-content: ${props => props.justifyContent};

    ${smallerThan.tablet`
        display: block;
        padding: 10px;
        padding-top: 3px;
    `};

    p {
        font-size: ${props => props.theme.fontSizes.paragraphs_small};

    }
`;

const Desc = styled.div`
    margin-top: 20px;
    opacity: 0.6;

    ${smallerThan.tablet`
        display: none;
    `};
`;

const Copyright = styled.div`
    font-size: ${props => props.theme.fontSizes.paragraphs_small};
    padding: 50px;
    background: ${props => props.theme.colors.main_bg_dark};

    ${smallerThan.tablet`
        text-align: center;
        padding: 20px 20px;
        background: ${props => props.theme.colors.main_bg};
        opacity: 0.9;
    `};
`;

const NavBarLinks = styled.div`
    a {
        display: block;
        margin-bottom: 10px;
    }

    ${smallerThan.tablet`
        display: none;
    `};
`;

const SocialLinks = styled.div`
    img {
        margin-right: 10px;
    }

    ${smallerThan.tablet`
        display: none;
    `};
`;

const Footer = (props) => {
    return (
        <>
        <SubFooter />
            <MainFooterWrapper>
                <FooterLayout>
                    <FooterWrapper>
                        <Column>
                            <LogoWrapper>
                                <Logo />
                            </LogoWrapper>
                            <Desc>Starplan is a real-time browser multiplayer game (MMO) where players build their own galactic empires.</Desc>
                        </Column>
                        <Column>
                            <NavBarLinks>
                                {props.navBarLinks.map((el, ind, arr) => {
                                    return <Link to={el.path}>{el.linkName}</Link>
                                })}
                            </NavBarLinks>
                        </Column>
                        <Column>
                            <CurrentGameVersion currentGameVersion={props.currentGameVersion} />
                        </Column>
                        <Column justifyContent="flex-end">
                            <SocialLinks>
                                {props.socialLinks.map((el, ind, arr) => {
                                    return(
                                        <Link to={el.path}>
                                            <img width="15px" style={{filter: 'invert()'}}src={el.icon} />
                                        </Link>
                                    )
                                })}
                            </SocialLinks>
                        </Column>
                    </FooterWrapper>
                    <Copyright>
                    © {new Date().getFullYear()} 
                        {' '}Starplan. All rights reserved. Created by <a style={{textDecoration: 'underline'}}href="https://www.xaviermod.com" target="_blank">Xavier Mod</a> and co-created by Aidan Gannon.
                    </Copyright>
                </FooterLayout>
            </MainFooterWrapper>
        </>
    )
}

export default Footer
