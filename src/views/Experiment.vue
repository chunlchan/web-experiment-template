<template>
  <v-container>
    <h1>Experiment</h1>
    <sentence-rating
      :leftLabel="'unacceptable'"
      :rightLabel="'acceptable'"
      :length="7"
      :sentence="currentSentence"
      @radio-selected="radioSelected"
    ></sentence-rating>
  </v-container>
</template>

<script>
import SentenceRating from "../components/SentenceRating.vue";
import usePreloader from "@/composables/usePreloader.js"
import useFlow from "@/composables/useFlow.js";
import { ref, onMounted, watchEffect } from "@vue/composition-api";
export default {
  components: { SentenceRating },
  setup() {
    const {list, loadList} = usePreloader();
    const index = ref(0)
    const currentSentence = ref("");
    watchEffect(() => {
      if(index.value < list.value.length){
        if (list.value!=null && list.value.length != 0) {
          currentSentence.value = list.value[index.value].sentence;
        }  
      } else {
        const { next } = useFlow();
        next();
      }
    });

    onMounted(() => {
      loadList().then(()=>{
        index.value = 0;
      })
    });

    const radioSelected = (radioSelection) => {
      console.log(radioSelection);
      index.value +=1;
    }

    return { currentSentence, radioSelected };
  },
};
</script>