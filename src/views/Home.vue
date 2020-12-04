<template>
 <v-container>
   <v-row justify="center">
     <v-col cols="12">
       <Content link='/profile' title="プロフィール"></Content>
     </v-col>
   </v-row>
   <v-row justify="center">
     <v-col :cols=col :sm=sm :md=md :lg=lg>
       <Content link='/product' title="制作物"></Content>
     </v-col>
     <v-col :cols=col :sm=sm :md=md :lg=lg>
       <Content link='/skill' title="学んだ技術"></Content>
     </v-col>
     <v-col :cols=col :sm=sm :md=md :lg=lg>
       <Content link='/learnedbooks' title="学習した書籍"></Content>
     </v-col>
     <v-col :cols=col :sm=sm :md=md :lg=lg>
       <Content link='/learnedmovies' title="学習した動画"></Content>
     </v-col>
   </v-row>
 </v-container>
</template>

<script>
import Content from '@/components/ContentBox.vue'

export default {
  name: 'Home',
  data() {
    return {
      col: 10,
      sm: 5,
      md: 4,
      lg: 3
    }
  },
  components: {
    Content,
  }
}
</script>
