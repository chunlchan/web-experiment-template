<template>
  <v-container>
    <h1>Consent Form Here</h1>
    <v-btn @click="next()">next <v-icon>chevron_right</v-icon></v-btn>
  </v-container>
</template>

<script>
import router from "../router";
export default {
  name: "Consent",
  setup() {
    const next = () => {
      router.push("/instructions");
    };

    return { next };
  },
};
</script>

