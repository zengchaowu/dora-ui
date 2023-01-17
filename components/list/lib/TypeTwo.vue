<script setup>
const props = defineProps(["payload"]);
</script>

<template>
  <div class="flex flex-col">
    <div v-for="item in payload.list">
      {{ item }}
    </div>
  </div>
</template>
