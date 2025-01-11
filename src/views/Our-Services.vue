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
  padding: 5rem 2rem;
  background-color: #121212; /* Dark theme background */
  color: #e0e0e0; /* Light text for contrast */
}

.services h1 {
  font-size: 3rem;
  color: #ffffff; /* Bright white for the heading */
  margin-bottom: 2rem;
}

.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
}

.card {
  background-color: #1e1e1e; /* Slightly lighter dark background */
  border: 1px solid #333; /* Subtle border for separation */
  border-radius: 10px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card h2 {
  font-size: 1.5rem;
  color: #ffffff; /* Bright text for titles */
  margin-bottom: 1rem;
}

.card p {
  font-size: 1rem;
  color: #b0bec5; /* Softer gray for descriptions */
}

.card:hover {
  transform: translateY(-10px); /* Lift effect on hover */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4); /* Enhanced shadow */
}
</style>
