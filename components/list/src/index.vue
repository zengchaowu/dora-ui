<script setup lang="ts">
import TypeOne from "./components/TypeOne.vue";
import TypeTwo from "./components/TypeTwo.vue";
defineProps(["payload"]);
</script>

<template>
  <TypeOne v-if="payload?.type === 1" :payload="payload" />
  <TypeTwo v-else-if="payload?.type === 2" :payload="payload" />
</template>
