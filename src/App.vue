<template>
  <div :style="{'backgroundColor': bgColor}">
    <v-container >
    <router-view  />
  </v-container>
  </div>
  
  
</template>

<script setup>
  import { ref } from 'vue';
  const bgColor= ref('#72cef5');//gray- #Aeadab
</script>
