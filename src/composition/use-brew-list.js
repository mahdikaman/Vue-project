import { ref, toRefs, reactive } from "@vue/composition-api";
import useFetch from "./use-fetch";
export default function () {
  let breweries = reactive({ list: [], error: null, fetching: false });
  const val = ref(`''`);

  const submitted = async () => {
    const { response, error, fetchData, fetching } = useFetch(
      `https://api.openbrewerydb.org/breweries/?by_name=${val.value}`,
      {}
    );
    fetchData();
    breweries.list = response;
    breweries.error = error;
    breweries.fetching = fetching;
  };
  return { submitted, ...toRefs(breweries), val };
}
