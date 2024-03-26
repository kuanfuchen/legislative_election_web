<template>
  <div class="d-flex align-items-center activityGlobalStyle">
    <v-container>
      <p class="text-h2 font-weight-black mb-10 text-center">小額捐款</p>
        <v-row no-gutters>
          <v-col cols="6">
            <div class="d-flex justify-space-around clickPoint align-center btn_border w-100 py-5 rounded-lg bg-grey-lighten-3"
            @click="calMoney(600, 0)" :class="{'btnChangeColor':selectedBtn === 0}">
              <p class="btnFontSize btnFontWeight">喵星人之友</p>
              <p class="btnFontSize btnFontWeight">NT$6,00</p>
              <p style="font-size: 24px;">已有9999人贊助</p>
            </div>
            <div class="mt-5 d-flex justify-space-around clickPoint align-center btn_border w-100 py-5 rounded-lg bg-grey-lighten-3"
            @click="calMoney(6000, 1)" :class="{'btnChangeColor':selectedBtn === 1}">
              <p class="btnFontSize btnFontWeight">喵星大使</p>
              <p class="btnFontSize btnFontWeight">NT$6,000</p>
              <p style="font-size: 24px;">已有2000人贊助</p>
            </div>
            <!--  -->
            <div class="mt-5 d-flex justify-space-around clickPoint align-center btn_border w-100 py-5 rounded-lg bg-grey-lighten-3"
            @click="calMoney(60000, 2)" :class="{'btnChangeColor':selectedBtn === 2}">
              <p class="btnFontSize btnFontWeight">喵星人傳奇</p>
              <p class="btnFontSize btnFontWeight">NT$60,000</p>
              <p style="font-size: 24px;">已有999人贊助</p>
            </div>
            <!--  -->
            <div class="mt-5 btn_border align-center  w-100 py-2 rounded-lg bg-grey-lighten-3"
              @click="calMoney(null, 3)" :class="{'btnChangeColor':selectedBtn === 3}">
              <p class="btnFontSize btnFontWeight text-center">自訂贊助金額</p>
              <v-text-field v-model="muchMoney" variant="outlined" class="mt-5 px-5" label="請輸入金額"></v-text-field>
              <!-- <p class="btnFontSize btnFontWeight">NT$6,000</p>
              <p style="font-size: 24px;">已有999人贊助</p> -->
            </div>
          </v-col>
          <v-col cols="6" class="pl-10"> 
            <div class="d-flex justify-center">
              <img :src="donatedPlot(0)" alt="">
            </div>
            
            <div class="d-flex justify-center mt-5">
              <v-btn size="large" rounded="xl" color="black" style="font-size: 24px;font-weight:bold">前往捐款
              </v-btn>
            </div>
            
          </v-col>
        </v-row>
        <!-- <div class=""> -->
          <div style="background-color: #D5F0FC;" class="text-center mt-5 border w-100 py-5 rounded-lg ">
            <p style="font-size: 24px;font-weight:600">目前贊助金額</p>
            <p class="btnFontWeight  btnFontSize">$987,655,873</p>
          </div>
          <p class="btnFontSize text-center btnFontWeight">您的小筆捐款，是每隻毛孩未來的大大動力！</p>
    </v-container>
    
  </div>
</template>
<script setup>
  import {ref,  onMounted} from 'vue';
  const selectedBtn = ref('');
  const muchMoney = ref(0);
  const imgPlotArr = ['../assets/contentImg/sponsor4.png','../assets/contentImg/sponsor3.png','../assets/contentImg/sponsor2.png', '../assets/contentImg/sponsor1.png'];
  const display_plot = ref(1);
  // const donatedPlot = ref('')
  const calMoney = (num, index)=>{
    display_plot.value = imgPlotArr[index];
    // donatedPlot.value = new URL(imgPlotArr[index], import.meta.url).href;
    selectedBtn.value = index;
    console.log(num)
  }
  const donatedPlot = (num = 0)=>{
    console.log(num, 'num')
    console.log(imgPlotArr[num])

    return new URL(imgPlotArr[num], import.meta.url).href;
    // return new URL(imgPlotArr[num], import.meta.url).href;
  }
  onMounted(()=>{
    display_plot.value = imgPlotArr[0];
    // donatedPlot(imgPlotArr.value[0]);
    // const imageUrl = new URL('./logo.png', import.meta.url).href
  })
</script>
<style>
  .activityGlobalStyle{
    width:80vw
  }
  .btnFontSize{
    font-size: 34px;
  }
  .btnFontWeight{
    font-weight: 900;
  }
  .clickPoint{
    cursor: pointer;
  }
  .btn_border{
    border:5px solid black;
  }
  .btnChangeColor{
    background-color:#72CEF5 !important;
  }
</style>