import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const TeamWrapper = styled.div`
    margin: 30px 0;
    text-align: center;

    h1 {
        margin: 40px 0;
    }
`;

const TeamSlide = styled.div`
    text-align: left;
    background: ${props => props.theme.colors.main_bg_dark};
    padding: 20px;
    margin: 15px;
    display: inline-block;
    width: 300px;
    max-width: 400px;
    p {
        font-size: 12px;
        margin-top: 10px;
    }

    span {
        display: inline-block;
        margin: 10px 0;
        color: white;
        font-size: 12px;
        text-decoration: underline;
        cursor: pointer;
    }
`;

const TeamSlideOpen = styled.div`
    text-align: left;
    background: none;
    padding: 20px;
    margin: 15px;
    display: inline-block;
    width: 300px;
    max-width: 400px;
    border: 1px solid white;
    p {
        font-size: 12px;
        margin-top: 10px;
    }

    span {
        display: inline-block;
        margin: 10px 0;
        color: white;
        font-size: 12px;
        text-decoration: underline;
        cursor: pointer;
    }
`;

const Disclaimer = styled.p`
    font-size: 11px;
    margin: 60px;
`;

const Team = () => {
    return (
        <TeamWrapper>
            <svg fill="white"xmlns="http://www.w3.org/2000/svg" width="30" viewBox="0 0 24 24"><path d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z"/></svg>
            <h1>Starplan Crew</h1>
            <TeamSlide>
                <a target="_blank" href="https://www.xaviermod.com">
                    <h3>Xavier Mod</h3>
                    <p>Founder, Front-End Design and Development Lead, Project Manager. - Student*</p>
                    <span>Check profile</span>
                </a>
            </TeamSlide>
            <TeamSlide>
                <h3>Aidan Gannon</h3>
                <p>Co-founder, Back-End Development & Server Architecture Lead - Student*</p>
                <span>Check profile</span>
            </TeamSlide>
            <TeamSlideOpen>
                <h3>Open Position!</h3>
                <p>Art Direction Lead, Assets & Graphics Designer - Student*</p>
                <span><Link to="/contact">Join us</Link></span>
            </TeamSlideOpen>
            <TeamSlideOpen>
                <h3>Open Position!</h3>
                <p>Digital Marketing, Digital Strategy Lead - Student*</p>
                <span><Link to="/contact">Join us</Link></span>
            </TeamSlideOpen>
            <Disclaimer>*Starplan is an independent project run by University students. Revenue is not our primary goal, we do this for researching and team experience purposes. We do not have salaries, but we offer a % of equity depending on the position.</Disclaimer>
        </TeamWrapper>
    )
}

export default Team
