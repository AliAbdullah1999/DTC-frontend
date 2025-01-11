<template>
  <div class="contact">
    <h1>Contact Us</h1>
    <form @submit.prevent="handleSubmit">
      <input type="text" v-model="name" placeholder="Your Name" required />
      <input type="email" v-model="email" placeholder="Your Email" required />
      <textarea v-model="message" placeholder="Your Message" rows="5" required></textarea>
      <button type="submit">Send Message</button>
    </form>
    <p>Email: <a href="mailto:support@webservicesco.com">support@webservicesco.com</a></p>
    <p>Phone: <a href="tel:+1234567890">+123 456 7890</a></p>
  </div>
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
.contact {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 100vh;
  background-color: #121212;
  color: #ffffff;
  font-family: Arial, sans-serif;
  padding: 20px;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #f9f9f9;
}

form {
  width: 100%;
  max-width: 400px;
  background-color: #1e1e1e;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  margin-bottom: 20px;
}

form input,
form textarea,
form button {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
}

form input,
form textarea {
  background-color: #2a2a2a;
  color: #ffffff;
}

form input::placeholder,
form textarea::placeholder {
  color: #777777;
}

form button {
  background-color: #ff6600;
  color: #ffffff;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

form button:hover {
  background-color: #e05500;
}

a {
  color: #ff6600;
  text-decoration: none;
  transition: color 0.3s ease;
}

a:hover {
  color: #e05500;
}
</style>
