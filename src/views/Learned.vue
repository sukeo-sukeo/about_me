<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="10" sm="4" md="3"
       v-for="data in requireData()" :key="data.title">
       
        <books-box
         :link=data[10]
         :src=data[9]
         :title=data[0]
         :descript=data[7]
         :auther=data[2]
         :publisher=data[4]
        ></books-box>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BooksBox from '../components/BooksBox.vue';

export default {
  name: 'Learned',
  components: { 
    BooksBox
    },
  data: () => {
    return {
    }
  },
  methods: {
    requireData: function() {
      return require('../assets/books/books.csv')
    }
  },
  created: function() {
    console.log(this.requireData());
  }
}
</script>
