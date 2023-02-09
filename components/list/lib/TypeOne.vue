<script setup lang="ts">
import rem2px from "../functions/rem2px";
import { ref, reactive, onMounted, onUnmounted } from "vue";

interface Props {
  payload?: {
    cell?: {
      height?: number;
    };
    list?: any[];
  };
}

const props = defineProps<Props>();

const contentStyle = reactive({
  height: `${
    (props.payload?.cell?.height ?? 0) * (props.payload?.list?.length ?? 0)
  }rem`,
});

const cellHeightInPx = rem2px(props.payload?.cell?.height ?? 0);

const visibleStart = ref(0);
const visibleEnd = ref(0);
const visibleList = ref<any[]>();

const container = ref<any>(null);

const onScroll = () => {
  const { scrollTop, clientHeight } = container.value;
  visibleStart.value = Math.max(Math.floor(scrollTop / cellHeightInPx) - 3, 0);
  visibleEnd.value = Math.min(
    Math.ceil((scrollTop + clientHeight) / cellHeightInPx) + 3,
    props.payload?.list?.length ?? 0
  );
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
          top: `${(visibleStart + index) * (payload?.cell?.height ?? 0)}rem`,
          width: '100%',
          height: `${payload?.cell?.height}rem`,
        }"
      >
        {{ item.id }}
      </div>
    </div>
  </div>
</template>
