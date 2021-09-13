
import { toast } from 'react-toastify';
import { toaster } from '../static/Strings';
import firebase from "../utilities/firebase";
export const auth = firebase.auth();

// google login 
const googleProvider = new firebase.auth.GoogleAuthProvider()
export const signInWithGoogle = () => {
    auth.signInWithPopup(googleProvider);
}
// google signout 
export const logOut = () => {
    auth.signOut().then(() => {
        localStorage.removeItem('user');
        toast.success(toaster.LOGOUT_SUCCESS)
    }).catch((error) => {
        toast.error(toaster.LOGOUT_FAILED)
    })
}