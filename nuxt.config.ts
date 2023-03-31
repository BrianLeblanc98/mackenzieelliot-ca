// https://nuxt.com/docs/api/configuration/nuxt-config
require('dotenv').config();

export default defineNuxtConfig({
    buildModules: [
        '@nuxtjs/dotenv'
    ],
    env: {
        fireBaseApiKey: process.env.fireBaseApiKey,
        fireBaseAuthDomain: process.env.fireBaseAuthDomain,
        fireBaseDatabaseURL: process.env.fireBaseDatabaseURL,
        fireBaseProjectId: process.env.fireBaseProjectId,
        fireBaseStorageBucket: process.env.fireBaseStorageBucket,
        fireBaseMessagingSenderId: process.env.fireBaseMessagingSenderId,
        fireBaseAppId: process.env.fireBaseappId,
        fireBaseMeasurementId: process.env.fireBaseMeasurementId
    }
})
