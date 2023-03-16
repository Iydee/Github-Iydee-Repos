<template>
    <div>
      <ul>
        <li v-for="repo in repositories" :key="repo.id">
          <router-link :to="{ name: 'repo-details', params: { repoName: repo.html_url } }">{{ repo.html_url }}</router-link>
          <br>
          <br>
        <router-link :to="{ name: 'repo-details', params: { repoName: repo.name } }">{{ repo.name }}</router-link>
        </li>
      </ul>
      <div class="pagination">
        <button :disabled="page === 1" @click="previousPage">Previous</button>
        <span>Page {{ 1 }} of {{ 10 }}</span>
        <button :disabled="page === totalPages" @click="nextPage">Next</button>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'RepositoriesList',
    data() {
      return {
        repositories: [],
        currentPage: 1,
        perPage: 10,
        totalCount: 0,
      };
    },
    computed: {
      hasMorePages() {
        return this.currentPage * this.perPage < this.totalCount;
      },
    },
    methods: {
      async fetchRepositories() {
        const response = await axios.get(`https://api.github.com/users/iydee/repos?page=${this.currentPage}&per_page=${this.perPage}`);
        this.repositories = response.data;
        this.totalCount = Number(response.headers['x-total-count']);
      },
      async previousPage() {
        this.currentPage--;
        await this.fetchRepositories();
      },
      async nextPage() {
        this.currentPage++;
        await this.fetchRepositories();
      },
    },
    async created() {
      await this.fetchRepositories();
    },
  };
  </script>

<style>

body{
margin:20;
padding:0;
direction: flex;
justify-content: center;
}

ul {
    margin: 0;
    padding: 0;
    text-align: center;
}
li {
    margin:10px;
    text-decoration: none;
    list-style: none;
    border: 1px solid #ccc;
    height:100px;
    color:yellow;
    background-color: black;
    font-size: 25px;
    padding: 30px;
    margin-bottom: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 3px #ccc;
}

span{
    font-size: 20px;
    color: #888;

}

button{
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 10px;
}

button:hover{
    color: #4CAF50;
    background-color: white;
    border: 2px solid #4CAF50;
}
</style>
  