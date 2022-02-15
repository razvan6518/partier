import {useRef, useState} from "react";
import Card from "../ui/Card";
import classes from "./LoginFrom.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function RegisterForm(props) {

    // const firstNameInputRef = useRef();
    // const lastNameInputRef = useRef();
    // const emailInputRef = useRef();
    // const passwordInputRef = useRef();
    // const repeatPasswordInputRef = useRef();

    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [username, setUsername] = useState("");


    function submitHandler(user) {
        user.preventDefault();



        const userItem = {
            "username": username,
            "email": email,
            "password": password,
            "repeatedPassword": repeatPassword
        };


        props.onRegisterUser(userItem);
    }

    return (<Card>
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor="username">Username</label>
                <input type="username" required id="username" onChange={event => setUsername(event.target.value)}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="email">Email</label>
                <input type="email" required id="email" onChange={event => setEmail(event.target.value)}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="firstName">First name</label>
                <input type="firstName" required id="firstName" onChange={event => setFirstName(event.target.value)}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="lastName">First name</label>
                <input type="lastName" required id="lastName" onChange={event => setLastName(event.target.value)}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="birthdate">Birthdate</label>
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
            </div>
            <div className={classes.control}>
                <label htmlFor="password">Password</label>
                <input type="password" required id="password" onChange={event => setPassword(event.target.value)}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="repeatPassword">Repeat Password</label>
                <input type="Password" required id="repeatPassword" onChange={event => setRepeatPassword(event.target.value)}/>
            </div>
            <div className={classes.actions}>
                <button>Login</button>
            </div>
        </form>
    </Card>)
}

export default RegisterForm;