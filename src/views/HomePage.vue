<template>
  <div class="home">
    <div class="linkedin-badge" ref="linkedinBadge">
      <div v-if="!badgeLoaded">
        <a href="https://www.linkedin.com/in/jack-wilder?trk=profile-badge" target="_blank">
          <img src="/linkedin-badge.png" alt="LinkedIn Badge" class="fallback-image" />
        </a>
      </div>
      <div v-else class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="light" data-type="VERTICAL" data-vanity="jack-wilder" data-version="v1">
        <a class="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/jack-wilder?trk=profile-badge"></a>
      </div>
    </div>
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
  name: 'HomePage',
  data() {
    return {
      badgeLoaded: false
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
    };
    document.head.appendChild(script);

    setTimeout(() => {
      if (!this.badgeLoaded) {
        this.badgeLoaded = false;
      }
    }, 3000); // 3 seconds timeout to check if the badge loaded
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
  width: 100px; /* Adjust the width to make the image smaller */
  height: auto; /* Maintain the aspect ratio */
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
