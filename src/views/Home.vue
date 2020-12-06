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
      profile: {
        link: '/profile',
        title: 'プロフィール',
        descript: 'わたすはスケオです',
        src: 'https://cdn.vuetifyjs.com/images/cards/cooking.png'
         },
      contentItems: [
        {
          link: '/skill',
          title: '学んだ技術',
          src: 'https://cdn.vuetifyjs.com/images/cards/cooking.png'
        },
        {
          link: '/learnedbooks',
          title: '学習した書籍',
          src: 'https://cdn.vuetifyjs.com/images/cards/cooking.png'
        },
        {
          link: '/learnedmovies',
          title: '学習した動画',
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
