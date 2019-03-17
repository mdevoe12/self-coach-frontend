<template>
  <div class="side-bar-wrapper">
    <h4>menu</h4>
    <hr>
    <p>
      <a href="#"
         class="sidebar-link">
        sleep
      </a>
    </p>
    <p>
      <a href="#"
         class="sidebar-link">
        workouts
      </a>
    </p>
    <p>
      <a href="#" 
         @click.prevent="$emit('logged-out')"
         class="sidebar-link">
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

.sidebar-link {
  color: white;
  text-decoration: none;
}

.sidebar-link:hover {
  color: grey;
  cursor: pointer;
}
</style>


