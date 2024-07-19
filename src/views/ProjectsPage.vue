<template>
  <div class="projects">
    <h1>My Projects</h1>
    <div class="project" v-for="project in projects" :key="project.id">
      <h2>{{ project.title }}</h2>
      <p>{{ project.description }}</p>
      <a :href="project.link" target="_blank" class="project-link">View Project</a>
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
  padding: 40px 20px;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

.project {
  margin-bottom: 20px;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.project h2 {
  color: #282c34;
}

.project p {
  color: #555;
}

.project-link {
  color: #61dafb;
  text-decoration: none;
}

.project-link:hover {
  text-decoration: underline;
}
</style>
