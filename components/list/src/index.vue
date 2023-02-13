<script setup lang="ts">
import Static from "./components/Static.vue";
import Dynamic from "./components/Dynamic.vue";

defineProps<{
  payload: {
    type: "static" | "dynamic";
  };
}>();
</script>

<template>
  <Static v-if="payload.type === 'static'" :payload="payload" />
  <Dynamic v-else-if="payload.type === 'dynamic'" :payload="payload" />
</template>
