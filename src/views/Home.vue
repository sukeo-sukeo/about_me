<template>
 <div>
   <Content link='/profile' title="プロフィール"></Content>
   <Content link='/product' title="制作物"></Content>
   <Content link='/skill' title="技術"></Content>
   <Content link='/learned' title="学習履歴"></Content>
 </div>
</template>

<script>
import Content from '@/components/ContentBox.vue'

export default {
  name: 'Home',
  data() {
    return {
    }
  },
  components: {
    Content,
  }
}
</script>
