<script>
import SingleBrewery from "../components/SingleBrewery.vue";

export default {
  name: "BreweryView",
  components: {
    SingleBrewery,
  },
  data() {
    return {
      singleHeading: "Breweries",
    };
  },
};
</script>

<template>
  <SingleBrewery :heading="singleHeading" />
</template>
