import {useState} from "react";
import "./Login.css";
import Card from "../ui/Card";


function RegisterForm(props) {

    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [role, setRole] = useState("ROLE_USER");

    (function () {
        // TODO: add check for email(format, not in DB), username(a-z A-Z, not in DB) length etc...
        let wrongInput = false;
        if (email === "" || username === "") {
            wrongInput = true;
        }

        if (password !== "" && repeatPassword !== "") {
            if (password !== repeatPassword || wrongInput) {
                console.log("no match");
                document.querySelector("#top-line").className = "wrong-input";
                document.querySelector("#right-line").className = "wrong-input";
                document.querySelector("#bottom-line").className = "wrong-input";
                document.querySelector("#left-line").className = "wrong-input";
                document.querySelector("#submit").className = "wrong-input";
                document.querySelector("#submit").classList.add("disabled");
            } else {
                console.log("match");
                document.querySelector("#top-line").className = "";
                document.querySelector("#right-line").className = "";
                document.querySelector("#bottom-line").className = "";
                document.querySelector("#left-line").className = "";
                document.querySelector("#submit").className = "";
            }
        }
    })();

    async function registerHandler(user) {

        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        /** use in profile editor **/
            // const date = user.birthdate;
            // const now_utc =  Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(),
            //     date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds()).toString();

        let raw = JSON.stringify({
                "email": user.email,
                "username": user.username,
                "password": user.password,
                "roles": [user.role]
            });

        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:5000/api/user/save", requestOptions)
            .then(response => response.text())
            .then(result => {
                window.location.href = '/';
            })
            .catch(error => console.log('error', error));

    }

    function submitHandler(user) {
        user.preventDefault();
        const userItem = {
            "username": username,
            "email": email,
            "role": role,
            "password": password,
            "repeatedPassword": repeatPassword
        };
        registerHandler(userItem);
    }

    if (!props.show)
        return null;

    // TODO: make role selector look good
    return (<Card>
        <div className="login-box">
            <h2>Login</h2>
            <form>
                <div className="user-box">
                    <input type="text" name="" required="" onChange={event => setUsername(event.target.value)}/>
                    <label>Username</label>
                </div>
                <div className="user-box">
                    <input type="text" name="" required="" onChange={event => setEmail(event.target.value)}/>
                    <label>Email</label>
                </div>
                <div className="user-box">
                    <input type="password" required="" id="password" onChange={event => setPassword(event.target.value)}/>
                    <label>Password</label>
                </div>
                <div className="user-box">
                    <input type="password" required="" id="password" onChange={event => setRepeatPassword(event.target.value)}/>
                    <label>Repeat Password</label>
                </div>
                <div className="user-box">
                    <select name="role" required="" id="role" onChange={event => setRole(event.target.value)}>
                        <option aria-required="" value="ROLE_USER">User</option>
                        <option aria-required="" value="ROLE_ORGANISER">Organiser</option>
                    </select>
                    {/*<label>Choose a role:</label>*/}
                </div>
                <a href="#" id="submit" onClick={submitHandler}>
                    <span id="top-line"/>
                    <span id="right-line"/>
                    <span id="bottom-line"/>
                    <span id="left-line"/>
                    Submit
                </a>
                <a href="#" onClick={props.onClose}>
                    X
                </a>
            </form>
        </div>
    </Card>)
}

export default RegisterForm;