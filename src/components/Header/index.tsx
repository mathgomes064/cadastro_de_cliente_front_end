import { Headers } from "./style";
import { Link, useHistory } from "react-router-dom";
import EditProfile from "../EditProfile";
import CreateContact from "../CreateContact";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../providers/clients/clientContext";


function Header() {

    const history = useHistory()

    const {client, getClientData}: any = useContext(AuthContext)

    useEffect(() => {getClientData()}, [])

    return(
        <Headers>
            <div className="innerDiv">
                <div className="userName">
                    <h1>{client.name}</h1>
                </div>
                <div className="buttons">
                    <CreateContact/>
                    <EditProfile/>
                    <button onClick={() => {history.push("/")
                    localStorage.clear()}} className="smallerButton smallerButton2">Sair</button>
                </div>
            </div>
        </Headers>
    )
}

export default Header;