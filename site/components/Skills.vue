<script setup>
import { ref, watch } from 'vue';
import mocks from '../mocks/skills';

const lang = ref(useLang());
const mock = ref(mocks[lang.value]);

watch(lang, (newLang) => {
    mock.value = mocks[newLang];
});
</script>

<template>
    <div class="flex flex-col gap-10 p-10">
        <div>
            <h1 class="text-teal-500 text-4xl font-bold mb-6">{{ mock.title}}</h1>
            <hr class="border-teal-700 rounded-full mx-10">
        </div>
        <div class="flex justify-between w-full">
            <Skill image="~/assets/skills/php.svg" title="php" number="5"/>
            <Skill/>
            <Skill/>
        </div>
    </div>
</template>
