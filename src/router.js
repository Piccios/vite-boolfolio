import { createRouter, createWebHistory } from 'vue-router';
import AppHome from './pages/AppHome.vue';
import AppBlog from './pages/AppProjects.vue';
import AppAbout from './pages/AppAbout.vue';

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
            component: AppBlog
        },
        {
            path: '/about',
            name: 'about',
            component: AppAbout
        }
    ]
});
export { router };