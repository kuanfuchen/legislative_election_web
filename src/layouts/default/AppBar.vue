<template>
    <div class="headerStyle mt-5 d-flex justify-space-around">
      <router-link class="d-flex headerStyle ml-5" @click="changedBG_Color('#72cef5')" to="/">
        <img src="../../assets/headerImg/1.png" />
        <img src="../../assets/headerImg/2.png" />
        <img src="../../assets/headerImg/3.png" />
      </router-link>
      <div class=" mr-5">
        <v-btn-toggle v-model="selectedSignal" :style="{'background':bgColor}">
          <v-btn class="px-10" :style="{'background':bgColor}"
            to="activity" @click="changedBG_Color('#E2E2E2')">
            <img src="../../assets/headerImg/btn1.png" alt="" />
            <span class="title">最新活動</span>
          </v-btn>
          <v-btn class="px-10" :style="{'background':bgColor}" @click="changedBG_Color('#72cef5')"
          to="policy">
            <img src="../../assets/headerImg/btn2.png" alt="" />
            <span class="title">政策議題</span>
          </v-btn>
          <v-btn class="px-10" :style="{'background':bgColor}" 
            to="amountGift" @click="changedBG_Color('#E2E2E2')">
            <img src="../../assets/headerImg/btn3.png" alt="" />
            <span class="title">小額捐贈</span>
          </v-btn>
          <v-btn class="px-10" :style="{'background':bgColor}" to="serviceemail"
            @click="changedBG_Color('#72cef5')">
            <img src="../../assets/headerImg/btn4.png" alt="" />
            <span class="title">服務信箱</span>
          </v-btn>
        </v-btn-toggle>
      </div>
        
    </div>
  <!-- </div> -->
  
</template>

<script setup>
  import { ref } from 'vue';
  const bgColor= ref('#72cef5');
  const emits = defineEmits(['headerChangeBgColor']);
  const selectedSignal = ref('');
  const changedBG_Color = (color)=>{
    bgColor.value = color;
    emits('headerChangeBgColor', bgColor.value);
    
  }
</script>
<style lang="scss">
  .headerStyle{
    height:60px;
    
    .title{
      font-size: 24px;
      font-weight: bold;
      margin-left: 15px;
    }
  }
</style>
