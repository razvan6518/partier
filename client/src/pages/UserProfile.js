import Card from "../components/ui/Card";
import UpdateUserFrom from "../components/layout/UpdateUserForm";

function UserProfilePage() {

    async function UpdateHandler(user) {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        let raw = JSON.stringify({
            "address": user.address,
            "firstName": user.firstName,
            "lastName": user.lastName,
            "password": user.password,
            "email": user.email
        });

        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:5000/api/user/update/"+JSON.parse(localStorage.getItem("user")).id, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    return (
        <Card>
            <UpdateUserFrom onUpdateUser={UpdateHandler}/>
        </Card>
    )
}

export default UserProfilePage;