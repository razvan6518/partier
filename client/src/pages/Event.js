import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import classes from "./Event.module.css";

function EventPage() {
    const params = useParams();

    const [isLoading, setIsLoading] = useState(true);
    const [loadedEvent, setLoadedEvent] = useState("");

    useEffect(async () => {
        setIsLoading(true);
        fetch(
            `http://localhost:5000/events/${params.eventId}`
        ).then(response => {
            return response.json();
        }).then(data => {
            setIsLoading(false);
            setLoadedEvent(data);
        });
    }, []);

    if (isLoading) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        );
    }

    return (
        <div className={classes.card}>
            <div className={classes.image}>
                <img src={loadedEvent.image} alt={loadedEvent.title}/>
            </div>
            <div className={classes.content}>
                <h3>{loadedEvent.title}</h3>
                <p>{loadedEvent.start_date}</p>
                <address>{loadedEvent.location}</address>
                <p>{loadedEvent.description}</p>
                <div className={classes.actions}>
                    <button>To Favorites</button>
                    <button>Buy Ticket</button>
                </div>
            </div>
        </div>
    );

}

async function getEvents(id) {
    const response = await fetch("http://localhost:5000/" + id);
    const event = await response.json();
    return event;
}

export default EventPage;