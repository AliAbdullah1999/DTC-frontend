<template>
  <div class="carousel-container">
    <div class="carousel" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div class="carousel-item" v-for="(item, index) in items" :key="index">
        <div class="item-content">
          <div class="text-content">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
            <button class="btn" @click="$router.push('/services')">Explore Our Services</button>
          </div>
          <img v-if="item.image" :src="item.image" :alt="item.title" />
        </div>
      </div>
    </div>
  </div>

  <!-- Uncommented About Section -->
  <div class="about">
    <div class="content">
      <h1>About Us</h1>
      <p>
        At Digital Transformation Company, we are committed to providing top-notch solutions for
        digital problems. We offer services in Digital Marketing, SEO, Website/Web-application
        development, and CCTV solutions. We work hard to provide customer-oriented solutions at
        affordable prices.
      </p>
      <p>
        Our team of experts is always ready to help you with your digital needs. We are committed to
        providing top-notch solutions that help you grow your business and reach your goals.
      </p>
      <div class="points">
        <ul class="points">
          <li class="point-item">24/7 Support</li>
          <li class="point-item">Professional Staff</li>
          <li class="point-item">Fair Prices</li>
          <li class="point-item">Quality Services</li>
        </ul>
      </div>
      <h4>Call us to ask any question</h4>
      <a href="tel:+92 333 3515910">+92 333-3515910</a>
      <div>
        <button class="btn" @click="$router.push('/about')">Explore More</button>
      </div>
    </div>
    <div class="about-image">
      <img src="@/assets/about.jpg" alt="About Us" />
    </div>
  </div>

  <div class="message">
    <h2 style="font-size: 50px">Services We Provide</h2>
    <p>We Are Here To Grow Your Business Exponentially</p>
  </div>

  <div class="special">
    <div class="services-grid">
      <div class="service-item" v-for="(service, index) in services" :key="index">
        <img :src="service.icon" :alt="service.title" />
        {{ service.title }}
      </div>
    </div>
  </div>

  <div class="tech">
    <h2 style="font-size: 50px">Our Tech Stack</h2>
    <div class="tech-container">
      <div class="tech-slider">
        <div class="tech-slide">
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@7.0.0/icons/html5.svg" alt="HTML" />
        </div>
        <div class="tech-slide">
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@7.0.0/icons/css3.svg" alt="CSS" />
        </div>
        <div class="tech-slide">
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@7.0.0/icons/javascript.svg"
            alt="JS"
          />
        </div>
        <div class="tech-slide">
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@7.0.0/icons/nodedotjs.svg"
            alt="Node"
          />
        </div>
        <div class="tech-slide">
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@7.0.0/icons/php.svg" alt="PHP" />
        </div>
        <div class="tech-slide">
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@7.0.0/icons/jquery.svg"
            alt="jQuery"
          />
        </div>
        <div class="tech-slide">
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@7.0.0/icons/express.svg"
            alt="Express"
          />
        </div>
        <div class="tech-slide">
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@7.0.0/icons/mongodb.svg"
            alt="Mongo"
          />
        </div>
        <div class="tech-slide">
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@7.0.0/icons/wordpress.svg" alt="WP" />
        </div>
        <div class="tech-slide">
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@7.0.0/icons/react.svg" alt="React" />
        </div>
        <div class="tech-slide">
          <img src="../assets/vuejs.png" alt="Vue" />
        </div>
        <div class="tech-slide">
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@7.0.0/icons/nextdotjs.svg"
            alt="Next"
          />
        </div>
        <!-- Duplicates for continuous scroll -->
        <div class="tech-slide">
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@7.0.0/icons/html5.svg" alt="HTML" />
        </div>
        <div class="tech-slide">
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@7.0.0/icons/css3.svg" alt="CSS" />
        </div>
        <div class="tech-slide">
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@7.0.0/icons/javascript.svg"
            alt="JS"
          />
        </div>
        <div class="tech-slide">
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@7.0.0/icons/nodedotjs.svg"
            alt="Node"
          />
        </div>
        <div class="tech-slide">
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@7.0.0/icons/php.svg" alt="PHP" />
        </div>
        <div class="tech-slide">
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@7.0.0/icons/jquery.svg"
            alt="jQuery"
          />
        </div>
        <div class="tech-slide">
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@7.0.0/icons/express.svg"
            alt="Express"
          />
        </div>
        <div class="tech-slide">
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@7.0.0/icons/mongodb.svg"
            alt="Mongo"
          />
        </div>
        <div class="tech-slide">
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@7.0.0/icons/wordpress.svg" alt="WP" />
        </div>
        <div class="tech-slide">
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@7.0.0/icons/react.svg" alt="React" />
        </div>
        <div class="tech-slide">
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@7.0.0/icons/vue-dot-js.svg"
            alt="Vue"
          />
        </div>
        <div class="tech-slide">
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@7.0.0/icons/nextdotjs.svg"
            alt="Next"
          />
        </div>
      </div>
    </div>
  </div>

  <section class="contact-us">
    <div class="contact-info">
      <h2>Contact Us</h2>
      <p>We’d love to hear from you!</p>
      <ul>
        <li>Have a question or need assistance?</li>
        <li>Fill out our quick and secure contact form, and we’ll get back to you ASAP.</li>
        <li>Let’s connect! 🚀</li>
      </ul>
      <form @submit.prevent="validateForm">
        <input type="text" placeholder="Your Name" v-model="form.name" required />
        <input type="email" placeholder="Your Email" v-model="form.email" required />
        <textarea placeholder="Your Message" v-model="form.message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
    <div class="contact-map">
      <iframe
        src="https://www.google.com/maps/embed?pb=YOUR_MAP_LINK"
        width="100%"
        height="100%"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  </section>

  <!-- <a href="https://wa.me/1234567890" class="whatsapp-float" target="_blank">
    <img src="https://cdn.jsdelivr.net/npm/simple-icons@7.0.0/icons/whatsapp.svg" alt="WhatsApp" />
  </a> -->
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      currentIndex: 0,
      items: [
        {
          title: 'IT Services',
          description: `Your reliable IT partner, dedicated to providing comprehensive solutions tailored to meet your unique needs. We specialize in delivering top-notch IT services that ensure efficiency, security, and seamless integration for businesses of all sizes. Whether it's optimizing your systems, enhancing your digital presence, or providing ongoing technical support, we are here to empower your success with innovative and reliable solutions.`,
          image: 'src/assets/IT-Services.jpg',
        },
        {
          title: 'Web Solutions',
          description: `Delivering innovative web development solutions designed to bring your ideas to life. From crafting visually stunning websites to building dynamic and responsive applications, we specialize in creating online experiences that captivate users and drive business growth. Let us transform your vision into a digital reality with our cutting-edge web solutions.`,
          image: 'src/assets/web.jpg',
        },
        {
          title: 'Digital Marketing',
          description: `Elevating your brand's presence with data-driven strategies and creative campaigns. We specialize in connecting you with your audience through targeted advertising, SEO, social media management, and content marketing. Let us help you drive engagement, increase conversions, and achieve measurable growth in the digital space.`,
          image: 'src/assets/DM1.png',
        },
        {
          title: 'CCTV Solutions',
          description: `Ensuring your safety with high-quality CCTV security systems designed to protect what matters most. Our advanced surveillance solutions provide reliable monitoring, clear visuals, and seamless integration for homes and businesses. Trust us to deliver customized security systems that give you peace of mind and round-the-clock protection.`,
          image: 'src/assets/CCTV.jpg',
        },
      ],
      services: [
        {
          title: 'Website Development',
          icon: 'https://cdn.jsdelivr.net/npm/simple-icons@7.0.0/icons/codepen.svg',
        },
        {
          title: 'Web Application Development',
          icon: 'https://cdn.jsdelivr.net/npm/simple-icons@7.0.0/icons/react.svg',
        },
        {
          title: 'Digital Marketing and SEO',
          icon: 'https://cdn.jsdelivr.net/npm/simple-icons@7.0.0/icons/googleanalytics.svg',
        },
        { title: 'CCTV Installation and Maintenance', icon: 'src/assets/cctv-camera.png' },
        {
          title: 'Web Hosting',
          icon: 'https://cdn.jsdelivr.net/npm/simple-icons@7.0.0/icons/cloudflare.svg',
        },
        {
          title: 'Graphic Designing',
          icon: 'https://cdn.jsdelivr.net/npm/simple-icons@7.0.0/icons/adobeillustrator.svg',
        },
        {
          title: 'Other IT Services',
          icon: 'https://cdn.jsdelivr.net/npm/simple-icons@7.0.0/icons/git.svg',
        },
      ],
      form: {
        name: '',
        email: '',
        message: '',
      },
    }
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.items.length
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length
    },
    validateForm() {
      if (this.form.name && this.form.email && this.form.message) {
        alert('Form submitted successfully!')
      } else {
        alert('Please fill out all fields.')
      }
    },
  },
  mounted() {
    setInterval(() => {
      this.nextSlide()
    }, 5000)
  },
}
</script>

