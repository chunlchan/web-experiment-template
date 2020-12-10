<template>
  <v-container>
    <InstructionsComponent :numberOfPages="2" @instructions-complete="goNext()">
      <template #0>
        <p>Page 1 of my instructions</p>
      </template>
      <template #1>
        <p>Page 2 of my instructions</p>
      </template>
    </InstructionsComponent>
  </v-container>
</template>

<script>
import InstructionsComponent from "@/components/InstructionsComponent.vue";
import useFlow from "@/composables/useFlow.js";

export default {
  name: "Instructions",
  components: {
    InstructionsComponent
  },
  setup() {
    const goNext = () => {
      const { next } = useFlow();
      next();
    };
    return { goNext };
  },
};
</script>