<template>
    <div class="skills">
      <h1>My Skills</h1>
      <ul>
        <li v-for="skill in skills" :key="skill">{{ skill }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Skills',
    data() {
      return {
        skills: ['JavaScript', 'Vue.js', 'HTML', 'CSS']
      }
    }
  }
  </script>
  
  <style scoped>
  .skills {
    padding: 20px;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    background: #4CAF50;
    color: white;
    padding: 10px;
    margin: 5px 0;
  }
  </style>
  