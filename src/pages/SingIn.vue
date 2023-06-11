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
  <div>
    <div class="w-5/6 mx-auto mt-12 md:w-1/3">
      <div class="bg-secondary flex flex-col gap-1 p-4 mt-8 text-white">
        <h3 class="text-2xl font-bold">Sing In</h3>

        <label for="email">E-mail</label>
        <input
          :class="erroField ? 'inputOff' : 'inputOn'"
          type="email"
          placeholder="E-mail"
          v-model.trim="email"
        />

        <label for="email">Password</label>
        <input
          :class="erroField ? 'inputOff' : 'inputOn'"
          type="password"
          placeholder="Password"
          v-model.trim="password"
        />

        <button
          class="bg-success text-primary font-semibold px-8 py-2 hover:bg-gray"
          @click="singIn"
        >
          Sing In
        </button>

        <router-link
          to="/create-accont"
          class="border-2 text-success text-center font-semibold px-8 py-2 hover:bg-gray"
        >
          Don't have an account yet?
        </router-link>

        <p v-show="erroField" class="text-error text-center bg-error-ground">
          *{{ error.FIELD }}
        </p>
      </div>
    </div>
  </div>
</template>
