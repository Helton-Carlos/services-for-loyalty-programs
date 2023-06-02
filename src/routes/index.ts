import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "sing-in",
    component: () => import("../pages/SingIn.vue")
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