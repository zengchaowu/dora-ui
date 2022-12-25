<script setup>
const props = defineProps(['payload'])
</script>

<template>
    <button type="button" :class="payload?.buttonClass">
        <span :class="payload?.labelClass">{{ payload?.label }}</span>
    </button>
</template>