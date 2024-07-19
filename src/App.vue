<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/about" class="nav-link">About Me</router-link>
        <!-- <router-link to="/projects" class="nav-link">Projects</router-link>
        <router-link to="/skills" class="nav-link">Skills</router-link> -->
        <router-link to="/contact" class="nav-link">Contact</router-link>
      </nav>
    </header>
    <main>
      <router-view/>
    </main>
    <footer>
      <p>&copy; 2024 Jack Wilder. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  margin: 0;
  font-family: 'Roboto', sans-serif;
  background-color: #f0f2f5;
  color: #333;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header {
  background-color: #282c34;
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

nav {
  display: flex;
  gap: 20px;
}

.nav-link {
  color: #61dafb;
  text-decoration: none;
  font-weight: bold;
}

.nav-link:hover {
  text-decoration: underline;
}

main {
  flex: 1;
  padding: 20px;
}

footer {
  background-color: #282c34;
  color: #61dafb;
  text-align: center;
  padding: 10px 0;
}
</style>
