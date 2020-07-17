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
    }

    a.active {
        opacity: 1;
        border-bottom: 5px solid white;
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

const NavBarLinks = (props) => {
    console.log(props);
    if (props.mobile) {
        return (
            <NavBarLinksWrapperMobile>
                {props.navBarLinks.map((el, ind, arr) => {
                    return (
                        <>
                            <NavBarLink>
                                <Link to={el.path} activeClassName="active">{el.linkName}
                                </Link>
                            </NavBarLink>
                        </>
                    )
                })}
            </NavBarLinksWrapperMobile>
        )
    } else {
        return (
            <NavBarLinksWrapper>
                {props.navBarLinks.map((el, ind, arr) => {
                    return (
                        <>
                            <NavBarLink>
                                <Link to={el.path} activeClassName="active">{el.linkName}
                                </Link>
                            </NavBarLink>
                        </>
                    )
                })}
            </NavBarLinksWrapper>
        )
    }
}

export default NavBarLinks
