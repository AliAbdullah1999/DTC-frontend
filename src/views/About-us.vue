<template>
  <div class="banner">
    <h1>About Us</h1>
  </div>
  <div class="about-page">
    <section class="about-section">
      <div class="about-text animate-text">
        <!-- <h2>About Us</h2> -->
        <p>
          At Digital Transformation Company (DTC), we empower businesses with innovative IT
          solutions to thrive in the digital age. Our expert team delivers tailored services,
          including web development, hosting, domain management, graphic design, and digital
          marketing.
        </p>
        <p>
          With a customer-centric approach, we simplify processes, enhance online presence, and
          integrate cutting-edge technology to drive growth. Partner with us to unlock your
          business’s full potential.
        </p>
      </div>
      <div class="about-image animate-image">
        <img src="@/assets/th (1).jpeg" alt="Team Image 1" class="about-image1" />
      </div>
    </section>
  </div>
  <div class="choose">
    <div class="card">
      <h1>Our Mission</h1>
      <p>
        Our mission is to provide innovative IT solutions that transform businesses and to equip
        them with premium technology solutions, customized according to our customer needs.
      </p>
    </div>
    <div class="card">
      <h1>Our Vision</h1>
      <p>
        Our vision is to digitalize our beloved country Pakistan with great technological expansion
        and to make a Pakistan a champion in the technological revolution.
      </p>
    </div>
  </div>
  <div class="message">
    <div class="ceo">
      <h1>Message from the CEO</h1>
      <p>
        At Digital Transformation Company (DTC), we are committed to empowering businesses with
        innovative technology solutions. In today’s fast-paced digital world, having the right tools
        and strategies is essential for growth and success. Our mission is to provide cutting-edge
        IT services that streamline operations, enhance digital presence, and create new
        opportunities.
      </p>
      <p>
        We take pride in our customer-centric approach, working closely with each client to deliver
        tailored solutions that drive real results. Whether it’s web development, hosting, digital
        marketing, or IT consulting, our team is dedicated to helping your business thrive.
      </p>
      <p>
        Join us on the journey to digital transformation. Together, we can shape the future of your
        business.
      </p>
      <p><strong>Abdul Shaoor</strong></p>
      <p>CEO, Digital Transformation Company (DTC)</p>
    </div>
    <div class="ceo-image">
      <img src="@/assets/DM1.png" alt="CEO Image" />
    </div>
  </div>
  <div class="carousel">
    <h2>What we can do for you</h2>
    <div class="carousel-container">
      <div class="carousel-slider">
        <div class="carousel-slide" v-for="(item, index) in items" :key="index">
          <img :src="item.icon" :alt="item.title" />
          <p>{{ item.title }}</p>
        </div>
        <!-- Duplicates for continuous scroll -->
        <div class="carousel-slide" v-for="(item, index) in items" :key="'duplicate-' + index">
          <img :src="item.icon" :alt="item.title" />
          <p>{{ item.title }}</p>
        </div>
      </div>
    </div>
  </div>
  <a href="https://wa.me/1234567890" class="whatsapp-float" target="_blank">
    <img src="https://cdn.jsdelivr.net/npm/simple-icons@7.0.0/icons/whatsapp.svg" alt="WhatsApp" />
  </a>
</template>

<script setup>
import { ref } from 'vue'

const items = ref([
  {
    title: 'E-commerce Websites',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@7.0.0/icons/shopify.svg',
  },
  {
    title: 'Blog Websites',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@7.0.0/icons/blogger.svg',
  },
  {
    title: 'Portfolio Websites',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@7.0.0/icons/behance.svg',
  },
  {
    title: 'Social Media Applications',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@7.0.0/icons/facebook.svg',
  },
  {
    title: 'SaaS Applications',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@7.0.0/icons/slack.svg',
  },
  {
    title: 'News Websites',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@7.0.0/icons/medium.svg',
  },
  {
    title: 'Project Management Tools',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@7.0.0/icons/trello.svg',
  },
])
</script>

<style scoped>
.banner {
  background-color: skyblue;
  padding: 5rem;
  height: 15rem;
  text-align: center;
  color: white;
  font-family: 'Arial', sans-serif;
}

.banner h1 {
  font-size: 2.5rem;
  margin: 0;
}

.about-page {
  padding: 2rem;
  background-color: #f9f9f9;
  color: #333;
  font-family: 'Arial', sans-serif;
}

.about-section {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-top: 2rem;
}

.about-text {
  flex: 1;
  max-width: 600px;
}

.about-text h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #333;
  font-weight: bold;
}

.about-text p {
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  color: #555;
}

.about-image {
  flex: 1;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.about-image img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.about-image img:hover {
  transform: scale(1.05);
}

.whatsapp-float {
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 40px;
  right: 40px;
  background-color: #25d366;
  color: #fff;
  border-radius: 50px;
  text-align: center;
  font-size: 30px;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  transition: background-color 0.3s ease;
}

.choose {
  display: flex;
  padding-left: 10px;
  padding-right: 5px;
  gap: 8px;
}

.card {
  flex: 1;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
}

.card h1 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #333;
}

.card p {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #555;
}

.message {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin-top: 2rem;
}

.ceo {
  flex: 1;
  padding: 20px;
  background-color: transparent;
  border-radius: 0;
  box-shadow: none;
}

.ceo h1 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #333;
}

.ceo p {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #555;
}

.ceo-image {
  flex: 1;
  max-width: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ceo-image img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
}

.whatsapp-float:hover {
  background-color: #20b358;
}

.whatsapp-float img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.animate-text {
  animation: fadeIn 2s ease-in-out;
}

.animate-image {
  animation: fadeIn 2s ease-in-out;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.carousel {
  margin-top: 2rem;
  margin-bottom: 2rem;
  text-align: center;
}

.carousel h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #333;
}

.carousel-container {
  overflow: hidden;
  width: 100%;
  position: relative;
}

.carousel-slider {
  display: flex;
  width: calc(220px * 14);
  animation: slide 25s linear infinite;
}

.carousel-slide {
  flex: 0 0 220px;
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  padding: 10px;
  margin: 10px;
}

.carousel-slide img {
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
}

.carousel-slide p {
  font-size: 1.2rem;
  color: #555;
}

.carousel-slider:hover {
  animation-play-state: paused;
}

@keyframes slide {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-220px * 7));
  }
}

@media (max-width: 768px) {
  .about-section {
    flex-direction: column-reverse;
    text-align: center;
  }
  .about-image2 {
    display: none;
  }
  .about-image img {
    max-width: 100%;
    padding: none;
  }
  .message {
    flex-direction: column;
    text-align: center;
  }
  .ceo-image {
    margin-top: 20px;
  }
  .choose {
    flex-direction: column;
    text-align: center;
  }
  .card {
    margin-bottom: 20px;
  }
}
</style>
