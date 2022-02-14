import {useRef} from "react";
import Card from "../ui/Card";
import classes from "./LoginFrom.module.css";

function LoginForm(props) {
    const usernameInputRef = useRef();
    const passwordInputRef = useRef();

    function submitHandler(user) {
        user.preventDefault();

        const enteredUsername = usernameInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        const userItem = {"username": enteredUsername, "password": enteredPassword}

        props.onAuthUser(userItem)
    }

    return (<Card>
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor="username">Username</label>
                <input type="username" required id="email" ref={usernameInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="password">Password</label>
                <input type="password" required id="password" ref={passwordInputRef}/>
            </div>
            <div className={classes.actions}>
                <button>Login</button>
            </div>
        </form>
    </Card>)
}

export default LoginForm;