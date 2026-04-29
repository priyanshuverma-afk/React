import { useContext } from "react";
import { UserContext } from "../AuthContext/UserContext";

const Login = () => {
    const { login } = useContext(UserContext);

    const handleLogin = () => {
        login({ name: "Priyanshu", email: "test@gmail.com" });
    };

    return <button onClick={handleLogin}>Login</button>;
};

export default Login;