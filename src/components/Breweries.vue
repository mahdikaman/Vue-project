<script>
export default {
  name: "AllBreweries",
  data() {
    return {
      heading: "Click below for further information",
      favorite: "",
    };
  },
  computed: {
    breweries() {
      return this.$store.state.breweries;
    },
    isbreweriesLoading() {
      return this.$store.state.isLoading;
    },
  },
  created() {
    this.$store.dispatch("getbreweries");
  },
  methods: {
    goTobrewery(id) {
      this.$router.push("/breweryview/" + id);
    },
  },
};
</script>

<template>
  <h2>
    <u>{{ heading }}</u>
  </h2>
  <div v-if="isbreweriesLoading">Loading breweries...</div>
  <div v-else-if="breweries.length === 0">No breweries...</div>
  <div class="div1" v-else v-for="brewery in breweries" :key="brewery.id">
    <ul>
      <li @click="goTobrewery(brewery.id)">{{ brewery.name }}</li>
    </ul>
  </div>
</template>

<style scoped>
h2 {
  color: black;
  background-color: bisque;
}
li {
  cursor: pointer;
  text-decoration-line: inherit;
}

li:hover {
  transform: translateX(3.2rem);
  color: blue;
}
.div1 {
  border: solid 3px black;
}
.div1:hover {
  background-color: #ff8b8b;
}
</style>
