<template>
  <div class="project-page">
    <h1 class="project-title">{{ title }}</h1>
    <p class="project-section">{{ section }}</p>
    <div class="slides-container">
      <div class="slide" v-for="slide in slides" :key="slide.id">
        <p class="slide-description">{{ slide.description }}</p>
        <img :src="require(`@/assets/finance-report/${slide.image}`)" :alt="slide.alt" class="slide-image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClientReportingProject',
  data() {
    return {
      title: 'Bi-Weekly Client Financial Report',
      section: 'This is a typical report that would be discussed with client stakeholders. The visuals shown are a part of a larger Power BI dashboard that I created and maintained that was refreshed daily. Sensitive information has been redacted for privacy purposes.',
      slides: [
        { id: 1, image: 'Slide1.png', alt: 'Slide 1', description: 'An overview slide highlighting key financial metrics and summaries.' },
        { id: 2, image: 'Slide2.png', alt: 'Slide 2', description: 'These visuals illustrate the finances of each program, with a focus on project budgets compared to actuals and invoiced amount. What is highlighted in each visual is dependent on the stage of each program.' },
        { id: 3, image: 'Slide3.png', alt: 'Slide 3', description: 'This slide presents the funding sources for each project, along with summary information to make quick comparisons.' },
        { id: 4, image: 'Slide4.png', alt: 'Slide 4', description: 'This slide compares forecasted versus committed values, displayed on a timeline that tracks phases/waves.' },
        { id: 5, image: 'Slide5.png', alt: 'Slide 5', description: 'Part of a series, this visualizes monthly budgets and actual amounts by contract year. An additional measure displays store counts, a significant factor in the financial figures.' },
        { id: 6, image: 'Slide6.png', alt: 'Slide 6', description: 'This slide breaks down budget amounts by individual workstreams.' },
        { id: 7, image: 'Slide7.png', alt: 'Slide 7', description: 'This slide tracks the number of canceled stores and the associated financial impact.' },
        { id: 8, image: 'Slide8.png', alt: 'Slide 8', description: 'This slide provides a count of the number of work items that were approved each month.' },
        { id: 9, image: 'Slide9.png', alt: 'Slide 9', description: 'This is a representation of the projects across the program. The visuals break out the initial budgets and committed values by projects, as well as a comparison of planned and completed projects.' },
        { id: 10, image: 'Slide10.png', alt: 'Slide 10', description: 'This is a sort of calendar view that visualizes store launches by month, accompanied by summary values that detail amounts by fiscal year and contract year.' },
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

.slides-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}

.slide {
  width: 100%;
  max-width: 800px;
  background: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.slide-description {
  margin-top: 0;
  margin-bottom: 20px; 
  padding-top: 0px; 
  color: #555;
  font-size: 1em;
}

.slide-image {
  width: 100%;
  height: auto;
  border-radius: 10px;
}
</style>
