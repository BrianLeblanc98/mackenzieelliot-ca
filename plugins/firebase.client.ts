// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase, ref, onValue, set } from 'firebase/database';
// https://firebase.google.com/docs/web/setup#available-libraries

export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig();
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: config.public.fireBaseApiKey,
        authDomain: config.public.fireBaseAuthDomain,
        databaseURL: config.public.fireBaseDatabaseURL,
        projectId: config.public.fireBaseProjectId,
        storageBucket: config.public.fireBaseStorageBucket,
        messagingSenderId: config.public.fireBaseMessagingSenderId,
        appId: config.public.fireBaseappId,
        measurementId: config.public.fireBaseMeasurementId
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