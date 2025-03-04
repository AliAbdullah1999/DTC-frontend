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
        <h3>Quick Links</h3>
        <nav-bar />
        <nav>
          <RouterLink to="/contact" class="footer-link">Contact Us</RouterLink>
          <RouterLink to="/about" class="footer-link">About Us</RouterLink>
          <RouterLink to="/services" class="footer-link">Services</RouterLink>
          <RouterLink to="/privacy-policy" class="footer-link">Privacy Policy</RouterLink>
        </nav>
      </div>
      <div class="footer-section social-media">
        <h3>Our Social Media</h3>
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
      <div class="footer-section subscribe">
        <input type="email" placeholder="Enter your email" class="subscribe-input" />
        <button class="subscribe-button">Subscribe</button>
      </div>
    </div>
  </footer>
</template>

<script setup>
// ...existing code...
</script>

<style scoped>
footer {
  background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
  color: white;
  position: relative;
  bottom: 0;
  width: 100%;
  padding: 2rem 1rem;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
}

.footer-content {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-section {
  margin: 1rem;
  text-align: left;
  flex: 1;
  min-width: 250px;
}

.footer-link {
  color: white;
  text-decoration: none;
  margin: 0.5rem 0;
  display: block;
  transition: color 0.3s ease, transform 0.3s ease;
}

.footer-link:hover {
  text-decoration: underline;
  color: #ffdd57;
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
  background-color: #ffdd57;
  color: black;
  border-radius: 20px;
  width: 8rem;
  height: 2rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.contact-button:hover {
  background-color: #ffc107;
}

.subscribe {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
}

.subscribe-input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 0.5rem;
  width: 100%;
  max-width: 300px;
}

.subscribe-button {
  background-color: #ffdd57;
  color: black;
  border-radius: 20px;
  width: 8rem;
  height: 2rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.subscribe-button:hover {
  background-color: #ffc107;
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
