import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword } from 'firebase/auth/cordova';
import { auth } from './../firebase.init';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }


    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutUser = () =>{
        return signOut(auth);
    }

    // onAuthStateChanged(auth, (currentUser) =>{
        
    //     if (currentUser) {
    //         console.log('has current user');
    //     }
    //     else{
    //         console.log('current user', currentUser);
    //     }
    // })


    useEffect(() =>{
        const unsubscribe  = onAuthStateChanged(auth, currentUser => {
            console.log('current user inside useEffect on auth state change', currentUser);
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const userInfo = {
        user,
        loading,
        createUser, 
        signInUser,
        signOutUser,
    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;