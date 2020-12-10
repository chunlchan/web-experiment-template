<template>
  <v-container>
    <h1>Introduction</h1>
    <p>Introduce your experiment here</p>
    
    <v-btn @click="goNext()">next <v-icon>chevron_right</v-icon></v-btn>
  </v-container>
</template>

<script>
//import router from "../router";
import useFlow from "@/composables/useFlow.js";
export default {
  name: "Introduction",
  setup(){

    const goNext = () => {
      const {next} = useFlow();
      next();
    }

    return {goNext}
  }
}
</script>
