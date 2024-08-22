import { createRouter, createWebHistory } from 'vue-router';
import AppHome from './pages/AppHome.vue';
import AppProjects from './pages/AppProjects.vue';
import AppAbout from './pages/AppAbout.vue';
import Error404 from './pages/errors/Error404.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/projects',
            name: 'projects',
            component: AppProjects
        },
        {
            path: '/about',
            name: 'about',
            component: AppAbout
        },
        {
            path: '/404',
            name: 'not-found',
            component: Error404
        }
    ]
});
export { router };