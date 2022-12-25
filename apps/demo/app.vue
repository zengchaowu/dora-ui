<script setup>
import DoraButton from '@dora-ui/button'

const state = reactive({ count: 0 })
const buttons = reactive([{ label: 'S', labelClass: ['text-red', 'text-2xl'] }, {label: 'S'}, {label: 'S'}])

</script>


<template>
  <div class="flex flex-col gap-5">
    <DoraButton v-for="button in buttons" :payload="button" />
  </div>
</template>
