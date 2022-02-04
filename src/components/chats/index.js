import React, {useState} from 'react';
import s from './style.module.css'
import {v4 as uuidv4} from 'uuid'
import {List, ListItem} from "@mui/material";

const Chats = () => {
    const [chats, setChats] = useState([{id: uuidv4(), name: 'Bob'}])
    const ChatItems = () => chats.map((el) =>
        <ListItem alignItems="flex-start" key={el.id} className={s.chat_item}>
            <h2>{el.name}</h2>
        </ListItem>
    )

    return (
        <div className={s.chats}>
            <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
                <ChatItems/>
            </List>

        </div>
    );
};

export default Chats;
