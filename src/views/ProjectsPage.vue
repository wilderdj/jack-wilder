<template>
  <div class="projects">
    <h1>My Projects</h1>
    <router-link 
      v-for="project in projects" 
      :key="project.id" 
      :to="project.route" 
      class="project-link-wrapper"
    >
      <div class="project">
        <img :src="require(`@/assets/${project.imagePath}`)" :alt="project.title" class="project-preview-image" />
        <div class="project-info">
          <h2>{{ project.title }}</h2>
          <p>{{ project.description }}</p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'ProjectsPage',
  data() {
    return {
      projects: [
        { 
          id: 1, 
          title: 'Client Reporting', 
          description: 'This report was a key tool in our client relationship management, providing an overview of performance metrics, budget reviews, and actionable items every two weeks. The report includes visuals that highlight budget allocations, cost variances, and site-specific data allowing for informed decision-making and ensuring projects remain aligned with financial objectives.',
          imagePath: 'finance-report/Slide9.png', 
          route: '/client-reporting-project' 
        },
        { 
          id: 2, 
          title: 'Store Impact Dashboard', 
          description: 'I developed this dashboard to visually represent the extent of damages sustained by stores from both natural disasters and isolated incidents. The dashboard is designed to provide clear insights into the impact on each store, helping to inform decision-making for repairs and risk management.',
          imagePath: 'store-impact-dashboard/hurricane-dashboard.png', 
          route: '/store-impact-dashboard' 
        }
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

.project-link-wrapper {
  text-decoration: none;
  color: inherit;
}

.project-link-wrapper:hover .project {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.project {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.3s ease;
}

.project-preview-image {
  width: 150px;
  height: auto;
  border-radius: 10px;
  margin-right: 20px;
}

.project-info {
  flex: 1;
}

.project-info h2 {
  color: #282c34;
  margin-bottom: 10px;
}

.project-info p {
  color: #555;
  margin-bottom: 10px;
}
</style>
