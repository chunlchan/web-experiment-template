<template>
  <v-container>
      <h1>Experiment Complete</h1>
      <v-btn @click="completionClick()">Return to Sona/Prolific/MTurk</v-btn>
  </v-container>
</template>

<script>
import useConfig from "@/composables/useConfig.js"
export default {
    setup(){
        const { completionUrl } = useConfig()
        

        const completionClick = () => {
            window.location.replace(completionUrl.value);
        }

        return {completionClick}
    }
    
}
</script>

<style>

</style>