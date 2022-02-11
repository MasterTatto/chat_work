import React from 'react';
import {Checkbox} from "@mui/material";

const CheckBox = ({checked, changeCheckBox}) => {
    return (
        <>
            <h1>Портфолио</h1>
            <Checkbox checked={checked} onChange={(e) => changeCheckBox(e.currentTarget.checked)}/>
        </>
    )
        ;
};

export default CheckBox;
