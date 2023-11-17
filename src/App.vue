<template>
  <div class="global" :style="{'backgroundColor': bgColor}">
    <v-container >
      <AppBar @headerChangeBgColor="(color)=> bgColor = color"></AppBar>
      <router-view  />
  </v-container>
  </div>
  
  
</template>

<script setup>
import AppBar from './layouts/default/AppBar.vue';
  import { ref } from 'vue';
  const bgColor= ref('#72cef5');//gray- #Aeadab
</script>
<style>
  .global{
    height: 100vh;
    overflow-y:hidden;
    display: flex;
    /* align-items: center; */
  }
</style>
