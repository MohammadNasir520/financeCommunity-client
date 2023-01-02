import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import app from '../Firebase/Firebase.config';
import { current } from 'daisyui/src/colors';

const auth = getAuth(app)
export const AuthContext = createContext()
const AuthProvider = ({ children }) => {


    const [user, setUser] = useState(null)

    const createUserbyEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //loginBy email and pssword
    const loginByEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    //setting current user to user state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
        return () => unsubscribe();
    }, [])

    // logout
    const logOut = () => {
        return signOut(auth)
    }
    const authInfo = {
        createUserbyEmail,
        loginByEmail,
        user,
        logOut,

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;