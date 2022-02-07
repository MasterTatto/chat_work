import React, {useEffect, useRef, useState} from 'react';
import {Button, TextField} from "@mui/material";
import {v4 as uuidv4} from "uuid";
import {useSelector} from "react-redux";
import {chatMessage} from "./chatMessagesReducer";

const ChatMessage = () => {
    const [value, setValue] = useState('')
    const messageList = useSelector((state) => state.chatMessage)
    const inputRef = useRef();

    // useEffect(() => {
    //     setTimeout(() => {
    //         inputRef.current.focus();
    //     }, 0);
    //
    //     if (messageList.length === 0) return
    //     if (messageList.at(-1).author === 'bot') return
    //
    //     setTimeout(() => {
    //         const newMessage = {id: uuidv4(), author: 'bot', message: 'i am BOOOT'}
    //         setMessageList([...messageList, newMessage])
    //     }, 1000)
    // }, [messageList])
    //
    // const sendMessage = (value) => {
    //     const newMessage = {id: uuidv4(), author: 'user', message: value}
    //     setMessageList([...messageList, newMessage])
    // }

    const MessagesItems = () => messageList?.map((el) =>
        <div key={el.id}
             className={`${'block_message'} ${el.author === 'user' ? 'block_message_user' : 'block_message_bot'}`}>
            <h4 className={'block_message_author'}>{el.author}</h4>
            <p className={'block_message_message'}>{el.message}</p>
        </div>
    )

    return (
        <div className="App">

            <div className={'owner_block_message'}>
                <div className={'wrapper_block_message'}>
                    <MessagesItems/>
                </div>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    // sendMessage(value)
                }} className={'form'}>

                    <TextField
                        id="outlined-multiline-flexible"
                        label="Write message"
                        multiline
                        maxRows={4}
                        value={value}
                        onChange={(e) => {
                            setValue(e.target.value)
                            e.preventDefault()
                        }}
                        inputRef={inputRef}
                    />
                    <Button variant="outlined" type={'submit'}>Send message</Button>
                </form>

            </div>
        </div>
    );
};

export default ChatMessage;
