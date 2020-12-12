import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
Vue.use(VueCompositionAPI)
import { ref } from "@vue/composition-api";
import Papa from "papaparse";

const list = ref(null);

export default function usePreloader() {
    const loadList = () => {
        let promise = new Promise(function (resolve, reject) {
            getList().then((listString) => {
                var parsed = Papa.parse(listString, { header: true });
                if (parsed.errors.length == 0) {
                    list.value = parsed.data;
                    resolve();
                } else {
                    //console.log(parsed.errors);
                    Vue.prototype.$dialog.error({
                        title: "List file Error",
                        text: "Could not parse list.txt file",
                    });
                    reject();
                }
            })
        });
        return promise
    }


    async function getList() {
        let response = await fetch("list.txt");
        let list = await response.text();
        return list;
    }



    return { list, loadList }
}