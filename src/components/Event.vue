<template>
  <div class="event">
    <div class="header"></div>
    <div class="body">
      <img
        class="event-img"
        :src="event.img"
      >

      <div class="main">
        <h3>{{event.name}}</h3>
        <p>
          <strong>{{event.company}}</strong>
          <a
            v-for="(link, network) in event.social"
            :key="`${event.company}—${network}`"
            :href="link"
          >{{network}}</a>
          ({{event.city}}, {{event.province}})
        </p>

        <ul>
          <li
            v-for="(person, role) in event.credits"
            :key="role"
          >{{role}}: {{person}}</li>
        </ul>
        <p>{{event.summary}}</p>
        <p>{{event.genre}}</p>
      </div>
      <div class="info">
        <h4>
          Venue:
          <a href="#">{{event.venue}}</a>
        </h4>
        <p>Show length: {{event.length}} min</p>
        <p>Price: ${{event.price}} (incl S/C)</p>
        {{showTimes}}
        <ul>
          <li
            v-for="time in event.showTimes"
            :key="time"
          >{{time.toLocaleString()}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Event",
  props: {
    event: Object,
    zoom: { type: Number, default: 10 },
    starred: Boolean,
    inactive: Boolean
  },
  computed: {}
};
</script>

<style scoped>
.body {
  display: flex;
  justify-content: space-between;
}
.body > * {
  padding: 1rem;
}
.event-img {
  width: 30vw;
  height: 22vw;
}
.main {
  flex: 1;
}

ul {
  padding: 0;
  list-style-type: none;
}
</style>
