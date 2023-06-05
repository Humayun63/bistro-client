import React, { createContext, useEffect } from 'react';
import { useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../firebase/firebase.config';
import axios from 'axios';

const auth = getAuth(app);


export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)

            // get and set token
            if (currentUser) {

                axios.post('http://localhost:5000/jwt', {
                    email: currentUser.email
                })
                    .then(data => {
                        // console.log(data)
                        localStorage.setItem('access-token', data.data.token)
                        setLoading(false)
                    })
            } else {
                localStorage.removeItem('access-token')
            }


        })
        return () => {
            return unsubscribe()
        }
    }, [])


    const registerUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateNamePhoto = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }

    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const loginWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const userInfo = {
        user,
        loading,
        registerUser,
        updateNamePhoto,
        login,
        loginWithGoogle,
        logOut
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;