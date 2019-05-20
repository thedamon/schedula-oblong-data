<template>
  <div class="event-listing">
    <Event
      v-for="event in events"
      :key="event.name"
      :event="event"
    />
  </div>
</template>

<script>
import Event from "./Event";
export default {
  name: "sod-listing",
  components: { Event },
  computed: {
    events() {
      return this.$store.state.events;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
