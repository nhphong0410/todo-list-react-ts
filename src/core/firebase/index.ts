import { initializeApp } from "firebase/app"
import { getAuth, signInWithEmailAndPassword as firebaseSignInWithEmailAndPassword } from "firebase/auth"

const config = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
}
const firebase = initializeApp(config)
const auth = getAuth(firebase)

export const currentUser = auth.currentUser

export const signInWithEmailAndPassword = async ({ email, password }: { email: string, password: string }) => {
    return await firebaseSignInWithEmailAndPassword(auth, email, password)
}

export const signOut = async () => {
    await auth.signOut()
}

auth.onAuthStateChanged(() => { 
    
})
