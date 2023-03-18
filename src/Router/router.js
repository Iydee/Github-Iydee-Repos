import RepositoryDetails from "./components/RepositoryDetails.vue";

const routes = [
  // Other routes
  { path: "/repo/:name", component: RepositoryDetails },
];

export default new routes({
  mode: "history",
  routes,
});
