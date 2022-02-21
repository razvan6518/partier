import {useRef} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useState} from "react";

import Card from "../ui/Card";
import classes from "./LoginForm.module.css";


function AddEventForm(props) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [image, setImage] = useState("");
    const [category, setCategory] = useState("");

    function submitHandler(event) {
        event.preventDefault();
        const eventItem = {
            "title": title,
            "description": description,
            "location": location,
            "startDate": startDate,
            "endDate": endDate,
            "image": image,
            "category": category
        };
        props.onAddEvent(eventItem);
    }

    return (<Card>
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor="title">Title</label>
                <input type="text" required id="title" onChange={event => setTitle(event.target.value)}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="description">Description</label>
                <input type="text" required id="description" onChange={event => setDescription(event.target.value)}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="location">Location</label>
                <input type="text" required id="location" onChange={event => setLocation(event.target.value)}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="startDate">Start Date</label>
                <DatePicker selected={startDate} onChange={event => setStartDate(event)} />
            </div>
            <div className={classes.control}>
                <label htmlFor="endDate">End Date</label>
                <DatePicker selected={endDate} onChange={event => setEndDate(event)} />
            </div>
            <div className={classes.control}>
                <label htmlFor="image">Image</label>
                <input type="text" required id="image" onChange={event => setImage(event.target.value)}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="category">Choose a role:</label>
                <select name="category" id="category" onChange={event => setCategory(event.target.value)}>
                    <option value="festival">festival</option>
                    {/*<option value="ROLE_ORGANISER">Organiser</option>*/}
                </select>
            </div>
            <div className={classes.actions}>
                <button>Add Event</button>
            </div>
        </form>
    </Card>)
}

export default AddEventForm;