import { UserInfos } from "./style";

function UserInfo(){
    return(
        <UserInfos>
            <div className="innerDiv">
                <div className="emailAndNumber">
                    <h1>Email: matheus@hotmail.com</h1>
                    <h1>Telefone: (00)0000000</h1>
                </div>
                <div className="register">
                    <h1>Data de registro: 30/01/2023</h1>
                </div>
            </div>
        </UserInfos>
    )
}

export default UserInfo;