<script setup lang="ts">
import type { IButton } from "./Button";

defineProps<IButton>();
defineEmits<{ (e: "onClick"): void }>();
</script>

<template>
  <div>
    <button
      class=" px-8 py-2 rounded gap-2 font-medium text-white"
      :class="{
        standard: color == 'standard',
        positive: color == 'sucess',
        dange: color == 'dange',
      }"
      @click="$emit('onClick')"
    >
      {{ title }}
    </button>
  </div>
</template>
