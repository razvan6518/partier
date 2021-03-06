import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import EventItem from "../components/events/EventItem";

function EventPage() {
    const params = useParams();

    if (localStorage.getItem("token") == null) {
        window.location.replace("/login");
    }

    const [isLoading, setIsLoading] = useState(true);
    const [loadedEvent, setLoadedEvent] = useState("");
    console.log(localStorage.getItem("token"));
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
        <EventItem event={loadedEvent}
                   buyTicket={true}/>
    );

}

async function getEvents(id) {
    const response = await fetch("http://localhost:5000/" + id);
    const event = await response.json();
    return event;
}

export default EventPage;