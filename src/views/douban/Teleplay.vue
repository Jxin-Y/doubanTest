<template>
    <div class="teleplay_all">
        <div class="film_button">
            <div class="film_button_1">
                    <img class="film_button_1_img" src="../../assets/img/douban/film_buttom/filmSearch.png">
                    <p class="film_button_1_write">找电视</p>
            </div>
            <div class="film_button_2">
                    <img class="film_button_2_img" src="../../assets/img/douban/film_buttom/doubanList.png">
                    <p class="film_button_2_write">豆瓣榜单</p>
            </div>
            <div class="film_button_3">
                    <img class="film_button_2_img" src="../../assets/img/douban/film_buttom/comingSoon.png">
                    <p class="film_button_2_write">即将播出</p>
            </div>
            <div class="film_button_4">
                    <img class="film_button_4_img" src="../../assets/img/douban/film_buttom/filmSearch.png">
                    <p class="film_button_4_write">播出时间表</p>
            </div>
        </div>
        <div class="teleplay_one">
            <div class="teleplay_one1">
                <van-tabs
                v-model="active"
                line-width="0"
                >
                    <van-tab title="热播新剧">
                        <div class="teleplay_one_body_up">
                            <van-button round size="mini">综合</van-button>
                            <van-button round size="mini">国产剧</van-button>
                            <van-button round size="mini">英美剧</van-button>
                            <van-button round size="mini">日剧</van-button>
                            <van-button round size="mini">韩剧</van-button>
                            <van-button round size="mini">动画</van-button>
                        </div>
                        <div class="teleplay_one_body_down">
                            <div class="teleplay_one_body_down1">
                                <div class="teleplay_one_body_down_text2">
                                    <div>
                                        <img class="teleplay_one_body_down_img1" src="..\..\assets\img\douban\telepaly\hotnew11.png">
                                    </div>
                                    <div>
                                        <img class="teleplay_one_body_down_img2" src="..\..\assets\img\douban\telepaly\play.png">
                                        <span class="teleplay_one_body_down_write">隐秘的角落</span>
                                    </div>
                                    <div>
                                        <img class="teleplay_one_body_down_img3" src="..\..\assets\img\douban\telepaly\hotnew12.png">
                                    </div>
                                </div>
                                <div class="teleplay_one_body_down_text1">
                                    <div>
                                        <img class="teleplay_one_body_down_img1" src="..\..\assets\img\douban\telepaly\hotnew21.png">
                                    </div>
                                    <div>
                                        <img class="teleplay_one_body_down_img2" src="..\..\assets\img\douban\telepaly\play.png">
                                        <span class="teleplay_one_body_down_write">传闻中的陈芊芊</span>
                                    </div>
                                    <div>
                                        <img class="teleplay_one_body_down_img3" src="..\..\assets\img\douban\telepaly\hotnew22.png">
                                    </div>
                                </div>
                                <div class="teleplay_one_body_down_text1">
                                    <div>
                                        <img class="teleplay_one_body_down_img1" src="..\..\assets\img\douban\telepaly\hotnew31.png">
                                    </div>
                                    <div>
                                        <img class="teleplay_one_body_down_img2" src="..\..\assets\img\douban\telepaly\play.png">
                                        <span class="teleplay_one_body_down_write">十日游戏</span>
                                    </div>
                                    <div>
                                        <img class="teleplay_one_body_down_img3" src="..\..\assets\img\douban\telepaly\hotnew22.png">
                                    </div>
                                </div>
                                <div class="teleplay_one_body_down_text1">
                                    <div>
                                        <img class="teleplay_one_body_down_img1" src="..\..\assets\img\douban\telepaly\hotnew41.png">
                                    </div>
                                    <div>
                                        <img class="teleplay_one_body_down_img2" src="..\..\assets\img\douban\telepaly\play.png">
                                        <span class="teleplay_one_body_down_write">慕白首</span>
                                    </div>
                                    <div>
                                        <img class="teleplay_one_body_down_img3" src="..\..\assets\img\douban\telepaly\hotnew42.png">
                                    </div>
                                </div>
                                <div class="teleplay_one_body_down_text1">
                                    <div>
                                        <img class="teleplay_one_body_down_img1" src="..\..\assets\img\douban\telepaly\hotnew51.png">
                                    </div>
                                    <div>
                                        <img class="teleplay_one_body_down_img2" src="..\..\assets\img\douban\telepaly\play.png">
                                        <span class="teleplay_one_body_down_write">我才不要和你...</span>
                                    </div>
                                    <div>
                                        <img class="teleplay_one_body_down_img3" src="..\..\assets\img\douban\telepaly\hotnew52.png">
                                    </div>
                                </div>
                                <div class="teleplay_one_body_down_text1">
                                    <div>
                                        <img class="teleplay_one_body_down_img1" src="..\..\assets\img\douban\telepaly\hotnew61.png">
                                    </div>
                                    <div>
                                        <img class="teleplay_one_body_down_img2" src="..\..\assets\img\douban\telepaly\play.png">
                                        <span class="teleplay_one_body_down_write">三叉戟</span>
                                    </div>
                                    <div>
                                        <img class="teleplay_one_body_down_img3" src="..\..\assets\img\douban\telepaly\hotnew52.png">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </van-tab>
                    <van-tab title="热播综艺">
                        <div class="teleplay_one_body_up">
                            <van-button round size="mini">综合</van-button>
                            <van-button round size="mini">国内</van-button>
                            <van-button round size="mini">国外</van-button>
                        </div>
                        <div class="teleplay_one_body_down">
                            <div class="teleplay_one_body_down1">
                                <div class="teleplay_one_body_down_text2">
                                    <div>
                                        <img class="teleplay_one_body_down_img1" src="..\..\assets\img\douban\telepaly\hotplay11.png">
                                    </div>
                                    <div>
                                        <span class="teleplay_one_body_down_write1">乘风破浪的姐姐</span>
                                    </div>
                                    <div>
                                        <img class="teleplay_one_body_down_img3" src="..\..\assets\img\douban\telepaly\hotplay12.png">
                                    </div>
                                </div>
                                <div class="teleplay_one_body_down_text1">
                                    <div>
                                        <img class="teleplay_one_body_down_img1" src="..\..\assets\img\douban\telepaly\hotplay21.png">
                                    </div>
                                    <div>
                                        
                                        <span class="teleplay_one_body_down_write1">向往的生活 第四季</span>
                                    </div>
                                    <div>
                                        <img class="teleplay_one_body_down_img3" src="..\..\assets\img\douban\telepaly\hotplay22.png">
                                    </div>
                                </div>
                                <div class="teleplay_one_body_down_text1">
                                    <div>
                                        <img class="teleplay_one_body_down_img1" src="..\..\assets\img\douban\telepaly\hotplay31.png">
                                    </div>
                                    <div>
                                        <img class="teleplay_one_body_down_img2" src="..\..\assets\img\douban\telepaly\play.png">
                                        <span class="teleplay_one_body_down_write">菱格时代DD52</span>
                                    </div>
                                    <div>
                                        <img class="teleplay_one_body_down_img3" src="..\..\assets\img\douban\telepaly\hotplay22.png">
                                    </div>
                                </div>
                                <div class="teleplay_one_body_down_text1">
                                    <div>
                                        <img class="teleplay_one_body_down_img1" src="..\..\assets\img\douban\telepaly\hotplay41.png">
                                    </div>
                                    <div>
                                        <img class="teleplay_one_body_down_img2" src="..\..\assets\img\douban\telepaly\play.png">
                                        <span class="teleplay_one_body_down_write">如果国宝会说...</span>
                                    </div>
                                    <div>
                                        <img class="teleplay_one_body_down_img3" src="..\..\assets\img\douban\telepaly\hotplay42.png">
                                    </div>
                                </div>
                                <div class="teleplay_one_body_down_text1">
                                    <div>
                                        <img class="teleplay_one_body_down_img1" src="..\..\assets\img\douban\telepaly\hotplay51.png">
                                    </div>
                                    <div>
                                        <img class="teleplay_one_body_down_img2" src="..\..\assets\img\douban\telepaly\play.png">
                                        <span class="teleplay_one_body_down_write">奔跑吧 第四季</span>
                                    </div>
                                    <div>
                                        <img class="teleplay_one_body_down_img3" src="..\..\assets\img\douban\telepaly\hotplay52.png">
                                    </div>
                                </div>
                                <div class="teleplay_one_body_down_text1">
                                    <div>
                                        <img class="teleplay_one_body_down_img1" src="..\..\assets\img\douban\telepaly\hotplay61.png">
                                    </div>
                                    <div>
                                        <img class="teleplay_one_body_down_img2" src="..\..\assets\img\douban\telepaly\play.png">
                                        <span class="teleplay_one_body_down_write">拜托了冰箱...</span>
                                    </div>
                                    <div>
                                        <img class="teleplay_one_body_down_img3" src="..\..\assets\img\douban\telepaly\hotplay62.png">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </van-tab>
                </van-tabs>
            </div>
            <div class="teleplay_one1_text">
                <span class="teleplay_one1_text1">全部 343</span>
                <van-icon class="teleplay_one1_text2" size="10px" name="arrow" />
            </div>
        </div>
        <div class="teleplay_two">
            <img class="teleplay_two_img" src="..\..\assets\img\douban\telepaly\jijiang.png">
        </div>
        <div class="teleplay_three">
            <div class="teleplay_three1">
                <div class="teleplay_three_img2">
                    <img class="teleplay_three_img" src="..\..\assets\img\douban\telepaly\shishi1.png">
                </div>
                <div class="teleplay_three_img2">
                    <img class="teleplay_three_img" src="..\..\assets\img\douban\telepaly\shishi2.png">
                </div>
                <div class="teleplay_three_img2">
                    <img class="teleplay_three_img" src="..\..\assets\img\douban\telepaly\shishi3.png">
                </div>
                <div class="teleplay_three_img2">
                    <img class="teleplay_three_img" src="..\..\assets\img\douban\telepaly\shishi4.png">
                </div>
                <div class="teleplay_three_img2">
                    <img class="teleplay_three_img" src="..\..\assets\img\douban\telepaly\shishi5.png">
                </div>
                <div class="teleplay_three_img2">
                    <img class="teleplay_three_img1" src="..\..\assets\img\douban\telepaly\shishi6.png">
                </div>
            </div>
        </div>
        <div class="teleplay_four">
            <div class="teleplay_four1">
                <div class="teleplay_four_i">
                    <img class="teleplay_four_img1" src="..\..\assets\img\douban\telepaly\piandan1.png">
                </div>
                <div class="teleplay_four_i">
                    <img class="teleplay_four_img2" src="..\..\assets\img\douban\telepaly\piandan2.png">
                </div>
                <div class="teleplay_four_i">
                    <img class="teleplay_four_img3" src="..\..\assets\img\douban\telepaly\piandan3.png">
                </div>
                <div class="teleplay_four_i">
                    <img class="teleplay_four_img4" src="..\..\assets\img\douban\telepaly\piandan4.png">
                </div>
            </div>
        </div>
        <div class="teleplay_five">
            <div class="film_search_title">
                <p class="film_search_title_write">找电视</p>
            </div>
            <div class="film_search_main">
                <div class="film_search_main_click">
                    <img class="film_search_main_click_img" src="../../assets/img/douban/search/searchPlay.png">
                    <span class="film_search_main_click_write">可播放</span>
                </div>
                <div class="film_search_main_down">
                    <van-dropdown-menu>
                        <van-dropdown-item v-model="value1" :options="option1" />
                        <van-dropdown-item v-model="value2" :options="option2" />
                        <van-dropdown-item v-model="value3" :options="option3" />
                    </van-dropdown-menu>
                </div>
                <div class="film_search_main_screen">
                        <img class="film_search_main_screen_img" src="../../assets/img/douban/search/screen.png">
                        <span class="film_search_main_screen_write">更多</span>
                </div>
            </div>
            <div class="film_search_bottom">
                <van-button class="film_search_bottom_1" round type="default" size="mini">恐怖</van-button>
                <van-button class="film_search_bottom_2" round type="default" size="mini">谍战</van-button>
                <van-button class="film_search_bottom_3" round type="default" size="mini">传记</van-button>
                <van-button class="film_search_bottom_4" round type="default" size="mini">穿越</van-button>
                <van-button class="film_search_bottom_5" round type="default" size="mini">儿童</van-button>
                <van-button class="film_search_bottom_6" round type="default" size="mini">商业</van-button>
            </div>
        </div>
        <div class="teleplay_six">
            <div class="teleplay_six_i">
                <img class="teleplay_six_img" src="..\..\assets\img\douban\telepaly\lijichakan.png">
            </div>
            <div class="teleplay_six_i1">
                <img class="teleplay_six_img1" src="..\..\assets\img\douban\telepaly\ouxiangju.png">
            </div>
        </div>
        <div class="teleplay_seven">
            <div class="film_search_introduce_img">
                <img class="film_search_introduce_img_1" src="..\..\assets\img\douban\telepaly\yexingshusheng1.png">
                <img class="film_search_introduce_img_2" src="..\..\assets\img\douban\telepaly\yexingshusheng2.png">
            </div>
            <div class="film_search_introduce_text">
                <div class="film_search_introduce_text_name">
                    <div class="film_search_introduce_text_name_write">
                        <span class="film_search_introduce_text_name_write_1">夜行书生</span>
                        <span class="film_search_introduce_text_name_write_2">(2015)</span>
                    </div>
                    <div class="film_search_introduce_text_name_write_img">
                        <img class="film_search_introduce_text_name_write_img_1" src="../../assets/img/douban/introduce/xzqjn.png">
                    </div>
                </div>
                <div class="film_search_introduce_text_want">
                    <div class="film_search_introduce_text_want_line">
                        <img class="film_search_introduce_text_want_line_1" src="../../assets/img/douban/introduce/line.png">
                    </div>
                    <div class="film_search_introduce_text_want_img">
                        <img class="film_search_introduce_text_want_img_1" src="../../assets/img/douban/introduce/wantlook.png">
                        <div class="film_search_introduce_text_want_img_write">
                            <span class="film_search_introduce_text_want_img_write_1">想 看</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="film_search_introduce_img">
                <img class="film_search_introduce_img_1" src="..\..\assets\img\douban\telepaly\woaiwojia1.png">
                <img class="film_search_introduce_img_2" src="..\..\assets\img\douban\telepaly\woaiwojia2.png">
            </div>
            <div class="film_search_introduce_text">
                <div class="film_search_introduce_text_name">
                    <div class="film_search_introduce_text_name_write">
                        <span class="film_search_introduce_text_name_write_1">我爱我家</span>
                        <span class="film_search_introduce_text_name_write_2">(1993)</span>
                    </div>
                    <div class="film_search_introduce_text_name_write_img">
                        <img class="film_search_introduce_text_name_write_img_1" src="../../assets/img/douban/introduce/xzqjn.png">
                    </div>
                </div>
                <div class="film_search_introduce_text_want">
                    <div class="film_search_introduce_text_want_line">
                        <img class="film_search_introduce_text_want_line_1" src="../../assets/img/douban/introduce/line.png">
                    </div>
                    <div class="film_search_introduce_text_want_img">
                        <img class="film_search_introduce_text_want_img_1" src="../../assets/img/douban/introduce/wantlook.png">
                        <div class="film_search_introduce_text_want_img_write">
                            <span class="film_search_introduce_text_want_img_write_1">想 看</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
  data() {
    return {
      value1: 0,
      value2: 'a',
      value3: 'A',
      option1: [
        { text: '类型', value: 0 },
        { text: '喜剧', value: 1 },
        { text: '爱情', value: 2 },
        { text: '动作', value: 3 },
      ],
      option2: [
        { text: '地区', value: 'a' },
        { text: '华语', value: 'b' },
        { text: '欧美', value: 'c' },
        { text: '韩国', value: 'd' },
      ],
      option3: [
        { text: '排序', value: 'A' },
        { text: '热度', value: 'B' },
        { text: '首映', value: 'C' },
        { text: '高分', value: 'D' },
      ],
    };
  },
};
</script>

