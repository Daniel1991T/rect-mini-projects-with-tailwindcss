import { SET_LOADING, GET_USERS, SET_ERROR, REMOVE_ERROR } from "./action"

export const reducer = (state, action) => {
    if (action.type === SET_LOADING) {
        return {
            ...state,
            isLoading: true
        }
    }
    if (action.type === SET_ERROR) {
        return {
            ...state,
            isLoading: false,
            error: action.payload
        }
    } if (action.type === REMOVE_ERROR) {
        return {
            ...state,
            error: ''
        }
    }
    if (action.type === GET_USERS) {
        return {
            ...state,
            githubUsers: action.payload,
            isLoading: false,
            error: ''
        }
    }
}