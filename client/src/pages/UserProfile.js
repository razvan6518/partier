import Card from "../components/ui/Card";
import UpdateUserFrom from "../components/layout/UpdateUserForm";

function UserProfilePage() {

    async function UpdateHandler(user) {

    }

    return (
        <Card>
            <UpdateUserFrom onUpdateUser={UpdateHandler}/>
        </Card>
    )
}

export default UserProfilePage;