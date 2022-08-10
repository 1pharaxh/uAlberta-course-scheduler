<template>
    <v-card
      class="mx-auto"
      color="#26c6da"
      dark
      width="auto"
      rounded="xl"
      min-height="10vh"
      elevation="5"
    >
      <v-card-title>
        <v-icon large left>
          mdi-twitter
        </v-icon>
        <span class="text-h6 font-weight-light">Twitter</span>
      </v-card-title>
      <v-card-text class="text-h5 font-weight-bold">
        "Have any questions? I'd love to hear from you."
      </v-card-text>
      <v-card-actions>
        <v-list-item class="grow">
          <v-list-item-avatar color="grey darken-3">
            <v-img class="elevation-6" alt=""
              src='https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=Hoodie&clotheColor=Black&eyeType=Happy&eyebrowType=Default&mouthType=Smile&skinColor=Brown'          ></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Akarshan Mishra</v-list-item-title>
          </v-list-item-content>

          <v-row align="center" justify="end">
            <v-icon class="mr-1">
              mdi-heart
            </v-icon>
            <span class="subheading mr-2">256</span>
            <span class="mr-1">·</span>
            <v-icon class="mr-1">
              mdi-share-variant
            </v-icon>
            <span class="subheading">128</span>
          </v-row>
        </v-list-item>
      </v-card-actions>
    </v-card>
</template>
<script>

export default({
    data() {
        return {}
    },
})
</script>
