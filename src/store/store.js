import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {profileReducer} from "../components/profile/profileReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {chats} from "../components/chats/chatsReducer";
import {chatMessage} from "../components/chatMessages/chatMessagesReducer";
import thunkMiddleware from 'redux-thunk'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
    key: 'root',
    storage,
}

const combineReducer = combineReducers({
    profile: profileReducer,
    chats: chats,
    chatMessage: chatMessage
})

const persistedReducer = persistReducer(persistConfig, combineReducer)


export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));
export const persister = persistStore(store)
// export const store = createStore(combineReducer, applyMiddleware(thunkMiddleware));

window.store = store