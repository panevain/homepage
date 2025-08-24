<template>
  <design-sensor-card>
    <template #title>
      <q-icon name="battery_charging_full" class="q-mr-sm" />
      Battery Status
    </template>

    <template #content>
      <div v-if="isSupported" class="q-gutter-sm">
        <div>Level: {{ Math.round(level * 100) }}%</div>
        <div>Status: {{ charging ? 'Charging' : 'Discharging' }}</div>
        <div v-if="charging && chargingTime !== Infinity && chargingTime > 0">
          Time to full: {{ formatTime(chargingTime) }}
        </div>
        <div
          v-if="
            !charging && dischargingTime !== Infinity && dischargingTime > 0
          ">
          Time remaining: {{ formatTime(dischargingTime) }}
        </div>
      </div>

      <div v-else class="text-grey">Battery API not supported</div>
    </template>
  </design-sensor-card>
</template>

<script setup lang="ts">
const { charging, chargingTime, dischargingTime, isSupported, level } =
  useBattery();

function formatTime(seconds: number): string {
  if (!isFinite(seconds) || seconds <= 0) {
    return 'Unknown';
  }

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);

  if (hours > 0) {
    return `${hours}h ${minutes}m`;
  }
  return `${minutes}m`;
}
</script>
