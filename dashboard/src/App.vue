<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <MasterDashboard />
</template>

<script>
import MasterDashboard from './Pages/Master/MasterDashboard.vue';

export default {
  name: 'App',
  components: {
    MasterDashboard
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
