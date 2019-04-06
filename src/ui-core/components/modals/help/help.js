import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import Nitrates from './steps/nitrates';
import Ecoli from './steps/ecoli';
import Fibi from './steps/fibi';
import Dialog from '@material-ui/core/Dialog';
import {connect} from 'react-redux';
import {actions} from '../../../dux/appState';

const tutorialSteps = [
    Nitrates,
    Ecoli,
    Fibi
];

const styles = theme => ({
    root: {
        maxWidth: 400,
        flexGrow: 1,
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        height: 50,
        paddingLeft: theme.spacing.unit * 4,
        backgroundColor: theme.palette.background.default,
    },
    img: {
        height: 255,
        maxWidth: 400,
        overflow: 'hidden',
        display: 'block',
        width: '100%',
    },
});

function HelpStepper({classes, isOpen, hideHelpModal}) {
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = tutorialSteps.length;

    function renderStep() {
        const Step = tutorialSteps[activeStep];
        return <Step/>;
    }

    function handleNext() {
        setActiveStep(activeStep + 1)
    }

    function handleBack() {
        setActiveStep(activeStep - 1)
    }

    return (
        <Dialog open={isOpen} onClose={hideHelpModal}>
            <div className={classes.root}>
                {renderStep()}
                <MobileStepper
                    steps={maxSteps}
                    position="static"
                    activeStep={activeStep}
                    className={classes.mobileStepper}
                    nextButton={
                        <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                            Next
                        </Button>
                    }
                    backButton={
                        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                            Back
                        </Button>
                    }
                />
            </div>
        </Dialog>

    );
}

const mapStateToProps = state => ({
    isOpen: state.appState.showHelpModal
});

const StyledComponent = withStyles(styles, { withTheme: true })(HelpStepper)
export default connect(mapStateToProps, actions)(StyledComponent);