<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { error } from "@/utils/error-message";

const name = ref<string>("");
const email = ref<string>("");
const password = ref<string>("");
const confirmPassword = ref<string>("");

const erroField = ref<boolean>(false);

const router = useRouter();

function singIn() {
  if (name.value && email.value && password.value && confirmPassword.value) {
    if (password.value === confirmPassword.value) {
      router.push({ name: "singIn" });
    } else {
      erroField.value = true;
    }
  } else {
    erroField.value = true;
  }
}
</script>

<template>
  <div class="bg-secondary flex flex-col gap-1 p-4 mt-8 text-white">
    <h3 class="text-2xl font-bold text-white">Sing In</h3>

    <label for="Name">Name</label>
    <input
      :class="erroField ? 'inputOff' : 'inputOn'"
      type="text"
      placeholder="Name"
      v-model.trim="name"
    />

    <label for="email">E-mail</label>
    <input
      :class="erroField ? 'inputOff' : 'inputOn'"
      type="email"
      placeholder="E-mail"
      v-model.trim="email"
    />

    <label for="Password">Password</label>
    <input
      :class="erroField ? 'inputOff' : 'inputOn'"
      type="password"
      placeholder="Password"
      v-model.trim="password"
    />

    <label for="Password">Confirm Password</label>
    <input
      :class="erroField ? 'inputOff' : 'inputOn'"
      type="password"
      placeholder="Confirm password"
      v-model.trim="confirmPassword"
    />

    <button
      class="bg-success text-primary font-semibold px-8 py-2 hover:bg-gray"
      @click="singIn"
    >
      Register
    </button>

    <router-link
      to="/"
      class="border-2 text-center text-success font-semibold px-8 py-2 hover:bg-gray"
    >
      Go back
    </router-link>

    <p v-show="erroField" class="text-error text-center bg-error-ground">
      *{{ error.FIELD }}
    </p>
  </div>
</template>
