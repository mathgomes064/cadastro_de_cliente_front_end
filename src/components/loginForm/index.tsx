import { LoginForms } from "./style";
import { Link } from "react-router-dom";

function LoginForm(){
    return(
        <LoginForms>
            <h1>CADASTRO DE CLIENTES</h1>
            <div className="divForm">
                <label className="title">Email</label>
                <input placeholder="Seu Email..." type="text" />
                <label className="title">Senha</label>
                <input placeholder="Sua Senha..." type="text" />
                <Link className="toDashboard" to="/dashboard"><button className="button inButton">Entrar</button></Link>
            </div>
            <Link className="toRegister" to="/register">Criar Conta...</Link>
        </LoginForms>
    )
}

export default LoginForm;