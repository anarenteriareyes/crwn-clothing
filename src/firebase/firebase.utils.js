import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAinMYxPknKs0bE4UYWF8K3879Vw1beL90",
    authDomain: "crwn-database-b096f.firebaseapp.com",
    projectId: "crwn-database-b096f",
    storageBucket: "crwn-database-b096f.appspot.com",
    messagingSenderId: "469479736268",
    appId: "1:469479736268:web:723c24a9154d4c31d89369",
    measurementId: "G-QJPZV392T2"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        // if user doesn't exist, store at db:
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })

        } catch (error) {
            console.log('error creating user', error.message)
        }
    }
    return userRef;
}



firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;