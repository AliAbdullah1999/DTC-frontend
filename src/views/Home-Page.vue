<template>
  <div class="container">
    <section class="hero-section">
      <div class="content">
        <h1>Welcome to Digital Transformation Company</h1>
        <p>Your trusted partner in IT services, web solutions, and digital innovation.</p>
        <RouterLink to="/services" class="cta-btn">Explore Our Services</RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
/* Global Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Hero Section with Black-Themed Background */
.hero-section {
  width: 100%;
  height: 100vh;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;
}

/* Add a subtle texture or noise effect */
.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('https://www.transparenttextures.com/patterns/45-degree-fabric-light.png');
  opacity: 0.1;
  z-index: 0;
}

/* Content Styling */
.content {
  z-index: 1;
  font-family: 'Arial', sans-serif;
}

h1 {
  border-color: black;
  font-size: 3rem;
  margin-bottom: 0.5em;
  letter-spacing: 1px;
}

p {
  border-color: black;
  font-size: 1.5rem;
  margin-bottom: 1.5em;
}

/* Call-to-Action Button */
.cta-btn {
  display: inline-block;
  padding: 0.8rem 2rem;
  background-color: #f0a500;
  color: black;
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s, transform 0.3s;
  border-color: black;
}
.logo {
  border-color: black;
}
.cta-btn:hover {
  background-color: #ffbf00;
  transform: scale(1.05);
}

/* Mobile and Tablet Styles */
@media (max-width: 768px) {
  h1 {
    font-size: 2rem;
  }

  p {
    font-size: 1.2rem;
  }

  .cta-btn {
    font-size: 1rem;
    padding: 0.6rem 1.5rem;
  }
}
</style>
