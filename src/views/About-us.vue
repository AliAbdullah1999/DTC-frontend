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
        <img src="/home/ali-abdullah/Desktop/Projects/CTS/CTS/src/assets/th (1).jpeg" alt="" />
        <img
          src="/home/ali-abdullah/Desktop/Projects/CTS/CTS/src/assets/th.jpeg"
          alt="Our Team at Work"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
// Any necessary imports (if needed)
</script>

<style scoped>
.about-page {
  padding: 2rem;
  background-color: white;
  color: black;
}

.about-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

.about-text {
  flex: 1;
  max-width: 600px;
}

.about-text h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: black;
}

.about-text p {
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.about-image {
  flex: 1;
  max-width: 500px;
}

.about-image img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0px 0px 15px black;
}

@media (max-width: 768px) {
  .about-section {
    flex-direction: column;
    text-align: center;
  }

  .about-image img {
    max-width: 80%;
  }
}
</style>
