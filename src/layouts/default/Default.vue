<template>
  <v-app :style="{'backgroundColor': bgColor}">
    <!-- <default-bar /> -->

    <default-view />
  </v-app>
</template>

<script setup>
  // import DefaultBar from './AppBar.vue'
  import DefaultView from './View.vue'
  import { ref } from 'vue';
  const bgColor= ref('#72cef5');//gray- #Aeadab
</script>
