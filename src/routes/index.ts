import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "singIn",
    component: () => import("../pages/SingIn.vue")
  },
  {
    path: "/create-accont",
    name: "createAccont",
    component: () => import("../pages/CreateAccont.vue")
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("../pages/Dashboard.vue")
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;