<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12">
        <content-box></content-box>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" sm="6" md="4" lg="3"
       v-for="item in productItems.madeItemData" :key="item.id">
        <content-box
        :link=item.link
        :title=item.title 
        :descript=item.description
        :src="require(`../assets/product/img/${item.path}`)"
        >
        </content-box>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ContentBox from '../components/ContentBox.vue'

export default {
  name: 'Product',
  components: {
    ContentBox
  },
  data: function() {
    return {
      productItems: require('../assets/product/productData.js'),
      }
    },
  methods: {
    log: function() {console.log(this.productItems.madeItemData)},
  },
  created: function() {
    console.log(this.productItems);
  }
}

</script>