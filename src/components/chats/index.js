import React, {useState} from 'react';
import s from './style.module.css'
import {Button, List, ListItem, TextField} from "@mui/material";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addedChatAC, removeChatAC} from "./chatsReducer";
import DeleteIcon from '@mui/icons-material/Delete';

const Chats = () => {
    const chatSelector = useSelector((state) => state.chats)
    const [getID, setGetID] = useState()
    const [value, setValue] = useState('')
    const dispatch = useDispatch()

    const addedChat = (value) => {
        dispatch(addedChatAC(value))
    }

    const removeChat = (id) => {
        dispatch(removeChatAC(id))
    }

    const ChatItems = () => chatSelector?.map((el) => <div className={s.link}>
            <NavLink to={`/chats/${el.id}`} key={el.id}>
                <ListItem alignItems="flex-start" className={`${s.chat_item} ${getID === el.id && s.active}`}
                          onClick={() => setGetID(el.id)}>

                    <h2>{el.name}</h2>

                </ListItem>
            </NavLink>
            <DeleteIcon className={s.delete} onClick={() => removeChat(el.id)}/>
        </div>
    )

    return (
        <div className={s.owner_chats}>
            <div className={s.action_block}>
                <TextField className={s.input} value={value} onChange={(e) => setValue(e.currentTarget.value)}
                           id="outlined-basic"
                           label="Добавить чат" variant="outlined"/>

                <Button className={s.btn} variant="outlined" onClick={() => addedChat(value)}>Добавить чат</Button>
            </div>
            <div className={s.chats}>
                <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
                    <ChatItems/>
                </List>
            </div>
        </div>
    )
};

export default Chats;
