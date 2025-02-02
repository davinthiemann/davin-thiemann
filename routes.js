import {createMemoryHistory, createRouter, createWebHistory} from "vue-router";
import HomeView from "@/components/HomeView.vue";
import AboutView from "@/components/AboutView.vue";
import NotFound from "@/components/NotFound.vue";

const routes = [
    { path: '/', component: HomeView},
    { path: '/about', component: AboutView},
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = createRouter( {
    history: createWebHistory(),
    routes,
})

export default router