<template>
  <section class="services">
    <h1>Our Services</h1>
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
    title: 'Web Development',
    description: 'Custom websites tailored to your business needs.',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@7.0.0/icons/codepen.svg',
  },
  {
    title: 'Web Hosting',
    description: 'Reliable and fast hosting services.',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@7.0.0/icons/cloudflare.svg',
  },
  {
    title: 'SEO',
    description: 'Optimize your website to rank higher on search engines.',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@7.0.0/icons/googleanalytics.svg',
  },
  {
    title: 'Digital Marketing',
    description: 'Promote your business across digital platforms.',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@7.0.0/icons/facebook.svg',
  },
  {
    title: 'Graphic Designing',
    description: 'Creative designs for branding and marketing.',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@7.0.0/icons/adobeillustrator.svg',
  },
  {
    title: 'IT Support',
    description: '24/7 IT support for your business operations.',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@7.0.0/icons/git.svg',
  },
  {
    title: 'CCTV Installation',
    description: 'Secure your premises with our advanced CCTV systems.',
    icon: 'src/assets/CCTV.jpg',
  },
]
</script>
<style scoped>
.services {
  text-align: center;
  align-items: center;
  padding: 2rem 2rem;
  background-color: #f9f9f9;
  color: #333;
}

.services h1 {
  font-size: 3rem;
  color: #333;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 2rem;
  border-bottom: 2px solid #333;
  display: inline-block;
  padding-bottom: 0.5rem;
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
}

.card .icon {
  margin-bottom: 1rem;
}

.card .icon img {
  width: 50px;
  height: 50px;
}

.card h2 {
  font-size: 1.8rem;
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
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  background-color: #333;
}

.card:hover h2,
.card:hover p {
  color: white;
}

@media (max-width: 768px) {
  .card-container {
    grid-template-columns: 1fr; /* Single column layout for smaller screens */
    gap: 1rem;
    padding-right: 1rem;
  }

  .card {
    padding: 1rem; /* Reduce padding for smaller screens */
    border: 1px solid #ddd; /* Adjust border size */
  }

  .card h2 {
    font-size: 1.5rem; /* Smaller heading font size */
  }

  .card p {
    font-size: 0.9rem; /* Smaller paragraph font size */
  }
}

@media (max-width: 480px) {
  .card-container {
    align-items: center;
    padding: 0.5rem;
  }

  .card {
    padding: 0.8rem;
    border-radius: 10px; /* Smaller border radius */
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
</style>
