<template>
    <div class="contact">
      <h1>Contact Me</h1>
      <form @submit.prevent="submitForm">
        <div>
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="name" required>
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required>
        </div>
        <div>
          <label for="message">Message:</label>
          <textarea id="message" v-model="message" required></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContactPage',
    data() {
      return {
        name: '',
        email: '',
        message: ''
      }
    },
    methods: {
      submitForm() {
        alert(`Message sent! Name: ${this.name}, Email: ${this.email}, Message: ${this.message}`);
        this.name = '';
        this.email = '';
        this.message = '';
      }
    }
  }
  </script>
  
  <style scoped>
  .contact {
    padding: 20px;
  }
  form {
    display: flex;
    flex-direction: column;
  }
  div {
    margin-bottom: 10px;
  }
  label {
    margin-bottom: 5px;
  }
  input, textarea {
    padding: 10px;
    font-size: 16px;
    width: 100%;
  }
  button {
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
  }
  </style>
  