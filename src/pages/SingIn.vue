<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { error } from "@/utils/error-message";

const email = ref<string>("");
const password = ref<string>("");
const erroField = ref<boolean>(false);

const router = useRouter();

function singIn() {
  email.value && password.value
    ? router.push({ name: "dashboard" })
    : (erroField.value = true);
}
</script>

<template>
  <div class="bg-secondary flex flex-col gap-4 p-4 mt-8">
    <h3 class="text-2xl font-bold text-white">Sing In</h3>

    <input
      :class="erroField ? 'inputOff' : 'inputOn'"
      type="email"
      placeholder="E-mail"
      v-model="email"
    />

    <input
      :class="erroField ? 'inputOff' : 'inputOn'"
      type="password"
      placeholder="Password"
      v-model="password"
    />

    <button
      class="bg-success text-primary font-semibold px-8 py-2 hover:bg-gray"
      @click="singIn"
    >
      Sing In
    </button>

    <button class="border-2 text-success font-semibold px-8 py-2 hover:bg-gray">
      Don't have an account yet?
    </button>

    <p v-show="erroField" class="text-error text-center bg-error-ground">
      *{{ error.FIELD }}
    </p>
  </div>
</template>
