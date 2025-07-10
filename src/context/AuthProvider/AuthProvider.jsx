import React, { useEffect, useState } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { auth } from '../../components/firebase/firebase.init';
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(true);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider()

    const userSignInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    },[])
    


    const info = {
        user,
        loading,
        userSignInWithGoogle,
    }
    return (
        <AuthContext value={info}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;