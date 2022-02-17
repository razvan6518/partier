import {Link} from 'react-router-dom';
import classes from './NavigationBar.module.css'

function NavigationBar() {

    let userOrganiser = false;
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer "+localStorage.getItem("token"));

    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("http://localhost:5000/api/user/organiser", requestOptions)
        .then(response => response.text())
        .then(result => {
            console.log("res: ", result)
            userOrganiser = result
        })
        .catch(error => console.log("error: ", error));

    return (
        <header className={classes.header}>
            <nav  id="nav">
                <ul>
                    <li>
                        <Link to='/'><h1>Partier</h1></Link>
                    </li>
                    <li>
                        <Link to='/theater'>Theater</Link>
                    </li>
                    <li>
                        <Link to='/profile'>Profile</Link>
                    </li>
                    <li>
                        <Link to='/register'>Register</Link>
                    </li>
                    <li>
                        <Link to='/login'>Login</Link>
                    </li>
                    <li>
                        <Link to='/add-event'>Add Event</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default NavigationBar;