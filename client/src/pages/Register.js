
import RegisterForm from "../components/layout/RegisterFrom";

function RegisterPage() {

    function RegisterHandler(user) {
        console.log("reg user: ", user);

        if (user.password !== user.repeatedPassword) {
            console.log("passwords dont match");
            return;
        }
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "email": user.email,
            "username": user.username,
            "password": user.password
        });

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:5000/api/user/save", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    return (<section>
        <RegisterForm onRegisterUser={RegisterHandler}/>
    </section>);
}

export default RegisterPage;