/* eslint-disable import/no-anonymous-default-export */
import React, { useState, useEffect, createContext } from "react";
import { auth } from "../services/auth.service";
export const UserContext = createContext({ user: {} });
export default (props) => {
    const [user, setuser] = useState({});
    useEffect(() => {
        auth.onAuthStateChanged(async (res) => {
            if (res) {
                const user = res.providerData[0];
                debugger;
                const userObj = {
                    id: user.uid,
                    name: user.displayName,
                    email: user.email,
                    image: user.photoURL,
                    shortName: user.displayName.substring(0, 2).toUpperCase()
                };
                setuser(userObj);
                localStorage.setItem('user', JSON.stringify(userObj));
            }
        });
    }, []);
    return (
        <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
    );
};