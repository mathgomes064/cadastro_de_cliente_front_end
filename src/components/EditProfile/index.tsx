import { useState } from "react"
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";
import { Container, ModalButton } from "./style";

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
                        <div className="divForm">
                            <label className="title">Nome</label>
                            <input placeholder="Seu Nome..." type="text" />
                            <label className="title">Email</label>
                            <input placeholder="Seu Email..." type="text" />
                            <label className="title">Senha</label>
                            <input placeholder="Sua Senha..." type="text" />
                            <label className="title">Telefone</label>
                            <input placeholder="Seu Telefone..." type="text" />
                            <button className="button" onClick={handleClose} >Editar</button>
                        </div>
                    </Container>
                </Box>
                </Fade>
            </Modal>
        </div>
    )
}

export default EditProfile;