import React, { useState } from "react";
import DebugController from "../Controllers/DebugController";
import UserController from "../Controllers/UserController";
import RedirectController from "../Controllers/RedirectController";


export default function LoginPage() {

    const [loading, setLoading] = useState(false);

    const loginUser = async (event) => {
        if (DebugController.debug === true) {
            console.log("In loginUser...");
        }

        setLoading(true);
        
        event.preventDefault();

        let credential = {
            'email': document.querySelector('#LoginFormEmail').value,
            'password': document.querySelector('#LoginFormPassword').value
        }

        UserController.loginUser(credential).then(data => {
            if (DebugController.debug === true) {
                console.log("Take from server(while login): ");
                console.log(data);
            }

            if (data.status === true) {
                if (DebugController.debug === true) {
                    console.log("Login okay!")
                    console.log("Saving jwt in cookies");
                }
                document.cookie = `jwt-token=${data.jwt_token};path=/`;

                setLoading(false);
                RedirectController.redirectTo(data.url);
                
            }
            else {
                console.log("Login error!")
                setLoading(false);
            }

        })
    }

    return (

        <div className='login-page'>
            <form method="POST" action="/api/login" onSubmit={loginUser}>
                <div className="center-box login-box center-items">
                    { loading ||
                        <>
                        <div>
                            <div className="login-label-box">
                                <span>Sign in</span>
                            </div>
                            <div className='form-element-login'>
                                <input  placeholder="Email..." type="email" id="LoginFormEmail" required />
                            </div>

                            <div className='form-element-login'>
                                <input  placeholder="Password..." id="LoginFormPassword" />
                            </div>

                            <div className='form-element-login'> 
                                <button>Hello</button>
                        </div>
                        </div>
                        </>
                    } 
                    { loading &&
                        <>
                            <span>Loading...</span>
                        </>
                    }
                </div>
            </form>
        </div>


    )
}