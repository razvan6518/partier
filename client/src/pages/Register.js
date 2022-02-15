
import RegisterForm from "../components/layout/RegisterFrom";

function RegisterPage() {

    function RegisterHandler(user) {
        console.log("reg user: ", user);

        if (user.password !== user.repeatedPassword) {
            console.log("passwords dont match");
            return;
        }
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const date = user.birthdate;
        const now_utc =  Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(),
            date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds()).toString();

        let raw = JSON.stringify({
            "email": user.email,
            "username": user.username,
            "firstName": user.firstName,
            "lastName": user.lastName,
            "birthdate": now_utc,
            "address": user.address,
            "password": user.password
        });

        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:5000/api/user/save", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

        myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        raw = JSON.stringify({
            "username": user.username,
            "roleName": user.role
        });

        requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:5000/api/role/addtouser", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    return (<section>
        <RegisterForm onRegisterUser={RegisterHandler}/>
    </section>);
}

export default RegisterPage;