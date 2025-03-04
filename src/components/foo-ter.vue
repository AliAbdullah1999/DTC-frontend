<template>
  <footer>
    <div class="footer-content">
      <div class="footer-section company-info">
        <p>&copy; 2025 Digital Transformation Company.</p>
        <p>All Rights Reserved.</p>
        <p>Dha, Phase 2, Karachi, Sindh, Pakistan</p>
        <p>Email: <a href="dtc@gmail.com">dtc@gmail.com</a></p>
        <p>Phone: <a href="tel:+92 333 3515910">0333-3515910</a></p>
      </div>
      <div class="footer-section quick-links">
        <nav-bar />
        <nav>
          <RouterLink to="/contact" class="footer-link">Contact Us</RouterLink>
          <RouterLink to="/about" class="footer-link">About Us</RouterLink>
          <RouterLink to="/services" class="footer-link">Services</RouterLink>
          <RouterLink to="/privacy-policy" class="footer-link">Privacy Policy</RouterLink>
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
        <a href="https://instagram.com" class="footer-link">
          <img src="../assets/instaicon.png" alt="Instagram" />
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
  position: relative;
  bottom: 0;
  width: 100%;
  padding: 1rem;
}

.footer-content {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
}

.footer-section {
  margin: 0.5rem;
  text-align: left;
  flex: 1;
  min-width: 200px;
}

.footer-link {
  color: black;
  text-decoration: none;
  margin: 0.5rem 0;
  display: block;
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

.contact-button {
  background-color: black;
  color: white;
  border-radius: 20px;
  width: 8rem;
  height: 2rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.contact-button:hover {
  background-color: darkblue;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    align-items: center;
  }
  .footer-section {
    text-align: center;
    display: flex;
    flex-direction: column;
  }
  .social-media {
    display: flex;
    flex-direction: row;
  }
  .footer-link {
    margin: 0.5rem 0;
  }
}
</style>
