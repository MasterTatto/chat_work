import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../components/home";
import Chats from "../components/chats";
import Profile from "../components/profile";
import ChatMessage from "../components/chatMessages";


const Routers = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/chats'} element={<Chats/>}/>
            <Route path={'/chats/:id'} element={
                <div className={'route_chats'}>
                    <Chats/>
                    <ChatMessage/>
                </div>
            }/>
            <Route path={'/profile'} element={<Profile/>}/>
        </Routes>
    );
};

export default Routers;
