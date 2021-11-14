import React from "react";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import DebugController from "../Controllers/DebugController";
import UserController from "../Controllers/UserController";
import UsersCard from "../Components/UsersCard";

export default function UsersPage() {


    const [users, SetUsers] = useState([]);
    const [updateUsers, SetUpdateUsers] = useState([]);

    useEffect(() => {
        UserController.loadAllUsers().then(data => {
            if (data.status === true) {
                SetUsers(data.users.slice());
            }

        })
    }, [updateUsers])

    return (
        <>
            <>
                <UsersCard update={updateUsers} setUpdate={SetUpdateUsers} users={users} />
            </>
        </>
    )
}