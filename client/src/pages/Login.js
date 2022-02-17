import LoginForm from "../components/layout/LoginForm";
import {atom, useAtom} from "jotai";
import {USER_ID} from "../components/STORE";


function LoginPage() {

    // const [userId, setUserId] = useAtom(USER_ID);

    function LoginHandler(user) {

        // setUserId("1111111111");

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
                result = JSON.parse(result);
                window.localStorage.setItem("token", result.access_token);

                const myHeaders = new Headers();

                const requestOptions = {
                    method: 'GET',
                    headers: myHeaders,
                    redirect: 'follow'
                };

                fetch("http://localhost:5000/api/users/name/"+user.username, requestOptions)
                    .then(response => response.text())
                    .then(result => {
                        console.log("user fetch: ",result);
                        localStorage.setItem("user", result);
                        window.location.href = '/';
                    })
                    .catch(error => console.log('error', error));
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