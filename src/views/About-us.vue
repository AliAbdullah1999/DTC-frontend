<template>
  <div class="about-page">
    <section class="about-section">
      <div class="about-text">
        <h2>About Us</h2>
        <p>
          At Digital Transformation Company (DTC), we specialize in helping businesses thrive in the
          digital age. Our team of experts is dedicated to providing innovative IT services that not
          only solve your problems but also propel your business forward.
        </p>
        <p>
          We offer a wide range of services, including web development, web hosting, domain
          management, graphic design, digital marketing, and more. Whether you're looking to build a
          robust online presence, improve your existing infrastructure, or integrate cutting-edge
          technology, we’ve got you covered.
        </p>
        <p>
          Our approach is customer-centric, and we work closely with each client to tailor solutions
          that fit their unique needs. We believe in the power of technology to simplify processes
          and create new opportunities, and we are committed to delivering exceptional results.
        </p>
        <p>
          Join us on the journey to digital transformation. Together, we can unlock the full
          potential of your business.
        </p>
      </div>
      <div class="about-image">
        <img src="@/assets/th (1).jpeg" alt="Team Image 1" class="about-image1" />
        <img src="@/assets/th.jpeg" alt="Our Team at Work" class="about-image2" />
      </div>
    </section>
  </div>
  <a href="https://wa.me/1234567890" class="whatsapp-float" target="_blank">
    <img src="https://cdn.jsdelivr.net/npm/simple-icons@7.0.0/icons/whatsapp.svg" alt="WhatsApp" />
  </a>
</template>

<script setup>
// Any necessary imports (if needed)
</script>

<style scoped>
.about-page {
  padding: 2rem;
  background-color: #f9f9f9;
  color: #333;
  font-family: 'Arial', sans-serif;
}

.about-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
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

.whatsapp-float:hover {
  background-color: #20b358;
}

.whatsapp-float img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
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
}
</style>
