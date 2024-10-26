<template>

    <h1 class="text-2xl font-bold mb-4">COUNTRY VIEW</h1>
    <div class="container mx-auto">
        <div class="flex flex-col md:flex-row">
            <div class="left-side md:w-1/2 p-4">
                <CountryMedal :noc="noc" />
            </div>
            <div class="right-side md:w-1/2 p-4">
                <CommentListComponent :noc="noc" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import CommentListComponent from '@/components/CommentListComponent.vue';
import CountryMedal from '@/components/CountryMedal.vue';
import { OlympicDetail } from '@/types';
import { computed, defineProps, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const noc = route.query.noc?.toString() || '';

</script>

<style scoped></style>