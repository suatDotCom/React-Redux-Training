import { Dashboard } from "../containers/Dashboard";
import TestContainer from "../containers/Test/TestContainer.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard
  },
  {
    path: "/test",
    name: "React Table",
    icon: "pe-7s-user",
    component: TestContainer
  },
  { redirect: true, path: "/", to: "/dashboard", name: "Dashboard" }
];

export default dashboardRoutes;
