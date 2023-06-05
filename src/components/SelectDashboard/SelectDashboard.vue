<script setup lang="ts">
import { ref } from "vue";

const selected = ref<string>("View");

const options = [
  { text: "View", value: "View" },
  { text: "Financial", value: "Financial" },
];
</script>

<template>
  <select v-model="selected" class="bg-gray w-full text-center text-gray-light rounded-lg py-1 mx-2 my-5 md:w-[100px]">
    <option v-for="option in options" :value="option.value">
      {{ option.text }}
    </option>
  </select>
</template>
