<template>

 <Mynavbar></Mynavbar>
<FirstParaVue v-bind:webscrip=message></FirstParaVue>
<DevelopersVue v-bind:mydevs=mydevs_></DevelopersVue>
<FooterVue v-bind:footnote=fotnot></FooterVue>
</template>

<script>

import DevelopersVue from '@/components/Developers.vue'
 

import FirstParaVue from '@/components/FirstPara.vue';
import FooterVue from '@/components/Footer.vue';
import Mynavbar from "@/components/Mynavbar.vue";

const webdescrip =require( "@/components/webdiscrip.json")
const devs =require( "@/components/developers.json")
const fotnot_ =require( "@/components/footnote.json")

export default {
    data() {
    return {
      message: webdescrip,
      fotnot:fotnot_,
      mydevs_:devs.developers
    }
  },
  components: {
    Mynavbar,
    FirstParaVue,
    DevelopersVue,
    FooterVue
}
}
</script>
<style>
</style>