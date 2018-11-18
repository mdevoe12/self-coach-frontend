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
    <button @click="$emit('logged-in')">Login</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    }
  }
}
</script>

<style scoped>
</style>
