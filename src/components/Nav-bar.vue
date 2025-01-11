<template>
  <header>
    <div class="logo">
      <img
        src="/home/ali-abdullah/Desktop/Projects/CTS/CTS/src/assets/t_transparent.png"
        alt="Company Logo"
      />
    </div>
    <nav>
      <ul class="menu">
        <li>
          <RouterLink to="/" class="nav-link" active-class="nav-link-active">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/about" class="nav-link" active-class="nav-link-active">About</RouterLink>
        </li>
        <li>
          <RouterLink to="/services" class="nav-link" active-class="nav-link-active"
            >Services</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/contact" class="nav-link" active-class="nav-link-active"
            >Contact</RouterLink
          >
        </li>
      </ul>
      <div class="hamburger" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  </header>
  <div class="blinking-line"></div>
</template>

<script setup>
import { RouterLink } from 'vue-router'

const toggleMenu = () => {
  const menu = document.querySelector('.menu')
  menu.classList.toggle('active')
}
</script>

<style scoped>
/* Header Container */
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.1em 0.5rem;
  background-color: black;
}

/* Logo Styling */
.logo h2 {
  font-family: sans-serif;
  font-size: 1.5rem;
  color: white;
  display: flex;
}

/* Blinking-line */
.blinking-line {
  width: 100%;
  height: 2px;
  background-color: white;
  animation: blink 1s infinite;
}
@keyframes blink {
  0%,
  50% {
    opacity: 1;
  }
  50.1%,
  100% {
    opacity: 0;
  }
}

/* Navigation Bar */
img {
  width: 90px;
  height: 60px;
}
nav {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 3rem;
  position: relative;
}

/* Navigation Menu */
.menu {
  display: flex;
  gap: 2rem;
  list-style: none;
}

.menu li {
  display: inline-block;
}

/* Navigation Links */
.nav-link {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.nav-link:hover {
  background-color: #f0a500;
  text-decoration: underline;
}

/* Active Link Styling */
.nav-link-active {
  background-color: #555;
}

/* Hamburger Menu */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
}

.hamburger span {
  width: 25px;
  height: 3px;
  background-color: white;
}

/* Mobile and Tablet Styles */
@media (max-width: 768px) {
  .menu {
    display: none;
    position: absolute;
    top: 60px;
    right: 10px;
    background-color: rgba(0, 0, 0, 0.8);
    padding: 20px;
    border-color: black;
    border-radius: 10px;
    width: 200px;
    flex-direction: column;
    gap: 20px;
  }

  .menu.active {
    display: flex;
  }

  .hamburger {
    display: flex;
  }

  .menu li {
    text-align: center;
  }
}
</style>
