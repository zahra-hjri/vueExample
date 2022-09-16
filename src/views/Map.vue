<template>
  <div id="mymap" style="width:100%;height:680px;boxZoom=false;doubleClickZoom=false;">
</div>
</template>

<script>
export default {
  name: "Map",
  data() {
    return {
      map: L.map('mymap').setView([35.70163, 51.39211], 12),
    };
  },
  methods: {
    doMap() {

      L.tileLayer(
        "https://developers.parsijoo.ir/web-service/v1/map/?type=tile&x={x}&y={y}&z={z}&apikey=a6e91f54b18148e3952c8914f5626253",
        {
          maxZoom: 21,
        }
      ).addTo(map);
    },
  },
};
</script>


 
