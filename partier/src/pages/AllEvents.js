import EventList from "../components/events/EventList";

function AllEventsPage() {
    const events = getEvents();
    return (
        <section>
            {/*<h1>All meetups</h1>*/}
            <EventList events={events}/>
        </section>
    );
}

function getEvents() {
    return require('../resources/events_dummy.json');
}

export default AllEventsPage;

