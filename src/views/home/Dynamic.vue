<template>
    <div class="dynamic_all">
        <div class="dynamic_write">
            <span class="dynamic_write_text">初来豆瓣，写点什么吧...</span>
        </div>
        <div class="dynamic_rotation">
            <van-swipe class="my-swipe"  indicator-color="#0fc23a">
                <van-swipe-item>
                    <p class="dynamic_rotation_text_1">新发起</p>
                    <p class="dynamic_rotation_text_2">
                        <van-icon name="chat-o" color="#07c160" />
                        少年时代做过最好的事情
                    </p>
                    <p class="dynamic_rotation_text_3">
                        可能时在校门口的书店偶遇那本引你踏入文学之门
                        的书；可能是埋头一个暑假写完一部不会有读者的
                        小说；可能是结识一位与你平等相待，帮你解答困
                        惑、开拓视野的师长；可能是与知己伙伴完成的...
                    </p>
                    <p class="dynamic_rotation_text_4">
                        1523篇内容·599.2万次浏览
                    </p>
                    <van-button
                        class="dynamic_rotation_button" 
                        type="primary">
                        <img class="dynamic_rotation_img" src="../../assets/img/home/pen.png">
                        参与话题
                    </van-button>
                </van-swipe-item>
                <van-swipe-item>
                    <p class="dynamic_rotation_text_1">新发起</p>
                    <p class="dynamic_rotation_text_7">
                        <van-icon name="chat-o" color="#07c160" />
                        养猫那些事儿
                    </p>
                    <p class="dynamic_rotation_text_8">
                        溪柴火软蛮毡暖，我与狸奴不出门
                    </p>
                    <p class="dynamic_rotation_text_9">
                        1.1万篇内容·1441.2万次浏览
                    </p>
                    <van-button
                        class="dynamic_rotation_button" 
                        type="primary">
                        <img class="dynamic_rotation_img" src="../../assets/img/home/pen.png">
                        参与话题
                    </van-button>
                </van-swipe-item>
                <van-swipe-item>
                    <p class="dynamic_rotation_text_1">6月11日 ， 周四</p>
                    <p class="dynamic_rotation_text_5">
                        开始记录
                    </p>
                    <p class="dynamic_rotation_text_6">
                        这里很安静，暂时没有认识的人
                    </p>
                    <p class="dynamic_rotation_text_6">
                        记录此刻的心情...
                    </p>
                    <p class="dynamic_rotation_text_6">
                        
                        或是印象深刻的电影、书籍、音乐
                      
                    </p>
                    <p class="dynamic_rotation_text_6">
                        
                        
                        平凡，但重要...
                    </p>
                    <van-button
                        class="dynamic_rotation_button" 
                        type="primary">
                        <img class="dynamic_rotation_img" src="../../assets/img/home/pen.png">
                        写点什么
                    </van-button>
                </van-swipe-item>
                <van-swipe-item>
                    <p class="dynamic_rotation_text_1">新发起</p>
                    <p class="dynamic_rotation_text_10">
                        <van-icon name="chat-o" color="#07c160" />
                        像我这样节俭地生活
                    </p>
                    <p class="dynamic_rotation_text_11">
                        你为什么要节俭地生活？这样的生活方式给你带来
                        了怎样的改变？不妨分享一下你的节俭生活心得和
                        理念
                    </p>
                    <p class="dynamic_rotation_text_12">
                        1.3万篇内容·5085.3万次浏览
                    </p>
                    <van-button
                        class="dynamic_rotation_button" 
                        type="primary">
                        <img class="dynamic_rotation_img" src="../../assets/img/home/pen.png">
                        参与话题
                    </van-button>
                </van-swipe-item>
            </van-swipe>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.dynamic_all{
    background-color: rgb(241, 241, 241);
    height: 635px;
    width: 320px;
}
  
  .dynamic_write{
    padding-top: 4%;
    padding-left: 2%;
    text-align: left;
  }
  .dynamic_write_text{
    font-size: 12px;
  }
  .dynamic_rotation{
    padding-top: 4%;
  }
  .dynamic_rotation_text_1{
      font-size: 12px;
      text-align: left;
      margin-left: 20px;
  }
  .dynamic_rotation_text_2{
      font-size: 15px;
      text-align: right;
      margin-right: 115px;
      font-weight:bold;
  }
  .dynamic_rotation_text_3{
      width: 250px;
      font-size: 11px;
      margin-left: 17px;
  }
  .dynamic_rotation_text_4{
      font-size: 6px;
      text-align: left;
      margin-left: 20px;
  }
  .dynamic_rotation_button{
      width: 150px;
      font-size: 12px;
      height: 35px;
      border-radius: 6px;
      float: left;
      margin-left: 20px;
      margin-top: 82px;
      text-align: center;
  }
  .dynamic_rotation_img{
     float: left;
  }
  .my-swipe{
      height: 350px;
      margin: auto;
      
  }
  .van-swipe-item{
      border-radius: 10px;
      background-color: #fffdf6;
      height: 320px;
  }
  .dynamic_rotation_text_5{
      width: 250px;
      font-size: 15px;
      font-weight: bold;
      text-align: left;
      margin-left: 18px;
  }
  .dynamic_rotation_text_6{
      width: 250px;
      font-size: 11px;
      margin-left: 17px;
      text-align: left;
  }
  .dynamic_rotation_text_7{
      width: 250px;
      font-size: 15px;
      font-weight: bold;
      text-align: left;
      margin-left: 18px;
  }
 .dynamic_rotation_text_8{
      width: 250px;
      font-size: 13px;
      margin-left: 17px;
      text-align: left;
  }
  .dynamic_rotation_text_9{
      font-size: 6px;
      text-align: left;
      margin-left: 20px;
  }
  .dynamic_rotation_text_10{
      width: 250px;
      font-size: 15px;
      font-weight: bold;
      text-align: left;
      margin-left: 18px;
  }
  .dynamic_rotation_text_11{
      width: 250px;
      font-size: 13px;
      margin-left: 17px;
      text-align: left;
  }
  .dynamic_rotation_text_12{
      font-size: 6px;
      text-align: left;
      margin-left: 20px;
  }
</style>