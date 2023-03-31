// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            fireBaseApiKey: process.env.NUXT_FIRE_BASE_API_KEY,
            fireBaseAuthDomain: process.env.NUXT_FIRE_BASE_AUTH_DOMAIN,
            fireBaseDatabaseURL: process.env.NUXT_FIRE_BASE_DATABASE_URL,
            fireBaseProjectId: process.env.NUXT_FIRE_BASE_PROJECT_ID,
            fireBaseStorageBucket: process.env.NUXT_FIRE_BASE_STORAGE_BUCKET,
            fireBaseMessagingSenderId: process.env.NUXT_FIRE_BASE_MESSAGING_SENDER_ID,
            fireBaseappId: process.env.NUXT_FIRE_BASE_APP_ID,
            fireBaseMeasurementId: process.env.NUXT_FIRE_BASE_MEASURMENT_ID
        }
    }
})

// NUXT_FIRE_BASE_API_KEY="AIzaSyCJyjiACBujQ5IYq6RYyHup4ng2HOhZFpE"
// NUXT_FIRE_BASE_="mackenzie-elliot-ca.firebaseapp.com"
// NUXT_FIRE_BASE_DATABASE_URL="https://mackenzie-elliot-ca-default-rtdb.firebaseio.com"
// NUXT_FIRE_BASE_PROJECT_Id="mackenzie-elliot-ca"
// NUXT_FIRE_BASE_STORAGE_BUCKET="mackenzie-elliot-ca.appspot.com"
// NUXT_FIRE_BASE_MESSAGING_SENDER_ID="813383392"
// NUXT_FIRE_BASE_APP_ID="1:813383392:web:d2abc5e2cbb1ee90271a85"
// NUXT_FIRE_BASE_MEASURMENT_ID="G-0GVMMXZJS2"