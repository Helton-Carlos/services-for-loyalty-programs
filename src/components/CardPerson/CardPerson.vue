<script setup lang="ts"></script>

<template>
  <div class="border-2 bg-gray-card w-[350px] m-4 p-4">
    <div class="flex gag-4">
      <img src="@/assets/components/Avatar.png" alt="Avatar" />

      <div class="p-2">
        <h3 class="text-2xl font-bold text-white">Davidov Artur</h3>

        <span class="bg-error-ground text-error px-2 rounded-sm">Standart</span>
      </div>
    </div>

    <div class="flex justify-between my-4">
      <div class="flex gap-4">
        <icons-bag />
        <div>
          <p class="text-xl text-white">5</p>
          <p>Purchases</p>
        </div>
      </div>

      <div class="flex gap-4">
        <icons-returns />
        <div>
          <p class="text-xl text-white">1</p>
          <p>Returns</p>
        </div>
      </div>
    </div>

    <div>
      <p class="my-2">Details</p>
      <hr />
    </div>

    <div>
      <ul>
        <li>Contact: +7 (917) 250-11-33</li>
        <li>Email: art89@google.com</li>
        <li>Card: Standart</li>
        <li>Country: Russia</li>
      </ul>
    </div>

    <p class="text-white py-4">Segments</p>

    <Tag title="Potentially loyal" color="blue" />
  </div>
</template>
