import { initializeApp } from "firebase/app";
import { getDatabase, get, ref } from "firebase/database";

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Databse
// exporting promise with products
export const getData = async () => {
    const db = getDatabase();
    const snapshot = await get(ref(db, "/shoes"));
    return snapshot.val();
};
