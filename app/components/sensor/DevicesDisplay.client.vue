<template>
  <design-sensor-card>
    <template #title>
      <q-icon name="devices" class="q-mr-sm" />
      Connected Devices
    </template>

    <template #content>
      <div class="q-gutter-md">
        <!-- Media Devices Section -->
        <div>
          <div class="text-weight-medium q-mb-sm">Media Devices</div>

          <div v-if="!permissionGranted" class="q-mb-md">
            <q-btn
              size="sm"
              color="primary"
              :loading="requestingPermissions"
              @click="requestPermissions">
              Request Device Permissions
            </q-btn>
          </div>

          <div class="q-gutter-sm">
            <div>
              <span class="text-caption text-grey-7"
                >Cameras ({{ videoInputs.length }})</span
              >
              <div v-if="videoInputs.length > 0" class="q-ml-md">
                <div
                  v-for="device in videoInputs"
                  :key="device.deviceId"
                  class="text-body2">
                  {{
                    device.label || `Camera ${device.deviceId.slice(0, 8)}...`
                  }}
                </div>
              </div>
              <div v-else class="q-ml-md text-grey">No cameras found</div>
            </div>

            <div>
              <span class="text-caption text-grey-7"
                >Microphones ({{ audioInputs.length }})</span
              >
              <div v-if="audioInputs.length > 0" class="q-ml-md">
                <div
                  v-for="device in audioInputs"
                  :key="device.deviceId"
                  class="text-body2">
                  {{
                    device.label ||
                    `Microphone ${device.deviceId.slice(0, 8)}...`
                  }}
                </div>
              </div>
              <div v-else class="q-ml-md text-grey">No microphones found</div>
            </div>

            <div>
              <span class="text-caption text-grey-7"
                >Speakers ({{ audioOutputs.length }})</span
              >
              <div v-if="audioOutputs.length > 0" class="q-ml-md">
                <div
                  v-for="device in audioOutputs"
                  :key="device.deviceId"
                  class="text-body2">
                  {{
                    device.label || `Speaker ${device.deviceId.slice(0, 8)}...`
                  }}
                </div>
              </div>
              <div v-else class="q-ml-md text-grey">No speakers found</div>
            </div>
          </div>
        </div>

        <!-- Gamepads Section -->
        <div v-if="gamepadSupported">
          <div class="text-weight-medium q-mb-sm">Controllers</div>
          <div class="q-gutter-sm">
            <span class="text-caption text-grey-7"
              >Gamepads ({{ connectedGamepads.length }})</span
            >
            <div v-if="connectedGamepads.length > 0" class="q-ml-md">
              <div
                v-for="(gamepad, index) in connectedGamepads"
                :key="index"
                class="text-body2">
                {{ gamepad.id }}
                <q-badge
                  v-if="gamepad.connected"
                  color="positive"
                  label="Connected"
                  class="q-ml-sm" />
              </div>
            </div>
            <div v-else class="q-ml-md text-grey">
              No controllers detected
              <div class="text-caption">
                Press any button on a controller to detect it
              </div>
            </div>
          </div>
        </div>

        <div v-else class="text-grey text-caption">
          Gamepad API not supported
        </div>
      </div>
    </template>
  </design-sensor-card>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

// Media devices
const {
  audioInputs,
  audioOutputs,
  ensurePermissions,
  permissionGranted,
  videoInputs,
} = useDevicesList();

const requestingPermissions = ref(false);

async function requestPermissions() {
  requestingPermissions.value = true;
  try {
    await ensurePermissions();
  } finally {
    requestingPermissions.value = false;
  }
}

// Gamepads
const { gamepads, isSupported: gamepadSupported } = useGamepad();

const connectedGamepads = computed(() =>
  gamepads.value.filter(gamepad => gamepad && gamepad.connected),
);
</script>
