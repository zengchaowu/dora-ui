<script setup>
import { ref, reactive, onMounted, onUnmounted } from "vue";

const props = defineProps(["payload"]);

const contentStyle = reactive({
  height: `${
    (props.payload?.cell?.height ?? 0) * (props.payload?.list?.length ?? 0)
  }rem`,
});

const visibleStart = ref(0);
const visibleEnd = ref(0);
const visibleList = ref([]);

const container = ref(null);

const onScroll = () => {
  const { scrollTop, clientHeight } = container.value;
  visibleStart.value = Math.floor(scrollTop / 160);
  visibleEnd.value = Math.ceil((scrollTop + clientHeight) / 160);
  visibleList.value = props.payload?.list?.slice(
    visibleStart.value,
    visibleEnd.value
  );
};

onMounted(() => {
  container.value.addEventListener("scroll", onScroll);
  onScroll();
});

onUnmounted(() => {
  container.value.removeEventListener("scroll", onScroll);
});
</script>

<template>
  <div ref="container" class="overflow-y-auto">
    <div ref="content" class="relative" :style="contentStyle">
      <div
        v-for="(item, index) in visibleList"
        :style="{
          position: 'absolute',
          top: `${(visibleStart + index) * payload?.cell?.height}rem`,
          width: '100%',
          height: `${payload?.cell?.height}rem`,
        }"
      >
        {{ item.id }}
      </div>
    </div>
  </div>
</template>
