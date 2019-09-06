<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col-xs-6 hikes">
          <!-- Yes, I decided to use the Pokemon ipsum here -- don't judge me. -->
          <h3>List of Hikes - Ordered from Most Recent</h3>
          <p>
            We're blasting off again Kricketot Gary Mamoswine Silcoon Calcium Kadabra. Hoenn Breloom Mothim Silcoon Shelmet Vibrava Gabite. Sed do eiusmod tempor incididunt Togetic Leavanny Wartortle Mothim Ledian Badge.
            Gotta catch 'em all Seadra but nothing happened Poliwrath the power that's inside Keldeo a wild Pokemon appeared. Mewtwo Strikes Back Shelmet sunt in culpa qui officia Miltank Pawniard duis aute irure dolor in reprehenderit Ralts.
          </p>
        </div>

        <div class=".col-xs-6 .col-md-3 hikes">
          <h3>Arashiyama Bamboo Forest</h3>
          <img src="../static/arashiyama.jpeg" class="gallery">
        </div>

        <div class=".col-xs-6 .col-md-2 hikes">
          <h3>Banaue Rice Terraces</h3>
          <img src="../static/banaue.jpeg" class="gallery">
        </div>

        <div class=".col-xs-6 .col-md-2 hikes">
          <h3>Rattlesnake Ledge</h3>
          <img src="../static/valhalla.jpeg" class="gallery">
        </div>

        <div class=".col-xs-6 .col-md-2 hikes">
          <h3>Snow Lake</h3>
          <img src="../static/bleak.jpeg" class="gallery">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "The PNW Backyard Archive",
          name: "The PNW Backyard",
          content: "Get lost and spend your life in beauty."
        }
      ]
    };
  }
};
</script>

<style lang="scss">
</style>
