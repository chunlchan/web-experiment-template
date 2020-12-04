<template>
  <v-container>
    <h1>Introduction</h1>
    <p>Introduce your experiment here</p>
    <v-btn @click="next()">next <v-icon>chevron_right</v-icon></v-btn>
  </v-container>
</template>

<script>
import router from "../router";
export default {
  name: "Introduction",
  setup(){
    const next = () => {
      router.push('/consent');
    }

    return {next}
  }
}
</script>
