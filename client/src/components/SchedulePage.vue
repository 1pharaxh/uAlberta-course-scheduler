<template>
    <v-window-item class="py-12 ma-auto px-3">
            <v-container fluid >
                <InputComponent class="mb-12"></InputComponent>
          </v-container>
    </v-window-item>
</template>
<script>
    import InputComponent from './core/InputVue.vue'
    export default {
        components: {
            InputComponent
        },
        data() {
            return {}
        },
    }
</script>