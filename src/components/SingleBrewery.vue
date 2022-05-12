<script>
export default {
  name: "SingleBrewery",
  data() {
    return {
      singleBreweryInfo: [],
      isBreweryLoading: false,
    };
  },
  computed: {
    brewery() {
      return this.$store.state.brewery;
    },
  },
  created() {
    this.$store.dispatch("singlebrewery", this.$route.params.id);
  },
  watch: {
    "$store.state.brewery": function () {
      console.log("Watch brewery", this.$store.state.brewery);
      this.singleBreweryInfo = this.$store.state.brewery;
    },
    "$store.state.isLoading": function () {
      console.log("Watch isLoading", this.$store.state.isLoading);
      this.isBreweryLoading = this.$store.state.isLoading;
    },
  },
  props: {
    heading: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <h2>
    <u>{{ heading }}</u>
  </h2>
  <div v-if="isbreweryLoading">Loading brewery...</div>
  <div v-else-if="singleBreweryInfo.length === 0">No brewery...</div>
  <div
    v-else
    v-for="singlebrewery in singleBreweryInfo"
    :key="singlebrewery.id"
  >
    <ul>
      <li><b>Name:</b> {{ singlebrewery.name }}</li>
      <li><b>City:</b> {{ singlebrewery.city }}</li>
      <li><b>Country:</b> {{ singlebrewery.country }}</li>
      <li><b>Phone number:</b> {{ singlebrewery.phone }}</li>
      <li><b>Postal code:</b> {{ singlebrewery.postal_code }}</li>
      <li><b>Website:</b> {{ singlebrewery.website_url }}</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/main.scss";
h2 {
  text-align: start;
  margin-left: 40px;
}
ul {
  font-weight: 100;
  color: theme-color(info);
  list-style: none;
  text-decoration: none;
  li {
    color: theme-color(secondary);
    background-color: theme-color(primary);
    padding: 4.8rem 0 9.6rem 0;
    max-width: 130rem;
    margin: 0 auto;
    padding: 0 3.2rem;
    display: grid;
    grid-template-columns: 0.5fr 0.5fr;
    gap: 2rem;
    align-items: center;
  }
}
</style>
