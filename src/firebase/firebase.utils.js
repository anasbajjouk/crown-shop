import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAwre1Wm_djNAkG7Rg5uUhctIYcjXloHH4",
    authDomain: "crown-db-cee7b.firebaseapp.com",
    databaseURL: "https://crown-db-cee7b.firebaseio.com",
    projectId: "crown-db-cee7b",
    storageBucket: "",
    messagingSenderId: "1035316961372",
    appId: "1:1035316961372:web:48dbac2a8d6a2241"
};

export const createUserProfileDocument = async (userAuth, additionData) => {
    if(!userAuth) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionData
            })
        }catch (error){
            console.log('error creating user', error.message);
            
        }
    }

    return userRef;
}

firebase.initializeApp(config);

// Get the Auth service for the default app
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;