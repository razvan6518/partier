function ApproveButton(props) {

    function buyHandler(){

        const user = JSON.parse(localStorage.getItem("user"));

        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("http://localhost:5000/events/buy/"+props.eventId+"/"+user.stripeCustomerId+"/pm_1KYmn2G8Vd74GxWdgr4EGsHB", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

    }

    return (
        <button onClick={buyHandler}>Buy Ticket</button>
    );
}

export default ApproveButton;