<template>
  <header ref="headerRef">
    <div class="logo">
      <RouterLink to="/">
        <img src="../assets/logo-f.png" alt="Company Logo" />
      </RouterLink>
    </div>
    <nav>
      <ul class="menu">
        <li>
          <RouterLink to="/" class="nav-link" active-class="nav-link-active" @click="closeMenu"
            >Home</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/about" class="nav-link" active-class="nav-link-active" @click="closeMenu"
            >About</RouterLink
          >
        </li>
        <li>
          <div class="dropdown">
            <RouterLink
              to="/services"
              class="nav-link"
              active-class="nav-link-active"
              @click="closeMenu"
              >Services</RouterLink
            >
            <div class="dropdown-content">
              <RouterLink to="/services/Web-Development" @click="closeMenu"
                >Web Development</RouterLink
              >
              <RouterLink to="/services/Digital-Marketing" @click="closeMenu"
                >Digital Marketing</RouterLink
              >
              <RouterLink to="/services/SEO" @click="closeMenu">SEO</RouterLink>
            </div>
          </div>
        </li>
        <li>
          <RouterLink
            to="/Pricing"
            class="nav-link"
            active-class="nav-link-active"
            @click="closeMenu"
            >Pricing Plan</RouterLink
          >
        </li>
        <li>
          <RouterLink
            to="/contact"
            class="nav-link"
            active-class="nav-link-active"
            @click="closeMenu"
            >Contact</RouterLink
          >
        </li>
        <li>
          <button class="btn" @click="navigateToContact">Get a Quote</button>
        </li>
      </ul>
      <div class="hamburger" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  </header>
  <!-- <div class="blinking-line"></div> -->
</template>

<script setup>
import { RouterLink, useRouter } from 'vue-router'

const toggleMenu = () => {
  const menu = document.querySelector('.menu')
  if (menu) {
    menu.classList.toggle('active')
  } else {
    console.error('Menu element not found')
  }
}
// import { onMounted, ref } from 'vue'

// const headerRef = ref(null)

// onMounted(() => {
//   window.addEventListener('scroll', () => {
//     const header = headerRef.value || document.querySelector('header')
//     if (window.scrollY > 50) {
//       header.classList.add('scrolled')
//     } else {
//       header.classList.remove('scrolled')
//     }
//   })
// })

const closeMenu = () => {
  const menu = document.querySelector('.menu')
  if (menu) {
    menu.classList.remove('active')
  }
}

const router = useRouter()
const navigateToContact = () => {
  router.push('/contact')
  closeMenu()
}
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  height: 100px;
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 121, 113, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
  box-shadow: 0px 4px 8px rgba(8, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: all 0.3s ease;
  justify-content: space-between;
}

header.scrolled {
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 121, 113, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
  backdrop-filter: blur(0.5px);
  padding: 0.01em 0.1em;
  box-shadow: 0px 6px 13px rgba(8, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.blinking-line {
  width: 100%;
  height: 2px;
  background-color: black;
  animation: blink 1s infinite;
}
.btn {
  background-color: black;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 1rem; /* Adjust margin to align with other elements */
}
.btn:hover {
  background-color: none;
  color: white;
}
@keyframes blink {
  50.1%,
  100% {
    opacity: 2;
  }
  50.1%,
  60% {
    opacity: 2;
  }
}

@keyframes logoAnimation {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

img {
  width: 120px;
  height: 100%;
  object-fit: contain;
}

.logo img {
  width: 120px;
  height: 100%;
  object-fit: contain;
  animation: logoAnimation 3s infinite;
}

nav {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 80%;
  padding-left: 15px;
  padding-right: 15px; /* Remove left padding */
}

.menu {
  display: flex;
  gap: 3rem; /* Reduce gap to decrease space between elements */
  /* position: flex-end; */
  list-style: none;
  margin-left: auto; /* Align menu to the right */
}

.menu li {
  display: inline-block;
}

.nav-link {
  color: rgb(243, 208, 9);
  text-decoration: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.nav-link:hover {
  background-color: black;
  text-decoration: underline;
  color: white;
}

.nav-link-active {
  background-color: #555;
  color: white;
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  z-index: 1000;
  position: relative;
}

.hamburger span {
  width: 20px;
  height: 3px;
  background-color: black;
  color: white;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  align-content: center;
  /* text-align: ;eft; */
  position: absolute;
  background-color: black;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  background-color: transparent;
  flex-direction: column;
}

.dropdown-content a {
  color: rgb(243, 208, 9);
  padding: 3px 6px 5px 5px;
  /* background-width: fit-content; */
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: skyblue;
  color: white;
}

.dropdown:hover .dropdown-content {
  display: flex;
}

.dropdown:hover .nav-link {
  background-color: black;
  color: white;
}

@media (max-width: 768px) {
  header {
    flex-direction: row;
    justify-content: space-between;
    height: 70px;
    /* padding-left: 2px; */
    padding-right: 10px;
  }
  nav {
    padding-left: 0;
  }
  .logo img {
    width: 90px;
    position: center center;
  }
  .menu {
    display: none;
    position: absolute;
    top: 80px;
    right: 10px;
    background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(9, 121, 113, 1) 35%,
      rgba(0, 212, 255, 1) 100%
    );
    padding: 20px;
    border-radius: 10px;
    width: 200px;
    flex-direction: column;
    gap: 20px;
    color: white;
  }

  .menu.active {
    display: flex !important;
  }

  .hamburger {
    display: flex;
  }

  .menu li {
    text-align: center;
  }
}
</style>
