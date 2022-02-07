import React from 'react';
import s from './style.module.css'
import {useDispatch, useSelector} from "react-redux";
import {getRandomFoxTC} from "./randomFoxReducer";
import {Button} from "@mui/material";

const RandomFox = () => {
    const dispatch = useDispatch()
    const getRandom = () => dispatch(getRandomFoxTC())
    const img = useSelector((state) => state.randomFoxReducer)
    console.log(img)
    return (
        <div>
            <div className={s.img} style={{backgroundImage: `url(${img.img})`}}/>
            <Button variant="outlined" onClick={getRandom}>
                check
            </Button>
        </div>
    );
};

export default RandomFox;
