<script setup lang="ts">
import type { ITag } from "./Tag";

defineProps<ITag>();
</script>

<template>
  <div>
    <div
      class="py-1 px-5 border-2 rounded-full"
      :class="{
        'tag-blue': color == 'standard',
        'tag-green': color == 'sucess',
        'tag-red': color == 'dange',
      }"
    >
      <span class="text-sm">{{ title }}</span>
    </div>
  </div>
</template>
