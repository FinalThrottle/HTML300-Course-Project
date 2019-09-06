<template>
  <article class="report">
    <!-- Example coding derived from the 'mountainproject.com' website -->
    <h2 class="climb__title">{{route.name}}</h2>
    <h3 class="climb__type">Type {{route.type}}</h3>
    <p class="climb_rating">Rating {{route.rating}}</p>
    <p class="climb_stars">Stars {{route.stars}}</p>
    <img :src="route.imgMedium" :alt="route.name" class="img">
    <b-button @click="toggleShow" href="#" variant="primary">Click for Info</b-button>
  </article>
</template>

<!-- Used for the "toggle" button that's located within the trip reports. -->
<script>
import { toggle } from "./mixins/toggle.js";

export default {
  props: {
    route: Object
  },
  mixins: [toggle],
  data() {
    return {
      isShowing: false
    };
  }
};
</script>

<style lang="scss">
.report {
  border: 1.5px solid #34adf6;
  margin: 2rem;
  padding: 2rem;
}
</style>