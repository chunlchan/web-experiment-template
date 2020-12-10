import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
Vue.use(VueCompositionAPI)
import { ref } from "@vue/composition-api";
import router from "@/router";
const index = ref(-1);
const flow = ref([]);

export default function useConfig(){
    const setFlow = (newFlow) => {
        index.value = -1;
        flow.value = newFlow;
    }

    const next = () => {
        index.value +=1;
        router.push({name: flow.value[index.value]});
        //console.log(index.value)
    }

    return {setFlow, next }

}