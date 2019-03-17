<template>
  <div class="side-bar-wrapper">
    <h4>menu</h4>
    <hr>
    <p>
      <a href="#" 
         @click.prevent="$emit('logged-out')"
         class="logout-link">
        logout
      </a>
    </p>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.side-bar-wrapper {
  width: 20%;
  background: black;
  color: white;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
}

.logout-link {
  color: white;
}

.logout-link:hover {
  color: grey;
  cursor: pointer;
}
</style>


