import Constants from 'expo-constants';
import * as Updates from 'expo-updates';
import { Platform } from "react-native";

const ENV = {
 development: {
   firebaseApiKey: "AIzaSyDrfZs3kWZvWQICTB8Wa0N8fhqwSFmruTU",
   firebaseAuthDomain: "midjourney-companion-staging.firebaseapp.com",
   firebaseDatabaseURL: "https://midjourney-companion-staging-default-rtdb.firebaseio.comm",
   firebaseProjectId: "midjourney-companion-staging",
   firebaseStorageBucket: "midjourney-companion-staging.appspot.com",
   firebaseMessagingSenderId: "559987624522",
   firebaseAppId: "1:559987624522:web:5461a339cced929bc1b4b3",
   firebaseMeasurementId: "G-M0537N9R1N"

   // googleOauthWebClientId: "364431652534-48achaumt984dp00dvhed2pu682d4mb8.apps.googleusercontent.com",
   // googleOauthWebClientSecret: "uaDlZ5TxsBk_uNY_NDB89Nvp",
   // googleOauthIOSClientId: "364431652534-qm91gisull6rq0dpd57urr0mtc2d0ejb.apps.googleusercontent.com",
   // giphyApiKey: "JI1eGIk1RwQwiiK8EDhylm6RUeXUQTyJ",
   // androidClientId: "397040800686-eeac4j1d5g7e546ouh6q54in14is97mm.apps.googleusercontent.com"
 },
 prod: {
   // firebaseApiKey: 'AIzaSyCTm0W3aeNljmc4e2D-jI9VMgr6h3oKzfc',
   // firebaseAuthDomain: 'vapeescape-123.firebaseapp.com',
   // firebaseDatabaseURL: 'https://vapeescape-123.firebaseio.com',
   // firebaseProjectId: 'vapeescape-123',
   // firebaseStorageBucket: '',
   // firebaseMessagingSenderId: '397040800686',
   // firebaseAppId: '1:397040800686:web:510bb455f67e3867',
   // googleOauthWebClientId: "397040800686-pv2o97bn7k3tikmfrnaeicgj9anon229.apps.googleusercontent.com",
   // googleOauthWebClientSecret: "Ncqc6HxvT9MfKx0pAoW0R2_S",
   // googleOauthIOSClientId: "397040800686-jrmhha3rtlg2emlq98i8n05kk40joafo.apps.googleusercontent.com",
   // giphyApiKey: "JI1eGIk1RwQwiiK8EDhylm6RUeXUQTyJ",
   // androidClientId: "397040800686-eeac4j1d5g7e546ouh6q54in14is97mm.apps.googleusercontent.com"
 }
};

const getEnvVars = (env = Updates.releaseChannel) => {
 if (process.env.NODE_ENV === 'production') {
   return ENV.prod;
 } else {
   return ENV.development;
 }
};

export default getEnvVars;

// import getEnvVars from '../../environment';
// const { apiUrl } = getEnvVars();
