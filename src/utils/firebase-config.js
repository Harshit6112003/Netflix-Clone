
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAQV0UwuoEx0UVCr3yHlx1CGnoR-fUMWWA",
  authDomain: "react-netflix-clone-b6580.firebaseapp.com",
  projectId: "react-netflix-clone-b6580",
  storageBucket: "react-netflix-clone-b6580.firebasestorage.app",
  messagingSenderId: "477524714406",
  appId: "1:477524714406:web:cc7e11a14fc3d838f4a567",
  measurementId: "G-Q32ZE8HEP0"
};


const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);