//IMPORTIAMO I METODI createRouter e createWebHistory da vue-router
import { createRouter, createWebHistory } from "vue-router";

//IMPORTIAMO LE COMPONENTI CHE RAPPRESENTANO LE PAGINE
import Home from "./pages/Home.vue";
import AboutUs from "./pages/AboutUs.vue";
import ContactUs from "./pages/ContactUs.vue";
import AppMain from "./pages/AppMain.vue";

//CREIAMO I ROUTER A TUTTI GLI EFFETTI
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/works',
            name: 'works',
            component: AppMain
        },
        {
            path: '/about',
            name: 'about',
            component: AboutUs
        },
        {
            path: '/contact',
            name: 'contact',
            component: ContactUs
        }
    ]
});
export { router }