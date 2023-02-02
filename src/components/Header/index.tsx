import { Headers } from "./style";
import { Link } from "react-router-dom";
import EditProfile from "../EditProfile";
import CreateContact from "../CreateContact";


function Header() {

    return(
        <Headers>
            <div className="innerDiv">
                <div className="userName">
                    <h1>Matheus Alves Gomes</h1>
                </div>
                <div className="buttons">
                    <CreateContact/>
                    <EditProfile/>
                    <Link className="toLogin" to="/"><button className="smallerButton smallerButton2">Sair</button></Link>
                </div>
            </div>
        </Headers>
    )
}

export default Header;