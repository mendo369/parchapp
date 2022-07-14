<script setup>
import ParcheComponent from "@/components/Home/ParcheComponent.vue";
//import { onMounted, reactive, ref } from "vue";
import { storeToRefs } from "pinia";
import { useParchesStore } from "../../stores/parches";

const { parches } = storeToRefs(useParchesStore());
//const store = useParchesStore();
const { fetchParches } = useParchesStore();

fetchParches();
</script>

<template>
  <section class="parches">
    <ParcheComponent v-for="parche in parches" :key="parche.id" :parche="parche"></ParcheComponent>
  </section>
</template>

<style scoped>
.parches {
  width: 50%;
  margin: 0px auto;
  background-color: white;
  padding: 30px;
}
</style>
