import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";

import {
    FIREBASE_Api_key,
    FIREBASE_app_id,
    FIREBASE_auth_domain,
    FIREBASE_message_sender_id,
    FIREBASE_project_id,
    FIREBASE_storgae_bucket
} from "../../config";

const firebaseConfig = {
    apiKey: FIREBASE_Api_key,
    authDomain: FIREBASE_auth_domain,
    projectId: FIREBASE_project_id,
    storageBucket: FIREBASE_storgae_bucket,
    messagingSenderId: FIREBASE_message_sender_id,
    appId: FIREBASE_app_id
};
console.log("🚀 ~ firebaseConfig:", firebaseConfig)

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);