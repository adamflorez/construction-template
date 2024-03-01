<template>
  <div>
    <Hero>
      <div class="text-center">
        <span class="text-orange-500 font-medium text-2xl">{{
          route.params.category.split("-").join(" ").toUpperCase()
        }}</span>
        <h1 class="font-black text-4xl mt-2">
          {{ route.params.name.split("-").join(" ").toUpperCase() }}
        </h1>
      </div>
    </Hero>
  </div>
</template>

<script setup>
const route = useRoute();
</script>

<style lang="scss" scoped></style>
