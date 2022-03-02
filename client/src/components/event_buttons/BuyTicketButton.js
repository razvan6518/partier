import {useState} from "react";

function ApproveButton(props) {

    const [cardId, setCardId] = useState("");

    function buyHandler() {

        const user = JSON.parse(localStorage.getItem("user"));

        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("http://localhost:5000/events/buy/" + props.eventId + "/" + user.stripeCustomerId + "/" + cardId, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    return (<>
            <select name="role" required="" id="role" onChange={event => setCardId(event.target.value)}>
                <option aria-required="" value="pm_1KYqWGG8Vd74GxWdiiy7RL3r">User</option>
                <option aria-required="" value="pm_1KYqWGG8Vd74GxWdiiy7RL3r">Organiser</option>
            </select>
            <select name="role" required="" id="cardId" onChange={event => setCardId(event.target.value)}>
                <option aria-required="" value="pm_1KYqWGG8Vd74GxWdiiy7RL3r">pm_1KYpTIG8Vd74GxWd4WYTBB7C</option>
            </select>
            <button onClick={buyHandler}>Buy Ticket</button>
        </>
    );
}

export default ApproveButton;