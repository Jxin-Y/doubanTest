<template>
<div>
  <div class="home_search">
    <div class="home_search_1">
      <van-search
        shape="round"
        background="#4fc08d"
        placeholder="请输入搜索关键词"
        right-icon="scan"
      />
    </div>
    <div class="home_search_2">
      <van-icon  name="envelop-o" />
    </div>
  </div>
  <div class="home_body">
    <div >
      <van-tabs 
        @click="onClick"
        class="home_body_bar" 
        title-active-color="#0fc23a"
        color="#04B404"
        line-height="1.5px"
        line-width="27px">
        <van-tab title="动态">
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
                    <div class="dynamic_rotation_button">
                      <van-button
                          class="dynamic_rotation_button_1" 
                          type="primary"
                          size="small">
                          <img class="dynamic_rotation_img" src="../../assets/img/home/pen.png">
                          参与话题
                      </van-button>
                    </div>
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
                    <div class="dynamic_rotation_button">
                      <van-button
                          class="dynamic_rotation_button_1" 
                          type="primary"
                          size="small">
                          <img class="dynamic_rotation_img" src="../../assets/img/home/pen.png">
                          参与话题
                      </van-button>
                    </div>
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
                    <div class="dynamic_rotation_button">
                      <van-button
                          class="dynamic_rotation_button_1" 
                          type="primary"
                          size="small">
                          <img class="dynamic_rotation_img" src="../../assets/img/home/pen.png">
                          写点什么
                      </van-button>
                    </div>
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
                    <div class="dynamic_rotation_button">
                      <van-button
                          class="dynamic_rotation_button_1" 
                          type="primary"
                          size="small">
                          <img class="dynamic_rotation_img" src="../../assets/img/home/pen.png">
                          参与话题
                      </van-button>
                    </div>
                </van-swipe-item>
              </van-swipe>
            </div>
          </div>
        </van-tab>
        <van-tab title="推荐">
          <div class="recommend_all">
        <div class="recommend_dynamic">
            <div class="recommend_dynamic_1">
                <div class="recommend_dynamic_title">
                   <div class="recommend_dynamic_title_img">
                       <img class="recommend_dynamic_title_img_1" src="../../assets/img/home/header.png">
                   </div>   
                   <div class="recommend_dynamic_title_text">
                       <span>Coriopo</span>
                   </div>
                   <div class="recommend_dynamic_title_ellipsis">
                       <span>...</span>
                   </div>
                </div>
                <div class="recommend_dynamic_topic">
                    <div class="recommend_dynamic_topic_background">
                        <img class="recommend_dynamic_topic_img" src="../../assets/img/home/topic.png">
                        <span class="recommend_dynamic_topic_write">电影里的电影</span>
                    </div> 
                </div>
                <div class="recommend_dynamic_body">
                    <div class="recommend_dynamic_body_write">
                        <span>跑这个题 这个实在忍不住 (弄得我又得去看了一遍闪灵哈哈哈哈)</span>
                    </div>
                    <div class="recommend_dynamic_body_img">
                        <img class="recommend_dynamic_body_img_1" src="../../assets/img/home/body1.png">
                        <img class="recommend_dynamic_body_img_2" src="../../assets/img/home/body2.png">
                    </div>
                </div>
                <div class="recommend_dynamic_bottom">
                    <img class="recommend_dynamic_good" src="../../assets/img/home/good.png">
                    <img class="recommend_dynamic_comment" src="../../assets/img/home/comment.png">
                    <img class="recommend_dynamic_forward" src="../../assets/img/home/forward.png">
                </div>
            </div>
            <div class="recommend_dynamic_2">
                <div class="recommend_dynamic_title">
                   <div class="recommend_dynamic_title_img">
                       <img class="recommend_dynamic_title_img_1" src="../../assets/img/home/header.png">
                   </div>   
                   <div class="recommend_dynamic_title_text">
                       <span>Coriopo</span>
                   </div>
                   <div class="recommend_dynamic_title_ellipsis">
                       <span>...</span>
                   </div>
                </div>
                <div class="recommend_dynamic_topic">
                    <div class="recommend_dynamic_topic_background">
                        <img class="recommend_dynamic_topic_img" src="../../assets/img/home/topic.png">
                        <span class="recommend_dynamic_topic_write">电影里的电影</span>
                    </div> 
                </div>
                <div class="recommend_dynamic_body">
                    <div class="recommend_dynamic_body_write">
                        <span>跑这个题 这个实在忍不住 (弄得我又得去看了一遍闪灵哈哈哈哈)</span>
                    </div>
                    <div class="recommend_dynamic_body_img">
                        <img class="recommend_dynamic_body_img_1" src="../../assets/img/home/body1.png">
                        <img class="recommend_dynamic_body_img_2" src="../../assets/img/home/body2.png">
                    </div>
                </div>
                <div class="recommend_dynamic_bottom">
                    <img class="recommend_dynamic_good" src="../../assets/img/home/good.png">
                    <img class="recommend_dynamic_comment" src="../../assets/img/home/comment.png">
                    <img class="recommend_dynamic_forward" src="../../assets/img/home/forward.png">
                </div>
            </div>
            <div class="recommend_dynamic_3">
                <div class="recommend_dynamic_title">
                   <div class="recommend_dynamic_title_img">
                       <img class="recommend_dynamic_title_img_1" src="../../assets/img/home/header.png">
                   </div>   
                   <div class="recommend_dynamic_title_text">
                       <span>Coriopo</span>
                   </div>
                   <div class="recommend_dynamic_title_ellipsis">
                       <span>...</span>
                   </div>
                </div>
                <div class="recommend_dynamic_topic">
                    <div class="recommend_dynamic_topic_background">
                        <img class="recommend_dynamic_topic_img" src="../../assets/img/home/topic.png">
                        <span class="recommend_dynamic_topic_write">电影里的电影</span>
                    </div> 
                </div>
                <div class="recommend_dynamic_body">
                    <div class="recommend_dynamic_body_write">
                        <span>跑这个题 这个实在忍不住 (弄得我又得去看了一遍闪灵哈哈哈哈)</span>
                    </div>
                    <div class="recommend_dynamic_body_img">
                        <img class="recommend_dynamic_body_img_1" src="../../assets/img/home/body1.png">
                        <img class="recommend_dynamic_body_img_2" src="../../assets/img/home/body2.png">
                    </div>
                </div>
                <div class="recommend_dynamic_bottom">
                    <img class="recommend_dynamic_good" src="../../assets/img/home/good.png">
                    <img class="recommend_dynamic_comment" src="../../assets/img/home/comment.png">
                    <img class="recommend_dynamic_forward" src="../../assets/img/home/forward.png">
                </div>
            </div>
        </div>
    </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</div>
