import React, { useState } from 'react';
import styled from 'styled-components'
import Button from '../Library/Button';

const FeaturesWrapper = styled.div`
    text-align: center;
    padding: 60px 30px;

    svg {
      width: 40px;
      padding-bottom: 20px;
    }
`;

const FeaturesBlocks = styled.div`
    padding: 30px 0;
    max-width: 1200px;
    margin: auto;
`;

const FeatureBlock = styled.div`
    display: inline-block;
    padding: 40px;
    width: 300px;
    margin: 20px;
    background-image: linear-gradient(#1C262C, #151A1D);
    border-radius: 10px;
    position: relative;
    z-index: 0;

    h3 {
        margin: 20px 0;
    }
`;

const IconWrapper = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    z-index: -1;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 35px;
        position:relative; 
        opacity: 0.4;
        margin-top: 15px;
    }    
`;

const SeeMoreWrapper = styled.div`
    display: block;
`;

const Features = (props) => {
    const [count, setCount] = useState(props.data.features);
    const [showMore, setShowMore] = useState(false);

    const renderFirstPosts = () => {
        return count.map((el, ind, arr) => {
            if (ind < 3) {
                return (
                    <FeatureBlock>
                        <IconWrapper>
                            <img src={el.icon} />
                        </IconWrapper>
                        <h3>{el.title}</h3>
                        <p>{el.description}</p>
                    </FeatureBlock>
                )
            }
        })
    }

    const renderAllPosts = () => {
        return count.map((el, ind, arr) => {
            return (
                <FeatureBlock>
                    <IconWrapper>
                        <img src={el.icon} />
                    </IconWrapper>
                    <h3>{el.title}</h3>
                    <p>{el.description}</p>
                </FeatureBlock>
            )
        })
    }

    return (
        <FeaturesWrapper>
            <svg fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524v-12.005zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z"/></svg>
            <h1>Browser games aren't dead</h1>
            <FeaturesBlocks>
                {showMore ? renderAllPosts() : renderFirstPosts()}
                {showMore == false ? <SeeMoreWrapper><Button onClick={() => setShowMore(true)}type="bordered" body="SEE MORE FEATURES" /></SeeMoreWrapper> : null}
            </FeaturesBlocks>
        </FeaturesWrapper>
    )
}

export default Features
