// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase, ref, onValue, set } from 'firebase/database';
// https://firebase.google.com/docs/web/setup#available-libraries

export default defineNuxtPlugin(nuxtApp => {
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    console.log(process.env)
    const firebaseConfig = {
        apiKey: process.env.fireBaseApiKey,
        authDomain: process.env.fireBaseAuthDomain,
        databaseURL: process.env.fireBaseDatabaseURL,
        projectId: process.env.fireBaseProjectId,
        storageBucket: process.env.fireBaseStorageBucket,
        messagingSenderId: process.env.fireBaseMessagingSenderId,
        appId: process.env.fireBaseappId,
        measurementId: process.env.fireBaseMeasurementId
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    const analytics = getAnalytics(app);
    const auth = getAuth(app);
    const firestore = getFirestore(app);
    const database = getDatabase(app);

    nuxtApp.vueApp.provide('auth', auth);
    nuxtApp.provide('auth', auth);

    nuxtApp.vueApp.provide('firestore', firestore);
    nuxtApp.provide('firestore', firestore);

    nuxtApp.vueApp.provide('database', database);
    nuxtApp.provide('database', database);
})