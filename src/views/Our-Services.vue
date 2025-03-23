<template>
  <div class="banner">
    <h1>Our Services</h1>
  </div>
  <section class="services">
    <!-- <h1>Our Services</h1> -->
    <div class="card-container">
      <div class="card" v-for="(service, index) in services" :key="index">
        <div class="icon">
          <img :src="service.icon" :alt="service.title" />
        </div>
        <h2>{{ service.title }}</h2>
        <p>{{ service.description }}</p>
      </div>
    </div>
  </section>
  <a href="https://wa.me/+923333515910" class="whatsapp-float" target="_blank">
    <img src="https://cdn.jsdelivr.net/npm/simple-icons@7.0.0/icons/whatsapp.svg" alt="WhatsApp" />
  </a>
</template>

<script setup>
const services = [
  {
    title: 'Website & App Development',
    description: 'Custom websites tailored to your business needs.',
    icon: 'src/assets/web3.png',
  },

  {
    title: 'SEO',
    description: 'Optimize your website to rank higher on search engines.',
    icon: 'src/assets/dm1.png',
  },
  {
    title: 'Digital Marketing',
    description: 'Promote your business across digital platforms.',
    icon: 'src/assets/DM1.png',
  },
  {
    title: 'Graphic Designing',
    description: 'Creative designs for branding and marketing.',
    icon: 'src/assets/gd1-removebg-preview.png',
  },
]
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

.services {
  text-align: center;
  align-items: center;
  padding: 2rem 2rem;
  background-color: #f9f9f9;
  color: #333;
}

.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
}

.card {
  background-color: white;
  border: 2px solid #ddd;
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  animation: fadeInUp 0.5s ease-in-out;
}

.card .icon {
  margin-bottom: 1rem;
}

.card .icon img {
  width: 100%;
  height: 12em;
  margin-bottom: 15px;
}

.card h2 {
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 1rem;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.card p {
  font-size: 1rem;
  color: #666;
  line-height: 1.5;
}

.card:hover {
  transform: translateY(-10px);
  background-color: darkblue !important;
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  color: white;
}

.card:hover h2,
.card:hover p {
  color: white;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes hoverEffect {
  from {
    transform: translateY(0);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  to {
    transform: translateY(-10px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }
}

@media (max-width: 768px) {
  .card-container {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding-right: 1rem;
  }

  .card {
    padding: 1rem;
    border: 1px solid #ddd;
  }

  .card h2 {
    font-size: 1.5rem;
  }

  .card p {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .card-container {
    align-items: center;
    padding: 0.5rem;
  }

  .card {
    padding: 0.8rem;
    border-radius: 10px;
  }

  .card h2 {
    font-size: 1.3rem;
  }

  .card p {
    font-size: 0.8rem;
  }
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
  box-shadow: 2px 2px 3px #999;
  z-index: 1000;
}

.whatsapp-float img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.btn {
  background-color: #2575fc;
  color: white;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease, transform 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.btn:hover {
  background-color: #1a5bb8;
  transform: translateY(-2px);
}

.btn:active {
  background-color: #144a8c;
  transform: translateY(0);
}
</style>
