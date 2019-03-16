<template>
  <div>
    <side-bar />
    <p>welcome to the index, we have lots of stuff</p>

    <button @click="$emit('logged-out')">Log Out</button>
  </div>
</template>

<script>
import SideBar from '@/components/SideBar'

export default {
  components: {
    SideBar
  }
}
</script>

<style scoped>
</style>