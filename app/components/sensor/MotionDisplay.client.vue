<template>
  <design-sensor-card>
    <template #title>
      <q-icon name="vibration" class="q-mr-sm" />
      Device Motion
    </template>

    <template #content>
      <div v-if="isSupported" class="q-gutter-sm">
        <template v-if="acceleration">
          <div class="text-weight-medium">Acceleration (m/s²)</div>
          <div v-if="acceleration.x !== null">
            X: {{ acceleration.x.toFixed(2) }}
          </div>
          <div v-if="acceleration.y !== null">
            Y: {{ acceleration.y.toFixed(2) }}
          </div>
          <div v-if="acceleration.z !== null">
            Z: {{ acceleration.z.toFixed(2) }}
          </div>
        </template>

        <template v-if="rotationRate">
          <div class="text-weight-medium q-pt-sm">Rotation Rate (°/s)</div>
          <div v-if="rotationRate.alpha !== null">
            Alpha (Z-axis): {{ rotationRate.alpha.toFixed(2) }}
          </div>
          <div v-if="rotationRate.beta !== null">
            Beta (X-axis): {{ rotationRate.beta.toFixed(2) }}
          </div>
          <div v-if="rotationRate.gamma !== null">
            Gamma (Y-axis): {{ rotationRate.gamma.toFixed(2) }}
          </div>
        </template>

        <div v-if="interval" class="q-pt-sm">Update: {{ interval }}ms</div>
      </div>

      <div v-else class="text-grey">Device motion not supported</div>
    </template>
  </design-sensor-card>
</template>

<script setup lang="ts">
const { acceleration, interval, isSupported, rotationRate } = useDeviceMotion();
</script>
