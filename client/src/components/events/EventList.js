import EventItem from "./EventItem";
import classes from "./EventList.module.css"

function EventList(props) {
    return (
        <ul className={classes.list}>
            {props.events.map(event => <EventItem event={event} buyTicket={true} toFavorites={true}/>)}
        </ul>
    );
}

export default EventList;