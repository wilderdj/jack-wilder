<template>
    <div class="projects">
      <h1>My Projects</h1>
      <div class="project" v-for="project in projects" :key="project.id">
        <h2>{{ project.title }}</h2>
        <p>{{ project.description }}</p>
        <a :href="project.link" target="_blank">View Project</a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProjectsPage',
    data() {
      return {
        projects: [
          { id: 1, title: 'Project One', description: 'Description of project one.', link: '#' },
          { id: 2, title: 'Project Two', description: 'Description of project two.', link: '#' }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .projects {
    padding: 20px;
  }
  .project {
    margin-bottom: 20px;
  }
  </style>
  