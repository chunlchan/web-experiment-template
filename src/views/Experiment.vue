<template>
  <v-container>
    <h1>Experiment</h1>
    <sentence-rating
      :leftLabel="'unacceptable'"
      :rightLabel="'acceptable'"
      :length="7"
      :sentence="currentSentence"
    ></sentence-rating>
  </v-container>
</template>

<script>
import SentenceRating from "../components/SentenceRating.vue";
import Papa from "papaparse";
import { ref, onMounted, watchEffect } from "@vue/composition-api";
export default {
  components: { SentenceRating },
  setup() {
    const list = ref([]);
    const index = ref(0)
    const currentSentence = ref("");
    watchEffect(() => {
      if (list.value.length != 0) {
        currentSentence.value = list.value[index.value].sentence;
      } 
    });

    onMounted(() => {
      getList().then((listString) => {
        index.value = 0;
        var parsed = Papa.parse(listString, { header: true });
        if (parsed.errors.length == 0) {
          list.value = parsed.data;
        } else {
          console.log("csv parse error");
        }
      });
    });

    async function getList() {
      let response = await fetch("list.txt");
      let list = await response.text();
      return list;
    }

    return { currentSentence };
  },
};
</script>