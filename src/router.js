import { createRouter, createWebHashHistory } from "vue-router";

import HomeView from "./views/HomeView.vue";

import AboutView from "./views/AboutView.vue";

import BreweryView from "./views/BreweryView.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      name: "home",
      component: HomeView,
      path: "/",
    },
    {
      name: "aboutview",
      component: AboutView,
      path: "/about",
    },
    {
      name: "breweryview",
      component: BreweryView,
      path: "/breweryview/:id",
    },
  ],
});
