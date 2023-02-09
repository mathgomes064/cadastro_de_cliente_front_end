import { useContext, useState } from "react"
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";
import { Container, ModalButton } from "./style";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { IClientRegister } from "../../interfaces/clients";
import { AuthContext } from "../../providers/clients/clientContext";
import { IClientUpdate } from "../../interfaces/clients";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
}

function EditProfile(){
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

     const formSchema = yup.object().shape({
        name: yup.string().required("Nome obrigatório"),
        email: yup.string().required("Email obrigatório").email("Email inválido"),
        password: yup.string().required("Senha obrigatória"),
        telefone: yup.string().required("Telefone obrigatório"),
    })

    const { register, handleSubmit, formState: {errors} } = useForm<IClientRegister>({
        resolver: yupResolver(formSchema)
    })

    const {updateProfile, userId}: any = useContext(AuthContext)
    
    const handleUserEdit = (data: IClientUpdate) =>{
        updateProfile(data, userId)
    }

    // console.log(errors)


    return(
        <div>
            <ModalButton onMouseDown={handleOpen}>Editar Perfil</ModalButton>
            <Modal
                open={open}
                onClose={handleClose}
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
            >
                <Fade in={open}>
                <Box sx={style}>
                    <Container>
                        <div className="mainTitle">
                            <h1>Editar Perfil</h1>
                        </div>
                        <form className="divForm" onSubmit={handleSubmit(handleUserEdit)}>
                            <label className="title">Nome</label>
                            <input placeholder="Seu Nome..." type="text" {...register("name")}/>
                            <label className="title">Email</label>
                            <input placeholder="Seu Email..." type="text" {...register("email")}/>
                            <label className="title">Senha</label>
                            <input placeholder="Sua Senha..." type="text" {...register("password")}/>
                            <label className="title">Telefone</label>
                            <input placeholder="Seu Telefone..." type="text" {...register("telefone")}/>
                            <div className="buttonsDiv">
                                <button className="button" onClick={handleClose}>Editar</button>
                                <button className="button2" onClick={handleClose}>Deletar</button>
                            </div>
                        </form>
                    </Container>
                </Box>
                </Fade>
            </Modal>
        </div>
    )
}

export default EditProfile;