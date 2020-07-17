import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from '../Library/Logo';
import CurrentGameVersion from '../Library/CurrentGameVersion';
import NavBarLinks from './NavBarLinks'
import Button from '../Library/Button';
import {largerThan, smallerThan} from '../../helpers/mediaQueries'

const NavBarWrapper = styled.div`
    position: fixed;
    width: 100%;
    top: 0;
    padding-bottom: 0;
    background: ${props => props.theme.colors.main_bg_dark};
    height: 70px;
    z-index: 1;

    ${smallerThan.tablet`
    `};
`;

const DesktopContent = styled.div`
    max-width: 1200px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    ${smallerThan.tablet`
        display: none;
    `};
`;

const MobileContent = styled.div`
    max-width: 1200px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    position: relative;
    z-index: 10;

    ${largerThan.tablet`
        display: none;
    `};
`;

const Center = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const MenuIcon = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    padding: 22px;
    cursor: pointer;
    transition: all ease .3s;

    &:hover {
        background: ${props => props.theme.colors.main_bg};
    }

    &.active {
        background: ${props => props.theme.colors.main_bg};  
    }

    svg {
        width: 13px;
    }
`;

const MobileMenu = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${props => props.theme.colors.main_bg_dark};
    z-index: 1;
`;

const MobileMenuContent = styled.div`
    margin-top: 80px;
    text-align: center;
`;

const NavBar = (props) => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
        <NavBarWrapper>
            <DesktopContent>
                <Logo />
                <CurrentGameVersion currentGameVersion={props.currentGameVersion} />
                    <NavBarLinks navBarLinks={props.navBarLinks} />
                    <Button 
                        type="bordered" 
                        link="/contact"
                        body="Join the alpha"/>
            </DesktopContent>
            <MobileContent>
                <Center>
                    <Logo />
                </Center>
                <MenuIcon className={showMobileMenu ? "active" : null} onClick={() => setShowMobileMenu(!showMobileMenu)}>
                    {showMobileMenu ? <svg fill="white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg> : <svg fill="white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"/></svg>}
                </MenuIcon>
            </MobileContent>
            {showMobileMenu ? 
                <MobileMenu>
                   <MobileMenuContent>
                        <CurrentGameVersion currentGameVersion={props.currentGameVersion} />
                        <NavBarLinks mobile navBarLinks={props.navBarLinks} />
                    <Button 
                        type="bordered" 
                        link="/contact"
                        body="Join the alpha"/>
                   </MobileMenuContent>
                </MobileMenu> : null}
        </NavBarWrapper>
    )
}

export default NavBar
