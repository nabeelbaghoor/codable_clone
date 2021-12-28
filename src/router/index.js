import { createRouter, createWebHashHistory } from "vue-router";
// import Home from "../views/Home.vue";
import Developers from "../views/Developers.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Developers,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/developers",
    name: "Developers",
    component: () => import("../views/Developers.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
