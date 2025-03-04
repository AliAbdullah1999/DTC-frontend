<template>
  <div class="banner">
    <h1>Contact Us</h1>
  </div>
  <section class="contact-section">
    <div class="contact-container">
      <div class="contact-description">
        <h3><strong>Get in Touch</strong></h3>
        <p>
          We’re here to help with all your inquiries, whether you need web development services, IT
          solutions, or expert advice. Feel free to reach out to us via phone, email, or WhatsApp,
          and our team will respond as soon as possible. Your satisfaction is our priority, and
          we’re committed to providing prompt and efficient support.
        </p>
        <h3><strong>Contact Us</strong></h3>
        <p>
          You can contact us anytime for project discussions, collaborations, or general queries.
          Whether you prefer an in-person meeting or an online consultation, we’re always available
          to assist you. Use the form below or connect with us through our provided contact details.
        </p>
        <div class="contact-info">
          <div class="info-item animate-info">
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@7.0.0/icons/gmail.svg"
              alt="Email"
            />
            <p>
              <strong>Email Us:</strong>
              <a href="mailto:digitaltransformationcompany@gmail.com"
                >Digital Transformation Company</a
              >
            </p>
          </div>
          <div class="info-item animate-info">
            <img src="../assets/telephone.png" alt="Phone" />
            <p><strong>Contact Us:</strong> <a href="tel:+92 333 3515910">+92 333 3515910</a></p>
          </div>
        </div>
      </div>

      <form @submit.prevent="handleSubmit" class="contact-form animate-form">
        <input type="text" v-model="name" placeholder="Your Name" required />
        <input type="email" v-model="email" placeholder="Your Email" required />
        <textarea v-model="message" placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  </section>
  <div id="map">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.104740071888!2d67.0576612!3d24.8043485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33cf02eda6f15%3A0x937892677f0377a2!2sDefence%20Housing%20Authority%2C%20Karachi%2C%2075500%2C%20Pakistan!5e0!3m2!1sen!2s!4v1633021234567!5m2!1sen!2s"
      width="100%"
      height="100%"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
    ></iframe>
  </div>
  <a href="https://wa.me/923333515910" class="whatsapp-float" target="_blank">
    <img src="https://cdn.jsdelivr.net/npm/simple-icons@7.0.0/icons/whatsapp.svg" alt="WhatsApp" />
  </a>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      message: '',
    }
  },
  methods: {
    async handleSubmit() {
      const formData = {
        name: this.name,
        email: this.email,
        message: this.message,
      }

      try {
        const response = await fetch('http://localhost:5000/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        })

        if (response.ok) {
          alert('Message sent successfully!')
          this.name = ''
          this.email = ''
          this.message = ''
        } else {
          alert('Failed to send message. Please try again.')
        }
      } catch (error) {
        console.error('Error:', error)
        alert('An error occurred. Please try again later.')
      }
    },
  },
}
</script>

<style scoped>
.banner {
  background-color: skyblue;
  padding: 5rem;
  height: 15rem;
  text-align: center;
  color: white;
  font-family: 'Arial', sans-serif;
}

.banner h1 {
  font-size: 2.5rem;
  margin: 0;
}

.contact-section {
  padding: 2rem;
  background-color: #f9f9f9;
  color: #333;
  text-align: center;
}

.contact-section h1 {
  font-size: 3rem;
  margin-bottom: 2rem;
  color: #333;
  text-transform: uppercase;
  letter-spacing: 2px;
  border-bottom: 2px solid #333;
  display: inline-block;
  padding-bottom: 0.5rem;
}

.contact-container {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
}

.contact-description,
.contact-form {
  flex: 1;
  width: 100%;
  max-width: 500px;
}

.contact-description {
  padding: 2rem;
  font-size: 1.1rem;

  text-align: left;
}

.contact-form {
  width: 100%;
  max-width: 500px;
  height: 32rem;
  background-color: transparent !important;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.contact-form input,
.contact-form textarea,
.contact-form button {
  width: 100%;
  padding: 2rem;
  margin-bottom: 1rem;
  border-radius: 30px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
}

.contact-form input::placeholder,
.contact-form textarea::placeholder {
  color: #777;
}

.contact-form button {
  background-color: #333;
  color: white;
  font-weight: bold;
  cursor: pointer;
  border-radius: 30px;
  transition: background-color 0.3s ease;
}

.contact-form button:hover {
  background-color: #555;
}

.contact-info {
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 1rem;
  padding-top: 1rem;
}

.info-item {
  display: flex;
  align-items: left;
  gap: 1rem;
  background-color: white;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.info-item img {
  width: 40px;
  height: 40px;
}

.info-item p {
  margin: 0;
  font-size: 1rem;
  color: #333;
}

.info-item a {
  color: #007bff;
  text-decoration: none;
  transition: color 0.3s ease;
}

.info-item a:hover {
  color: #0056b3;
}

#map {
  height: 30vh;
  width: 100%;
}

@media (max-width: 768px) {
  .contact-container {
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }

  .contact-description {
    /* padding: 1rem; */
    text-align: center;
  }

  .contact-form {
    padding: 1rem;
  }

  .contact-form input,
  .contact-form textarea,
  .contact-form button {
    padding: 0.8rem;
  }

  .info-item {
    flex-direction: column;
    text-align: center;
  }

  .info-item img {
    width: 30px;
    height: 30px;
  }

  .info-item p {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .contact-description {
    padding: 0.5rem;
  }

  .contact-form {
    padding: 0.5rem;
  }

  .contact-form input,
  .contact-form textarea,
  .contact-form button {
    padding: 0.6rem;
  }

  .info-item img {
    width: 25px;
    height: 25px;
  }

  .info-item p {
    font-size: 0.8rem;
  }
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
  box-shadow: 2px 2px 3px #999;
  z-index: 1000;
}

.whatsapp-float img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-form {
  animation: fadeIn 1s ease-in-out;
}

.animate-info {
  animation: fadeIn 1s ease-in-out;
  animation-delay: 0.5s;
}

.contact-info .animate-info:nth-child(2) {
  animation-delay: 1s;
}
</style>
