import { useContext, useEffect } from "react";
import { AuthContext } from "../../providers/clients/clientContext";
import EditContact from "../EditContact";
import { ContactCards } from "./style";
import {IContactRegister} from "../../interfaces/contacts/index"
import { BsFillGearFill } from 'react-icons/bs'

function Cards(){
    const {client, getClientData, deleteContact, setId}: any = useContext(AuthContext)

    useEffect(() => {getClientData()}, [])

    return(
        <ContactCards>
            <ul className="container">
                {client?.contact?.length === 0?
                 (
                    <div className="emptyContact">
                        <h1>Adicione um contato...</h1>
                        <BsFillGearFill className='gear'/>
                    </div>
                 )
                 :
                 (
                    client?.contact?.map((contact: IContactRegister) => (
                    <li key={contact.id} className="card">
                        <h1>{contact.name}</h1>
                        <h2>Email: {contact.email}</h2>
                        <h2>Telefone: {contact.telefone}</h2>
                        <button className="editContactButton" onClick={() => {setId(contact.id)}}><EditContact/></button>
                        <button onClick={() => deleteContact(contact.id)} className="smallerButton3 smallerButton4">Deletar</button>
                    </li>
                    ))
                 )}
            </ul>
        </ContactCards>
    )
}

export default Cards;