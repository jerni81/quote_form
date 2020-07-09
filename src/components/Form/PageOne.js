import React from 'react';
import {Button, TextField, Typography} from "@material-ui/core";

const PageOne = ({ values, handleChange, setNextPage }) => {
    return (
        <>
            <TextField
                id="standard-basic"
                className="formField"
                label="First Name"
                variant="filled"
                name="fName"
                value={values.fName}
                onChange={handleChange}
            />
            <TextField
                id="standard-basic"
                className="formField"
                label="Last Name"
                variant="filled"
                name="lName"
                value={values.lName}
                onChange={handleChange}
            />
            <TextField
                id="standard-basic"
                className="formField"
                label="Buisness Name"
                variant="filled"
                name="business"
                value={values.business}
                onChange={handleChange}
            />
            <Button variant="contained" onClick={setNextPage}>
                <Typography
                    variant="headline"
                    align="center"
                >
                    Next
                </Typography>
            </Button>
        </>
    );
};

export default PageOne;
