import {useContext,useState, createContext} from "react"

// createContext gives you new context object back
const UserContext= createContext(undefined) // here function argument default value but in 
// this case we doesn't know who logged in so we declared undefined 

// created Provider component
export const UserProvider = ({children})=>{
    const [user] =useState({
        name:"Myra",
        age :"29",
        Dob:8/9/1995
    })
    // in world scenario we first fetch authenticated user first and then set a state now hook the value to UserContext
    return <UserContext.Provider value={user}></UserContext.Provider> 
}
// this component allows the consuming components to subscribe to context changes this component
// accepts a value prop which what is passed to consuming components which are descendents of
// this component.

// creating custom hook
export const useUser= ()=>useContext(UserContext)
// hook that wraps usecontext hook which is way to consume context value.
// this external function is created so no need to export UserContext to external
// component.
// go to root component(index.js)
