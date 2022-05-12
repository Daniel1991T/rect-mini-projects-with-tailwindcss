import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import paginate from "../utils";
import { SET_LOADING, GET_USERS, SET_ERROR, REMOVE_ERROR } from "./action";
import { reducer } from "./reducer";

const axiosGit = axios.create({
    baseURL: process.env.REACT_APP_GITHUB_URL
})

const GithubContext = createContext();

const initialState = {
    searchTerm: '',
    githubUsers: [],
    isLoading: false,
    error: null
}

const GithubProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    axiosGit.interceptors.request.use(config => {
        // config.headers.common['Authorization'] = `token ${process.env.REACT_APP_GITHUB_TOKEN}`
        return config
    }, (error) => {
        return Promise.reject(error)
    })

    const searchUsers = async (query) => {
        dispatch({ type: SET_LOADING })
        try {
            const params = new URLSearchParams({
                q: query,
            })
            const { data } = await axiosGit.get(`/search/users?${params}`)
            const users = paginate(data.items)
            dispatch({ type: GET_USERS, payload: users })
        } catch (error) {
            console.log(error);
            dispatch({ type: SET_ERROR, payload: error.message })
        }
        setTimeout(() => {
            dispatch({ type: REMOVE_ERROR })
        }, 3000)
    }

    const setError = (message) => {
        dispatch({ type: SET_ERROR, payload: message })
        setTimeout(() => {
            dispatch({ type: REMOVE_ERROR })
        }, 3000)
    }

    return <GithubContext.Provider value={{ ...state, searchUsers, setError }}>
        {children}
    </GithubContext.Provider>
}

const useGithubContext = () => {
    return useContext(GithubContext)
}

export { GithubProvider, useGithubContext }