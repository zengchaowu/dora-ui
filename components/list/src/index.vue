<script setup lang="ts">
import Static from "./components/Static.vue";
import { TypePayload } from "./types";

defineProps<{ payload?: TypePayload }>();
</script>

<template>
  <Static v-if="payload?.type === 'static'" :payload="payload" />
</template>
