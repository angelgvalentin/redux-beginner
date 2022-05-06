import React from "react";
import { useSelector } from "react-redux"; //the useSelector hook is used for accesisng values of our states, while the useDispatch hook is used for modifying values of our states

function Profile() {
    const user = useSelector((state) => state.user.value); //useSelector hook takes in a function which allows you to specify which state you wanna access
    const themeColor = useSelector((state) => state.theme.value);

    return (
        <div style={{ color: themeColor }}>
            <h1>Profile Page</h1>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>Email: {user.email}</p>
        </div>
    );
}

export default Profile;
