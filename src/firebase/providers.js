import { signInWithEmailAndPassword } from 'firebase/auth';
import { FirebaseAuth } from './firebase-config';


export const startLoginWithEmailPassword = async (email, password) => {
    try {

        const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password);
        const {uid, photoURL, displayName} = resp.user;

        return{
            ok: true,
            uid, photoURL, displayName
        }
        
    } catch (error) {
        const errorMessage = error.message;

        return {
            ok: false,
            errorMessage
        }
        
    }
}

export const logoutFirebase = async () => {
    return await FirebaseAuth.signOut();
}