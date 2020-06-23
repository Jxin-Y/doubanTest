<template>
    <div class="search_all">
        <div class="search_search">
            <div class="search_search_1">
                <van-search
                    shape="round"
                    background="#4fc08d"
                    placeholder="拍摄一段“慢下来”的影片"
                />
            </div>
            <div class="search_search_2">
                <span @click="doubanhome" class="search_search_2_write">取消</span>
            </div>
        </div>
        <div class="search_body">
            <div class="search_body_1"></div>
            <div class="search_body_2">
                <div class="search_body_2_head">
                    <img class="search_body_2_head_img" src="../../assets/img/douban/film_buttom/doubanList.png">
                    <span class="search_body_2_head_one">实时热门书影音 ·</span>
                    <span class="search_body_2_head_two">每小时更新</span>
                    <span class="search_body_2_head_three">查看更多</span>
                    <van-icon name="arrow" />
                </div>
                <div class="search_body_2_body">
                    <div class="search_body_2_body_one">
                        <div class="search_body_2_body_one_up">
                            <div class="search_body_2_body_one_order">
                                <div class="search_body_2_body_one_order_first">
                                    <img class="search_body_2_body_one_order_one" src="../../assets/img/home/one.png">
                                </div>
                                <div class="search_body_2_body_one_order_new">
                                    <img class="search_body_2_body_one_order_n" src="../../assets/img/home/new.png">
                                </div>
                            </div>
                            <div class="search_body_2_body_one_img">
                                <img class="search_body_2_body_one_i" src="../../assets/img/home/mojitoImg.png">
                            </div>
                            <div class="search_body_2_body_one_text">
                                <div class="search_body_2_body_one_write1">
                                    <span class="search_body_2_body_one_w1">Mojito</span>
                                </div>
                                <div class="search_body_2_body_one_pic">
                                    <img class="search_body_2_body_one_p" src="../../assets/img/home/mojito.png">
                                </div>
                                <div class="search_body_2_body_one_write2">
                                    <span class="search_body_2_body_one_w2">唱片</span>
                                </div>
                            </div>
                        </div>
                        <div class="search_body_2_body_one_down">
                             <img class="search_body_2_body_d" src="../../assets/img/home/onedown.png">
                        </div>
                    </div>
                    <div class="search_body_2_body_two">
                        <img class="search_body_2_body_two_img" src="../../assets/img/home/one3.png" >
                    </div>
                </div>
            </div>
            <div class="search_body_3">
                <div class="search_body_2_head">
                    <img class="search_body_2_head_img" src="../../assets/img/douban/film_buttom/doubanList.png">
                    <span class="search_body_2_head_one">小组热门趋势榜 ·</span>
                    <span class="search_body_2_head_two">每小时更新</span>
                    <span class="search_body_2_head_three">查看更多</span>
                    <van-icon name="arrow" />
                </div>
                <div class="search_body_3_body">
                    <img class="search_body_3_body_img" src="../../assets/img/home/two.png">
                </div>
            </div>
            <div class="search_body_4">
                <div class="search_body_4_head">
                    <span>热门话题</span>
                </div>
                <div class="search_body_4_body_one">
                    <div class="search_body_4_body_one_up">
                        <img class="search_body_4_body_one_up_img1" src="../../assets/img/home/topic.png">
                        <span class="search_body_4_body_one_up_write">你弄丢的最心疼的一本书</span>
                        <img class="search_body_4_body_one_up_img2" src="../../assets/img/home/newLabel.png">
                    </div>
                    <div class="search_body_4_body_one_down">
                        <span class="search_body_4_body_one_down_write">978篇内容·27.9万次浏览</span>
                    </div>
                    <hr class="search_body_4_body_one_hr">
                </div>
                <div class="search_body_4_body_one">
                    <div class="search_body_4_body_one_up">
                        <img class="search_body_4_body_one_up_img1" src="../../assets/img/home/topic.png">
                        <span class="search_body_4_body_one_up_write">为了解压，你做过哪些奇怪的事情？</span>
                    </div>
                    <div class="search_body_4_body_one_down">
                        <span class="search_body_4_body_one_down_write">1843篇内容·161.8万次浏览</span>
                    </div>
                    <hr class="search_body_4_body_one_hr">
                </div>
                <div class="search_body_4_body_one">
                    <div class="search_body_4_body_one_up">
                        <img class="search_body_4_body_one_up_img1" src="../../assets/img/home/topic.png">
                        <span class="search_body_4_body_one_up_write">上学时“孤立他人”或“被孤立”的经历</span>
                        <img class="search_body_4_body_one_up_img2" src="../../assets/img/home/newLabel.png">
                    </div>
                    <div class="search_body_4_body_one_down">
                        <span class="search_body_4_body_one_down_write">220篇内容·8.1万次浏览</span>
                    </div>
                    <hr class="search_body_4_body_one_hr">
                </div>
                <div class="search_body_4_body_one">
                    <div class="search_body_4_body_one_up">
                        <img class="search_body_4_body_one_up_img1" src="../../assets/img/home/topic.png">
                        <span class="search_body_4_body_one_up_write">学生时代听过的电台节目</span>
                    </div>
                    <div class="search_body_4_body_one_down">
                        <span class="search_body_4_body_one_down_write">775篇内容·19.1万次浏览</span>
                    </div>
                    <hr class="search_body_4_body_one_hr">
                </div>
                <div class="search_body_4_body_one">
                    <div class="search_body_4_body_one_up">
                        <img class="search_body_4_body_one_up_img1" src="../../assets/img/home/topic.png">
                        <span class="search_body_4_body_one_up_write">我的2020山半年总结</span>
                        <img class="search_body_4_body_one_up_img2" src="../../assets/img/home/newLabel.png">
                    </div>
                    <div class="search_body_4_body_one_down">
                        <span class="search_body_4_body_one_down_write">503篇内容·22.7万次浏览</span>
                    </div>
                    <hr class="search_body_4_body_one_hr">
                </div>
            </div>
            <div class="search_body_5">
                <span class="search_body_5_write">-以上内容，每日更新-</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        doubanhome(){
            this.$router.push("/douban_home")
        },
    }
}
</script>

