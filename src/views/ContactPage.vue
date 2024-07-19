<template>
  <div class="contact">
    <h1>Contact Me</h1>
    <p>You can reach me at: <a href="mailto:wilderjack99@gmail.com">wilderjack99@gmail.com</a></p>
  </div>
</template>

<script>
export default {
  name: 'ContactPage'
}
</script>

<style scoped>
.contact {
  padding: 40px 20px;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  text-align: center;
}

.contact a {
  color: #61dafb;
  text-decoration: none;
  font-weight: bold;
}

.contact a:hover {
  text-decoration: underline;
}
</style>
