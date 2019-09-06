<style lang="scss">
</style>

<template>
  <div id="app">
    <div class="container">
      <div class="header">
        <h1>The PNW Backyard</h1>
      </div>
    </div>

    <div class="container">
      <!-- This section is to display the navigation bar on the main website. -->
      <nav class="body">
        <h4 class="list-inline-item">
          <n-link class="nav-link" to="/">Home</n-link>
        </h4>
        <h4 class="list-inline-item">
          <n-link class="nav-link" to="/Hikes">Hikes</n-link>
        </h4>
        <h4 class="list-inline-item">
          <n-link class="nav-link" to="/Trip">Trip Reports</n-link>
        </h4>
      </nav>
    </div>
    <nuxt/>
  </div>
</template>
