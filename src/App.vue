<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Loader v-if="isLoading"/>
    <LoginWindow v-if="!isLoggedIn"/>
  </div>
</template>

<script>
import Loader from "@/components/Loader.vue";
import LoginWindow from "@/components/LoginWindow.vue";
import Navbar from "@/components/Navbar.vue";

import { mapGetters } from "vuex";
export default {
   components: {
    Loader,
    LoginWindow,
    Navbar
  },
  computed: {
    ...mapGetters({
      isLoading: "isLoading",
      isLoggedIn: "isLoggedIn"
    })
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
