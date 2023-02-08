import { useContext, useState } from "react"
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";
import { Container, ModalButton } from "./style";
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";
import { IContactRegister } from "../../interfaces/contacts";
import { AuthContext } from "../../providers/clients/clientContext";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
}

function CreateContact(){
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const formSchema = yup.object().shape({
        name: yup.string().required("Nome obrigatório"),
        email: yup.string().required("Email obrigatório").email("Email inválido"),
        telefone: yup.string().required("Telefone obrigatório"),
    })

    const { register, handleSubmit, formState: {errors} } = useForm<IContactRegister>({
        resolver: yupResolver(formSchema)
    })

    const { registerContact }: any = useContext(AuthContext)


    return(
        <div>
            <ModalButton onMouseDown={handleOpen}>Criar Contato</ModalButton>
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
                            <h1>Criar Contato</h1>
                        </div>
                        <form className="divForm" onSubmit={handleSubmit(registerContact)}>
                            <label className="title">Nome</label>
                            <input placeholder="Nome..." type="text" {...register("name")}/>
                            <span>{errors.name?.message}</span>
                            <label className="title">Email</label>
                            <input placeholder="Email..." type="text" {...register("email")}/>
                            <span>{errors.email?.message}</span>
                            <label className="title">Telefone</label>
                            <input placeholder="Telefone..." type="text"  {...register("telefone")}/>
                            <span>{errors.telefone?.message}</span>
                            <button className="button" onClick={handleClose}>Criar</button>
                        </form>
                    </Container>
                </Box>
                </Fade>
            </Modal>
        </div>
    )
}

export default CreateContact;