<template>
  <v-container>

    <v-row v-for="(item, i) in Object.keys(skillItems.devicons)" :key="item.i">
      <v-col>
      {{ item }}
      </v-col>
      <v-container>
        <v-row justify="start">
          <v-col cols="4" sm="3"
          v-for="item in skillItems.devicons[Object.keys(skillItems.devicons)[i]]" :key="item.id">
            <i :class=item.path style="font-size: 8rem;"></i>
          </v-col>
        </v-row>
      </v-container>
    </v-row>
    
  </v-container>
</template>

<script>
export default {
  name: 'Skill',
  data: function() {
    return {
      skillItems: require('../assets/skill/skillData.js')
    }
  }
}
</script>