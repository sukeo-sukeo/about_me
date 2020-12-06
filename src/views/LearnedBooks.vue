<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="6" md="4" lg="3"
       v-for="data in requireData()" :key="data.title">
       
        <content-box
         :link=data[10]
         :src=data[9]
         :title=data[0]
         :descript=data[7]
         :auther=data[2]
         :publisher=data[4]
        ></content-box>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ContentBox from '../components/ContentBox.vue';

export default {
  components: { 
    ContentBox 
    },
  name: 'LearnedBooks',
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