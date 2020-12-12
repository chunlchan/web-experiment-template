<template>
  <v-container fluid>
    <h2>{{ sentence }}</h2>
    <v-row align="center">
      <div class="mr-5">{{ leftLabel }}</div>
      <v-radio-group row v-model="radioSelection">
        <v-radio
          v-for="radio in radioButtons"
          :key="radio.label"
          :label="radio.label"
          :value="radio.value"
        ></v-radio>
      </v-radio-group>
      <div class="ml-3">{{ rightLabel }}</div>
    </v-row>
    <v-btn @click="radioSelected()">Next <v-icon>chevron_right</v-icon></v-btn>
  </v-container>
</template>

<script>
import { ref, onMounted } from "@vue/composition-api";
export default {
  emits: ["radio-selected"],
  props: {
    length: {
      type: Number,
      default: 7,
      required: true,
    },
    leftLabel: {
      type: String,
      default: "unacceptable",
      required: true,
    },
    rightLabel: {
      type: String,
      default: "acceptable",
      required: true,
    },
    sentence: {
      type: String,
      default: "Sentence here",
      required: true,
    },
  },
  setup(props, context) {
    const radioButtons = ref([]);
    onMounted(() => {
      radioButtons.value = [];
      for (var k = 0; k < props.length; k++) {
        radioButtons.value.push({
          label: (k + 1).toString(),
          value: k + 1,
        });
      }
    });

    const radioSelection = ref();
    const radioSelected = () => {
      context.emit("radio-selected", radioSelection.value);
      radioSelection.value = null; 
    }

    return { radioButtons, radioSelection, radioSelected };
  },
};
</script>

<style>
</style>