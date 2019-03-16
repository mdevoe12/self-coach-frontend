<template>
  <div id="app">
    <template v-if="authenticated">
      <Data @logged-out="authenticated=false" />
    </template>
    <template v-else>
      <Login @logged-in="authenticated=true" />
    </template>
  </div>
</template>

<script>
import Login from './components/Login'
import Data from './components/Data'

export default {
  name: 'app',
  components: {
    Login,
    Data
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
