<template>
  <div class='mb-1 px-4 lg:mb-0 lg:px-0 w-full py-2'>
    <div class="relative">
      <span
        class="outlined text-9xl font-black text-outline text-transparent"
        >{{ props.value.number }}</span
      >
      <h2 class="text-xl ml-4 font-medium bottom-1 relative z-20 -mt-5 md:-mt-7 lg:-mt-9">
        {{ props.value.title }}
      </h2>
    </div>
    <p class="mb-8 pr-8 ml-4">{{ props.value.shortDesc }}</p>
    <NuxtLink
      to="/about"
      class="duration-200 hover:text-orange-500 font-medium py-4 px-4"
      >Read more
      <Icon
        name="material-symbols-light:arrow-outward-rounded"
        class="ml-2"
        size="24"
      />
    </NuxtLink>
  </div>
</template>

<script setup>
const props = defineProps({
  value: {
    type: Object,
    default: () => {
      return {
        number: "01",
        title: "Our Mission",
        shortDesc:
          "Delivering superior home remodeling with quality, precision, and a personal touch for every client.",
      };
    },
  },
});
</script>

<style lang="scss" scoped></style>