<style scoped>
.carousel-container {
  position: relative;
  margin-top: -5rem;
  max-width: 100%;
  height: 100vh;
  background-color: skyblue; /* Revert to original background color */
  overflow: hidden;
  color: black; /* Revert to original text color */
  display: flex;
  align-items: center;
  /* padding-left: 10px; */
  /* margin-right: 10px; */
  padding-bottom: 10px;
  justify-content: center;
}

.carousel {
  display: flex;
  transition: transform 1s ease-in-out;
  width: 100%;
}

.carousel-item {
  min-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeIn 1s ease-in-out;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: scale(0.95);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.item-content {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  box-sizing: border-box;
}

.text-content {
  flex: 2;
}

h3 {
  font-size: 40px;
  margin-bottom: 10px;
}

p {
  font-size: 24px;
  line-height: 1.5;
}

img {
  flex: 1;
  max-width: 40%;
  height: auto;
  margin-left: 20px;
}

/* About Section */
.about {
  padding: 20px;
  display: flex;
  background-color: transparent !important; /* Revert to original background color */
  flex-wrap: wrap;
  gap: 20px;
  color: black; /* Revert to original text color */
}

.content {
  flex: 1;
  min-width: 300px;
}

.content h1 {
  font-size: 2.5rem;
  margin-bottom: 15px;
}

.content p {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 15px;
}

.points {
  /* display: flex; */
  flex-wrap: wrap;
  gap: 15px;
  padding-left: 10px;
  justify-content: left;
}

.point-item {
  /* display: flex; */
  align-items: left;
  padding-left: 10px;
  /* flex: 1; */
  min-width: 120px;
  text-align: left;
}

.content h4 {
  font-size: 1.2rem;
  margin: 15px 0;
}

.content a {
  display: block;
  margin: 10px 0;
  color: #000;
  text-decoration: none;
}

.btn {
  background-color: skyblue;
  color: black;
  margin-top: 1rem;
  padding: 0.8rem 1.5rem;
  border: none;
  align-items: left;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  font-size: 1rem;
  /* border-color: black; */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 1);
  max-width: 200px;
  /* margin: 10px auto; */
  display: block;
}

