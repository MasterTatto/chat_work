import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {profileReducer} from "../components/profile/profileReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {chats} from "../components/chats/chatsReducer";
import {chatMessage} from "../components/chatMessages/chatMessagesReducer";


const combineReducer = combineReducers({
    profile: profileReducer,
    chats: chats,
    chatMessage: chatMessage
})


export const store = createStore(combineReducer, composeWithDevTools());

window.store = store