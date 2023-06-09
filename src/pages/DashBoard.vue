<script setup lang="ts">
import Header from "@/components/Header/Header.vue";
import Button from "@/components/Button/Button.vue";
import CardPerson from "@/components/CardPerson/CardPerson.vue";
import SelectDashboard from "@/components/SelectDashboard/SelectDashboard.vue";
import CardInfo from "@/components/CardInfo/CardInfo.vue";
import { reactive } from "vue";

const cardInfos = reactive([
  { values: 1.25, title: "Points Balance", icons: "Balance" },
  { values: 13, title: "Pending", icons: "Pending" },
  { values: 1, title: "Redeemed", icons: "Redeemed" },
  { values: 2, title: "Expired", icons: "Expired" },
]);
</script>

<template>
  <div>
    <Header />
    <div class="w-11/12 mx-auto my-4">
      <div class="w-full h-full bg-secondary text-gray">
        <div class="flex flex-col">
          <div>
            <icons-closed class="p-2" />
            <hr />
          </div>

          <div>
            <div class="mx-2 md:flex md:justify-between items-center">
              <SelectDashboard />

              <div class="gap-4 md:flex">
                <Button color="standard" title="Append, take off bonus" />
                <Button color="sucess" title="Add Sale" />
              </div>
            </div>
            <hr />
          </div>

          <div class="flex flex-wrap gap-3 m-3">
            <CardPerson />
            
            <CardInfo
              v-for="(card, index) in cardInfos"
              :key="index"
              :values="card.values"
              :title="card.title"
              :icons="card.icons"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
