import Card from "../components/ui/Card";
import classes from "./UserProfile.module.css";
import UpdateUserFrom from "../components/layout/UpdateUserForm";
import {useEffect, useState} from "react";

function UserProfilePage() {

    const [selectedImage, setSelectedImage] = useState(undefined);
    const [selectedImageURL, setSelectedImageURL] = useState("https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png");
    const [currentImage, setCurrentImage] = useState();

    useEffect(() => {
        fetch("/getProfilePic/" + JSON.parse(localStorage.getItem("user")).id)
            .then(response => response.blob())
            .then(imageBlob => {
                console.log("img blob " + imageBlob);
                console.log("url " + URL.createObjectURL(imageBlob));
                setSelectedImageURL(URL.createObjectURL(imageBlob));

            })
    }, [])

    console.log("selected " + selectedImageURL);

    function handleProfilePicChange(event) {
        console.log(event.target.files[0]);
        setSelectedImage(event.target.files[0]);
        setSelectedImageURL(URL.createObjectURL(selectedImage));

        const headers = new Headers();
        headers.append("Content-Type", "multipart/form-data");

        const formData = new FormData();
        formData.append("file", selectedImage, JSON.parse(localStorage.getItem("user")).id);

        const requestOptions = {
            method: 'POST',
            body: formData,
            redirect: 'follow'
        };

        fetch("http://localhost:5000/api/uploadPicture", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

    }

    async function UpdateHandler(user) {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "address": user.address,
            "firstName": user.firstName,
            "lastName": user.lastName,
            "password": user.password,
            "email": user.email
        });

        const requestOptions = {
            method: 'POST',
            headers: headers,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:5000/api/user/update/"+ JSON.parse(localStorage.getItem("user")).id, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    return (
        <Card>
            <div className={classes.imgContainer}>
                <img src={selectedImageURL} onClick={console.log("selected1 " + selectedImageURL)}/>
            </div>
            <div>
                {/*<h3 className={classes.name}>{JSON.parse(localStorage.getItem("user")).username.upper}</h3>*/}

            </div>
            <div className={classes.formContainer}>
                <form className={classes.form}>
                    <input
                        type="file"
                        name="profilePic"
                        onChange={handleProfilePicChange}
                    />
                </form>
                <UpdateUserFrom onUpdateUser={UpdateHandler}/>
            </div>

        </Card>
    )
}
export default UserProfilePage;