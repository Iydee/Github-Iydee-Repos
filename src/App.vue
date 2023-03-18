<template>
  <div id="app">
    <router-link to="/">My Github Repositories</router-link>
    <router-view></router-view>
    <RepositoriesList />
  </div>

</template>

<script>

import RepositoriesList from './components/RepositoriesList.vue';


export default {
  name: 'App',
  components: {
    RepositoriesList
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
  background-repeat: no-repeat;
}
</style>
