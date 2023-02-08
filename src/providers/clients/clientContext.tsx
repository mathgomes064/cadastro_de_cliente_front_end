import { createContext, useState } from "react";
import axios from "axios";
import {IClientProvidersProps, IClientRegister, IClientUpdate} from "../../interfaces/clients/index"
import { useHistory } from "react-router-dom"
import { FieldValue, FieldValues } from "react-hook-form/dist/types";
import { IContactRegister } from "../../interfaces/contacts";

export const AuthContext = createContext({})

const ClientProvider = ({children}: IClientProvidersProps) =>{
    const [token, setToken] = useState(
        JSON.parse(localStorage.getItem("@client-data:token") as string)
    )
    const [client, setClient] = useState({})
    const [contact, setContact] = useState<IContactRegister[]>([])

  const history = useHistory() as any
    
    const registerClient = (data: IClientRegister) => {
        axios.post("http://localhost:3000/clients", data)
            .then((response) => console.log(response))
            .then((response) => setTimeout(history.push("/"), 5000))
            .catch((err) => console.log(err))
    }

    const login = (data: FieldValues) =>{
        axios.post("http://localhost:3000/clients/login", data)
            .then((response) => {
                localStorage.setItem(
                    "@client-data:token",
                    JSON.stringify(response.data.token)
                );
                setToken(response.data.token)
            })
            .then(() => history.push("/dashboard"))
    }

    const getClientData = () =>{
        axios.get("http://localhost:3000/clients/me", {
            headers:{
                Authorization: token
            },
        })
        .then((response) => {
            setClient(response.data)
            history.push("/dashboard")
        })
        .catch((err) => {
            history.push("/")
            localStorage.clear()
        })
    }

    const registerContact = (data: IContactRegister) =>{
        setContact([data, ...contact])
        axios.post("http://localhost:3000/contacts", data, {
            headers: {
                Authorization: token
            }
        })
        .then((response) => {
            getClientData()
        })
        .catch((err) => console.log(err))
    }

    const deleteContact = (id: string) =>{
        axios.delete(`http://localhost:3000/contacts/${id}`, {
            headers: {
                'Authorization': token
            }
        })
        .then((response) => {
            getClientData()
        })
        .catch((err) => console.log(err))
    }

    const [id, setId] = useState("")
    const updateContact = (data: IContactRegister, id: string) =>{
        axios.patch(`http://localhost:3000/contacts/${id}`, data, {
            headers: {
                Authorization: token,
            },
        })
        .then((response) =>{
            console.log(response.data)
            getClientData()
        })
        .catch((err) => console.log(err));
    }

    const updateProfile = (data: IClientUpdate, id:string) =>{
        axios.put(`http://localhost:3000/client/${id}`, data, {
            headers: {
                Authorization: token,
              },
        })
        .then((response) =>{
            getClientData()
        })
        .catch((err) => console.log(err));
    }
    return(
        <AuthContext.Provider
          value={{
            registerClient,
            login,
            client, 
            getClientData,
            registerContact,
            deleteContact,
            updateContact,
            setId,
            id,
            }}>
            {children}
        </AuthContext.Provider>
        )
}

export default ClientProvider