</template>

<script>
</script>

<style>
.home_search{
  display: flex;
  background:#4fc08d;
}
.home_search_1{
  width: 96%;
}
.home_search_2{
  padding-right: 4%;
  margin:auto;
}
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
  margin-top: 112px;
  margin-left: 20px;
}
.dynamic_rotation_button_1{
  width: 120px;
  font-size: 12px;
  border-radius: 6px;
  float: left;
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
.recommend_all{
    height: 286px;
    width: 320px;
    background: rgb(226, 226, 226);
}
.recommend_dynamic_1{
    background: white;
}
.recommend_dynamic_2{
    background: white;
    margin-top: 10px;
}
.recommend_dynamic_3{
    background: white;
    margin-top: 10px;
}
.recommend_dynamice_title{
    height: 30px;
    width: 100%;
    display: flex;
    background-color: aqua;  
}
.recommend_dynamic_title_img_1{
    height: 25px;
    width: 25px;
    margin-left: -270px;
    margin-top: 10px;
}
.recommend_dynamic_title_text{
    line-height: 30px;
    margin-top: -35px;
    margin-left: 50px;
    width: 57px;
    font-size: 15px;
}
.recommend_dynamic_title_ellipsis{
    margin-left: 280px;
    margin-top: -20px;
}
.recommend_dynamic_topic{
    margin-left: 10px;
    margin-top: 10px;
}
.recommend_dynamic_topic_background{
    background: #F2F2F2;
    height: 18px;
    width: 120px;
    border-radius: 9px;

}
.recommend_dynamic_topic_img{
    height: 14px;
    width: 14px;
}
.recommend_dynamic_topic_write{
    font-size: 12px;
    color: #31B404;
    margin-left: 5px;
}
.recommend_dynamic_body_write{
    width: 290px;
    font-size: 12px;
    margin-top: 10px;
    margin-left: 10px;
    text-align: left;
}
/* .recommend_dynamic_body_img{
    height: 90px;
    width: 100%;
    text-align: left;
    margin-left: 10px;
} */
.recommend_dynamic_body_img_1{
    height: 90px;
    width: 90px;
}
.recommend_dynamic_body_img_2{
    height: 90px;
    width: 90px;
    margin-left: 8px;
}
.recommend_dynamic_bottom{
    margin-top: 10px;
    margin-left: 10px;
    display: flex;
}
.recommend_dynamic_good{
    margin-left: 35px;
}
.recommend_dynamic_comment{
    margin-left: 70px;
}
.recommend_dynamic_forward{
    margin-left: 70px;
}
</style>