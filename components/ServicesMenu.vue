<template>
  <Transition>
    <div
      class="bg-white z-50 shadow-md max-w-[1200px] w-[90%] mt-4 rounded left-1/2 -translate-x-1/2 top-[5.5rem] flex flex-wrap p-4 gap-3"
      :style="{ position: position }"
    >
      <!-- This is the menu container -->
      <div
        v-for="(categoryDetails, categoryName) in services"
        :key="categoryName"
      >
        <div class="h-full w-[283px]">
          <h2 class="text-lg text-left font-bold mb-2">
            {{ categoryDetails.category }}
          </h2>
          <ul v-for="service in categoryDetails.services">
            <li
              class="text-left font-medium flex items-start text-md py-2 rounded hover:bg-slate-200"
            >
              <Icon name="ph:dot-outline-thin" class="mt-[3px]" />
              <NuxtLink
                @click="emit('serviceClicked')"
                :to="`/services/${categoryDetails.category
                  .split(' ')
                  .join('-')
                  .toLowerCase()}/${service.name
                  .split(' ')
                  .join('-')
                  .toLowerCase()}`"
              >
                {{ service.name }}
              </NuxtLink>
            </li>
          </ul>

          <br />
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import services from "~/assets/dummyData/services";
const emit = defineEmits(["serviceClicked"]);
const props = defineProps({
  position: { type: String, required: true },
});
</script>

<style></style>
