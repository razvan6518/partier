import {Link} from 'react-router-dom';
import classes from './NavigationBar.module.css'
import {useEffect, useState} from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

function NavigationBar() {

    let username = null;
    let role = null;
    let loggedUser = null;

    try {
        loggedUser = JSON.parse(localStorage.getItem("user"));
    } catch {
    }

    const [user, setUser] = useState(loggedUser);

    try {
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
                    {username != null &&
                        <li>
                            <Link to='/profile'>Profile</Link>
                        </li>
                    }
                    {username != null &&
                        <li>
                            <button onClick={() => {
                                localStorage.clear();
                                setUser(null);
                                window.location.href = '/';
                            }}>
                                Log Out
                            </button>
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
                    {role == 'ROLE_ADMIN' &&
                        <li>
                            <Link to='/manage-events'>Manage Events</Link>
                        </li>
                    }
                </ul>
            </nav>
        </header>

    )
}

export default NavigationBar;