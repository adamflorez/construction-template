<template>
  <client-only>
    <div ref="menuContainer">
      <Navbar
        v-model="servicesMenu"
        @serviceMenu="servicesMenu = !servicesMenu"
      />
      <ServicesMenu position='fixed' v-if="servicesMenu" @serviceClicked="closeMenu" />
    </div>
  </client-only>
</template>

<script setup>
const servicesMenu = ref(false);
const menuContainer = ref(null);

const handleClickOutside = (event) => {
  if (!menuContainer.value.contains(event.target)) {
    servicesMenu.value = false;
  }
};

const closeMenu = () => {
  servicesMenu.value = false;
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<style lang="scss" scoped></style>
