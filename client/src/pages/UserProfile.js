import Card from "../components/ui/Card";
import UpdateUserForm from "../components/layout/UpdateUserForm";
import AddNewCardForm from "../components/layout/AddNewCardForm";

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

        fetch("http://localhost:5000/api/user/update/" + JSON.parse(localStorage.getItem("user")).id, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    async function AddCardHandler(cardDetails){
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "number": cardDetails.cardNumber,
            "expYear": cardDetails.expYear,
            "expMonth": cardDetails.expMonth,
            "cvv": cardDetails.cvv
        });

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:5000/api/user/add-card/"+JSON.parse(localStorage.getItem("user")).username, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    return (
        <Card>
            <UpdateUserForm onUpdateUser={UpdateHandler}/>
            <AddNewCardForm onAddCardHandler={AddCardHandler}/>
        </Card>
    )
}

export default UserProfilePage;