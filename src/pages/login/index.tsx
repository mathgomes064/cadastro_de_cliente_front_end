import LoginAnimation from "../../components/LoginAnimation"
import LoginForm from "../../components/loginForm"
import { LoginPage } from "./style"

function Login() {
    return(
        <LoginPage>
            <div>
                <LoginAnimation/>
                <LoginForm/>
            </div>
        </LoginPage>
    )
}

export default Login

