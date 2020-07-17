import React from 'react'
import styled from 'styled-components'
import ReCAPTCHA from "react-google-recaptcha";

const FormWrapper = styled.div`
    max-width: 650px;
    margin: 20px auto;
    padding: 0 30px;

    h1 {
        text-align: center;
        padding: 80px 0;
    }

    p {
        margin: 20px 0; 
    }

    label {
        display: block;
        font-weight: 700;
        margin: 5px 0;
        font-size: 12px;
        opacity: 0.9;
    }

    span {
        padding: 10px 0;
        font-size: 12px;
        opacity: 0.5;
        display: inline-block;
    }

    select, input, textarea {
        width: 100%;
        height: 40px;
        background: ${props => props.theme.colors.main_bg_dark};
        border: 0;
        color: white;
        padding: 10px;
    }

    textarea {
        height: 100px;
    }

    button {
        width: 40%;
        height: 50px;
        background: ${props => props.theme.colors.main_bg_dark};
        border: 0;
        color: white;
        cursor: pointer;
        margin: 30px 0;
        font-size: 17px;
        font-family: ${props => props.theme.fonts.headings};
    }
`;

const ContactForm = () => {
    console.log('test', process.env.GATSBY_SITE_RECAPTCHA_KEY);
    console.log('test', process.env.TEST);
    return (
        <FormWrapper>
            <h1>Let's make Starplan together.</h1>
            <form name="contact" method="POST" data-netlify="true">
  <p>
    <label>Your Name: <input type="text" name="name" /></label>   
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Your Role: <select name="role[]" multiple>
      <option value="leader">Leader</option>
      <option value="follower">Follower</option>
    </select></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
        </FormWrapper>
    )
}

export default ContactForm
