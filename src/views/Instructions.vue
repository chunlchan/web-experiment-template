<template>
    <v-container>
        <InstructionsComponent :numberOfPages="2" @instructions-complete="next()">
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
import router from "../router";
import InstructionsComponent from "@/components/InstructionsComponent.vue";
export default {
    name: "Instructions" ,
    components: {
        InstructionsComponent
    },
    setup(){
        const next = () => {
            router.push("/experiment")
        }
        return {next}
    }
}
</script>