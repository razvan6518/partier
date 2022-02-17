import {useRef} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useState} from "react";

import Card from "../ui/Card";
import classes from "./LoginFrom.module.css";


function UpdateUserForm(props) {

    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");

    (function () {
        if (password !== "" && repeatPassword !== "") {
            const regButton = document.querySelector("#registerButton");
            if (password !== repeatPassword) {
                console.log("no match");
                regButton.disabled = true;
            } else {
                regButton.disabled = false;
                console.log("match");
            }
        }
    }) ();

    function submitHandler(user) {
        user.preventDefault();
        const userItem = {
            "email": email,
            "address": address,
            "password": password,
            "repeatedPassword": repeatPassword
        };
        props.onRegisterUser(userItem);
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor="email">Email</label>
                <input type="email" required id="email" onChange={event => setEmail(event.target.value)}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="address">Address</label>
                <input type="address" required id="address" onChange={event => setAddress(event.target.value)}/>
            </div>
            <div className={classes.control} >
                <label htmlFor="password">Password</label>
                <input type="password" required id="password" onChange={event => setPassword(event.target.value)}/>
            </div>
            <div className={classes.control + " " + "passwd"}>
                <label htmlFor="repeatPassword">Repeat Password</label>
                <input type="password" required id="repeatPassword" onChange={event => setRepeatPassword(event.target.value)}/>
            </div>
            <div className={classes.actions}>
                <button id="registerButton">Change</button>
            </div>
        </form>
    )
}

export default UpdateUserForm;