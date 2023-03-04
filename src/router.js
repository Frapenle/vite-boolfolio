import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import ProjectsList from './pages/ProjectsList.vue';
import ProjectPage from './pages/ProjectPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/projects/',
            name: 'projects',
            component: ProjectsList
        },
        {
            path: '/projects/:id',
            name: 'project',
            component: ProjectPage
        },
    ]
});
export { router };