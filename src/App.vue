<template>
  <div id="app">
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
    <button>Login</button>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {

  },
  data() {
    return {
      email: '',
      password: ''
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
