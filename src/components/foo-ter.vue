<template>
  <footer>
    <div class="footer-content">
      <div class="footer-section company-info">
        <p>&copy; 2024 Digital Transformation Company. All Rights Reserved.</p>
        <p>Dha, Phase 2, Karachi, Sindh, Pakistan</p>
        <p>Email: dtc@gmail.com</p>
      </div>
      <div class="footer-section quick-links">
        <nav-bar />
        <nav>
          <RouterLink to="/contact" class="footer-link"
            ><button
              style="
                background-color: black;
                color: white;
                border-radius: 20px;
                width: 8rem;
                height: 2rem;
              "
            >
              Contact Us
            </button></RouterLink
          >
        </nav>
      </div>
      <div class="footer-section social-media">
        <a href="https://facebook.com" class="footer-link">
          <img src="../assets/facebook.png" alt="Facebook" />
        </a>
        <a href="https://twitter.com" class="footer-link">
          <img src="../assets/twitter.png" alt="Twitter" />
        </a>
        <a href="https://linkedin.com" class="footer-link">
          <img src="../assets/linkedin.png" alt="LinkedIn" />
        </a>
      </div>
    </div>
  </footer>
</template>
  
<script setup>
// ...existing code...
</script>
  
<style scoped>
footer {
  background-color: skyblue;
  color: black;
  /* padding: 1rem; */
  position: relative;
  bottom: 0;
  width: 100%;
}

.footer-content {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}

.footer-section {
  margin: 0.5rem;
  text-align: left;
}

.footer-link {
  color: black;
  text-decoration: none;
  margin: 0 0.5rem;
  transition: color 0.3s ease, transform 0.3s ease;
}

.footer-link:hover {
  text-decoration: underline;
  color: darkblue;
  transform: scale(1.1);
}

.footer-link img {
  width: 32px;
  height: 32px;
  margin: 0 0.5rem;
  transition: transform 0.3s ease;
}

.footer-link img:hover {
  transform: scale(1.2);
}
</style>
