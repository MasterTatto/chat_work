import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {profileReducer} from "../components/profile/profileReducer";
import {composeWithDevTools} from "redux-devtools-extension";


const combineReducer = combineReducers({
    profile: profileReducer
})


export const store = createStore(combineReducer, composeWithDevTools());

window.store = store