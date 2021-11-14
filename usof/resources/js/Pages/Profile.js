import React from "react";
import ReactDOM from "react";
import { useState } from "react";

//Import controllers
import UserController from "../Controllers/UserController";
import DebugController from "../Controllers/DebugController";

let dataUserProfieObject = {};

export default function Profile() {




    const showCurrentUser = async () => {
        if (DebugController.debug === true) {
            console.log("In showCurrentUser...");
        }
        UserController.showCurrentUser().then(data => {
            if (DebugController.debug === true) {
                console.log("Took from server:")
                console.log(data);
            }
            if (data.status === true) {
                dataUserProfieObject = Object.assign({}, data.user);
                loadUserDataStateFunction(true);
            }
        })
    }

    showCurrentUser();

    const [loadUserDataState, loadUserDataStateFunction] = useState(false);

    return (
        <>
            {loadUserDataState ||
                <>
                    <h1>Loading information...</h1>
                </>
            }
            {loadUserDataState &&
                <>

                    <h1>User profile loaded</h1>

                    <div>
                        <div>
                            <span>Id:</span><span>{dataUserProfieObject.id}</span>
                        </div>
                        <div>
                            <span>Name:</span><span>{dataUserProfieObject.name}</span>
                        </div>
                        <div>
                            <span>Email:</span><span>{dataUserProfieObject.email}</span>
                        </div>
                        <div>
                            <span>Role:</span><span>{dataUserProfieObject.role}</span>
                        </div>
                        <div>
                            <span>Rating:</span><span>{dataUserProfieObject.rating}</span>
                        </div>
                        <div>
                            <span>Avatar:</span><span>{dataUserProfieObject.avatar}</span>
                        </div>
                    </div>
                </>
            }
        </>

    );
}