<script setup lang="ts">
import { ICardInfo } from './CardInfo';

defineProps<ICardInfo>();
</script>

<template>
  <div class="border-2 bg-gray-card w-[200px] h-[80px] p-4 rounded-xl">
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
