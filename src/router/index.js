import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../components/Dashboard.vue";
import NewEmployee from "../components/NewEmployee.vue";
import ViewEmployee from "../components/ViewEmployee.vue";
import EditEmployee from "../components/EditEmployee.vue";
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
import { getAuth } from "firebase/auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: Dashboard,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: {
        requiresGuest: true,
      },
    },
    {
      path: "/register",
      name: "register",
      component: Register,
      meta: {
        requiresGuest: true,
      },
    },
    {
      path: "/new",
      name: "new-employee",
      component: NewEmployee,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/edit/:employee_id",
      name: "edit-employee",
      component: EditEmployee,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/:employee_id",
      name: "view-employee",
      component: ViewEmployee,
    },
  ],
});

const auth = getAuth();
router.beforeEach((to, from, next) => {
  // Check for requireAuth guard
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // Check if NOT logged in
    if (!auth.currentUser) {
      // Go to login
      next({
        path: "/login",
        query: {
          redirect: to.fullPath,
        },
      });
    } else {
      // Proceed to route
      next();
    }
  } else if (to.matched.some((record) => record.meta.requiresGuest)) {
    // Check if logged in
    if (auth.currentUser) {
      // Go to login
      next({
        path: "/",
        query: {
          redirect: to.fullPath,
        },
      });
    } else {
      // Proceed to route
      next();
    }
  } else {
    // Proceed to route
    next();
  }
});

export default router;
