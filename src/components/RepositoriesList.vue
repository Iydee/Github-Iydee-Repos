<template>
    <div class="home">
      <ul>
        <li v-for="repo in repositories" :key="repo.id">
            <router-link :to="{ name: 'repo-details', params: { repoName: repo.name } }">Github repo: {{ repo.name }}</router-link>
             <br>
             <br>
        
             <button class="url"><router-link :to="{ name: 'repo-details', params: { repoName: repo.name } }"><a :href="repo.html_url" target="_blank" rel="noopener">Click to view detail</a></router-link></button>
             
        </li>
        
      </ul>
      
      <div class="pagination">
        <router-link :to="previousPage"><button @click="previousPage">Previous</button></router-link>
        <span>Page {{ 1 }} of {{ 5 }}</span>
        <router-link :to="nextPage"><button @click="nextPage">Next</button></router-link>
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
        perPage: 2,
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
margin:0;
padding:0;
display: grid;
flex-direction: column;
justify-content: center;
height: 100vh;
align-items: center;
background: url("https://images.unsplash.com/photo-1519680772-8b5c1b2f1b1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80") no-repeat center center/cover;
}

ul {
    display: flex;
    flex-direction: column;
    padding:30px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border:1px solid #ccc;
    background-color: #888;
    border-radius: 20px;
}

button a{
    text-decoration: none;
    color: white;
    font-size: 20px;
}


li {
    text-decoration: none;
    list-style: none;
    border: 1px solid #ccc;
    border-radius: 15px;
    width: 90%;
    height:100px;
    color:yellow;
    background-color: black;
    font-size: 20px;
    padding: 30px;
    margin-bottom: 20px;
    box-shadow: 0 5px 5px #0f0f0f;
}

span{
    font-size: 20px;
    color: white;

}

.url{
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 10px 30px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 10px;
}

.url:hover{
    background-color: #ccec13;
    color: black;
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
    background-color: rgb(14, 13, 13);
    border: 2px solid #d3e911;
}
</style>
  