<template>
  <v-app id="inspire">
    <HeaderComponentVue @selected="selected" />
    <v-main class="grey lighten-3">
        <v-window v-model="windowId"> 
            <SchedulePage/>
            <ContactPage/>
        </v-window>
    </v-main>
    <FooterComponentVue/>

  </v-app>
</template>

<script>
import HeaderComponentVue from './components/HeaderComponent.vue'
import SchedulePage from './components/SchedulePage.vue'
import ContactPage from './components/ContactPage.vue'
import FooterComponentVue from './components/FooterComponent.vue'
  export default {
    data: () => {
      return {
        windowId: 0,
      }
    },
    // This function is reponsible for changing the active tab
    methods: {
      selected(id) {
        this.windowId = id
      }
    },
    components: {
      HeaderComponentVue,
      SchedulePage,
      ContactPage,
      FooterComponentVue,
    }
}
</script>
<style lang="sass" scoped>
</style>