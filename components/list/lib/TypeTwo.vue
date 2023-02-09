<script setup lang="ts">
interface Props {
  payload?: {
    list?: Array<any>;
  };
}
const props = defineProps<Props>();
</script>

<template>
  <div class="flex flex-col">
    <div v-for="item in payload?.list">
      {{ item }}
    </div>
  </div>
</template>
