import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const NavBarLinksWrapper = styled.ul`
    display: flex;
    flex: 10;
    justify-content: center;
    font-size: ${props => props.theme.fontSizes.paragraphs_small};
`;

const NavBarLink = styled.li`
    display: inline-block;

    a {
        border-bottom: 0;
        display: inline-block;
        padding: 0 18px;
        opacity: 0.5;
        padding: 20px;
        transition: all ease .3s;
    }

    a.active {
        opacity: 1;
        border-bottom: 5px solid white;
    }

    svg {
        width: 15px;
    }

    a:hover {
        opacity: 1;
    }
`;

const NavBarLinksWrapperMobile = styled.ul`
    text-align: right;
    padding-right: 30px;
    
    li {
        display: block;
        font-size: 20px;

        a {
            border-bottom: 0;
            display: inline-block;
            padding: 0 18px;
            opacity: 0.5;
            padding: 20px;
        }

        a.active {
            opacity: 1;
            border-bottom: 0;
            font-weight: 700;
        } 
    }
`;

const StyleADesktop = styled.a`
    display: flex;
    width: 100%;
    top: -5px;
    position: relative;
    justify-content: center;
    align-items: center;

    span {
        margin: 0 5px;
    }
`;

const NavBarLinks = (props) => {
    console.log(props);
    if (props.mobile) {
        return (
            <NavBarLinksWrapperMobile>
                {props.navBarLinks.map((el, ind, arr) => {
                    if (el.external) {
                        return (
                            <>
                                <NavBarLink>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24"><path d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"/></svg>
                                    <a target="_blank" href={el.path} activeClassName="active">{el.linkName}
                                    </a>
                                </NavBarLink>
                            </>
                        )
                    } else {
                        return (
                            <>
                                <NavBarLink>
                                    <Link to={el.path} activeClassName="active">{el.linkName}
                                    </Link>
                                </NavBarLink>
                            </>
                        )
                    }
                })}
            </NavBarLinksWrapperMobile>
        )
    } else {
        return (
            <NavBarLinksWrapper>
                {props.navBarLinks.map((el, ind, arr) => {
                    if (el.external) {
                        return (
                            <>
                                <NavBarLink>
                                    <StyleADesktop target="_blank" href={el.path} activeClassName="active">
                                        <span>{el.linkName}</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24"><path d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"/></svg>
                                    </StyleADesktop>
                                </NavBarLink>
                            </>
                        )
                    } else {
                        return (
                            <>
                                <NavBarLink>
                                    <Link to={el.path} activeClassName="active">{el.linkName}
                                    </Link>
                                </NavBarLink>
                            </>
                        )
                    }
                })}
            </NavBarLinksWrapper>
        )
    }
}

export default NavBarLinks
