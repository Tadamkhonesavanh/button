import { createRouter, createWebHistory } from "vue-router";
import Lister from "../views/lister.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/admin",
            children: [
            { path: "lister", component:Lister},
            ],
        },
    ],

});
export default router;