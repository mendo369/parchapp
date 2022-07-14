<script setup>
import HomeComponent from "@/components/Home/HomeComponent.vue";
import NavComponent from "@/components/NavComponent.vue";
</script>

<template>
  <header>
    <NavComponent></NavComponent>
  </header>
  <main>
    <hr>
    <HomeComponent></HomeComponent>
  </main>
</template>

<style scoped>
header {
  padding: 0%;
  margin: 0;
}

main {
  background-image: linear-gradient(rgb(80, 142, 235), rgb(21, 69, 156));
  width: 100%;
}
</style>
