<template>
  <v-window-item class="py-12 ma-auto px-3">
    <TwitterCard class="mb-12"/>    
    <GoogleCard/>
  </v-window-item>
</template>
<script>
import GoogleCard from './core/GoogleCard.vue'
import TwitterCard from './core/TwitterCard.vue'
export default ({
  components: {
    GoogleCard,
    TwitterCard
  },
  data() {
    return {}
  },
})
</script>

<style scoped>
</style>