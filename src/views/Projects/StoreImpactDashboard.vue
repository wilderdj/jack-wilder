<template>
    <div class="project-page">
      <h1 class="project-title">{{ title }}</h1>
      <p class="project-section">{{ section }}</p>
      <div class="dashboards-container">
        <div class="dashboard" v-for="dashboard in dashboards" :key="dashboard.id">
          <img :src="require(`@/assets/store-impact-dashboard/${dashboard.image}`)" :alt="dashboard.alt" class="dashboard-image" />
          <p class="dashboard-description">{{ dashboard.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'StoreImpactDashboard',
    data() {
      return {
        title: 'Store Impact Dashboard',
        section: 'This dashboard offers a comprehensive analysis of the damage sustained by stores due to various incidents, including natural disasters, as well as events such as robberies and car crashes. It tracks the extent of damage and provides detailed insights into repair costs, helping to monitor recovery efforts and budget effectively for future risk mitigation.',
        dashboards: [
        { id: 1, title: 'Natural Disaster Summary', image: 'hurricane-dashboard.png', alt: 'Natural Disaster Summary', description: 'Summarizes the impact of natural disasters on store locations, detailing the number of incidents and total repair costs.' },
        { id: 2, title: 'Hurricane Ian Impact', image: 'hurricane-ian.png', alt: 'Hurricane Ian', description: 'Shows the damage caused by Hurricane Ian to store locations, including damage extent, repair costs, and the hurricane’s projected path in relation to affected stores.' },
        { id: 3, title: 'One-Off Emergencies Tracking', image: 'one-off.png', alt: 'One Off Emergencies Tracking', description: 'Tracks isolated emergencies such as robberies and car crashes, providing data on incident frequency and associated costs.' },
        { id: 4, title: 'Stores by Emergency Type', image: 'one-off-map.png', alt: 'Stores by Emergency Type', description: 'Displays a map categorizing incidents at store locations by emergency type.' },
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .project-page {
    padding: 40px 20px;
    text-align: center;
  }
  
  .project-title {
    font-size: 2.5em;
    font-weight: bold;
    margin-bottom: 20px;
    color: #333;
  }
  
  .project-section {
    font-size: 1.2em;
    line-height: 1.6;
    margin-bottom: 40px;
    color: #666;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .dashboards-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
  }
  
  .dashboard {
    width: 100%;
    max-width: 800px;
    background: #f9f9f9;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .dashboard-image {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
  
  .dashboard-description {
    margin-top: 10px;
    color: #555;
    font-size: 1em;
  }
  </style>
  