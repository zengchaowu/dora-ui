<script setup lang="ts">
import { TypePayload } from "../types";
import getDocumentFontSize from "../functions/getDocumentFontSize";
import { ref, onMounted, onUnmounted } from "vue";

const props = defineProps<{ payload?: TypePayload }>();

const cellHeightInPx = ref(0);
const needLayout = ref(false);
const visibleStart = ref(0);
const visibleEnd = ref(0);
const visibleList = ref<any[]>();
const container = ref<any>();

// 监听滑动事件，如果有滑动，则将滑动标识位置为true。
onMounted(() => {
  // 挂载之后计算cell的像素高度，用于计算可见范围
  cellHeightInPx.value =
    getDocumentFontSize() * (props.payload?.cell?.height ?? 0);
  container.value.addEventListener("scroll", onScroll);
  onScroll();
});
onUnmounted(() => {
  container.value.removeEventListener("scroll", onScroll);
});
const onScroll = () => {
  needLayout.value = true;
};

// 定时去检测滑动标识，如果为true就重新layout。
const scrollCheckInterval = ref<any>(null);
onMounted(() => {
  scrollCheckInterval.value = setInterval(() => {
    if (needLayout) {
      layoutViews();
    }
  }, 50);
});
onUnmounted(() => {
  scrollCheckInterval && clearInterval(scrollCheckInterval);
});
const layoutViews = () => {
  const { scrollTop, clientHeight } = container.value || {};
  if (!(clientHeight > 0) || !(cellHeightInPx.value > 0)) {
    return;
  }
  visibleStart.value = Math.max(
    Math.floor(scrollTop / cellHeightInPx.value) - 3,
    0
  );
  visibleEnd.value = Math.min(
    Math.ceil((scrollTop + clientHeight) / cellHeightInPx.value) + 3,
    props.payload?.list?.length ?? 0
  );
  visibleList.value = props.payload?.list?.slice(
    visibleStart.value,
    visibleEnd.value
  );
};
</script>

<template>
  <div ref="container" class="overflow-y-auto">
    <div
      ref="content"
      class="relative"
      :style="{
        height: `${
          (payload?.cell?.height ?? 0) * (payload?.list?.length ?? 0)
        }rem`,
      }"
    >
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
