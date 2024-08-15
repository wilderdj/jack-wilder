import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import AboutPage from '../views/AboutPage.vue';
import ProjectsPage from '../views/ProjectsPage.vue';
import SkillsPage from '../views/SkillsPage.vue';
import ContactPage from '../views/ContactPage.vue';
import ClientReportingProject from '../views/Projects/ClientReportingProject.vue'; // Import the new Project component
import StoreImpactDashboard from '../views/Projects/StoreImpactDashboard.vue'; // Import the new Project component

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage
  },
  {
    path: '/projects',
    name: 'Projects',
    component: ProjectsPage
  },
  {
    path: '/skills',
    name: 'Skills',
    component: SkillsPage
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactPage
  },
  // Add a new route for the Project
  {
    path: '/client-reporting-project',
    name: 'Client Reporting',
    component: ClientReportingProject
  },
    // Add a new route for the Project
  {
    path: '/store-impact-dashboard',
    name: 'Store Impact Dashboard',
    component: StoreImpactDashboard
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
