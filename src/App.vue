<template>
  <div id="app">
    <Header/>
    <Toolbar/>
    <Filterer/>
    <Listing/>
  </div>
</template>

<script>
import Toolbar from "./components/Toolbar.vue";
import Filterer from "./components/Filterer.vue";
import Listing from "./components/Listing.vue";
import Header from "./components/Header.vue";

export default {
  name: "app",
  components: {
    Toolbar,
    Filterer,
    Listing,
    Header
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
