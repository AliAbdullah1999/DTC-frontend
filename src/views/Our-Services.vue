<template>
  <section class="services">
    <h1>Our Services</h1>
    <div class="card-container">
      <div class="card" v-for="(service, index) in services" :key="index">
        <h2>{{ service.title }}</h2>
        <p>{{ service.description }}</p>
      </div>
    </div>
  </section>
</template>
<script setup>
const services = [
  { title: 'Web Development', description: 'Custom websites tailored to your business needs.' },
  { title: 'Web Hosting', description: 'Reliable and fast hosting services.' },
  { title: 'SEO', description: 'Optimize your website to rank higher on search engines.' },
  { title: 'Digital Marketing', description: 'Promote your business across digital platforms.' },
  { title: 'Graphic Designing', description: 'Creative designs for branding and marketing.' },
  { title: 'IT Support', description: '24/7 IT support for your business operations.' },
]
</script>
<style scoped>
.services {
  text-align: center;
  align-items: center;
  padding: 2rem 2rem;
  background-color: white;
  color: black;
}

.services h1 {
  font-size: 3rem;
  color: black;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 2rem;
  border-bottom: 2px solid black;
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
  border: 2px solid black;
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 10px rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.card h2 {
  font-size: 1.8rem;
  color: black;
  margin-bottom: 1rem;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.card p {
  font-size: 1rem;
  color: #030303;
  line-height: 1.5;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 20px rgba(122, 115, 115, 0.3);
  background-color: #3b3a3a;
}

.card:hover h2 {
  color: white;
}

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
    border: 1px solid black; /* Adjust border size */
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
</style>
