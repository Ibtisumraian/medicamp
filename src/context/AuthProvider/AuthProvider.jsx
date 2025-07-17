import React, { useEffect, useState } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { auth } from '../../components/firebase/firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import useAxiosSecure from '../../hooks/useAxiosSecure/useAxiosSecure';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(true);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider()
    const axiosSecure = useAxiosSecure()

    const userSignUpWithEmailPass = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const userSignInWithEmailPass = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    const userSignInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
            setLoading(false)
            if (user?.email) {
                const data = { email: user.email }
                axiosSecure.post('/jwt', data)
                .then(res=>{
                    console.log(res.data.token); 
                    const token = res.data.token
                    localStorage.setItem('token', token)
                })
                .catch(error=>{
                    console.log(error);                    
                })
            }
        })
        return () => {
            unsubscribe()
        }
    },[])
    


    const info = {
        user,
        loading,
        userSignUpWithEmailPass,
        userSignInWithEmailPass,
        userSignInWithGoogle,
    }
    return (
        <AuthContext value={info}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;