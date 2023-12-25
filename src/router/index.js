import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../components/Dashboard.vue";
import NewEmployee from "../components/NewEmployee.vue";
import ViewEmployee from "../components/ViewEmployee.vue";
import EditEmployee from "../components/EditEmployee.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: Dashboard,
    },
    {
      path: "/new",
      name: "new-employee",
      component: NewEmployee,
    },
    {
      path: "/edit/:employee_id",
      name: "edit-employee",
      component: EditEmployee,
    },
    {
      path: "/:employee_id",
      name: "view-employee",
      component: ViewEmployee,
    },
  ],
});

export default router;
