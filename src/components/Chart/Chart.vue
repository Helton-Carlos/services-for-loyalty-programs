<script setup lang="ts">
import { chatData, chatOptions } from "./chartConfig";
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);
</script>

<template>
  <div v-for="(data, index) in chatData" :key="index">
    <div class="w-full bg-gray-card border-2 p-4 rounded-xl md:w-[410px]">
      <Bar id="my-chart-id" :options="chatOptions" :data="data" />
    </div>
  </div>
</template>
