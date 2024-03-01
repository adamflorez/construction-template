import type { ServicesMenu } from '#build/components';
<template>
  <div>
    <div
      class="fixed z-50 w-full md:max-w-[99%] left-1/2 -translate-x-1/2 bg-white hidden lg:flex justify-between overflow-hidden"
    >
      <NuxtLink
        @click="servicesMenu = false"
        to="/"
        class="text-xl md:text-3xl font-black mr-8 p-6"
        >BUILDCO</NuxtLink
      >
      <div class="items-stretch hidden lg:flex">
        <NuxtLink
          @click="servicesMenu = false"
          activeClass="text-orange-500"
          to="/"
          class="font-bold px-4 grid place-content-center duration-200"
          >Home</NuxtLink
        >
        <button
          ref="menuContainer"
          @click="toggleMenu"
          class="font-bold px-4 duration-200"
        >
          Services
          <Icon
            name="mdi:chevron-down"
            class="inline w-5 h-5 ml-1 duration-300"
            :class="props.modelValue ? 'rotate-180' : ''"
          />
        </button>
        <NuxtLink
          @click="servicesMenu = false"
          activeClass="text-orange-500"
          to="/portfolio"
          class="font-bold grid place-content-center px-4 duration-200"
          >Portfolio</NuxtLink
        >
        <NuxtLink
          @click="servicesMenu = false"
          activeClass="text-orange-500"
          to="/about"
          class="font-bold px-4 grid place-content-center duration-200"
          >Why Choose Us?</NuxtLink
        >
        <NuxtLink
          @click="servicesMenu = false"
          activeClass="text-orange-500"
          to="/contact"
          class="font-bold grid place-content-center px-4 duration-200"
          >Contact Us</NuxtLink
        >
      </div>
      <div class="hidden lg:flex items-stretch">
        <NuxtLink
          @click="servicesMenu = false"
          to="/contact"
          class="bg-orange-400 hover:bg-orange-500 duration-200 font-bold px-4 text-white flex items-center justify-center"
        >
          Request Quote
          <Icon
            name="material-symbols-light:arrow-outward-rounded"
            class="ml-2"
            size="24"
          />
        </NuxtLink>
      </div>
    </div>
    <div class="flex lg:hidden items-stretch justify-between">
      <NuxtLink
        @click="servicesMenu = false"
        to="/"
        class="text-xl md:text-3xl font-black mr-8 p-6 h-full"
        >BUILDCO</NuxtLink
      >
      <div
        class="flex items-center text-white px-6 bg-orange-400"
        @click="toggleMobileMenu"
      >
        <Icon name="solar:hamburger-menu-outline" size="24" />
      </div>
    </div>
    <div
      class="fixed top-0 left-0 w-64 h-full bg-white shadow-md z-50 transform -translate-x-full transition-transform duration-300 ease-in-out flex flex-col justify-between"
      :class="{ 'translate-x-0': isMenuOpen }"
    >
      <!-- Menu Content -->
      <nav>
        <ul>
          <li><NuxtLink to="/" class="block p-4">Home</NuxtLink></li>
          <li>
            <NuxtLink to="/services" class="block p-4">Services</NuxtLink>
          </li>
          <li><NuxtLink to="/portfolio" class="block p-4">Portfolio</NuxtLink></li>
          <li>
            <NuxtLink to="/about" class="block p-4">Why choose us?</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact" class="block p-4">Contact Us</NuxtLink>
          </li>
        </ul>
      </nav>
      <NuxtLink
        to="/contact"
        class="bg-orange-400 hover:bg-orange-500 duration-200 font-bold px-4 py-4 text-white"
      >
        Request Quote
        <Icon
          name="material-symbols-light:arrow-outward-rounded"
          class="ml-2"
          size="24"
        />
      </NuxtLink>
    </div>

    <!-- Overlay (shown when menu is open) -->
    <div
      class="fixed inset-0 bg-black opacity-50 z-40"
      :class="{ hidden: !isMenuOpen }"
      @click="closeMobileMenu"
    ></div>
  </div>
</template>

<script setup>
const props = defineProps(["modelValue"]);
const servicesMenu = ref(false);
const menuContainer = ref(null);
const emit = defineEmits(["serviceMenu"]);
const isMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMobileMenu = () => {
  isMenuOpen.value = false;
};

const toggleMenu = () => {
  servicesMenu.value = props.modelValue;
  emit("serviceMenu", servicesMenu.value);
};

watch(servicesMenu, (val) => {
  if (!val) emit("serviceMenu", servicesMenu.value);
});
</script>

<style lang="scss" scoped></style>
