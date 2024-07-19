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
  name: 'SkillsPage',
  data() {
    return {
      skills: ['JavaScript', 'Vue.js', 'HTML', 'CSS']
    }
  }
}
</script>

<style scoped>
.skills {
  padding: 40px 20px;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  background: #61dafb;
  color: white;
  padding: 10px;
  margin: 5px 0;
  border-radius: 5px;
}
</style>
