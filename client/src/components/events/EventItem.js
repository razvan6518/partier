import classes from './EventItem.module.css';
import { useNavigate } from "react-router-dom";

function MeetupItem(props) {
    const navigate = useNavigate();
    console.log(props);
    return (
        <li className={classes.item}>
            <div className={classes.image}  onClick={() => navigate(`/event/${props.id}`,{myJSON: props})}>
                <img src={props.image} alt={props.title}/>
            </div>
            <div className={classes.content} onClick={() => navigate(`/event/${props.id}`)}>
                <h3>{props.title}</h3>
                <address>{props.location}</address>
                <p>{truncateWithEllipses(props.description, 200).toUpperCase()}</p>
            </div>
            <div className={classes.actions}>
                <button>To Favorites</button>
                <button>Buy Ticket</button>
            </div>
        </li>
    );
}

export default MeetupItem;

function truncateWithEllipses(text, max) {
    if (text === null) {
        return "";
    }
    return text.substr(0, max - 1) + (text.length > max ? '...' : '');
}