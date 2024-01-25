<script setup>

const lang = useLang();

</script>

<template>
    <div class="flex gap-6 fixed top-5 right-0 z-50 bg-sky-900 p-4 rounded-s-full">
        <button @click="lang = 'portuguese'">
            <img src="~/assets/portuguese.webp" alt="portuguese" class="rounded-full flags"/>
        </button>
        <button @click="lang = 'english'">
            <img src="~/assets/english.webp" alt="english" class="rounded-full flags"/>
        </button>
        <button @click="lang = 'spanish'">
            <img src="~/assets/spanish.webp" alt="spanish" class="rounded-full flags"/>
        </button>
    </div>
</template>

<style scoped>
    .flags{ 
        width: 40px;
        height: 40px;
        transition: 0.5s;
    }
    .flags:hover {
        opacity: 0.8;
    }
</style>