import React from "react";
import { useDispatch } from "react-redux"; //useDispatch hook is used to modify values of our state while the useSelector hook is used for accessing values of our states
import { login, logout } from "../features/user"; //this login action was created and exported in user.js

function Login() {
    const dispatch = useDispatch();

    return (
        <div>
            <button
                onClick={() => {
                    //login is the action that we wann take and what we pass into the login action is the payload which in this case is the object with the new values for the user
                    dispatch(login({ name: "Pedro", age: 20, email: "pedro@gmail.com" }));
                }}
            >
                Login
            </button>

            <button
                onClick={() => {
                    dispatch(logout());
                }}
            >
                Logout
            </button>
        </div>
    );
}

export default Login;
