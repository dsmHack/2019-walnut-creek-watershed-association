import React from 'react';
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import withStyles from '@material-ui/core/styles/withStyles';

const warning = "A single data point can never give a full picture of water quality";

const styles = theme => ({
    title: {
        paddingBottom: 0
    },
    warning: {
        marginTop: theme.spacing.unit * 2,
        color: theme.palette.grey[500]
    }
});

function Step({classes, header, children}) {
    return <>
        <CardHeader title={header} className={classes.title}/>
        <CardContent>
            {children}
            <Typography className={classes.warning}>{warning}</Typography>
        </CardContent>
    </>
}

export default withStyles(styles)(Step);