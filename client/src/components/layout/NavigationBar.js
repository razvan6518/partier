import {Link} from 'react-router-dom';
import classes from './NavigationBar.module.css'
import {useAtom} from "jotai";
import {USER_ID} from "../STORE";

function NavigationBar() {

    // let userOrganiser = false;
    // const [userId, setUserId] = useAtom(USER_ID);
    // console.log("userID: " ,userId);
    let username = null;
    let role = null;
    try {
        let user = JSON.parse(localStorage.getItem("user"));
        username = user.username;
        role = user.roles[0];
    } catch {
    }

    // console.log("----->", username)
    // console.log("----->",localStorage.getItem("user"));

    // const myHeaders = new Headers();
    // myHeaders.append("Authorization", "Bearer "+localStorage.getItem("token"));
    //
    // const requestOptions = {
    //     method: 'GET',
    //     headers: myHeaders,
    //     redirect: 'follow'
    // };
    //
    // fetch("http://localhost:5000/api/user/organiser", requestOptions)
    //     .then(response => response.text())
    //     .then(result => {
    //         console.log("res: ", result)
    //         // userOrganiser = result
    //     })
    //     .catch(error => console.log("error: ", error));

    return (
        <header className={classes.header}>
            <nav id="nav">
                <ul>
                    <li>
                        <Link to='/'><h1>Partier</h1></Link>
                    </li>
                    {username!=null&&
                        <li>
                            <h4>Welcome {username}</h4>
                        </li>
                    }
                    <li>
                        <Link to='/theater'>Theater</Link>
                    </li>
                    <li>
                        <Link to='/profile'>Profile</Link>
                    </li>
                    {username == null &&
                        <li>
                            <Link to='/register'>Register</Link>
                        </li>}
                    {username == null &&
                        <li>
                            <Link to='/login'>Login</Link>
                        </li>
                    }
                    {role == 'ROLE_ORGANISER'&&
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