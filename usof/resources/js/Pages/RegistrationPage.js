import React from "react";
import DebugController from "../Controllers/DebugController";
import UserController from "../Controllers/UserController";
import { useState } from "react";
import RedirectController from "../Controllers/RedirectController";


export default function RegistrationPage() {

    const [loading, setLoading] = useState(false);

    const registerNewUser = async (event) => {
        if (DebugController.debug === true) {
            console.log("In registerNewUser...");
        }

        setLoading(true);

        event.preventDefault();

        let credential = {
            'email': document.querySelector('#RegistrationFormEmail').value,
            'name': document.querySelector('#RegistrationFormName').value,
            'password': document.querySelector('#RegistrationFormPassword').value
        }

        event.preventDefault();

        UserController.registerNewUser(credential).then(data => {
            if(data.status === true) {
                setLoading(false);
                RedirectController.redirectTo(data.url);
            }

            setLoading(false);
        })
    }
    return (
        <div className='login-page'>
            <form method="POST" action="/api/registration" onSubmit={registerNewUser}>
                <div className="center-box login-box center-items">
                    {loading ||
                        <div>
                            <div className="login-label-box">
                                <span>Sign up</span>
                            </div>
                            <div className='form-element-login'>
                                <input id="RegistrationFormName" placeholder="Name..." />
                            </div>
                            <div className='form-element-login'>
                                <input type="email" id="email" required id="RegistrationFormEmail" placeholder="Email..." />
                            </div>
                            <div className='form-element-login'>
                                <input id="RegistrationFormPassword" placeholder="Password..." />
                            </div>
                            <div className='form-element-login'>
                                <button>Registration</button>
                            </div>
                        </div>
                    }
                    {loading &&
                        <span>Loadin...</span>
                    }
                </div>
            </form>
        </div>


    )
}