<template>
  <div id="app">
    <template v-if="authenticated">
      <Index @logged-out="authenticated=false" />
    </template>
    <template v-else>
      <Login @logged-in="authenticated=true" />
    </template>
  </div>
</template>

<script>
import Login from './components/Login'
import Index from './components/Index'

export default {
  name: 'app',
  components: {
    Login,
    Index
  },
  data() {
    return {
      authenticated: false
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
