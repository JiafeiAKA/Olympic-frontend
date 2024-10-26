<template>
    <div class="medal-summary">
        <div class="header">
            <div class="flex justify-end mt-2 mx-10">
                <label for="yearSpinner" class="mr-2">Year: </label>
                <select id="yearSpinner" v-model="selectedYear" class="border rounded px-4 py-2" @change="fetchYear">
                    <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
                </select>
            </div>


            <div class="w-8 px-2">
                <country-flag :country="nameToNOC.get(nocToname.get(props.noc) || 'USA')" size='big' />
            </div>
            <div class="summary">
                <h2>{{ nocToname.get(props.noc) }}</h2>
                <p>Total Medal: {{ totalMedal }}</p>
                <p>Gold: {{ goldMedal }}</p>
                <p>Silver: {{ silverMedal }}</p>
                <p>Bronze: {{ bronzeMedal }}</p>
            </div>
        </div>
        <div class="table-container">
            <div class="flex items-center border-b py-2 mx-10 justify-around bg-stone-400">
                <div class="w-[10%] px-2 text-sm">Sport</div>
                <div class="w-8 px-2 text-sm">Gold</div>
                <div class="w-[10%] px-2 text-sm">Silver</div>
                <div class="w-8 px-2 text-sm">Bronze</div>
                <div class="w-8 px-2 text-sm">Total</div>
            </div>
            <div v-for="detail in medalByCountry" v-bind:key="detail.id">

                <div class="flex items-center border-b py-2 mx-10 justify-around">
                    <div class="w-[10%] px-2 text-sm">{{ detail.sport }}</div>
                    <div class="w-8 px-2 text-sm">{{ detail.gold }}</div>
                    <div class="w-[10%] px-2 text-sm">{{ detail.silver }}</div>
                    <div class="w-8 px-2 text-sm">{{ detail.bronze }}</div>
                    <div class="w-8 px-2 text-sm">{{ detail.total_medals }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { COUNTRY_TO_NOC, NOC_TO_NAME } from '@/constants/NationName';
import { yearList } from '@/constants/YearList';
import { getMedalByCountryCodeAndYear, OlympicYear } from '@/services/MedalCountryService';
import { onMounted, ref, defineProps } from 'vue';

const medalByCountry = ref<OlympicYear[]>([]);
const nocToname = NOC_TO_NAME;
const nameToNOC = COUNTRY_TO_NOC;
const totalMedal = ref(0);
const goldMedal = ref(0);
const silverMedal = ref(0);
const bronzeMedal = ref(0);

const years: number[] = yearList
    .sort((a, b) => b - a);




const selectedYear = ref(yearList[0]);

const props = defineProps<{
    noc: string
}>();

const fetchCountryMedal = async () => {
    try {
        const response = await getMedalByCountryCodeAndYear(props.noc, selectedYear.value);
        medalByCountry.value = response;

        totalMedal.value = medalByCountry.value.reduce((sum, medal) => sum + medal.total_medals, 0);
        goldMedal.value = medalByCountry.value.reduce((sum, medal) => sum + medal.gold, 0);
        silverMedal.value = medalByCountry.value.reduce((sum, medal) => sum + medal.silver, 0);
        bronzeMedal.value = medalByCountry.value.reduce((sum, medal) => sum + medal.bronze, 0);
    } catch (error) {
        console.error('Error fetching medalByCountry:', error);
    }
};

async function fetchYear() {



    fetchCountryMedal();

}


onMounted(() => {
    fetchCountryMedal();
});

</script>

<style scoped></style>