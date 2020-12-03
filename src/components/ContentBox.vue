<template>
  <v-container class="mt-16">
    <v-row>
      <v-col>
        <v-card>
          <router-link :to=link>{{title}}</router-link>
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