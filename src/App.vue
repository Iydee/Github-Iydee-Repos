<template>
  <div id="app">
    <router-link to="/">My Github Repositories</router-link>
    <router-view></router-view>
    <RepositoriesList />
  </div>

  <div>
    <router-link to="/repo/:repoName">repoName</router-link>
    <RepositoryDetails />
    <router-view></router-view>
  </div>

</template>

<script>

import RepositoriesList from './components/RepositoriesList.vue';
import RepositoryDetails from './components/RepositoryDetails.vue';

export default {
  name: 'App',
  components: {
    RepositoriesList,
    RepositoryDetails,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 50px;
  color: #2c3e50;
  margin-top: 70px;
}

</style>
