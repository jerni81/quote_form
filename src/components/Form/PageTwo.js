import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Button, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    buttonGroup: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

const PageTwo = ({ setBackPage, setNextPage }) => {
    const { buttonGroup } = useStyles();

    return (
        <div>
            <p>Second page of wizard</p>
            <div className={buttonGroup}>
            <Button variant="contained" onClick={setBackPage} color="secondary">
                <Typography
                    variant="headline"
                    align="center"
                >
                    Back
                </Typography>
            </Button>
            <Button variant="contained" onClick={setNextPage} disabled>
                <Typography
                    variant="headline"
                    align="center"
                >
                    Next
                </Typography>
            </Button>
            </div>
        </div>

    );
};

export default PageTwo;
