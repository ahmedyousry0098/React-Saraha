import React, {createContext, useReducer} from 'react'
import jwtDecode from 'jwt-decode'

export const AuthContext = createContext()

function reducer(state, action) {
    switch(action.type) {
        case 'login':
            return {...action.payload, isLoggedIn: true}
        case 'logout':
            return {isLoggedIn: false}
        default: 
            return state
    }
}

function AuthContextProvider({children}) {

    const [state, dispatch] = useReducer(reducer, {isLoggedIn: false, token: null, id: null})

    const login = (token) => {
        const decode = jwtDecode(token)
        if (!decode?.id) {
            return false
        } 
        localStorage.setItem('token', token)
        dispatch({type: 'login', payload: decode})
    }

    return <AuthContext.Provider value={{state, login}}>
        {children}
    </AuthContext.Provider>
}

export default AuthContextProvider