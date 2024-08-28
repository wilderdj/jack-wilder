<template>
  <div class="project-page">
    <h1 class="project-title">{{ title }}</h1>
    <p class="project-section">{{ section }}</p>
    <div class="dashboards-container">
      <div class="dashboard" v-for="dashboard in dashboards" :key="dashboard.id">
        <h3 class="dashboard-title">{{ dashboard.title }}</h3>
        <p class="dashboard-description">{{ dashboard.description }}</p>
        <img :src="require(`@/assets/rpa-tool/${dashboard.image}`)" :alt="dashboard.alt" class="dashboard-image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LogicAppProject',
  data() {
    return {
      title: 'Robotic Processing Automation using Logic App',
      section: 'This project automates the pulling of data from incoming emails using an Azure Logic and a Python Function App. The Logic App manages the dataflow, invoking the Python Function App to perform modifications on the data before sending it back to the user. The project showcases the integration of cloud services to streamline workflows and enhance efficiency.',
      dashboards: [
        { id: 1, title: 'Project Overview', image: 'workflow.png', alt: 'Logic App Overview', description: 'This project automates the process of extracting, modifying, and returning data from emails using Azure Logic Apps and a Python Function App. Below is an overview of the entire workflow.' },
        { id: 2, title: 'Triggering the Workflow with an Email', image: 'email-trigger.png', alt: 'Email Trigger', description: 'The workflow starts when an email is received. The Logic App triggers on email receipt and begins processing the data. The following screenshot shows the Logic App\'s trigger configuration.' },
        { id: 3, title: 'Process Workflow in Logic App', image: 'logic-app.png', alt: 'Process Workflow', description: 'Once triggered, the Logic App processes the email\'s data and routes it through a defined workflow. The process includes data extraction, validation, and preparation for modification. The screenshot below illustrates a small portion of the overall process workflow within the Logic App.' },
        { id: 4, title: 'Python Function for Data Modification', image: 'python-function-code.png', alt: 'Python Function Code', description: 'The Logic App then invokes a Python Function to perform specific data modifications. This function is hosted in Azure Functions and is responsible for transforming the data according to the project\'s requirements. Below is a snapshot of the Python code used in the function.' },
        { id: 5, title: 'Sending the Response Back to the User', image: 'email-sample.png', alt: 'Sending Response', description: 'After the data is modified by the Python Function, it is sent back to the user via email. The Logic App manages this process, ensuring that the modified data is delivered promptly. The final screenshot shows how the Logic App prepares and sends the response email.' },
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

.dashboard-title {
  margin-top: 0;
  font-size: 1.5em;
  margin-bottom: 10px;
  padding-top: 0px;
  color: #333;
}

.dashboard-description {
  margin-top: 0;
  margin-bottom: 20px;
  padding-top: 0px;
  color: #555;
  font-size: 1em;
}

.dashboard-image {
  width: 100%;
  height: auto;
  border-radius: 10px;
}
</style>
