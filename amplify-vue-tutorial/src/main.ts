import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { Amplify } from 'aws-amplify';
import awsExport from './aws-exports';

import App from './App.vue';
import router from './router';

import './assets/main.css';

Amplify.configure(awsExport);
const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
