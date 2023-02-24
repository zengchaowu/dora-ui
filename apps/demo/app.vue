<script setup lang="ts">
// import DoraButton from "@dora-ui/button";
import DoraList from "@dora-ui/list";

// const state = reactive({ count: 0 });
// const buttons = reactive([
//   { label: "S", labelClass: ["text-red", "text-2xl"] },
//   { label: "S" },
//   { label: "S" },
// ]);

const listData: any[] = [];

for (let i = 0; i < 1000000; i++) {
  listData.push({
    id: i,
    sort: Math.floor((Math.random() * 1000) % 1000),
  });
}
</script>

<template>
  <div class="flex flex-col gap-5">
    <!-- <DoraButton v-for="button in buttons" :payload="button" /> -->
    <DoraList
      class="h-100"
      :payload="{
        type: 'static',
        cell: {
          height: 1,
        },
        list: listData,
      }"
    />
  </div>
</template>
