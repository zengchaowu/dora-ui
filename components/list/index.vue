<script setup>
import TypeOne from "./lib/TypeOne";
import TypeTwo from "./lib/TypeTwo";

const props = defineProps(["payload"]);
</script>

<template>
  <TypeOne v-if="payload?.type === 1" />
  <TypeTwo v-else-if="payload?.type === 2" />
</template>