.about-image {
  flex: 1;
  min-width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.about-image img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
}

/* Message Section */
.message {
  text-align: center;
  padding: 30px 20px;
}

.message h2 {
  font-size: 2rem;
  margin-bottom: 10px;
}

.message h1 {
  font-size: 1.8rem;
  line-height: 1.4;
}

/* Services Section */
.special {
  padding: 30px;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
}

.service-item {
  padding: 20px;
  background: skyblue; /* Revert to original background color */
  border-radius: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 150px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  color: black; /* Revert to original text color */
  animation: slideUp 0.5s ease-in-out;
}

@keyframes slideUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.service-item img {
  width: 40px;
  height: 40px;
  margin-bottom: 15px;
}

.service-item:hover {
  transform: translateY(-5px);
}

/* Tech Section */
.tech {
  /* padding: 20px 0; */
  overflow: hidden;
  background: #fff;
}

.tech h2 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
  font-size: 4em;
}

.tech-container {
  width: 100%;
  overflow: hidden;
  position: relative;
}

.tech-slider {
  display: flex;
  width: calc(220px * 24);
  animation: slide 25s linear infinite;
}

.tech-slide {
  flex: 0 0 220px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent !important; /* Revert to original background color */
  margin: 10px;
  border-radius: 10px;
  font-weight: 600;
  color: #444; /* Revert to original text color */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.tech-slide img {
  width: 35px;
  height: 45px;
  margin-right: 15px;
}

