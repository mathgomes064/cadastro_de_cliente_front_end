import {Route, Switch} from "react-router-dom"
import Dashboard from "../pages/dashboard";
import Login from "../pages/login";
import Register from "../pages/register";

function RoutesMain (){
    return(
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/dashboard" component={Dashboard}/>
            {/* <Route exact path="*" component={<Navigate to={"/"} replace/>}/> */}
        </Switch>
    )
}

export default RoutesMain;