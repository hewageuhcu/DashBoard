<template>
  
  <MasterDashboard />
  <MyProfile/>
  <MyHome/>
  <MyDownload/>
  <MySettings/>
</template>

<script>
import MasterDashboard from '@/Pages/Master/MasterDashboard.vue';
// import MyProfile from '@/Pages/MyProfile.vue';
// import MyHome from './Pages/MyHome.vue';
// import MyDownload from './Pages/MyDownload.vue';
// import MySettings from './Pages/MySettings.vue';

export default {
  name: 'App',
  components: {
    MasterDashboard,
    // MyProfile,
    // MyHome,
    // MySettings,
    // MyDownload
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
