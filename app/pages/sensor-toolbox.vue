<template>
  <q-page class="q-pa-lg">
    <p class="text-h2">Sensor Toolbox</p>

    <div class="q-pa-md">
      <div class="row q-col-gutter-md">
        <div class="col-12 col-md-6">
          <sensor-location-display />
        </div>
        <div class="col-12 col-md-6">
          <sensor-battery-display />
        </div>
        <div class="col-12 col-md-6">
          <sensor-orientation-display />
        </div>
        <div class="col-12 col-md-6">
          <sensor-motion-display />
        </div>
        <div class="col-12 col-md-6">
          <sensor-devices-display />
        </div>
      </div>
    </div>
  </q-page>
</template>
