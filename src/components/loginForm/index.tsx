import { LoginForms } from "./style";

function LoginForm(){
    return(
        <LoginForms>
            <h1>CADASTRO DE CLIENTES</h1>
            <div className="divForm">
                <label className="title">Email</label>
                <input placeholder="Seu Email..." type="text" />
                <label className="title">Senha</label>
                <input placeholder="Sua Senha..." type="text" />
            </div>
            <a href="">Criar Conta...</a>
        </LoginForms>
    )
}

export default LoginForm;