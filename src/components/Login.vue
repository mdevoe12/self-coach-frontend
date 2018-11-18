<template>
  <div class="login">
    <h5>welcome to trend tracker</h5>
    <h5>please login to continue</h5>
    <form>
      <p>
        <label>email: </label>
        <input type="text"
               autocomplete="email"
               v-model="email">
      </p>
      <p>
        <label>password: </label>
        <input type="password"
               autocomplete="current-password"
               v-model="password">
      </p>
      <button @click.prevent="login">
        Login
      </button>
    </form>
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
      this.axios.post('http://localhost:3000/login', {
        email: this.email,
        password: this.password
      })
      .then((response) => {
        console.log('success')
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
        console.log('failure')
      })

      this.$emit('logged-in')
    }
  }
}
</script>

<style scoped>
</style>
