<template>
  <design-sensor-card>
    <template #title>
      <q-icon name="location_on" class="q-mr-sm" />
      Current Location
    </template>

    <template #content>
      <div v-if="isSupported" class="q-gutter-sm">
        <div>Lat: {{ coords.latitude.toFixed(4) }}&deg;</div>
        <div>Lng: {{ coords.longitude.toFixed(4) }}&deg;</div>
        <div>Accuracy: &plusmn; {{ Math.round(coords.accuracy) }}m</div>
        <div v-if="coords.altitude !== null">
          Alt: {{ Math.round(coords.altitude) }}m
        </div>
        <div v-if="coords.altitudeAccuracy">
          Alt Accuracy: &plusmn; {{ Math.round(coords.altitudeAccuracy) }}m
        </div>
        <div v-if="coords.speed !== null">
          Speed: {{ (coords.speed * 3.6).toFixed(1) }} km/h
        </div>
        <div v-if="coords.heading !== null">
          Heading: {{ Math.round(coords.heading) }}&deg;
        </div>
      </div>

      <div v-else-if="error" class="text-negative">
        {{ error.message }}
      </div>

      <div v-else class="text-grey">Geolocation not supported</div>
    </template>
  </design-sensor-card>
</template>

<script setup lang="ts">
const { coords, error, isSupported } = useGeolocation();
</script>
