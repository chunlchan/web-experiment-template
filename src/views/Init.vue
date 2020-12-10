<template>
    <v-container>
      


    </v-container>
</template>






<script>
import { onMounted } from "@vue/composition-api";
import useFlow from "@/composables/useFlow.js"
import useConfig from "@/composables/useConfig.js"

export default {
  name: "Init",
  setup() {
    
    const {setFlow, next} = useFlow();
    onMounted(() => {
        getFlow().then(flow => {
            setFlow(flow);
            next();
        })

        const {getConfig} = useConfig();
        getConfig();
    });

    async function getFlow() {
        let response = await fetch("flow.json");
        let flow = await response.json();
        return flow;
      }
  },
};
</script>

