import React,{createContext} from 'react'


export const Appcontext = createContext();

const Contextprovider=(props)=>{
    const phone="+1 123456788"
    const name="Game"
    return(
        <Appcontext.Provider value={{phone, name}}>
            {props.children}
        </Appcontext.Provider>
    )

}
export default Contextprovider
 