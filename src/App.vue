<template>
  <v-app>
    <v-app-bar app flat dark>
      <p>ABOUT ME</p>
      <router-link class="mr-3" to="/">HOME</router-link>
      <router-link class="mr-3" to="/profile">PROFILE</router-link>
      <router-link class="mr-3" to="/product">PRODUCT</router-link>
      <router-link class="mr-3" to="/skill">SKILL</router-link>
      <router-link class="mr-3" to="/learned">LEARNED</router-link>
    </v-app-bar>
    <router-view></router-view>
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
