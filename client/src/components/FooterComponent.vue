<template>
    <v-footer dark padless>
        <v-card class="flex" flat tile>
            <v-card-title class="teal justify-center" >
                <v-btn v-for="(icon, index) in icons" :key="index" class="mx-4" dark icon :href="icon.link">
                <v-icon size="24px">
                    {{ icon.icn }}
                </v-icon>
                </v-btn>
            </v-card-title>
            <v-card-text class="py-2 white--text text-center">
            {{ new Date().getFullYear() }} — <strong>Akarshan Mishra</strong>
            </v-card-text>
        </v-card>
    </v-footer>
</template>
<script>

export default {
    data() {
        return {
            icons: [
                {icn: 'mdi-github', link: 'https://github.com/1pharaxh'},
                {icn: 'mdi-at', link: 'mailto:akarshan@ualberta.ca'},
                {icn: 'mdi-linkedin', link: 'https://www.linkedin.com/in/akarshan-mishra-75577122a/'},
            ],
        }
    },
}
</script>
