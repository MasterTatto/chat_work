import React from 'react';
import {Checkbox} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {changeCheckboxAC} from "./profileReducer";
import {Navigate} from 'react-router-dom';
import CheckBox from "./checkbox";

const Profile = () => {
    const dispatch = useDispatch()
    const inAuth = useSelector((state) => state.authReducer.inAuth)
    const checked = useSelector((state) => state.profile.checked)

    const changeCheckBox = (checked) => dispatch(changeCheckboxAC(checked))


    if (!inAuth) return <Navigate to={'/login'}/>

    return (
        <div>
            <CheckBox changeCheckBox={changeCheckBox} checked={checked}/>
        </div>
    );
};

export default Profile;
