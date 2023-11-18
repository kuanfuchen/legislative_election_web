<template>
  <div class="activityGlobalStyle">
    <div class="d-flex  mt-6">
      <img src="../assets/contentImg/cat1.png" alt="">
    </div>
  <v-timeline side="end">
      <v-timeline-item>
        <div class="d-flex">
          <div class="mx-2 d-flex align-center">
            <img class="" src="../assets/contentImg/photo2.png" alt="">
          </div>
          
          <div class="ml-3">
            <v-btn class="">2023.12.26</v-btn>
            <p class="titleStyle">參與台北寵物論壇，爭取貓咪友善環境</p>
            <p class="textStyle">炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的 VIP 休憩空間。</p>
          </div>
        </div>
      </v-timeline-item>
      <v-timeline-item>
        <div class="d-flex">
          <div class="mx-2 d-flex align-center">
            <img class="" src="../assets/contentImg/photo3.png" alt="">
          </div>
          
          <div class="ml-3">
            <v-btn class="">2023.12.24</v-btn>
            <p class="titleStyle">掃街模式開啟！帶著你的貓耳，來和我一起走！</p>
            <p class="textStyle">街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！這次的活動不僅讓我看到大家的熱情，更加堅定了我推進「貓咪友善環境」政策的決心。</p>
          </div>
        </div>
      </v-timeline-item>
      <v-timeline-item>
        <div class="d-flex">
          <div class="mx-2 d-flex align-center">
            <img src="../assets/contentImg/photo1.png" alt="">
          </div>
          
          <div class="ml-3">
            <v-btn class="">2023.12.26</v-btn>
            <p class="titleStyle">收容所模特兒大比拼！</p>
            <p class="textStyle">今天的收容所不再是一片寂靜。為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！</p>
          </div>
        </div>
      </v-timeline-item>
    </v-timeline>
  </div>
  
</template>
<script setup>
  import { ref } from 'vue';
</script>
<style>
  .activityGlobalStyle{
    width: 840px;
    /* display: flex */
    /* height: 100%; */
  }
  .titleStyle{
    font-size: 24px;
    font-weight: bold;
  }
  .textStyle{
    font-size: 20px;
    font-weight: 400;
  }
</style>