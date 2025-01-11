<template>
  <footer>
    <p>&copy; 2024 Your Company Name. All Rights Reserved.</p>
    <nav>
      <RouterLink to="/privacy" class="footer-link">Privacy Policy</RouterLink>
      <RouterLink to="/terms" class="footer-link">Terms of Service</RouterLink>
    </nav>
  </footer>
</template>
  
  <script setup>
</script>
  
  <style scoped>
footer {
  background-color: #4e54c8;
  color: white;
  text-align: center;
  padding: 1rem;
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
  