<style scoped>
.search_search{
  display: flex;
  background:#4fc08d;
}
.search_search_1{
  width: 88%;
}
.search_search_2{
  padding-right: 4%;
  margin:auto;
}
.search_search_2_write{
    font-size: 12px; 
    color:white;
}
.search_body{
    background-color: rgb(241, 241, 241);
    height: 700px;
    width: 320px;;
}
.search_body_1{
    background-color: white;
    height: 10px;
    width: 320px;
}
.search_body_2{
    margin-top: 10px;
}
.search_body_2_head{
    text-align: left;
    margin-top: 10px;
    display: flex;
}
.search_body_2_head_img{
    margin-left: 7px;
    height: 13px;
    width: 13px;
}
.search_body_2_head_one{
    font-size: 12px;
    font-weight: 800;
    margin-left: 3px;
    height: 15px;
}
.search_body_2_head_two{
    font-size: 12px;
    
    margin-left: 5px;
    height: 15px;
    color: rgb(221, 216, 216);
}
.search_body_2_head_three{
    font-size: 12px;
    margin-left: 5px;
    height: 15px;
    color: #4fc08d;
    margin-left: 70px;
}
.search_body_2_body_one_order_one{
    padding-top: 5px;
    height:15px;
    width:15px;
}
.search_body_2_body_one_order_new{
    margin-top: -3px;
}
.search_body_2_body_one_order_n{
    height: 12px;
    width: 24px;
}
.search_body_2_body_one_i{
    height: 38px;
    width: 38px;
}
.search_body_2_body_one_write1{
    margin-top: -5px;
}
.search_body_2_body_one_w1{
    font-size: 15px;
    font-weight: 800px;
}
.search_body_2_body_one_p{
    height: 13px;
    width: 70px;
}
.search_body_2_body_one_write2{
    height: 16px;
    margin-top: -8px;
}
.search_body_2_body_one_w2{
    font-size: 9px;
    padding-left: 2px;
    color: rgb(221, 216, 216);
    
}
.search_body_2_body_one_text{
    text-align: left;
    margin-left: 2px;
}
.search_body_2_body_one_up{
    width: 150px;
    display: flex;
    margin-top: 10px;
    margin-left: 5px;
}
.search_body_2_body_d{
    height: 55px;
    width: 150px;
    margin-left: 5px;
}
.search_body_2_body_one{
    display: flex;
}
.search_body_2{
    height: 204px;
    width: 320px;
    background: white;
}
.search_body_2_body_two_img{
    height: 122px;
    width: 320px;
}
.search_body_3_body_img{
    height: 155px;
    width: 320px;
}
.search_body_3{
    background: white;
}
.search_body_4{
    margin-top: 10px;
}
.search_body_4_head{
    font-size: 12px;
    font-weight: 600;
    text-align: left;
    margin-left: 10px;
}
.search_body_4_body_one{
    text-align: left;
    margin-left: 10px;
    margin-top: 5px;
}
.search_body_4_body_one_up_write{
    font-size: 13px;
    margin-left: 3px;
}
.search_body_4_body_one_up_img1{
    height: 14px;
    width: 14px;
}
.search_body_4_body_one_up_img2{
    margin-left: 2px;
}
.search_body_4_body_one_down_write{
    font-size: 8px;
    color: rgb(219, 215, 215);
}
.search_body_4_body_one_down{
    padding-left: 17px;
}
.search_body_4_body_one_hr{
    width:300px;
    color: rgb(221, 216, 216);
}
.search_body_4{
    background: white;
}
.search_body_5_write{
    font-size: 8px;
    color: rgb(221, 216, 216);
    line-height: 58px;
}
.search_body_5{
    margin-top: 20px;
    height: 58px;
    width: 320px;
    background-color: rgb(241, 241, 241);
}
</style>