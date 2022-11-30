import React, { useState, useEffect } from "react";
import '../App.css';

const Info = (props) => {

    const [firstName, setFirstName] = useState("Namely");
    const [lastName, setLastName] = useState("Namely the 3rd");
    const [email, setEmail] = useState("Maily");

    return (
        <div className="main-container">
            <div id="left">
                <form>
                    <label>First Name</label>
                    <input
                        type="text"
                        onChange={e => setFirstName(e.target.value)}
                        value={firstName}
                    >
                    </input>
                    <label>Last Name</label>
                    <input
                        type="text"
                        onChange={e => setLastName(e.target.value)}
                        value={lastName}
                    >
                    </input>
                    
                    <label>Email</label>
                    <input
                        type="text"
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                    >
                    </input>

                </form>
            </div>
            <div id="right">
                <p>{firstName}</p>
                <p>{lastName}</p>
                <p>{email}</p>
            </div>
        </div>
    )


}

export default Info;