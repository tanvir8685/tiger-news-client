import React, { createContext, useEffect, useState } from 'react';
import{createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut}from'firebase/auth';
import app from '../../firebase/firebase.config';


export const AuthContext=createContext();
const auth=getAuth(app)
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    const providerLogin = (provider)=>{
        setLoading(true);
        return signInWithPopup(auth,provider)
    }
    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    const logOut=()=>{
        setLoading(true);
        return signOut(auth);
    }
    useEffect(()=>{
        const unsubscrive= onAuthStateChanged(auth,(currentUser)=>{
            console.log('user inside state change',currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return ()=>{
            unsubscrive();
        }
    },[])

    const authInfo={user,providerLogin,logOut,createUser,signIn,loading};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;