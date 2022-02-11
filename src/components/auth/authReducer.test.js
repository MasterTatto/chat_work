import {authReducer, changeInAuth} from "./authReducer";

it('test auth reducer', () => {
    let action = changeInAuth(true)
    let state = {
        inAuth: false,
    }

    let newState = authReducer(state, action)

    expect(newState.inAuth).toBe(true)
})

