import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Orders",
    meta: {
      header: true,
    },
    component: () =>
      import ("../pages/Orders.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;