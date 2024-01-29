<script setup lang="ts">
import { computed, defineProps } from 'vue';

const props = defineProps<{ title?: string; numberOfStars?: number; image?: string; }>();

const filledStars = computed(() => {
    if (!props.numberOfStars) return [];
    return Array.from({ length: props.numberOfStars }, (_, index) => index + 1);
});
</script>

<template>
    <div class="flex gap-4">
        <img :src="props.image" alt="skill" class="w-20 h-20" />
        <div class="flex flex-col items-center gap-4">
            <h1 class="text-white font-bold text-xl">{{ props.title }}</h1>
            <img 
                v-for="starIndex in filledStars" 
                :key="starIndex" 
                src="~/assets/starFilled.svg" 
                alt="star" 
                class="text-white text-lg"
            />
        </div>
    </div>
</template>
