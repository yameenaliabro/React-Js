import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

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

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);