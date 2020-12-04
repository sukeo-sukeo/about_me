<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <router-link :to=link>
            <v-img 
            height="250"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            ></v-img>
          </router-link>
          <v-card-title>
            {{ title }}
          </v-card-title>
          <v-card-text>
            <div class="grey--text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, debitis.
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  neme: 'ContentBox',
  props: ['link', 'title']
}
</script>