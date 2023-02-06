import { RegisterForms } from "./style"
import { Link, useHistory } from "react-router-dom"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { IClientRegister } from "../../interfaces/clients"
import { useState } from "react"
import axios from "axios"
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";

function RegisterForm(){
    const [mostrarSenha, setMostrarSenha] = useState(false);
    const [mostrarSenhaConf, setMostrarSenhaConf] = useState(false);

    const history = useHistory() as any

    const formSchema = yup.object().shape({
        name: yup.string().required("Nome obrigatório"),
        email: yup.string().required("Email obrigatório").email("Email inválido"),
        senha: yup.string().required("Senha obrigatória"),
        telefone: yup.string().required("Telefone obrigatório"),
    })

    const { register, handleSubmit, formState: {errors} } = useForm<IClientRegister>({
        resolver: yupResolver(formSchema)
    })

    const onSubmitFunction = (data: any) => {
        axios.post("http://localhost:3000/clients", data)
            .then((response) => console.log(response))
            .then((response) => setTimeout(history.push("/"), 5000))
            .catch((err) => console.log(err))
    }

    // console.log(errors)

return(
    <RegisterForms>
        <h1>CADASTRO DE CLIENTES</h1>
            <form className="divForm" onSubmit={handleSubmit(onSubmitFunction)}>
                <label className="title">Nome</label>
                <input placeholder="Seu Nome..." type="text" {...register("name")}/>
                <span>{errors.name?.message}</span>
                <label className="title">Email</label>
                <input placeholder="Seu Email..." type="text" {...register("email")}/>
                <span>{errors.email?.message}</span>
                <label className="title">Senha</label>
                <div className="divInput">
                <input placeholder="Sua Senha..." type={mostrarSenha? "text" : "password"} {...register("senha")}/>
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
                <span>{errors.senha?.message}</span>
                <label className="title">Telefone</label>
                <input placeholder="Seu Telefone..." type="text" {...register("telefone")}/>
                <span>{errors.telefone?.message}</span>
                <button type="submit" className="button inButton">Registrar</button>
            </form>
            <h2>Já possui conta?<Link className="toLogin" to="/"> Voltar...</Link></h2>
    </RegisterForms>
)
}

export default RegisterForm