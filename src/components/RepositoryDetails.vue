<template>
    <div>
      <h1>{{ repoName }}</h1>
      <p>{{ repository.description }}</p>
      <p>Language: {{ repository.language }}</p>
      <p>Created: {{ repository.created_at }}</p>
      <p>Updated: {{ repository.updated_at }}</p>
      <p>URL: <a :href="repository.html_url">{{ repository.html_url }}</a></p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'RepositoryDetails',
    data() {
      return {
        repository: {},
      };
    },
    async created() {
      const response = await axios.get(`https://api.github.com/repos/iydee/${this.$route.params.repoName}`);
      this.repository = response.data;
    },
    computed: {
      repoName() {
        return this.$route.params.repoName;
      },
    },
  };
  </script>

  
  