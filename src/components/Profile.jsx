import { useContext } from "react";
import { UserContext } from "../AuthContext/UserContext";

const Profile = () => {
    const { user, logout } = useContext(UserContext);

    return (
        <div>
            <h2>User: {user?.name}</h2>
            <button onClick={logout}>Logout</button>
        </div>
    );
};

export default Profile;