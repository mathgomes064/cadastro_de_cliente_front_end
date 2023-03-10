import { LoginForms } from "./style";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { IClientLogin } from "../../interfaces/clients";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/clients/clientContext";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";

function LoginForm(){
    const [mostrarSenha, setMostrarSenha] = useState(false);

    const { login }: any = useContext(AuthContext)

    const formSchema = yup.object().shape({
        email: yup.string().required("Email obrigatório").email("Email inválido"),
        password: yup.string().required("Senha obrigatória"),
    })
    const { register, handleSubmit, formState: {errors} } = useForm<IClientLogin>({
        resolver: yupResolver(formSchema)
    })

    // const onSubmitFunction = (data: any) =>{
    //     enviar para a api
    // }

    // console.log(errors)

    return(
        <LoginForms>
            <h1>CADASTRO DE CLIENTES</h1>
            <form className="divForm" onSubmit={handleSubmit(login)}>
                <label className="title">Email</label>
                <input placeholder="Seu Email..." type="text" {...register("email")}/>
                <span>{errors.email?.message}</span>
                <label className="title">Senha</label>
                <div className="divInput">
                <input placeholder="Sua Senha..." type={mostrarSenha? "text" : "password"} {...register("password")}/>
                {mostrarSenha ? (
                <AiFillEye
                onClick={() => setMostrarSenha(!mostrarSenha)}
                className="olhoAberto"
                />
                ) : (
                <AiFillEyeInvisible
                    onClick={() => setMostrarSenha(!mostrarSenha)}
                    className="olhoAberto"
                />
                )}
                </div>
                <span>{errors.password?.message}</span>
                <button type="submit" className="button inButton">Entrar</button>
            </form>
            <Link className="toRegister" to="/register">Criar Conta...</Link>
        </LoginForms>
    )
}

export default LoginForm;