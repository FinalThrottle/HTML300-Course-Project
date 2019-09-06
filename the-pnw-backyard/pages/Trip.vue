<template>
  <div class="home">
    <p class="meh" v-if="display">Updated Trip Reports</p>
    <p class="meh" v-else>No Recent Trip Reports Submitted Lately</p>

    <main class="main">
      <div class="row">
        <!--The tooltip will allow for a message to pop up with a message.-->
        <div class="col-12">
          <a href="#" data-toggle="tooltip" title="Submit a Trip Report">{{ last }}</a>
          <section class="container" v-if="routes">
            <tripreports v-for="route of routes" :key="route.id" :route="route"/>
          </section>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
// Incorporates the AXIOS package manager to fetch from the Mountain Project's Trip Report API.
import axios from "axios";
//This is necessary in order to gather data from the API, dynamically.
import tripreports from "@/components/Card.vue";
export default {
  name: "home",
  components: {
    tripreports
  },
  data() {
    return {
      last: "What's the Latest?",
      routes: null,
      display: true,
      loading: true,
      errored: false
    };
  },
  mounted() {
    // Although the API shows... it doesn't seem to do much...
    axios
      .get(
        "https://www.mountainproject.com/data/get-routes?routeIds=105748391,105750454,105749956&key=200584469-0f4b176006dfd6edda15ca2e3e0cedaf"
      )
      .then(response => (this.routes = response.data.routes))
      .catch(error => {
        console.error(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  }
};
</script>