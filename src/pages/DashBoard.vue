<script setup lang="ts">
import Header from "@/components/Header/Header.vue";
import Button from "@/components/Button/Button.vue";
import CardPerson from "@/components/CardPerson/CardPerson.vue";
import SelectDashboard from "@/components/SelectDashboard/SelectDashboard.vue";
</script>

<template>
  <div>
    <Header />
    <div class="w-11/12 mx-auto my-4">
      <div class="w-full h-full bg-secondary gap-4 text-gray">
        <div class="flex flex-col">
          <div>
            <icons-closed class="p-2" />
            <hr />
          </div>

          <div>
            <div class="flex justify-between items-center mx-2">
              <SelectDashboard />

              <div class="flex gap-4">
                <Button color="standard" title="Append, take off bonus" />
                <Button color="sucess" title="Add Sale" />
              </div>
            </div>
            <hr />
          </div>

          <div>
            <CardPerson />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
