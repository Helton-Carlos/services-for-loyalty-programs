<script setup lang="ts"></script>

<template>
  <form class="bg-secondary flex flex-col gap-4 p-4 mt-8">
    <h3 class="text-2xl font-bold">Sing In</h3>
    
    <input class="p-1" type="email" placeholder="E-mail" />

    <input class="p-1" type="password" placeholder="Password" />

    <button class="bg-success text-primary font-semibold px-8 py-2 hover:bg-gray">
      Sing In
    </button>

    <button class="border-2 text-success font-semibold px-8 py-2 hover:bg-gray">
      Don't have an account yet?
    </button>
  </form>
</template>
