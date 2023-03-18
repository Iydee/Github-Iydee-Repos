<template>
  <div id="app">
    <router-link to="/">My Github Repositories</router-link>
    <router-view></router-view>
    <RepositoriesList />
  </div>

  <div> 
    <router-link to="*">Page Not Found</router-link>
    <NotFound />
    <router-view></router-view>
  </div>

</template>

<script>

import RepositoriesList from './components/RepositoriesList.vue';
import RepositoryDetails from './components/RepositoryDetails.vue';
import NotFound from './NotFound.vue';

export default {
  name: 'App',
  components: {
    RepositoriesList,
    RepositoryDetails,
    NotFound,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 25px;
  color: #eaeef1;
  margin-top: 50px;
  align-content: center;
  display: grid;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

body {
  background-image: url(./assets/rose.jpg);
  background-size: cover;
  background-repeat: repeat;
}
</style>
