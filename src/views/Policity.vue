<template>
  <div class="d-flex align-items-center activityGlobalStyle1"  >
    <v-container >
      <div class="text-h2 font-weight-black mb-10 text-center">政策議題</div>
      <v-row no-gutters>
        <v-col cols="4" class="titleText">
          <div class="mb-5 text-center">
            <img src="../assets/contentImg/image3.png" alt="">
          </div>
          <p class="text-h4 font-weight-bold text-center">為毛孩子謀福利！ </p>
          <p class="text-h4 font-weight-bold text-center mb-5">推動寵物醫療保障方案</p>
          <div class="d-flex titleBG  px-3 pb-3 mx-5">
            <div class="mt-3">
              <div  style="height:33%">
                <div class="font-weight-bold pColor">設立寵物醫療基金</div>
                <p style="color: black !important;">每年撥款新台幣 10 億元，專款專用於支援家庭寵物的醫療費用</p>
              </div>
              <div style="height:33%">
                <div class="font-weight-bold pColor">提供醫療補助</div>
                <p class="pColor">每隻寵物每年可獲得高達新台幣 20,000 元的醫療補助，減輕飼主的經濟壓力</p>
              </div>
              <div style="height:33%">
                <div class="font-weight-bold pColor">合作動物醫院</div>
                <p class="pColor">目前已有和超過 200 家動物醫院進行初步的合作討論</p>
              </div>
              
              
            </div>
          </div>
          
        </v-col>
        <v-col cols="4" class="titleText">
          <div  class="mb-5 text-center">
            <img src="../assets/contentImg/image2.png" alt="">
          </div>
          <p class="text-h4 font-weight-bold text-center">打造休閒天堂！ </p>
          <p class="text-h4 font-weight-bold mb-5 text-center">推廣寵物休閒與娛樂場所</p>
          <div class="d-flex titleBG  px-3 pb-3 mx-5">
            <div class="mt-3">
              <div class="" style="height: 49%;">
                <div class="font-weight-bold">建立寵物公園</div>
                <p>
                  每年撥款新台幣 5 億元，在各大都市建立專屬的寵物公園。預計在第一年內，將在全國範圍內建立至少 10 座寵物公園
                </p>
              </div>
              <div class="" style="height: 49%;">
                <div class="font-weight-bold">推廣寵物友善商家</div>
                <p>
                  鼓勵商家提供寵物友善環境，並為參與商家提供稅收優惠。預計在政策實施後的首年，將有超過 500 家商家加入此計畫
                </p>
              </div>
            </div>
            
          </div>
        </v-col>
        <v-col cols="4" class="titleText">
          <div  class="mb-5 text-center">
            <img src="../assets/contentImg/image1.png" alt="">
          </div>
          <p class="text-h4 font-weight-bold text-center">推廣寵物飼養教育</p>
          <p class="text-h4 font-weight-bold text-center mb-5">讓愛更加專業</p>
          <div class="d-flex titleBG  px-3 pb-3 mx-5">
            <div class="mt-3">
              <div style="height:49%">
                <div class="font-weight-bold">
                  建立寵物飼養教育中心
                </div>
                <p>
                  每年撥款台幣 3 億元，在全國各地建立專業的寵物飼養教育中心。預計在第一年內，在全國至少 5 大城市設立教育中心
                </p>
              </div>
              <div class="" style="height:49%">
                <div class="font-weight-bold">
                  推廣寵物飼養課程
                </div>
                <p>
                  與學校、社區組織和寵物社團合作，推出一系列免費的寵物飼養課程。預計每年將有超過 10,000 名市民受益
                </p>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script setup></script>
<style>
  .activityGlobalStyle1{
    width: 70vw;
  }
  .titleText{
    font-size: 24px;
  }
  .pColor{
    color: black !important;
  }
  .titleBG{
    background: #E3F5FD;
    border-radius: 20px;
    height:calc(100vh - 60vh)
  }
</style>