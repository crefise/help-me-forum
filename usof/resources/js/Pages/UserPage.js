import React from "react";
import { useState, useEffect  } from "react";
import UserController from "../Controllers/UserController";
export default function UserPage() {


    const [userData, setUserData] = useState({});
    const [loadUserData, setloadUserData] = useState(false);


    
 

    useEffect(() => {
        UserController.showUserProfile({'id': location.pathname.split('/').pop()}).then( data => {
            console.log(data);
            if (data.status===true) {
                setUserData(data.user);
                setloadUserData(true);
            }
        })
    }, [])

    return (
        <>
            {loadUserData ||
                <>
                <h1>User data loading...</h1>
                </>
            }
            {loadUserData &&
                <>
                <h1>User data loaded!</h1>
                <div style={{ border: '1px black solid', margin: '10px' }}>
                        <div> Name: {userData.name} </div>
                        <div> Email: {userData.email} </div>
                        <div> Role: {userData.role} </div>
                    </div>
                </>
            }
        </>
    )
}