<template>
  <q-card flat bordered>
    <q-card-section>
      <div class="text-h6 q-mb-md">
        <slot name="title" />
      </div>

      <slot name="content" />
    </q-card-section>
  </q-card>
</template>
