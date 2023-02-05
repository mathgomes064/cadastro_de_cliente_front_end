import { createContext } from "react";
import axios from "axios";
import {IClientRegister} from "../../interfaces/clients/index"
import useHistory from "react-router-dom"

export const AuthContext = createContext({})

const ClientProvider = ({children}: any) =>{

  const history = useHistory()
    

    const registerClient = (data: IClientRegister) =>{
        axios.post("localhost:3000/clients", data).then((response) => history("/"))
    }

    return(
        <AuthContext.Provider
        value={{}}>
            {children}
        </AuthContext.Provider>
        )
}

export default ClientProvider