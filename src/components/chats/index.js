import React, {useState} from 'react';
import s from './style.module.css'
import {v4 as uuidv4} from 'uuid'
import {List, ListItem} from "@mui/material";

import {NavLink} from "react-router-dom";
import ChatMessage from "../chatMessages";

const Chats = () => {
    const [chats, setChats] = useState([
        {id: uuidv4(), name: 'Bob'},
        {id: uuidv4(), name: 'Alex'},
        {id: uuidv4(), name: 'Andrey'},
        {id: uuidv4(), name: 'Oleg'},
    ])
    const [getID, setGetID] = useState()

    const ChatItems = () => chats.map((el) =>
        <NavLink to={`/chats/${el.id}`}>
            <ListItem alignItems="flex-start" key={el.id} className={`${s.chat_item} ${getID === el.id && s.active}`}
                      onClick={() => setGetID(el.id)}>

                <h2>{el.name}</h2>

            </ListItem>
        </NavLink>
    )

    return (
        <div className={s.chats}>
            <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>

                <ChatItems/>

            </List>
        </div>
    )
};

export default Chats;
