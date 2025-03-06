// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyBsfI6XjIlDzYJXHYK-Hn7TYDrezNTaFXM",
//   authDomain: "we-drive-35838.firebaseapp.com",
//   projectId: "we-drive-35838",
//   storageBucket: "we-drive-35838.firebasestorage.app",
//   messagingSenderId: "916444695918",
//   appId: "1:916444695918:web:e97a3c9506ae1e8a6a457f",
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const googleProvider = new GoogleAuthProvider();
// const facebookProvider = new FacebookAuthProvider();

// export { auth, googleProvider, facebookProvider };


import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider, 
  FacebookAuthProvider, 
  signInWithPopup,
  signOut
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBsfI6XjIlDzYJXHYK-Hn7TYDrezNTaFXM",
  authDomain: "we-drive-35838.firebaseapp.com",
  projectId: "we-drive-35838",
  storageBucket: "we-drive-35838.appspot.com",
  messagingSenderId: "916444695918",
  appId: "1:916444695918:web:e97a3c9506ae1e8a6a457f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Google Provider
const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    console.log(result.user);
  } catch (error) {
    console.error("Google Sign-In Error:", error);
  }
};

// Facebook Provider
const facebookProvider = new FacebookAuthProvider();
const signInWithFacebook = async () => {
  try {
    const result = await signInWithPopup(auth, facebookProvider);
    console.log(result.user);
  } catch (error) {
    console.error("Facebook Sign-In Error:", error);
  }
};

// Logout Function
const logout = async () => {
  try {
    await signOut(auth);
    console.log("User signed out successfully");
  } catch (error) {
    console.error("Logout Error:", error);
  }
};

// Export Auth and Providers
export { auth, googleProvider, facebookProvider, signInWithGoogle, signInWithFacebook, logout };
