import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
Vue.use(VueCompositionAPI)
import { ref } from "@vue/composition-api";
import router from "@/router";
const provider = ref("mturk1");//change this to "prolific", "mturk" or "sona"
const completionUrl = ref("");//leave as "" for mturk. If sona or prolific, insert completion url here.
const participantId = ref("");


export default function useConfig() {
    const getConfig = () => {
        if (provider.value == "mturk") {
            completionUrl.value = router.app.$route.query.turkSubmitTo
                + "/mturk/externalSubmit?assignmentId=" + router.app.$route.query.assignmentId + "&score=0";
            participantId.value = router.app.$route.query.workerId;
        } else if (provider.value == "prolific" || provider.value == "sona") {
            participantId.value = router.app.$route.query.PROLIFIC_PID;
        } else {
            //config error
            Vue.prototype.$dialog.error({
                title: "Configuration Error",
                text: "Please check useConfig.js file",
              });
        }
    }
    return { getConfig, participantId, completionUrl, provider }
}