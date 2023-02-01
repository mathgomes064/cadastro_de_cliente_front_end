import { RegisterForms } from "./style"
import { Link } from "react-router-dom"

function RegisterForm(){
return(
    <RegisterForms>
        <h1>CADASTRO DE CLIENTES</h1>
            <div className="divForm">
                <label className="title">Nome</label>
                <input placeholder="Seu Nome..." type="text" />
                <label className="title">Email</label>
                <input placeholder="Seu Email..." type="text" />
                <label className="title">Senha</label>
                <input placeholder="Sua Senha..." type="text" />
                <label className="title">Telefone</label>
                <input placeholder="Seu Telefone..." type="text" />
                <button className="button inButton">Registrar</button>
            </div>
            <h2>Já possui conta?<Link className="toLogin" to="/"> Voltar...</Link></h2>
    </RegisterForms>
)
}

export default RegisterForm