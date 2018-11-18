<template>
  <div class="login">
    <h5>welcome to trend tracker</h5>
    <h5>please login to continue</h5>

    <p>
      <label>email: </label>
      <input type="text"
             v-model="email">
    </p>
    <p>
      <label>password: </label>
      <input type="password"
             v-model="password">
    </p>
    <button @click="login">
      Login
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    login() {
      this.axios.post('localhost:3000/login', {
        email: this.email,
        password: this.password
      })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>
</style>
