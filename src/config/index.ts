// export const FIREBASE_Api_key = process.env.FIREBASE_API_KEY;
console.log(process.env); // Print all environment variables to console
export const FIREBASE_Api_key = process.env.REACT_APP_FIREBASE_API_KEY;
export const FIREBASE_auth_domain = process.env.REACT_APP_FIREBASE_AUTH_DOMAIN;
export const FIREBASE_project_id = process.env.REACT_APP_FIREBASE_PROJECT_ID;
export const FIREBASE_storgae_bucket = process.env.REACT_APP_FIREBASE_STORAGE_BUCKET;
export const FIREBASE_message_sender_id = process.env.REACT_APP_FIREBASE_MESSAGESENDER_ID;
export const FIREBASE_app_id = process.env.REACT_APP_FIREBASE_APP_ID;
console.log("🚀 ~ FIREBASE_Api_key:", FIREBASE_Api_key)