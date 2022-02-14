import {useNavigate} from "react-router-dom";
import LoginForm from "../components/layout/LoginForm";

function LoginPage() {
    const navigate = useNavigate();

    function LoginHandler(user) {

    }

    return (<section>
        <LoginForm onAuthUser={LoginHandler}/>
    </section>);
}

export default LoginPage;