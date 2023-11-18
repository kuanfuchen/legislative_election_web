<template>
  <div class="d-flex justify-center align-center h-100" style="position: relative;">
    <ServiceEmail></ServiceEmail>
    <div class="ab">
      <Footer></Footer>
    </div>
  </div>
</template>
<script setup>
  import ServiceEmail from '../../views/ServiceMail.vue';
  import Footer from '../../components/Footer.vue';
</script>
<style>
  .ab{
    position: absolute;
    width:100vw;
    bottom: 60px;
  }
</style>