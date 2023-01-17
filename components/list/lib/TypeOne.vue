<script setup>
const props = defineProps(["payload"]);

const visibleList = [];
</script>

<template>
  <div ref="container" class="overflow-y-auto">
    <div ref="content" class="flex flex-col">
      <div
        v-for="item in payload.list"
        :style="{ height: `${payload?.cell?.height ?? 100}px` }"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>
