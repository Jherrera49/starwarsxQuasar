const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", name:"home", component: () => import("pages/Index.vue") },
      { path: "people", name:"people", component: () => import("pages/modules/people.vue") },
      { path: "starships", name:"starships", component: () => import("pages/modules/starships.vue") },
      { path: "planets", name:"planets", component: () => import("pages/modules/planets.vue") },

    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
