import {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Card from "../ui/Card";
import classes from "./LoginFrom.module.css";


function RegisterForm(props) {

    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [birthdate, setBirthdate] = useState(new Date());
    const [address, setAddress] = useState("");
    const [username, setUsername] = useState("");
    const [role, setRole] = useState();


    function checkRepeatPassword(){
        const repeatPassword = document.querySelector("#repeatPassword").value;
        const password = document.querySelector("#password").value;
        const button = document. querySelector('#registerButton');
        if (repeatPassword !== password){
            button.disabled = true;
            console.log("diferite")
        }else{
            button.disabled = false;
            console.log("identice")
        }
    }

    function submitHandler(user) {
        user.preventDefault();
        const userItem = {
            "username": username,
            "email": email,
            "firstName": firstName,
            "lastName": lastName,
            "birthdate": birthdate,
            "address": address,
            "role": role,
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
                <DatePicker selected={birthdate} onChange={event => setBirthdate(event)} />
            </div>
            <div className={classes.control}>
                <label htmlFor="address">Address</label>
                <input type="address" required id="address" onChange={event => setAddress(event.target.value)}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="password">Password</label>
                <input type="password" required id="password" onChange={event => setPassword(event.target.value)}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="repeatPassword">Repeat Password</label>
                <input type="Password" required id="repeatPassword" onChange={event => {setRepeatPassword(event.target.value); checkRepeatPassword()}}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="role">Choose a role:</label>
                <select name="role" id="role" onChange={event => setRole(event.target.value)}>
                    <option value="ROLE_USER">User</option>
                    <option value="ROLE_ORGANISER">Organiser</option>
                </select>
            </div>
            <div className={classes.actions}>
                <button id="registerButton">Register</button>
            </div>
        </form>
    </Card>)
}

export default RegisterForm;