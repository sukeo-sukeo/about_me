<template>
  <v-app>
    <v-app-bar app flat dark>
      <p>ABOUT ME</p>
      <router-link class="mr-3" to="/">HOME</router-link>
      <router-link class="mr-3" to="/product">PRODUCT</router-link>
      <router-link class="mr-3" to="/skill">SKILL</router-link>
      <router-link class="mr-3" to="/learnedbooks">Books</router-link>
      <router-link class="mr-3" to="/learnedmovies">Movies</router-link>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
  }),
  methods: {
  }
};
</script>