<style scoped>
.teleplay_one1{
    width: 55%;
}
.teleplay_one1_text1{
    font-size: 10px;
    font-weight: 1000;
}
.teleplay_one1_text{
    margin-top: 13px;
    margin-left: 80px;
}
.teleplay_one{
    display: flex;
}
.teleplay_one_body_up{
    width: 100vw;

}
.teleplay_one_body_down_img1{
    height: 140px;
    width: 100px;
}
.teleplay_one_body_down_img2{
    height: 10px;
    width: 10px;
}
.teleplay_one_body_down_write{
    font-size: 12px;
    font-weight: 1000;
    margin-left: 3px;
}
.teleplay_one_body_down_img3{
    height: 13px;
    width: 75px;
}
.teleplay_one_body_down_text1{
    text-align: left;
    margin-left: 10px;
    box-sizing: border-box;
}
.teleplay_one_body_down1{
    display: flex;
    margin-top: 10px;
    height: 190px;
    width: 650px;

}
.teleplay_one_body_down{
    margin-left: 10px;
    height: 200px;
    width: 300px;
    overflow-x: scroll;
    box-sizing: border-box;
}
.teleplay_one_body_up{
    text-align: left;
}
.teleplay_one_body_down_write1{
    font-size: 12px;
    font-weight: 1000;
}
.teleplay_one_body_down_text2{
    text-align: left;
    box-sizing: border-box;
}
.teleplay_two_img{
    width:310px;
    height: 91px;
}
.teleplay_three_img{
    width: 250px;
    height: 201px; 
}
.teleplay_three_img1{
    height: 201px;
    width: 51px;
}
.teleplay_three1{
    display: flex;
    
    height: 205px;
    width: 1371px;
}
.teleplay_three_img2{
    margin-left: 10px;
    box-sizing: border-box;

}
.teleplay_three{
    height: 205px;
    width: 320px;
    overflow-x: scroll;
    box-sizing: border-box;
    margin-top: 30px;
}
.teleplay_four_img1{
    height: 100px;
    width: 222px;
}
.teleplay_four_img2{
    height: 100px;
    width: 223px;
}
.teleplay_four_img3{
    height: 100px;
    width: 223px;
}
.teleplay_four_img4{
    height: 100px;
    width: 47px;
}
.teleplay_four_i{
    margin-left: 10px;
    box-sizing: border-box;
}
.teleplay_four1{
    display: flex;
    height: 105px;
    width: 755px;
}
.teleplay_four{
    height: 105px;
    width: 320px;
    overflow-x: scroll;
    box-sizing: border-box;
    margin-top: 30px;
}
.teleplay_six_img{
    height: 177px;
    width: 290px;
}
.teleplay_six_img1{
    height: 251px;
    width: 300px;
}
.teleplay_six_i{
    margin-top: 20px;
}
.teleplay_six_i1{
    margin-top: 30px;
}
</style>