<template>
  <div class="carousel-container">
    <div class="carousel" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div class="carousel-item" v-for="(item, index) in items" :key="index">
        <div class="item-content">
          <div class="text-content">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>
          <img v-if="item.image" :src="item.image" :alt="item.title" />
        </div>
      </div>
    </div>
  </div>
  <div class="about" style="background-color: blanchedalmond">
    <div class="content">
      <h1>About Us</h1>
      <p>
        At Digital Transformaiton Company, we are commited to provide top-notch solution for digital
        problem. We provide services in areas of Digital Marketing, SEO, Website/Web-application
        development and CCTV solutions. We work hard for providing customer-oriented solutions at
        affordable price.
      </p>
      <p>
        Our team of experts are always ready to help you with your digital needs. We are commited to
        provide top-notch solutions that help you grow your business and reach your goals.
      </p>
      <div class="points" style="display: flex; justify-content: space-around; margin-top: 10px">
        <div><strong>24/7 Support</strong></div>
        <div><strong>Professional Staff</strong></div>
        <div><strong>Fair Prices</strong></div>
        <div><strong>Quality Services</strong></div>
      </div>
      <h4 style="margin-top: 10px; font-size: 20px">Call us to ask any question</h4>
      <a href="tel:+92 333 3515910">0333-3515910</a>
      <div style="margin-top: 10px">
        <button class="btn" @click="$router.push('/contact')">Request a Quote</button>
      </div>
    </div>

    <div class="about-image">
      <img src="../assets/about.jpg" alt="" />
    </div>
  </div>
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
          image: 'src/assets/DM.jpg',
        },
        {
          title: 'CCTV Solutions',
          description: `Ensuring your safety with high-quality CCTV security systems designed to protect what matters most. Our advanced surveillance solutions provide reliable monitoring, clear visuals, and seamless integration for homes and businesses. Trust us to deliver customized security systems that give you peace of mind and round-the-clock protection.`,
          image: 'src/assets/CCTV.jpg',
        },
      ],
    }
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.items.length
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length
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
  max-width: 100%;
  height: 100vh;
  background-color: white;
  overflow: hidden;
  color: black;
  display: flex;
  align-items: center;
  padding-left: 10px;
  margin-right: 10px;
  padding-bottom: 10px;
  justify-content: center;
}

.carousel {
  display: flex;
  transition: transform 0.5s ease-in-out;
  width: 100%;
}

.carousel-item {
  min-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
/* homepage about us css */
.about {
  padding-left: 10px;
  display: flex;
  transition: transform 0.5s ease-in-out;
  width: 100%;
}

.about-image img {
  flex: 1;
  max-width: 20rem;
  height: 20rem;

  margin-right: 10px;
}
.btn {
  margin-top: 5px;
  background-color: black;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  width: 10rem;
  height: 3rem;
  border-radius: 5px;
  cursor: pointer;
}
.btn:hover {
  background-color: none;
  color: white;
}
p {
  margin-top: 5px;
  font-size: 1rem;
}
/* Mobile responsiveness */
@media (max-width: 768px) {
  .item-content {
    flex-direction: column;
    text-align: center;
  }

  img {
    max-width: 80%;
    margin-left: 0;
    margin-top: 20px;
  }

  h3 {
    font-size: 32px;
  }

  p {
    font-size: 20px;
  }
}

@media (max-width: 480px) {
  h3 {
    font-size: 28px;
  }

  p {
    font-size: 18px;
  }
}
</style>
