import { useParams } from "react-router-dom";
import classes from "./Event.module.css";

function EventPage(props) {
    const params = useParams();
    let event = null;
    getEvents().forEach((ev) => {
        console.log(ev.id);

        if (ev.id.toString() === params.eventId.toString()) {
            console.log("ok");
            event = ev;
        }
        console.log("no");
    })

    return (
        <div className={classes.card}>
            <div className={classes.image}>
                <img src={event.image} alt={event.title}/>
            </div>
            <div className={classes.content}>
                <h3>{event.title}</h3>
                <p>{event.start_date}</p>
                <address>{event.location}</address>
                <p>{event.description}</p>
                <div className={classes.actions}>
                    <button>To Favorites</button>
                    <button>Buy Ticket</button>
                </div>
            </div>
        </div>
    );
}

function getEvents() {
    return require('../resources/events_dummy.json');
}

export default EventPage;