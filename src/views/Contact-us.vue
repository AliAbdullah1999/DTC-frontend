<template>
  <section class="contact-section">
    <h1>Contact Us</h1>
    <div class="contact-container">
      <form @submit.prevent="handleSubmit" class="contact-form">
        <input type="text" v-model="name" placeholder="Your Name" required />
        <input type="email" v-model="email" placeholder="Your Email" required />
        <textarea v-model="message" placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
      <div class="contact-info">
        <div class="info-item">
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@7.0.0/icons/gmail.svg" alt="Email" />
          <p>
            <strong>Email Us:</strong>
            <a href="mailto:digitaltransformationcompany@gmail.com"
              >Digital Transformation Company</a
            >
          </p>
        </div>
        <div class="info-item">
          <img src="../assets/telephone.png" alt="Phone" />
          <p><strong>Contact Us:</strong> <a href="tel:+92 333 3515910">+92 333 3515910</a></p>
        </div>
      </div>
    </div>
  </section>
  <a href="https://wa.me/+923333515910" class="whatsapp-float" target="_blank">
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}

.contact-form {
  width: 100%;
  max-width: 500px;
  background-color: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.contact-form input,
.contact-form textarea,
.contact-form button {
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
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
  transition: background-color 0.3s ease;
}

.contact-form button:hover {
  background-color: #555;
}

.contact-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.info-item {
  display: flex;
  align-items: center;
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

@media (max-width: 768px) {
  .contact-container {
    flex-direction: column;
    gap: 1rem;
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
</style>
