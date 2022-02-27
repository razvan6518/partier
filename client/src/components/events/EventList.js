import EventItem from "./EventItem";
import classes from "./EventList.module.css"

function EventList(props) {
    return (
        <ul className={classes.list}>
            {props.events.map(event => <EventItem key={event.id}
                                                   id={event.id}
                                                   image={event.image}
                                                   title={event.title}
                                                   address={event.address}
                                                   description={event.description}
                                                  approved={event.approved}
            />)}
        </ul>
    );
}

export default EventList;