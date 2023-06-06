<script setup lang="ts">
import type { ITag } from "./Tag";

defineProps<ITag>();
</script>

<template>
  <div>
    <div
      class="px-8 py-2"
      :class="{
        tagblue: color == 'blue',
        taggreen: color == 'green',
        tagred: color == 'red',
      }"
    >
      {{ title }}
    </div>
  </div>
</template>
