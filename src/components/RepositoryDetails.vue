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
export default {
  name: 'RepositoryDetails',
  data() {
    return {
      repository: null,
    };
  },
  created() {
    const { repoName } = this.$route.params;
    fetch(`https://api.github.com/repos/iydee/${repoName}`)
      .then(response => response.json())
      .then(repository => {
        this.repository = repository;
      })
      .catch(error => {
        console.log(error);
      });
  },
};
</script>


  
  