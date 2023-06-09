<script setup lang="ts"></script>

<template>
  <div class="border-2 bg-gray-card w-[350px] p-4 rounded-xl">
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
          <p class="text-gray">Purchases</p>
        </div>
      </div>

      <div class="flex gap-4">
        <icons-returns />
        <div>
          <p class="text-xl text-white">1</p>
          <p class="text-gray">Returns</p>
        </div>
      </div>
    </div>

    <div>
      <p class="my-2 text-white">Details</p>
      <hr />
    </div>

    <div>
      <ul class="text-gray">
        <li>Contact: +7 (917) 250-11-33</li>
        <li>Email: art89@google.com</li>
        <li>Card: Standart</li>
        <li>Country: Russia</li>
      </ul>
    </div>

    <p class="my-2 text-white">Segments</p>

    <div class="flex flex-wrap gap-4">
      <Tag title="Potentially loyal" color="standard" />
      <Tag title="25 years" color="dange" />
      <Tag title="2 purchases" color="sucess" />
    </div>

    <div class="py-5">
      <img src="@/assets/working/Luna.png" alt="Luna" />
    </div>

    <div class="flex justify-center gap-4">
      <Button color="sucess" title="Edit" />
      <Button color="dange" title="Suspend" />
    </div>
  </div>
</template>
