<template>
   <MyHome msg="Welcome to Your Vue.js App" />
   <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import MyHome from "./views/MyHome.vue";

export default {
   name: "App",
   components: {
      // HelloWorld,
      MyHome,
   },
};
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
