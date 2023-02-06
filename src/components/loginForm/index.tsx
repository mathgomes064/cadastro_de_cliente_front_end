import { LoginForms } from "./style";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { IClientLogin } from "../../interfaces/clients";
import axios from "axios";

function LoginForm(){
    const formSchema = yup.object().shape({
        email: yup.string().required("Email obrigatório").email("Email inválido"),
        senha: yup.string().required("Senha obrigatória"),
    })
    const { register, handleSubmit, formState: {errors} } = useForm<IClientLogin>({
        resolver: yupResolver(formSchema)
    })

    const onSubmitFunction = (data: any) =>{
        //enviar para a api
  }

    console.log(errors)

    return(
        <LoginForms>
            <h1>CADASTRO DE CLIENTES</h1>
            <form className="divForm" onSubmit={handleSubmit(onSubmitFunction)}>
                <label className="title">Email</label>
                <input placeholder="Seu Email..." type="text" {...register("email")}/>
                <span>{errors.email?.message}</span>
                <label className="title">Senha</label>
                <input placeholder="Sua Senha..." type="text" {...register("senha")}/>
                <span>{errors.senha?.message}</span>
                <button type="submit" className="button inButton">Entrar</button>
            </form>
            <Link className="toRegister" to="/register">Criar Conta...</Link>
        </LoginForms>
    )
}

export default LoginForm;