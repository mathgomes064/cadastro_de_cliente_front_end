import { Headers } from "./style";


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
                    <button className="smallerButton smallerButton2">Sair</button>
                </div>
            </div>
        </Headers>
    )
}

export default Header;