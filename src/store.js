import { createStore } from "vuex";
import axios from "axios";

const state = {
  breweries: [],
  brewery: [],
  isLoading: false,
};

const mutations = {
  setbreweries(state, breweries) {
    state.breweries = breweries;
  },
  setbrewery(state, brewery) {
    state.brewery = brewery;
  },
  isLoading(state, isLoading) {
    state.isLoading = isLoading;
  },
};

const actions = {
  async getbreweries(context) {
    context.commit("isLoading", true);

    const response = await axios.get(
      "https://api.openbrewerydb.org/breweries/?"
    );
    context.commit("setbreweries", response.data);

    context.commit("isLoading", false);
  },
  async singlebrewery(context, id) {
    context.commit("isLoading", true);

    const response = await axios.get(
      "https://api.openbrewerydb.org/breweries/?" + id
    );
    context.commit("setbrewery", response.data);

    context.commit("isLoading", false);
  },
};

export default createStore({ mutations, actions, state, strict: true });
