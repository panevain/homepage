<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title> panevain.dev </q-toolbar-title>
        <q-space />
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Toggle Menu"
          @click="toggleDrawer" />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      overlay
      behavior="default"
      :width="280">
      <q-scroll-area class="fit">
        <q-list>
          <q-item-label header> Navigation </q-item-label>

          <q-item v-ripple clickable to="/">
            <q-item-section avatar>
              <q-icon name="home" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Home</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <q-page>
        <slot />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
const leftDrawerOpen = useState('layoutDrawer', () => false);

function toggleDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
