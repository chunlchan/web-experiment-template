<template>
  <v-container>
    <h1>Consent Form</h1>
    <p>Consent text</p>
    
    <v-btn @click="goNext()">next <v-icon>chevron_right</v-icon></v-btn>
  </v-container>
</template>

<script>
import useFlow from "@/composables/useFlow.js";
export default {
  name: "Consent",
  setup() {
    
    const goNext = () => {
      const {next} = useFlow();
      next();
    };

    return { goNext };
  },
};
</script>

