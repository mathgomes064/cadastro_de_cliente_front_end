import { createContext, useState } from "react";
import axios from "axios";
import {IClientProvidersProps, IClientRegister} from "../../interfaces/clients/index"
import { useHistory } from "react-router-dom"
import { FieldValue, FieldValues } from "react-hook-form/dist/types";

export const AuthContext = createContext({})

const ClientProvider = ({children}: IClientProvidersProps) =>{
    const [token, setToken] = useState(
        JSON.parse(localStorage.getItem("@client-data:token") as string)
    )

  const history = useHistory() as any
    

    const registerClient = (data: IClientRegister) => {
        axios.post("http://localhost:3000/clients", data)
            .then((response) => console.log(response))
            .then((response) => setTimeout(history.push("/"), 5000))
            .catch((err) => console.log(err))
    }

    const login = (data: FieldValues) =>{
        axios.post("http://localhost:3000/clients/login", data)
            .then((response) => localStorage.setItem("@client-data:token", JSON.stringify(response.data.token)))

    }

    return(
        <AuthContext.Provider
          value={{registerClient}}>
            {children}
        </AuthContext.Provider>
        )
}

export default ClientProvider