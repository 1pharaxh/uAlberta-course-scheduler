<template>
    <v-app-bar app color="white" flat>
      <v-tabs v-model="activeTab" centered class="ml-n9" color="grey darken-1">
        <!-- Send a special event name and value pair to the parent to process what tab was clicked -->
        <v-tab v-for="tab in tabs" :key="tab.id"  @click="$emit('selected', tab.id)">
          {{ tab.name }}
        </v-tab>
      </v-tabs>
    </v-app-bar>
</template>
<script>
  export default {
    data() {
        const active = 0
        return {
            activeTab: active,
            tabs: [
                    {id: 0, name: 'Your Schedule 🏫'},  
                    {id: 1, name: 'Contact Me 📞'},
                ],
            }
        }
    }
</script>