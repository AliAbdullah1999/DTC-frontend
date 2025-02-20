<template>
  <h1>Contact Us</h1>
  <div class="contact">
    <form @submit.prevent="handleSubmit">
      <input type="text" v-model="name" placeholder="Your Name" required />
      <input type="email" v-model="email" placeholder="Your Email" required />
      <textarea v-model="message" placeholder="Your Message" rows="5" required></textarea>
      <button type="submit">Send Message</button>
    </form>
    <div class="p">
      <p class="p1">
        <a href="digitaltransformationcompany@gmail.com"
          ><strong>Email Us: </strong>Digital Transformation Company</a
        >
      </p>
      <p class="p2">
        <a href="tel:+92 333 3515910"><strong>Contact Us: </strong>+92 333 3515910</a>
      </p>
    </div>
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
  flex-direction: row-reverse;
  align-items: right;
  justify-content: center;
  text-align: center;
  min-height: 50vh;
  background-color: white;
  color: white;
  font-family: Arial, sans-serif;
  padding: 20px;
}
.p {
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  padding-right: 20px;
  border: #777777;
}
h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: black;
  align-items: center;
  position: center;
}

form {
  width: 100%;
  max-width: 400px;
  background-color: white;
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
  background-color: white;
  color: black;
}

form input::placeholder,
form textarea::placeholder {
  color: #777777;
}

form button {
  background-color: black;
  color: #ffffff;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

form button:hover {
  background-color: wheat;
  color: black;
}

a {
  color: black;
  text-decoration: none;
  transition: color 0.3s ease;
}

a:hover {
  color: blue;
}
</style>
