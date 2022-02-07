import React from 'react';
import {Route, Routes} from "react-router-dom";

import Profile from "../components/profile";
import ChatMessageContainer from "../components/chatMessages/containerChatMessages";
import ContainerChat from "../components/chats/containerChat";


const Routers = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Profile/>}/>
            <Route path={'/chats'} element={<ContainerChat/>}/>

            <Route path={'/chats/:id'} element={
                <div className={'route_chats'}>
                    <ContainerChat/>
                    <ChatMessageContainer/>
                </div>
            }/>

            <Route path={'/profile'} element={<Profile/>}/>
        </Routes>
    );
};

export default Routers;
