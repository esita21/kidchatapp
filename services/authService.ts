import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { initializeApp } from "firebase/app";
//@ts-ignore
import { createUserWithEmailAndPassword, getReactNativePersistence, initializeAuth, signInWithEmailAndPassword, signOut, User,browserSessionPersistence, getAuth ,setPersistence} from "firebase/auth";

import { useEffect, useState } from "react";
import { Platform } from "react-native";

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_API_KEY,
  authDomain:process.env.EXPO_PUBLIC_AUTH_DOMAIN,
  projectId:process.env.EXPO_PUBLIC_PROJECT_ID,
  storageBucket:process.env.EXPO_PUBLIC_STORAGE_BUCKET,
  messagingSenderId:process.env.EXPO_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.EXPO_PUBLIC_APP_ID,    
  measurementId: process.env.EXPO_PUBLIC_MEASUREMENT_ID,
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// 
const auth =  (Platform.OS==="web")? getAuth(app) :initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
    });
    if (Platform.OS === "web") 
    setPersistence(auth, browserSessionPersistence)
    .catch((error) => {
        console.error("Error setting persistence:", error);
    });
        
    
export const signup = async (email: string, password: string) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error) {
        console.error("Error signing up:", error);
        throw error;
    }
};

export const login = async (email: string, password: string) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error) {
        console.error("Error logging in:", error);
        throw error;
    }
};

export const logout = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        console.error("Error logging out:", error);
        throw error;
    }
};

export const useAuth = () => {
    const [user, setUser] = useState< User | null>(null);
    const router = useRouter();
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
            if (!user) { 
                router.replace("/auth/login")
            }
            else {
                router.replace("/main");
            }

        })
        return unsubscribe;
    });
    return {user};
}


