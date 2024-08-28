<template>
  <div class="about">
    <h1 class="page-title">About Me</h1>
    <p>I have been working as an IT Solution Analyst/Data Analyst for the last 3 years. Prior to that, I graduated from the University of Cincinnati with a degree in Information Systems, supplemented by a major in Marketing and a minor in Business Analytics. You can view my resume below.</p>
    <h2 class="section-title">My Resume</h2>
    <div class="resume-container">
      <iframe
        src="resume-jw.pdf"
        width="100%"
        height="600px"
        frameborder="0"
      >
      </iframe>
      <a href="resume-jw.pdf" download class="download-link">Download Resume</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPage'
}
</script>
<style scoped>
.about {
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

.section-title {
  font-size: 2em;
  color: #282c34;
  margin-top: 20px;
  margin-bottom: 20px;
}

p {
  color: #555;
  line-height: 1.6;
  font-size: 18px;
}

.resume-container {
  margin-top: 20px;
  text-align: center;
}

.download-link {
  display: inline-block;
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #61dafb;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}

.download-link:hover {
  background-color: #21a1f1;
}
</style>