.tech-slider:hover {
  animation-play-state: paused;
}

@keyframes slide {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-220px * 12));
  }
}

/* Contact Section */
.contact-us {
  display: flex;
  /* flex-direction: row--; */
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px;
  flex-wrap: wrap;
}

.contact-info,
.contact-map {
  width: 50%;
  min-width: 300px;
}

.contact-info {
  padding-right: 20px;
}

.contact-info h2 {
  font-size: 2em;
  margin-bottom: 10px;
}

.contact-info ul {
  list-style: none;
  padding: 0;
  margin: 20px 0;
}

.contact-info form {
  display: flex;
  flex-direction: column;
}

.contact-info input,
.contact-info textarea {
  margin-bottom: 15px;
  padding: 10px;
  font-size: 1em;
}

.contact-info button {
  padding: 10px;
  background-color: #007bff;
  color: white;
  width: 15rem;
  border: none;
  cursor: pointer;
}

/* Responsive Design */
@media (max-width: 768px) {
  .carousel-container {
    height: auto;
    align-items: center;
    padding: 10px;
  }

  .item-content {
    flex-direction: column;
    text-align: center;
    padding: 20px; /* Adjust padding for mobile view */
  }

  .text-content {
    margin-bottom: 20px; /* Add margin for spacing */
  }

  .carousel img {
    max-width: 60%;
    padding-right: 0px;
    margin: 20px 0 0 0;
  }

  h3 {
    font-size: 32px;
  }

  .carousel p {
    font-size: 20px;
  }
  .btn {
    /* padding: 0.6rem 1rem; */
    align-items: center;
    padding-left: 15px;
  }
  .about {
    flex-direction: column;
    padding: 15px;
    align-items: center;
  }

  .content h1 {
    font-size: 2rem;
  }

  .content p {
    font-size: 1rem;
  }

  .points {
    flex-direction: column;
    align-items: center;
  }

  .points div {
    width: 100%;
    margin: 5px 0;
  }

  .content h4 {
    font-size: 1.1rem;
  }

  .message h2 {
    font-size: 1.5rem;
  }
  .point-item .tick {
    width: 1rem;
    height: 1.5rem;
  }
  .message h1 {
    font-size: 1.3rem;
  }
  .about-image {
    /* padding-right: 10px; */
    width: 100%;
  }
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .tech-slide {
    flex: 0 0 180px;
    height: 100px;
  }

  .tech-slider {
    width: calc(180px * 24);
  }

  @keyframes slide {
    100% {
      transform: translateX(calc(-180px * 12));
    }
  }

  .contact-us {
    flex-direction: column;
    padding: 20px;
  }

  .contact-info,
  .contact-map {
    width: 100%;
    padding: 5px;
  }
}

@media (max-width: 480px) {
  h3 {
    font-size: 28px;
  }

  .carousel p {
    font-size: 18px;
  }

  .content h1 {
    font-size: 1.8rem;
  }

  .content p {
    font-size: 0.9rem;
  }

  .btn {
    padding: 0.6rem 1rem;
  }

  .message h2 {
    font-size: 1.2rem;
  }

  .message h1 {
    font-size: 1.1rem;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }
}

.carousel-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 10;
}

.carousel-button.prev {
  left: 10px;
}

.carousel-button.next {
  right: 10px;
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
</style>