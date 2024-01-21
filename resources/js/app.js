import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

// Import your components
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import HomeComponent from './components/HomeComponent.vue';

// Define routes
const routes = [
    { path: '/', component: HomeComponent },
];

// Create router instance
const router = createRouter({
    history: createWebHistory(),
    routes,
});

const app = createApp({
    components: {
        HeaderComponent,
        FooterComponent
    }
});
app.use(router);
app.mount('#app');
