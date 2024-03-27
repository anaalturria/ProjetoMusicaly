import { createContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";


export const UserContext = createContext();

function UserProvider ({children}) 
{
    const[ usuario, setUsuario] = useState(null);

    async function infoUsuario(){
        const usuario = await AsyncStorage.getItem("usuario")
        setUsuario(usuario)
    }
    return(
        <UserContext.Provider value={{ usuario: usuario}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;