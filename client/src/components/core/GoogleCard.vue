<template>
    <v-card class="pa-5 mx-auto" rounded="xl">
        <v-row>
            <v-col class="aboutme mb-5 pb-1">
                <span class="blue--text">A</span><span class="red--text">b</span><span class="yellow--text">o</span><span class="green--text">u</span><span class="blue--text">t</span> <span> </span><span class="red--text">M</span><span class="yellow--text">e</span>
            </v-col>
        </v-row>
        <v-card elevation="5" class="ma-1" v-if="allrender">
            <v-row >
                <v-col class="px-4 py-0">
                    <v-icon class="magnify">mdi-magnify</v-icon>
                    developer ?
                </v-col>
                <v-col class="px-4 py-0">
                    <v-icon class="float-right">mdi-microphone</v-icon>
                </v-col>
            </v-row>
        </v-card>
        <v-card elevation="5" class="ma-1" v-else-if="imagerender">
            <v-row >
                <v-col class="px-4 py-0">
                    <v-icon class="magnify">mdi-magnify</v-icon>
                    Get in touch!
                </v-col>
                <v-col class="px-4 py-0">
                    <v-icon class="float-right">mdi-microphone</v-icon>
                </v-col>
            </v-row>
        </v-card>
        <v-card elevation="5" class="ma-1" v-else>
            <v-row >
                <v-col class="px-4 py-0">
                    <v-icon class="magnify">mdi-magnify</v-icon>
                    Find me in !
                </v-col>
                <v-col class="px-4 py-0">
                    <v-icon class="float-right">mdi-microphone</v-icon>
                </v-col>
            </v-row>
        </v-card>
        <div class="windowed">
            <v-row justify="center">
                <v-col class="text-center pt-5">
                    <v-btn text @click="getAll"><h5 style="color:grey;">All</h5></v-btn>
                </v-col >
                <v-col class="text-center pt-5">
                    <v-btn text @click="getImage"><h5 style="color:grey;">Images</h5></v-btn>
                </v-col >
                <v-col class="text-center pt-5">
                    <v-btn text @click="getMap"><h5 style="color:grey;">Maps</h5></v-btn>
                </v-col>
            </v-row>
        </div>
        <v-row v-if="allrender">
            <v-col>
                <div class="main">
                    <v-card-text>
                        <div class="grey--text">Word of the Day</div>
                        <p class="text-h4 text--primary mb-2">
                            ak·ar·s·h·an
                        </p>
                        <p class="grey--text">noun</p>
                        <div class="text--primary">
                            hii, i'm akarshan.<br>
                            "<span class="text-decoration-underline">he/him</span>, I love to code."
                        </div>
                    </v-card-text>
                </div>
            </v-col>
            <v-col class="pt-1 pl-12 ml-5">
                <v-img :width="150" class=" pa-0 ma-0 mr-0" src="../../assets/1.gif"></v-img>
            </v-col>
        </v-row>

        <v-row v-else-if="imagerender">
            <v-col>
                <div class="main">
                    <v-card-text>
                        <div class="grey--text">Email</div>
                        <p class="text-h5 text--primary mb-2">
                            akarshan@ualberta.ca
                        </p>
                        <p class="grey--text">Phone</p>
                        <div class="text--primary">
                            (587)-938-3679
                        </div>
                    </v-card-text>
                </div>
            </v-col>
        </v-row>

        <v-row v-else>
            <v-col>
                <div class="main">
                    <GoogleMapsVue/>
                </div>
            </v-col>
        </v-row>
    </v-card>
</template>
<script>
    import GoogleMapsVue from './GoogleMaps.vue';
    export default {
        data() {
            return {
            allrender: true,
            imagerender: false,
            maprender: false,
            }
        },
        components: {
            GoogleMapsVue
        },
        methods: {
            getAll() {
                this.allrender = true;
                this.imagerender = false;
                this.maprender = false;
            },
            getImage() {
                this.allrender = false;
                this.imagerender = true;
                this.maprender = false;
            },
            getMap() {
                this.allrender = false;
                this.imagerender = false;
                this.maprender = true;
            },
            
        },
    }
</script>
<style scoped>
/* .magnify {
    transform: rotate(90deg);
} */
.magnify {
    padding-right: 10px;
}
.windowed {
    width: 70vw;
    margin: auto;
}
.aboutme {
    font-weight: 600;
    font-size: 3.5rem;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.maincard {
    width: 80%
}
</style>