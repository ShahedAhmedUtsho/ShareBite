import { onAuthStateChanged, signOut } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import Auth from '../Firebase/firebase.config';
import PropTypes from 'prop-types';
import axios from 'axios';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [modelHead, setModelHead] = useState("");
    const [modelMessage, setModelMessage] = useState("");
    const [isSuccessOpen, setIsSuccessOpen] = useState(false);
    const openSuccessModal = () => {
        setIsSuccessOpen(true);
    };
    const closeSuccessModal = () => {
        setIsSuccessOpen(false);
    };
    const authUID =  user?.uid ;
    const userUID = {uid : authUID}

   const tokenCrate = (currentUser)=>{
    const authUID = currentUser || user?.uid ;
    const userUID = {uid : authUID}
    axios.post('https://test-tau-green-45.vercel.app/jwt',userUID,{withCredentials : true})
    .then(()=>{
      
    })

   }


    const [isErrorOpen, setIsErrorOpen] = useState(false);
    const openErrorModal = () => {
        setIsErrorOpen(true);
    };
    const closeErrorModal = () => {
        setIsErrorOpen(false);
    };

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(Auth, currentUser => {
          
            setUser(currentUser);
          
            setLoading(false);
            // to an issue if user is OK
          
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const logOut = () => {
        signOut(Auth)
            .then(() => {
               
                axios.post('https://test-tau-green-45.vercel.app/logout',userUID,{withCredentials:true})
              .then(() => {
                // console.log(res.data)
                // console.log(userUID)
              })
            })
            .catch(err => console.log(err));
    };

    

    const shareInfo = {
        user,
        logOut,
        setLoading,
        loading,
        setUser,
        modelHead,
        modelMessage,
        setModelHead,
        setModelMessage,
        setIsSuccessOpen,
        isSuccessOpen,
        openSuccessModal,
        closeSuccessModal,
        closeErrorModal,
        openErrorModal,
        isErrorOpen,
        tokenCrate
    };

    return (
        <AuthContext.Provider value={shareInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
};

export default AuthProvider;
