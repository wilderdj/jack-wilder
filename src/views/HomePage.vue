<template>
  <div class="home">
    <h1>Hi, and Welcome to My Portfolio</h1>
    <section class="intro">
      <p>My name is Jack Wilder. I am an IT Solution Analyst at Sevan Multi-Site Solutions. I have a wide range of experience in creating solutions for stakeholders that ranges from the complete analysis and visualization of client data, to the automation of vital business processes.</p>
    </section>
    <section class="browse">
      <p>Feel free to browse my portfolio and learn more about me.</p>
    </section>
    <section class="github">
      <p>I built this webpage using Vue.js, a progressive JavaScript framework. Vue.js simplifies the development of interactive user interfaces by providing a component-based programming model, building on top of HTML, CSS, and Javascript. This allows for more efficient and maintainable code compared to writing everything from scratch. If you'd like to view the code and see how everything works, please visit my GitHub repository:</p>
      <a href="https://github.com/wilderdj/jack-wilder" target="_blank" class="github-link">View my GitHub</a>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style scoped>
.home {
  text-align: center;
  padding: 40px 20px;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

h1 {
  color: #282c34;
  margin-bottom: 20px;
}

.intro,
.browse,
.github {
  margin-bottom: 20px;
}

p {
  color: #555;
  line-height: 1.6;
}

.github-link {
  display: inline-block;
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #61dafb;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.github-link:hover {
  background-color: #21a1f1;
}
</style>
