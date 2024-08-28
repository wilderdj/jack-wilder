import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import AboutPage from '../views/AboutPage.vue';
import ProjectsPage from '../views/ProjectsPage.vue';
import SkillsPage from '../views/SkillsPage.vue';
import ContactPage from '../views/ContactPage.vue';
import ClientReportingProject from '../views/Projects/Dashboarding/ClientReportingProject.vue'; // Import the new Project component
import StoreImpactDashboard from '../views/Projects/Dashboarding/StoreImpactDashboard.vue'; // Import the new Project component
import RPATool from '../views/Projects/CodingProjects/RPATool.vue'; // Import the new Project component

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
  },
  {
    path: '/rpa-tool',
    name: 'RPA Tool',
    component: RPATool
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
