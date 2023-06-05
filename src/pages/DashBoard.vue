<script setup lang="ts">
import Header from "@/components/Header/Header.vue";
import SelectDashboard from "@/components/SelectDashboard/SelectDashboard.vue";
</script>

<template>
  <div>
    <Header />
    <div class="w-11/12 mx-auto my-4">
      <div class="w-full h-full bg-secondary gap-4 text-gray">
        <div class="flex flex-col">
          <icons-closed class="p-2" />
          <hr />
        </div>
        <div class="p-2">
          <SelectDashboard />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            beatae accusantium ad voluptas, eligendi rerum, laboriosam autem
            consequatur excepturi aliquam et voluptatibus voluptates cupiditate
            exercitationem est nostrum voluptatem, totam doloribus!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
