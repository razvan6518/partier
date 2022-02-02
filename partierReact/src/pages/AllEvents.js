import EventList from "../components/events/EventList";
import { useEffect, useState } from "react";

function AllEventsPage() {

    const [isLoading, setIsLoading] = useState(true);
    const [loadedEvents, setLoadedEvents] = useState([]);

    useEffect(async () => {
        setIsLoading(true);
        fetch(
            "http://localhost:5000/events"
        ).then(response => {
            return response.json();
        }).then(data => {
            const events = [];
            for (const key in data) {
                const event = {
                    id: key,
                    ...data[key]
                };
                events.push(event);
            }

            setIsLoading(false);
            setLoadedEvents(events);
        });
        // const response = await fetch("http://localhost:5000/events");
        // const events = await response.json();
    }, []);



    if (isLoading) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        );
    }

    return (
        <section>
            <EventList events={loadedEvents}/>
        </section>
    );
}



export default AllEventsPage;

