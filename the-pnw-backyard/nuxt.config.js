export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title:
      process.env.npm_package_name ||
      "The PNW Backyard - A Website Dedicated to Washington's Hikes.",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "The PNW Backyard Archive",
        name: "The PNW Backyard",
        content:
          process.env.npm_package_description ||
          "Get lost and spend your time in nature's serenity."
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [
    // SCSS file to populate the CSS stylizations of the website.
    "@/assets/css/main.scss"
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    "bootstrap-vue/nuxt",
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    "nuxt-webfontloader"
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},

  // Code to populate font used from Google Fonts, thanks Bryce!
  webfontloader: {
    google: {
      families: ["Shadows Into Light:400,700", "Quicksand:400,700"]
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
