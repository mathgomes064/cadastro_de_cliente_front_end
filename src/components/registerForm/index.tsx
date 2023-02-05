import { RegisterForms } from "./style"
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { IClientRegister } from "../../interfaces/clients"

function RegisterForm(){
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
        //eniar para a api
    }

    console.log(errors)

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
                <input placeholder="Sua Senha..." type="text" {...register("senha")}/>
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