<template>
  <div class="projects">
    <h1 class="page-title">My Projects</h1>
    
    <!-- Dashboarding Section -->
    <div class="project-category">
      <h2 class="category-title">Dashboarding</h2>
      <router-link 
        v-for="project in dashboardingProjects" 
        :key="project.id" 
        :to="project.route" 
        class="project-link-wrapper"
      >
        <div class="project">
          <img :src="require(`@/assets/${project.imagePath}`)" :alt="project.title" class="project-preview-image" />
          <div class="project-info">
            <h3 class="project-title">{{ project.title }}</h3>
            <p>{{ project.description }}</p>
          </div>
        </div>
      </router-link>
    </div>

    <!-- Coding Projects Section -->
    <div class="project-category">
      <h2 class="category-title">Coding Projects</h2>
      <router-link 
        v-for="project in codingProjects" 
        :key="project.id" 
        :to="project.route" 
        class="project-link-wrapper"
      >
        <div class="project">
          <img :src="require(`@/assets/${project.imagePath}`)" :alt="project.title" class="project-preview-image" />
          <div class="project-info">
            <h3 class="project-title">{{ project.title }}</h3>
            <p>{{ project.description }}</p>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectsPage',
  data() {
    return {
      dashboardingProjects: [
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
      ],
      codingProjects: [
        { 
          id: 3, 
          title: 'RPA Tool', 
          description: 'This project automates the process of pulling data from incoming emails using an Azure Logic Apps and a Python Function App. The Logic App manages the dataflow, invoking the Python Function App to perform modifications on the data before sending it back to the user. The project showcases the integration of cloud services to streamline workflows and enhance efficiency.',
          imagePath: 'rpa-tool/workflow.png', 
          route: '/rpa-tool' 
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

.page-title {
  font-size: 3em;
  font-weight: bold;
  color: #282c34;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
}

.project-category {
  margin-bottom: 40px;
}

.category-title {
  font-size: 2em;
  color: #333;
  margin-top: 20px;
  margin-bottom: 20px;
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

.project-info p {
  color: #555;
  margin-bottom: 10px;
  font-size: 18px; 
}

.project-title {
  color: #282c34;
  font-size: 1.5em;
  margin-bottom: 0px;
}

.project-info p {
  color: #555;
  margin-bottom: 10px;
}
</style>

