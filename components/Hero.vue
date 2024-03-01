<template>
  <div
    class="w-full bg-black bg-opacity-80 grid place-content-center text-white"
    :style="styles"
  >
    <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  img: {
    type: String,
  },
  h: {
    type: String,
    default: "80vh",
  },
});

const styles = computed(() => {
  const s = {
    background: "rgba(0,0,0,.8)",
  };
  if (props.img) {
    s.background = `linear-gradient(rgba(0,0,0, 0.7),rgba(0,0,0, 0.6)), url("${props.img}") center / cover no-repeat`;
  }
  return { height: props.h, background: s.background };
});
</script>

<style lang="scss" scoped>

</style>
