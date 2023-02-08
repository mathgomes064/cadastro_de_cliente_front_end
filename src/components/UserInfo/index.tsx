import { useContext, useEffect } from "react";
import { AuthContext } from "../../providers/clients/clientContext";
import { UserInfos } from "./style";

function UserInfo(){

    const {client, getClientData}: any = useContext(AuthContext)

    useEffect(() => {getClientData()}, [])

    return(
        <UserInfos>
            <div className="innerDiv">
                <div className="emailAndNumber">
                    <h1>Email: {client.email}</h1>
                    <h1>Telefone: {client.telefone}</h1>
                </div>
                <div className="register">
                    <h1>Data de registro: {client.created_at}</h1>
                </div>
            </div>
        </UserInfos>
    )
}

export default UserInfo;