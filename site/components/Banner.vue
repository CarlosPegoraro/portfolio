<script setup>
import { ref, watch } from 'vue';
import mocks from '../mocks/banner';

const lang = ref(useLang());
const mock = ref(mocks[lang.value]);

watch(lang, (newLang) => {
  mock.value = mocks[newLang];
});
</script>

<template>
  <img class="w-full bgBanner absolute w-full bg-stone-900 top-0 z-0" src="~/assets/heroSectionBg.png" alt="banner">
  <div class="bgBanner flex justify-between items-center p-10">
    <div class="flex gap-10 z-50 w-4/6">
      <div class="flex flex-col gap-10 justify-center ietms-center text-center">
        <h1 class="text-white text-2xl">{{ mock.title }}</h1>
        <h1 class="text-teal-400 uppercase font-bold text-sky-500 text-4xl">{{ mock.stack }}</h1>
        <h1 class="text-white text-lg">{{ mock.description }}</h1>
        <div class="flex justify-center gap-10">
          <a target="_blank" href="https://github.com/CarlosPegoraro" class="text-teal-600 text-5xl hover:text-teal-400 duration-500"><Icon name="bi:github" /></a>
          <a target="_blank" href="#" class="text-teal-600 text-5xl hover:text-teal-400 duration-500"><Icon name="bi:instagram" /></a>
          <a target="_blank" href="#" class="text-teal-600 text-5xl hover:text-teal-400 duration-500"><Icon name="bi:linkedin" /></a>
        </div>
      </div>
    </div>
    <div class="flex gap-10 z-50 w-2/6">
      <img src="~/assets/me.png" alt="me"/>
    </div>
  </div>
</template>

<style scoped>
  .bgBanner {
    height: 100vh;
  }
</style>
