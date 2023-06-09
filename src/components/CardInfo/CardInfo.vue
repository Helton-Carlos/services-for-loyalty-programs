<script setup lang="ts">
import { ICardInfo } from './CardInfo';

defineProps<ICardInfo>();
</script>

<template>
  <div class="w-full h-[80px] border-2 bg-gray-card p-4 rounded-xl md:w-[200px]">
    <div class="flex justify-between items-center">
      <div>
        <p class="text-white">{{ values }}</p>
        <p>{{ title }}</p>
      </div>

      <icons-balance v-if="icons === 'Balance'" />
      <icons-pending v-if="icons === 'Pending'" />
      <icons-redeemed v-if="icons === 'Redeemed'" />
      <icons-expired v-if="icons === 'Expired'" />
    </div>
  </div>
</template>
