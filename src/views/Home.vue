<template>
  <!-- <Header></Header> -->
  <div class="d-flex align-center justify-center" style="height:100%">
    <v-window v-model="pageNumber">
      <v-window-item value="index">
        <!--  -->
        <div class="d-flex justify-center">
          <div>
            <img src="../assets/contentImg/text.png" alt="">
            <div class="mt-5">
              <v-btn size="large" rounded="xl" color="black" style="font-size: 24px;font-weight:bold"
                @click="pageNumber='selected'">
                候選人選項
              </v-btn>
            </div>
          </div>
          <div class="">
            <img src="../assets/contentImg/cat.png" alt="">
          </div>
        </div>
        <!--  -->
      </v-window-item>
      <v-window-item value="selected">
        <div class="d-flex justify-center">
          <div class="d-flex justify-center align-center">
            <div class="titleStyle">
              <div class="px-5 py-10 childStyle">
                <p class="text-h3 font-weight-bold text-center">喵立翰 <span class="ml-3">MIAO LIHAN</span></p>
                <p class="textstyle mt-5">
                  推動更完善貓咪福利和政策，間接投資台灣未來。
                  民眾身心健康是推動經濟的核心動力。透過完善的
                  貓咪福利政策，為台灣GDP經濟帶來巨大效益。讓
                  一同護航台灣幸福經濟，從照顧每一隻貓咪開始。
                </p>
                <div class="mt-5">
                  <v-btn size="large" rounded="xl" color="black" style="font-size: 24px;font-weight:bold"
                  @click="pageNumber='index'">
                    首頁
                  </v-btn>
                </div>
              </div>
            </div>
          </div>
          <div class="animation imgAnimation">
            <img src="../assets/contentImg/2.png" alt="">
          </div>
        </div>
      </v-window-item>
    </v-window>
    
  </div>
  <!-- <Footer></Footer> -->
</template>

<script setup>
  // import Footer from '../components/Footer.vue';
  import { ref } from 'vue';
  const pageNumber = ref('index');
</script>
<style lang="scss">
  .textstyle{
    font-weight: 700;
    font-size: 24px;
    line-height: 1.5;
  }
  .titleStyle{
    width:60%;
    .childStyle{
      background: #E3F5FD;
      border-radius: 10px;
    }
  }
  .imgAnimation{
    transform: translateX(-30%);
  }
  .animation {
    animation-name: move-object;
    animation-duration: 1s;
    animation-iteration-count: 1;
    animation-timing-function: linear;
    animation-direction: normal;
    animation-play-state: running;
    animation-delay: 1s;
    animation-fill-mode: backwards;
  }
  @keyframes move-object {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-30%);
    }
  }
</style>