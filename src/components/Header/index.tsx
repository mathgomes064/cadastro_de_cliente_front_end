import { Headers } from "./style";
import { Link } from "react-router-dom";

function Header() {
    return(
        <Headers>
            <div className="innerDiv">
                <div className="userName">
                    <h1>Matheus Alves Gomes</h1>
                </div>
                <div className="buttons">
                    <button className="biggerButtons biggerButtons1">Vincular Contato</button>
                    <button className="biggerButtons biggerButtons1">Editar Perfil</button>
                    <Link className="toLogin" to="/"><button className="smallerButton smallerButton2">Sair</button></Link>
                </div>
            </div>
        </Headers>
    )
}

export default Header;