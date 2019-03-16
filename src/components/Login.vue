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
    <trend
      :data="[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 12, 9, 11, 20]"
      :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
      :auto-draw="true"
      :autoDrawDuration="5000"
      :smooth="false">
    </trend>
  </div>
</template>

<script>
import Trend from 'vuetrend'

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
        console.log(response)
        this.$emit('logged-in')
      })
      .catch((error) => {
        console.log(error)
      })
    }
  },
  components: {
    Trend
  }
}
</script>

<style scoped>
</style>
