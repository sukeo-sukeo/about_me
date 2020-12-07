<template>
 <v-container>

   <v-row justify="center">
     <v-col cols="12">
       <profile-box></profile-box>
     </v-col>
   </v-row>

   <v-row justify="center">
     <v-col cols='10' sm='5' md='4' lg='3'
      v-for="item in contentItems" :key="item.link">
       <content-box :link=item.link :title=item.title :src=item.src></content-box>
     </v-col>
   </v-row>

 </v-container>
</template>

<script>
import ContentBox from '../components/ContentBox.vue'
import ProfileBox from '../components/ProfileBox.vue'

export default {
  name: 'Home',
  data() {
    return {
      contentItems: [
        {
          link: "/product",
          title: '制作物',
          src: 'https://cdn.vuetifyjs.com/images/cards/cooking.png'
        },
        {
          link: '/skill',
          title: '学んだ技術',
          src: 'https://cdn.vuetifyjs.com/images/cards/cooking.png'
        },
        {
          link: '/learned',
          title: '学習に使用したもの',
          src: 'https://cdn.vuetifyjs.com/images/cards/cooking.png'
        },
        {
          link: '/contact',
          title: 'コンタクト/SNS',
          src: 'https://cdn.vuetifyjs.com/images/cards/cooking.png'
        }
      ]
    }
  },
  components: {
    ContentBox,
    ProfileBox
  }
}
</script>
