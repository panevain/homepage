<template>
  <design-sensor-card>
    <template #title>
      <q-icon name="screen_rotation" class="q-mr-sm" />
      Device Orientation
    </template>

    <template #content>
      <div v-if="isSupported" class="q-gutter-sm">
        <div v-if="alpha !== null">
          Alpha (Z-axis): {{ alpha.toFixed(4) }}&deg;
        </div>
        <div v-if="beta !== null">
          Beta (X-axis): {{ beta.toFixed(4) }}&deg;
        </div>
        <div v-if="gamma !== null">
          Gamma (Y-axis): {{ gamma.toFixed(4) }}&deg;
        </div>
        <div>Mode: {{ isAbsolute ? 'Absolute' : 'Relative' }}</div>
      </div>

      <div v-else class="text-grey">Device orientation not supported</div>
    </template>
  </design-sensor-card>
</template>

<script setup lang="ts">
const { alpha, beta, gamma, isAbsolute, isSupported } = useDeviceOrientation();
</script>
