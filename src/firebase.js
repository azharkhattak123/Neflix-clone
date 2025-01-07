import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyD-FpAckHodn9BE3TGzIESswWGs3cLRrKA",
  authDomain: "netflix-clone-d4c40.firebaseapp.com",
  projectId: "netflix-clone-d4c40",
  storageBucket: "netflix-clone-d4c40.firebasestorage.app",
  messagingSenderId: "479632300435",
  appId: "1:479632300435:web:0d8897f66b041bcf98f066",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

const logout = () => {
  try {
    signOut(auth);
  } catch (error) {
    console.log(error);
  }
};

export { auth, db, login, signup, logout };
