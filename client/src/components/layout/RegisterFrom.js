import {useRef} from "react";
import Card from "../ui/Card";
import classes from "./LoginFrom.module.css";

function RegisterForm(props) {
    const usernameInputRef = useRef();
    const passwordInputRef = useRef();
    const emailInputRef = useRef();
    const repeatPasswordInputRef = useRef();

    function submitHandler(user) {
        user.preventDefault();

        const enteredUsername = usernameInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
        const enteredEmail = emailInputRef.current.value;
        const enteredRepeatPassword = passwordInputRef.current.value;

        const userItem = {"username": enteredUsername, "email": enteredEmail, "password": enteredPassword, "repeatedPassword": enteredRepeatPassword};

        props.onRegisterUser(userItem);
    }

    return (<Card>
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor="username">Username</label>
                <input type="username" required id="username" ref={usernameInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="email">Email</label>
                <input type="email" required id="email" ref={emailInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="password">Password</label>
                <input type="password" required id="password" ref={passwordInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="repeatPassword">Repeat Password</label>
                <input type="Password" required id="repeatPassword" ref={repeatPasswordInputRef}/>
            </div>
            <div className={classes.actions}>
                <button>Login</button>
            </div>
        </form>
    </Card>)
}

export default RegisterForm;