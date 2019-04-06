import Typography from "@material-ui/core/Typography";
import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
    title: {
        marginBottom: theme.spacing.unit,
        fontWeight: 600
    },
    description: {
        marginBottom: theme.spacing.unit
    }
});

function Section({classes, title, description}) {
    return (<div className="section">
        {Boolean(title) &&
            <Typography className={classes.title}>
                {title}
            </Typography>
        }
        {Boolean(description) &&
            <Typography className={classes.description}>
                {description}
            </Typography>
        }
    </div>);
}

export default withStyles(styles)(Section)