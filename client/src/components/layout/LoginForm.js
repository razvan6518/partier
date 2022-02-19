import {useRef} from "react";
import "./Login.css";

function LoginForm(props) {
    const usernameInputRef = useRef();
    const passwordInputRef = useRef();

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

    function submitHandler(user) {
        user.preventDefault();

        const enteredUsername = usernameInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        const userItem = {"username": enteredUsername, "password": enteredPassword}

        LoginHandler(userItem);
    }

    if (!props.show){
        return null;
    }

    return (<>
        <div className="login-box">
            <h2>Login</h2>
            <form>
                <div className="user-box">
                    <input type="text" name="" required=""  ref={usernameInputRef}/>
                        <label>Username</label>
                </div>
                <div className="user-box">
                    <input type="password" name="" required="" ref={passwordInputRef}/>
                        <label>Password</label>
                </div>
                <a href="#" onClick={submitHandler}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Submit
                </a>
                <a href="#" onClick={props.onClose}>
                    X
                </a>
            </form>
        </div>
        </>
    )
}

export default LoginForm;