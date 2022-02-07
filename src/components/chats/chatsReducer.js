import {v4 as uuidv4} from "uuid";

const initialState = [
    {id: uuidv4(), name: 'Bob'},
    {id: uuidv4(), name: 'Alex'},
    {id: uuidv4(), name: 'Andrey'},
    {id: uuidv4(), name: 'Oleg'},
]


export const chats = (state = initialState, action) => {
    switch (action.type) {

        case 'ADDED_CHAT': {
            const newChat = {id: uuidv4(), name: action.name}
            return [...state, newChat]
        }

        case 'REMOVE_CHAT' : {
            return [...state.filter((f) => f.id !== action.id)]
        }
        default:
            return state
    }
}

export const addedChatAC = (name) => {
    return {
        type: 'ADDED_CHAT', name
    }
}

export const removeChatAC = (id) => {
    return {
        type: 'REMOVE_CHAT', id
    }
}