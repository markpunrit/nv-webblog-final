<template>
    <div>
      <b-container class="bv-example-row">
      <b-row class="text-left">
           <b-col></b-col>
  
           <b-col cols="10" class="bg2">
      <h1>รายการชื่ออัลบั้ลเพลง</h1>
    <!--   <p><button v-on:click="logout">Logout</button></p> -->
      <h5>จำนวนชื่ออัลบัมเพลง 5 อัลบัม </h5> <hr>
  
      <div class="box2" >
        <p>อัลบัมเพลงที่: 1</p>
        <p>ชื่ออัมบัมเสกโลโซ 20ปี</p>
        <p>ราคา: 250 บาท</p>
     <div class="img2">
                  <p><img src="@/assets/a1.png"></p>
              </div>
        <hr>
  
  <p>อัลบัมเพลงที่: 2</p>
        <p>ชื่ออัลบัม: bodyslam</p>
        <p>ราคา: 389บาท</p>
     <div class="img2">
                  <p><img src="@/assets/a1.png"></p>
              </div>
         <hr>
  
         <p>อัลบัมเพลงที่: 3</p>
        <p>ชื่ออัลบัม: mild</p>
        <p>ราคา: 450บาท</p>
     <div class="img2">
                  <p><img src="@/assets/a1.png"></p>
              </div>
         <hr>
  
  <p>อัลบัมเพลงที่: 4</p>
        <p>ชื่ออัลบัม: pop</p>
        <p>ราคา: 500 บาท</p>
     <div class="img2">
                  <p><img src="@/assets/pong.png"></p>
              </div>
         <hr>
  
  <p>อัลบัมเพลงที่: 5</p>
        <p>ชื่ออัลบัม: เสกโลโซ 10ปี</p>
        <p>ราคาช: 400 บาท</p>
     <div class="img2">
                  <p><img src="@/assets/bodyslam.png"></p>
              </div>
         <hr>
  
      </div>
  
      
  
      </b-col>
        <b-col> </b-col>
       </b-row>
  </b-container>
    </div>
  </template>
  <script>
  
  import ItemService from "@/services/ItemsService";
  export default {
    data() {
      return {
        items: [],
      };
    },
    async created() {
      this.items = (await ItemService.index()).data;
    }
  };
  </script>
  <style scoped>
  div.img2 img {
    width: 130px;
    height: 130px;
  }
  </style>