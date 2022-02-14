import {useNavigate} from "react-router-dom";
import LoginForm from "../components/layout/LoginForm";

function LoginPage() {
    const navigate = useNavigate();

    function LoginHandler(user) {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        const urlencoded = new URLSearchParams();
        urlencoded.append("username", user.username);
        urlencoded.append("password", user.password);

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        fetch("http://localhost:5000/login", requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(">>>>"+ result)
                console.log("----" + result?.access_token);
                localStorage.setItem("token", result.access_token);
            })
            .catch(error => {
                    console.log('error', error)
                    console.log("Wrong username or password !")
                }
            );
    }

    return (<section>
        <LoginForm onAuthUser={LoginHandler}/>
    </section>);
}

export default LoginPage;