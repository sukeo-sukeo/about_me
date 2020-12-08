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
              <v-col cols="8" sm="9">
                <v-card-text>
                  本業の傍らプログラムやWeb関連の知識を独学中。主に書籍、Udemy、paizaでインプット。webサービスやアプリを作りながら学んでいます。<br>
                  好きな言語はJavaScript。<br>
                  没頭するタイプで、プログラムでものをつくっている時がとにかく楽しくて大好き！<br>
                  現在はサーバーサイドにPHPを猛勉強中です。
                </v-card-text>
              </v-col>
               <v-col cols="12">
                <v-card-text>
                  Lorem ipsum dolor sit amet.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, numquam!
                </v-card-text>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'ProfileBox',
  data: function() {
    return {

    }
  },
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