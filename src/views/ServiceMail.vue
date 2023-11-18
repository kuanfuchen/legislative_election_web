<template>
  <div class="d-flex justify-center activityGlobalStyle">
    <div class=" text-center">
      <div class="text-h4 text-center font-weight-black">服務信箱</div>
      <div class="text-h5 mt-3 font-weight-bold">
        親愛的鄉親，每位市民的意見是我們社區前進的原動力。
      </div>
      <div class="text-h5 mt-1 font-weight-bold">
        分享您的想法，一同為我們的未來打造更美好！
      </div>
      <div class="rounded-lg bg-grey-lighten-3 px-5 pt-10 pb-5 mt-10" style="width:40vw">
        <p class=" text-h5 font-weight-bold mb-2 text-left">你的姓名</p>
        <v-text-field label="姓名" variant="outlined"></v-text-field>
        <p class="mt-2 text-h5 font-weight-bold mb-2 text-left">你的信箱</p>
        <v-text-field label="Email" variant="outlined"></v-text-field>
        <p class="mt-2 text-h5 font-weight-bold text-left mb-2">你的建議</p>
        <v-textarea  label="留言" variant="outlined"></v-textarea >
        <div class="d-flex justify-center pb-5">
          <v-btn size="large" rounded="xl" color="black" style="font-size: 24px;font-weight:bold">送出建議
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
</script>
<style>
  
</style>