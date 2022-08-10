<template>
  <div class="map">
    <gmap-map
        ref="mapRef"
        :zoom="10"    
        :center="center"
        style="width:100%;  height: 400px;"
        :options="{
            zoomControl: false,
            mapTypeControl: false,
            scaleControl: false,
            streetViewControl: false,
            rotateControl: false,
            fullscreenControl: false,
            disableDefaultUI: false
        }"
      >
      <gmap-marker
        :position="center"
        :clickable="true"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>
 
<script>
export default {
  name: "AddGoogleMap",
  data() {
    return {
      center: { 
        lat: 53.543426,
        lng: -113.495859,
      },
    };
  },
};
</script>
<style scoped>
.map {
  border-radius: 30px;
}
</style>