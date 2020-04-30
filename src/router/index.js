import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Profile from "@/views/Profile";
import List from "@/views/List";
import Main from "@/global/Main.vue";
import Login from "@/global/Login";
import SignUp from "@/global/SignUp";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    name: "Login",
    component: Login
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp
  },
  {
    path: "/main",
    name: "Main",
    component: Main,
    children: [
      {
        path: "",
        name: "Home",
        component: Home
      },
      {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/About.vue")
      },
      {
        path: "/profile",
        name: "Profile",
        component: Profile
      },
      {
        path: "/list",
        name: "List",
        component: List
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
