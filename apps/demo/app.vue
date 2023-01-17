<script setup>
// import DoraButton from "@dora-ui/button";
import DoraList from "@dora-ui/list";

// const state = reactive({ count: 0 });
// const buttons = reactive([
//   { label: "S", labelClass: ["text-red", "text-2xl"] },
//   { label: "S" },
//   { label: "S" },
// ]);

const listData = [];

for (let i = 0; i < 10000; i++) {
  listData.push({
    id: i,
    sort: Math.floor((Math.random() * 1000) % 1000),
  });
}

console.log(listData);
</script>

<template>
  <div class="flex flex-col gap-5">
    <!-- <DoraButton v-for="button in buttons" :payload="button" /> -->
    <DoraList :payload="{ type: 1, list: listData }" />
  </div>
</template>
