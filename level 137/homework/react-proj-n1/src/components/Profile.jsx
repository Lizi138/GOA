import { useNavigate } from "react-router-dom"

const Profile = () => {
    const navigate2 = useNavigate();

    return (
        <div>
            <h1>this is Profile page</h1>
            <button onClick={() => navigate2("/")}>go to home page</button>
        </div>
    )
}

export default Profile;