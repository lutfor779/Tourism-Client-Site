import initializeFirebase from "../firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";



initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    const [places, setPlaces] = useState([]);
    const [booking, setBooking] = useState([]);


    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
            .finally(() => setIsLoading(false));
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setError("");
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribe();
    }, [auth, booking, places])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
                setError("")
            })
            .catch(err => {
                setError(err.message);
            })
            .finally(() => setIsLoading(false))
    }


    // console.log(name, email);

    return {
        user,
        error,
        isLoading,
        places,
        booking,
        setUser,
        setError,
        setPlaces,
        setBooking,
        signInWithGoogle,
        logOut
    }
}

export default useFirebase;