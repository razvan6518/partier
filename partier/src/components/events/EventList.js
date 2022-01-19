import EventItem from "./EventItem";
import classes from "./EventList.module.css"

function EventList(props) {
    return (
        <ul className={classes.list}>
            {props.events.map(meetup => <EventItem key={meetup.id}
                                                    id={meetup.id}
                                                    image={meetup.image}
                                                    title={meetup.title}
                                                    address={meetup.address}
                                                    description={meetup.description}
            />)}
        </ul>
    );
}

export default EventList;