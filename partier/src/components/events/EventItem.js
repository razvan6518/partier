import classes from './EventItem.module.css';

function MeetupItem(props) {
    return (
        <li className={classes.item}>
            <div className={classes.image}>
                <img src={props.image} alt={props.title}/>
            </div>
            <div className={classes.content}>
                <h3>{props.title}</h3>
                <address>{props.location}</address>
                <p>{props.description}</p>
            </div>
            <div className={classes.actions}>
                <button>To Favorites</button>
                <button>Buy Ticket</button>
            </div>
        </li>
    );
}

export default MeetupItem;