<template>
  <div class="home">
    <div class="linkedin-badge">
      <div v-if="!badgeLoaded">
        <a href="https://www.linkedin.com/in/jack-wilder" target="_blank">
          <img :src="imageSrc" alt="LinkedIn Badge" class="fallback-image" />
        </a>
      </div>
      <div v-else class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="light" data-type="VERTICAL" data-vanity="jack-wilder" data-version="v1">
        <a class="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/jack-wilder?trk=profile-badge"></a>
      </div>
    </div>
    <h1>Hi, and Welcome to My Portfolio</h1>
    <section class="intro">
      <p>My name is David Wilder but most people call me Jack. I am an IT Solution Analyst at Sevan Multi-Site Solutions. I have hands-on work experience in creating solutions for stakeholders, covering everything from comprehensive data analysis and visualization to the automation of critical business processes.</p>
    </section>
    <section class="browse">
      <p>
        Feel free to browse my portfolio and learn more about me. Explore the projects I've worked on <a href="/projects">here</a>, and check out my resume <a href="/about">here</a>. If you have any questions or would like to connect, feel free to email me at <a href="mailto:wilderjack@gmail.com">wilderjack99@gmail.com</a>.
      </p>
    </section>
    <section class="github">
      <p>I built this webpage using Vue.js, a progressive JavaScript framework. Vue.js simplifies the development of interactive user interfaces by providing a component-based programming model, building on top of HTML, CSS, and Javascript. This allows for more efficient and maintainable code compared to writing everything from scratch. If you'd like to view the code and see how everything works, please visit my GitHub repository:</p>
      <a href="https://github.com/wilderdj/jack-wilder" target="_blank" class="github-link">View my GitHub</a>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      badgeLoaded: false,
      imageSrc: process.env.NODE_ENV === 'production' ? '/jack-wilder/linkedin-badge.png' : '/linkedin-badge.png'
    };
  },
  mounted() {
    const checkBadgeLoad = () => {
      if (typeof window.IN !== 'undefined' && typeof window.IN.parse !== 'undefined') {
        this.badgeLoaded = true;
        window.IN.parse();
      } else {
        this.badgeLoaded = false;
      }
    };

    const script = document.createElement('script');
    script.src = 'https://platform.linkedin.com/badges/js/profile.js';
    script.async = true;
    script.defer = true;
    script.onload = checkBadgeLoad;
    script.onerror = () => {
      this.badgeLoaded = false;
      document.querySelector('.fallback-image').style.display = 'block';
    };
    document.head.appendChild(script);

    setTimeout(() => {
      if (!this.badgeLoaded) {
        this.badgeLoaded = false;
        document.querySelector('.fallback-image').style.display = 'block';
      }
    }, 500); // 0.5 second timeout to check if the badge loaded
  }
}
</script>

<style scoped>
.home {
  position: relative;
  text-align: left; /* Align text to the left */
  padding: 40px 20px;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

.linkedin-badge {
  float: left; /* Float the badge to the left */
  margin-right: 20px; /* Add space between the badge and the text */
}

.fallback-image {
  width: 260px; /* Adjust the width to make the image smaller */
  height: auto; /* Maintain the aspect ratio */
  display: none; /* Initially hide the fallback image */
}

h1 {
  color: #282c34;
  margin-bottom: 20px;
}

.intro,
.browse,
.github {
  margin-bottom: 10px;
  text-align: left; /* Ensure text is aligned to the left */
}

p {
  color: #555;
  line-height: 1.6;
}

.github {
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align text to the left */
  margin-bottom: 10px;
}

.github-link {
  align-self: center; /* Center the button horizontally */
  display: inline-block;
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #33d3ff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.github-link:hover {
  background-color: #0b87d4;
}
</style>
