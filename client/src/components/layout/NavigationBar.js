import {Link} from 'react-router-dom';
import classes from './NavigationBar.module.css'
import {useState} from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterFrom";

function NavigationBar() {

    let username = null;
    let role = null;
    try {
        let user = JSON.parse(localStorage.getItem("user"));
        username = user.username;
        role = user.roles[0];
    } catch {
    }

    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

    return (
        <header className={classes.header}>
            <nav id="nav">
                <ul>
                    <li>
                        <Link to='/'><h1>Partier</h1></Link>
                    </li>
                    {username != null &&
                        <li>
                            <h4>Welcome {username}</h4>
                        </li>
                    }
                    {username == null &&
                        <li>
                            <Link to='/profile'>Profile</Link>
                        </li>
                    }
                    {username == null &&
                        <li>
                            <button onClick={() => {
                                setShowRegister(true);
                                setShowLogin(false);
                            }}>
                                Register
                            </button>
                            <RegisterForm onClose={() => setShowRegister(false)} show={showRegister}/>
                        </li>}
                    {username == null &&
                        <li>
                            <button onClick={() => {
                                setShowLogin(true);
                                setShowRegister(false);
                            }}>
                                Login
                            </button>
                            <LoginForm onClose={() => setShowLogin(false)} show={showLogin}/>
                        </li>
                    }
                    {role == 'ROLE_ORGANISER' &&
                        <li>
                            <Link to='/add-event'>Add Event</Link>
                        </li>
                    }
                </ul>
            </nav>
        </header>

    )
}

export default NavigationBar;