import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import Button from '../Library/Button'

const StepperWrapper = styled.div`
    text-align: center;
    max-width: 1000px;
    margin: auto;

    .MuiPaper-root {
        background: none;
    }

    span {
        color: white !important;
        font-family: ${props => props.theme.fonts.body} !important;
    }

    .MuiTypography-root.makeStyles-instructions-75.MuiTypography-body1 {
        border: 1px solid red;
    }
`;

const StepperChooser = styled.div`
    padding: 30px 0;
    
    span {
        font-family: ${props => props.theme.fonts.body} !important;
    }
`;

const Buttons = styled.div`
    padding: 30px 0;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Development', 'Alpha', 'Beta', 'Stable release'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return "We are currently working on the development of Starplan. You can follow our latest updates on our subreddit r/Starplan. We'll let our community know when we release a closed Alpha.";
    case 1:
       return "At this stage, we'll have the barebones of Starplan setup and we'll do a closed Alpha for our community members on Reddit soon. Don't miss it out!";
    case 2:
      return "At Beta stage, we'll have the main app ready, but we will work on fixing bugs and other sort of problems. We'll release a crowdfunding campaign, a closed beta for the members of our Reddit community and an open beta.";
    case 3:
        return "When everything is ready, we'll officially release Starplan!";
    default:
      return 'Unknown stepIndex';
  }
}

export default function HorizontalLabelPositionBelowStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <StepperWrapper>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <StepperChooser>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <Buttons>
              {activeStep === 0 ? null : <Button onClick={handleBack} type="bordered" body={"back"} />}
              {activeStep === steps.length - 1 ? null : <Button onClick={handleNext} type="bordered" body={'Next'} />}
            </Buttons>
          </StepperChooser>
        )}
      </div>
    </StepperWrapper>
  );
}