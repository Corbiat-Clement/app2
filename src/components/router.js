import Vue from "vue";
import VueRouter from 'vue-router';
import Accueil from './Accueil.vue';
import Nuages from './Nuages.vue';

Vue.use(VueRouter);

const routes = [
    {path: '/', component: Accueil},
    {path: '/nuages', component: Nuages},
];

const router = new VueRouter({
    routes,
});

export default router;