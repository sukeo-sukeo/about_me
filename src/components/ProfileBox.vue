<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>
            <h1 style="line-height: initial;">
              Welcome to <br class="sp_br"><span style="font-size:50px;">YUSUKE's</span> portfolio!
            </h1>
          </v-card-title>
          <v-card-text>
            <v-row justify="space-between">
              <v-col cols="3">
                <v-avatar size="150">
                  <img src="../assets/profile/img/face.jpg" alt="yusuke">
                </v-avatar>
              </v-col>
              <v-col cols="3">
                <v-list>
                  <v-list-item>Lorem, ipsum dolor.</v-list-item>
                  <v-list-item>Lorem, ipsum dolor.</v-list-item>
                  <v-list-item>Lorem, ipsum dolor.</v-list-item>
                </v-list>
              </v-col>
              <v-col cols="5">
                <content-box
                 link="/product"
                 title="制作物"
                 src='https://cdn.vuetifyjs.com/images/cards/cooking.png'
                 ></content-box>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ContentBox from './ContentBox.vue'

export default {
  name: 'ProfileBox',
  data: function() {
    return {

    }
  },
  components: {
    ContentBox
  }
}
</script>

<style lang="scss" scoped>
 .sp_br {
    @media screen and (min-width: 800px) {
      display: none;
    }
  }

  img {
    object-fit: none;
    object-position: 35% 36%;
  }
</style>