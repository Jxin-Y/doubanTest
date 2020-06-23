<template>
<div>
  <div class="douban_home_search">
    <div class="douban_home_search_1">
      <van-search
        v-model="value" 
        @click="search"
        shape="round"
        placeholder="请输入搜索关键词"
        right-icon="scan"
      />
    </div>
    <div @click="message" class="douban_home_search_2">
      <van-icon  name="envelop-o" />
    </div>
  </div>
  <div class="douban_home_body">
    <div class="douban_home_body1">
      <van-tabs
        @click="onClick"
        class="douban_home_body_bar" 
        line-height="1.5px"
        line-width="27px"
        :color="'#000000'"
        >
        <van-tab title="电影">
          <div class="film_all">
          <div class="film_button">
            <div class="film_button_1">
                    <img class="film_button_1_img" src="../../assets/img/douban/film_buttom/filmSearch.png">
                    <p class="film_button_1_write">找电影</p>
            </div>
            <div class="film_button_2">
                    <img class="film_button_2_img" src="../../assets/img/douban/film_buttom/doubanList.png">
                    <p class="film_button_2_write">豆瓣榜单</p>
            </div>
            <div class="film_button_3">
                    <img class="film_button_2_img" src="../../assets/img/douban/film_buttom/comingSoon.png">
                    <p class="film_button_2_write">即将上映</p>
            </div>
            <div class="film_button_4">
                    <img class="film_button_4_img" src="../../assets/img/douban/film_buttom/filmSearch.png">
                    <p class="film_button_4_write">豆瓣片单</p>
            </div>
        </div>

        <div class="film_hot">
            <div class="film_hot_title">
                <span class="film_hot_title_1">豆瓣热门</span>
                <span class="film_hot_title_2">全部 495 <van-icon name="arrow" /></span>
            </div>
            <div class="film_hot_movie">
                <div class="film_hot_movie_all">
                    <div class="film_hot_movie_one">
                        <img class="film_hot_movie_img_1" src="../../assets/img/douban/movie/chunchao.png"><br />
                        <div class="film_hot_movie_write_1">
                            <img class="film_hot_movie_write_1_1" src="../../assets/img/douban/movie/play.png">
                            <span class="film_hot_movie_write_1_2">春潮</span>
                        </div>
                        <img class="film_hot_movie_grade_1" src="../../assets/img/douban/movie/ccGrade.png">
                    </div>
                    <div class="film_hot_movie_two">
                        <img class="film_hot_movie_img_2" src="../../assets/img/douban/movie/zhenxinbanjie.png"><br />
                        <span class="film_hot_movie_write_2">真知半解</span>
                        <img class="film_hot_movie_grade_2" src="../../assets/img/douban/movie/zxbjGrade.png">
                    </div>
                    <div class="film_hot_movie_three">
                        <img class="film_hot_movie_img_3" src="../../assets/img/douban/movie/wendi.png"><br />
                        <span class="film_hot_movie_write_3">温蒂</span>
                        <img class="film_hot_movie_grade_3" src="../../assets/img/douban/movie/wdGrade.png">
                    </div>
                    <div class="film_hot_movie_four">
                        <img class="film_hot_movie_img_4" src="../../assets/img/douban/movie/tianqizhizi.png"><br />
                        <span class="film_hot_movie_write_4">天气之子</span>
                        <img class="film_hot_movie_grade_4" src="../../assets/img/douban/movie/tqzzGrade.png">
                    </div>
                    <div class="film_hot_movie_five">
                        <img class="film_hot_movie_img_5" src="../../assets/img/douban/movie/yangguangpuzhao.png"><br />
                        <span class="film_hot_movie_write_5">阳光普照</span>
                        <img class="film_hot_movie_grade_5" src="../../assets/img/douban/movie/ygpzGrade.png">
                    </div>
                </div>
            </div>
        </div>

        <div class="fim_to">
            <div class="film_update">
                <div class="film_to_update_1">
                    <img class="film_update_img_1" src="../../assets/img/douban/update/time.png">
                </div>
                <!-- <div class="film_to_update_2">
                    <img class="film_update_img_2" src="../../assets/img/douban/update/week.png">
                </div>
                <div class="film_to_update_3">
                    <div class="film_to_update_bg">
                        <span class="film_to_update_bg_write">更多</span>
                        <van-icon name="arrow" />
                    </div>
                </div> -->
            </div>
        </div>

        <div class="film_advertising">
            <img class="film_advertising_img" src="../../assets/img/douban/advertising/advertising.png">
        </div>
        
        <div class="film_set">
            <img class="film_set_img" src="../../assets/img/douban/movie/movieSet.png">
        </div>
        <div class="film_search">
            <div class="film_search_title">
                <p class="film_search_title_write">找电影</p>
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
                        <span class="film_search_main_screen_write">筛选</span>
                </div>
            </div>

            <div class="film_search_bottom">
                <van-button class="film_search_bottom_1" round type="default" size="mini">治愈</van-button>
                <van-button class="film_search_bottom_2" round type="default" size="mini">美食</van-button>
                <van-button class="film_search_bottom_3" round type="default" size="mini">名著改编</van-button>
                <van-button class="film_search_bottom_4" round type="default" size="mini">商业</van-button>
                <van-button class="film_search_bottom_5" round type="default" size="mini">孤独</van-button>
                <van-button class="film_search_bottom_6" round type="default" size="mini">童年</van-button>
            </div>

            <div class="film_search_introduce">
                <div class="film_search_introduce_img">
                    <img class="film_search_introduce_img_1" src="../../assets/img/douban/introduce/xianzaiqujianni.png">
                    <img class="film_search_introduce_img_2" src="../../assets/img/douban/introduce/xzqjnPoster.png">
                </div>
                <div class="film_search_introduce_text">
                    <div class="film_search_introduce_text_name">
                        <div class="film_search_introduce_text_name_write">
                            <span class="film_search_introduce_text_name_write_1">现在去见你</span>
                            <span class="film_search_introduce_text_name_write_2">(2018)</span>
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
        <div class="film_end"></div>
    </div>
        </van-tab>
        <van-tab title="电视">
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
        <div class="teleplay_end"></div>
    
        </van-tab>
        <van-tab title="读书">
            <div class="book_all">
        <div class="book_one">
            <div class="film_button">
                <div class="film_button_1">
                    <img class="film_button_1_img" src="../../assets/img/douban/film_buttom/filmSearch.png">
                    <p class="film_button_1_write">找图书</p>
                </div>
                <div class="film_button_2">
                    <img class="film_button_2_img" src="../../assets/img/douban/film_buttom/doubanList.png">
                    <p class="film_button_2_write">豆瓣榜单</p>
                </div>
                <div class="film_button_3">
                    <img class="film_button_2_img" src="../../assets/img/douban/film_buttom/comingSoon.png">
                    <p class="film_button_2_write">豆瓣猜</p>
                </div>
                <div class="film_button_4">
                    <img class="film_button_4_img" src="../../assets/img/douban/film_buttom/filmSearch.png">
                    <p class="film_button_4_write">豆瓣书单</p>
                </div>
            </div>
        </div>
        <div class="book_two">
            <div class="film_hot_title">
                <span class="film_hot_title_1">新书速递</span>
                <span class="film_hot_title_2">全部 43 <van-icon name="arrow" /></span>
            </div>
            <div class="book_two_body">
                <div class="book_two_body1">
                    <div class="book_two_body_new">
                        <div class="book_two_body_new_up">
                            <div class="book_two_body_new_up_img">
                                <img class="book_two_body_new_up_img1" src="..\..\assets\img\douban\book\newbook1.png">
                            </div>
                            <div class="book_two_body_new_up_text">
                                <div>
                                    <span class="book_two_body_new_up_text1">爱说教的男人</span>
                                </div>
                                <div class="book_two_body_new_up_text4">
                                    <span class="book_two_body_new_up_text2">2334人想看/【美】丽贝卡·...</span>
                                </div>
                                <div>
                                    <van-button class="book_two_body_new_up_text3" size="mini" round >女性主义</van-button>
                                    <van-button class="book_two_body_new_up_text3" size="mini" round >女性</van-button>
                                </div>
                            </div>
                        </div>
                        <div class="book_two_body_new_down">
                            <span class="book_two_body_new_down_text">男性如何长期霸占说教的位置？女性的声音为何被消音？</span>
                        </div>
                    </div>
                    <div class="book_two_body_new">
                        <div class="book_two_body_new_up">
                            <div class="book_two_body_new_up_img">
                                <img class="book_two_body_new_up_img1" src="..\..\assets\img\douban\book\newbook2.png">
                            </div>
                            <div class="book_two_body_new_up_text">
                                <div>
                                    <span class="book_two_body_new_up_text1">认识建筑</span>
                                </div>
                                <div class="book_two_body_new_up_text4">
                                    <span class="book_two_body_new_up_text2">2677人想看/【美】罗伯特·...</span>
                                </div>
                                <div>
                                    <van-button class="book_two_body_new_up_text3" size="mini" round >建筑</van-button>
                                    <van-button class="book_two_body_new_up_text3" size="mini" round >艺术</van-button>
                                </div>
                            </div>
                        </div>
                        <div class="book_two_body_new_down">
                            <span class="book_two_body_new_down_text">精选五千年来72座建筑典范，开启环球云游建筑之旅</span>
                        </div>
                    </div>
                    <div class="book_two_body_new">
                        <div class="book_two_body_new_up">
                            <div class="book_two_body_new_up_img">
                                <img class="book_two_body_new_up_img1" src="..\..\assets\img\douban\book\newbook3.png">
                            </div>
                            <div class="book_two_body_new_up_text">
                                <div>
                                    <span class="book_two_body_new_up_text1">地下室手记</span>
                                </div>
                                <div class="book_two_body_new_up_text4">
                                    <span class="book_two_body_new_up_text2">2334人想看/【美】丽贝卡·...</span>
                                </div>
                                <div>
                                    <van-button class="book_two_body_new_up_text3" size="mini" round >女性主义</van-button>
                                    <van-button class="book_two_body_new_up_text3" size="mini" round >女性</van-button>
                                </div>
                            </div>
                        </div>
                        <div class="book_two_body_new_down">
                            <span class="book_two_body_new_down_text">男性如何长期霸占说教的位置？女性的声音为何被消音？</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="book_three">
            <div class="film_hot_title">
                <span class="film_hot_title_1">豆瓣榜单</span>
                <span class="film_hot_title_2">全部 3 <van-icon name="arrow" /></span>
            </div>
            <div class="book_three_img">
                <div class="book_three_img1">
                    <img class="book_three_img_i" src="..\..\assets\img\douban\book\example1.png">
                    <img class="book_three_img_i" src="..\..\assets\img\douban\book\example2.png">
                    <img class="book_three_img_i" src="..\..\assets\img\douban\book\example3.png">
                    <img class="book_three_img_e" src="..\..\assets\img\douban\book\exampleMore.png">
                </div>
            </div>
        </div>
        <div class="book_four">
            <div class="book_four_button">
                <van-button class="book_four_button_t" round size="small">豆瓣推荐</van-button>
                <van-button class="book_four_button_t" round size="small">中外文学</van-button>
                <van-button class="book_four_button_t" round size="small">历史文化</van-button>
                <van-button class="book_four_button_t" round size="small">社科纪实</van-button>
            </div>
            <div class="book_four_button">
                <van-button class="book_four_button_t" round size="small">科学新知</van-button>
                <van-button class="book_four_button_t" round size="small">艺术设计</van-button>
                <van-button class="book_four_button_t" round size="small">影视戏剧</van-button>
                <van-button class="book_four_button_t" round size="small">更多书籍<van-icon name="arrow" /></van-button>
            </div>
        </div>
        <div class="book_five">
            <div class="book_five_up">
                <div class="book_five_up1">
                    <img class="book_five_up1_img1" src="..\..\assets\img\douban\book\renlei.png" >
                    <div>
                        <span class="book_five_up1_text">人类灭绝后</span>
                    </div>
                    <img class="book_five_up1_img2" src="..\..\assets\img\douban\book\renleiGrade.png">
                </div>
                <div class="book_five_up1">
                    <img class="book_five_up1_img1" src="..\..\assets\img\douban\book\demi.png" >
                    <div>
                        <span class="book_five_up1_text">德米安</span>
                    </div>
                    <img class="book_five_up1_img2" src="..\..\assets\img\douban\book\demiGrade.png">
                </div>
                <div class="book_five_up1">
                    <img class="book_five_up1_img1" src="..\..\assets\img\douban\book\bili.png" >
                    <div>
                        <span class="book_five_up1_text">比利时的哀愁</span>
                    </div>
                    <img class="book_five_up1_img2" src="..\..\assets\img\douban\book\biliGrade.png">
                </div>
            </div>
            <div class="book_five_down">
                <div class="book_five_down1">
                    <img class="book_five_down1_img" src="..\..\assets\img\douban\book\yanyua.png">
                    <div class="book_five_down2">
                        <span class="book_five_down2_text">演员郭晓婷 微博中的推荐书单</span>
                    </div>
                    <div class="book_five_down3">
                        <span class="book_five_down3_text">79本·1812人关注</span>
                    </div>
                </div>
                <div class="book_five_down1">
                    <img class="book_five_down1_img" src="..\..\assets\img\douban\book\doubandushu.png">
                    <div class="book_five_down2">
                        <span class="book_five_down2_text">豆瓣读书评分9分以上榜单</span>
                    </div>
                    <div class="book_five_down3">
                        <span class="book_five_down3_text">648本·28589人关注</span>
                    </div>
                </div>
                <div class="book_five_down1">
                    <img class="book_five_down1_img" src="..\..\assets\img\douban\book\baibu.png">
                    <div class="book_five_down2">
                        <span class="book_five_down2_text">百部需研读的中国近代政治史专...</span>
                    </div>
                    <div class="book_five_down3">
                        <span class="book_five_down3_text">100本·608人关注</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="book_six">
            <img class="book_six_img" src="..\..\assets\img\douban\book\xiariyuebinfen.png">
        </div>
        <div class="book_seven">
            <div class="film_hot_title">
                <span class="film_hot_title_1">豆瓣书店</span>
                <span class="film_hot_title_2">全部 20 <van-icon name="arrow" /></span>
            </div>
            <div class="book_seven_body">
                <div class="book_seven_body1">
                    <div class="book_seven_body2">
                        <div class="book_seven_body2_up">
                            <img class="book_seven_body2_img" src="..\..\assets\img\douban\book\anni.png">
                        </div>
                        <div class="book_seven_body2_down">
                            <div>
                                <span class="book_seven_body2_text1">安妮日记漫画版</span>
                            </div>
                            <div class="book_seven_body2_text">
                                <span class="book_seven_body2_text2">安妮基金会首度授权漫画化，限量附送定制版杯垫</span>
                            </div>
                            <div class="book_seven_body2_text">
                                <span class="book_seven_body2_text3">￥70.5</span>
                            </div>
                        </div>
                    </div>
                    <div class="book_seven_body2">
                        <div class="book_seven_body2_up">
                            <img class="book_seven_body2_img" src="..\..\assets\img\douban\book\zuanshi.png">
                        </div>
                        <div class="book_seven_body2_down">
                            <div>
                                <span class="book_seven_body2_text1">钻石与铁锈：琼·贝...</span>
                            </div>
                            <div class="book_seven_body2_text">
                                <span class="book_seven_body2_text2">琼·贝兹自传，爱与挣扎的自我袒露之书</span>
                            </div>
                            <div class="book_seven_body2_text">
                                <span class="book_seven_body2_text3">￥52</span>
                            </div>
                        </div>
                    </div>
                    <div class="book_seven_body2">
                        <div class="book_seven_body2_up">
                            <img class="book_seven_body2_img" src="..\..\assets\img\douban\book\anni.png">
                        </div>
                        <div class="book_seven_body2_down">
                            <div>
                                <span class="book_seven_body2_text1">安妮日记漫画版</span>
                            </div>
                            <div class="book_seven_body2_text">
                                <span class="book_seven_body2_text2">安妮基金会首度授权漫画化，限量附送定制版杯垫</span>
                            </div>
                            <div class="book_seven_body2_text">
                                <span class="book_seven_body2_text3">￥70.5</span>
                            </div>
                        </div>
                    </div>
                    <div class="book_seven_body2">
                        <div class="book_seven_body2_up">
                            <img class="book_seven_body2_img" src="..\..\assets\img\douban\book\zuanshi.png">
                        </div>
                        <div class="book_seven_body2_down">
                            <div>
                                <span class="book_seven_body2_text1">钻石与铁锈：琼·贝...</span>
                            </div>
                            <div class="book_seven_body2_text">
                                <span class="book_seven_body2_text2">琼·贝兹自传，爱与挣扎的自我袒露之书</span>
                            </div>
                            <div class="book_seven_body2_text">
                                <span class="book_seven_body2_text3">￥52</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="book_eight">
            <img class="book_six_img" src="..\..\assets\img\douban\book\geinvhai.png">
        </div>
        <div class="book_nine">
            <div class="book_nine_title">
                <span class="book_nine_title_1">为你推荐</span>
            </div>
            <div class="book_nine_body">
                <div class="book_nine_body_up">
                    <div class="book_nine_body_up1">
                        <img class="book_nine_body_up1_img" src="..\..\assets\img\douban\book\user.png">
                    </div>
                    <div class="book_nine_body_up2">
                        <span class="book_nine_body_up2_text">最好看的三分之二</span>
                    </div>
                    <div class="book_nine_body_up3">
                        <span class="book_nine_body_up3_text">1赞</span>
                    </div>
                </div>
                <hr align="left" width="300px" color="#D8D8D8" size="0.5" />
                <div class="book_nine_body_centre">
                    <div class="book_nine_body_centre1">
                        <div class="book_nine_body_centre1_img">
                            <img class="book_nine_body_centre1_img1" src="..\..\assets\img\douban\book\yuji.png">
                        </div>
                        <div class="book_nine_body_centre1_text">
                            <div>
                                <span class="book_nine_body_centre1_text1">雨季不再来</span>
                            </div>
                            <div>
                                <img class="book_nine_body_centre1_img2" src="..\..\assets\img\douban\book\yujiGrade.png">
                            </div>
                            <div>
                                <span class="book_nine_body_centre1_text2">三毛/2007/北京十月文艺出版社</span>
                            </div>
                        </div>
                    </div>
                    <div class="book_nine_body_centre2">
                        <img class="book_nine_body_centre2_img" src="..\..\assets\img\douban\book\line.png">
                    </div>
                    <div class="book_nine_body_centre3">
                        <img class="book_nine_body_centre3_img" src="..\..\assets\img\douban\book\wantR.png">
                    </div>
                </div>
                <div class="book_nine_body_bottom">
                    <van-button round size="mini" class="book_nine_body_bottom1">豆瓣Top250<van-icon name="arrow" /></van-button>
                    <van-button round size="mini" class="book_nine_body_bottom1">那不勒斯四部曲 女性 埃莱娜·费兰特<van-icon name="arrow" /></van-button>
                </div>
            </div>
        </div>
        <div class="book_end"></div>
      </div>
        </van-tab>
        <van-tab title="原创小说">
          <div class="novel_all">
        <div class="novel_one">
            <div class="novel_one_head">
                <span class="novel_one_head_write1">重磅推荐</span>
                <span class="novel_one_head_write2">豆瓣阅读优质原创小说</span>
            </div>
            <div class="novel_one_body">
                    <div class="novel_one_body1_book">
                        <div class="novel_one_body1_book1">
                            <div class="novel_one_body1_book1_one">
                                <div class="novel_one_body1_book1_one_img">
                                    <img class="novel_one_body1_book1_one_img" src="../../assets/img/douban/book/duai.png">
                                </div>
                                <div class="novel_one_body1_book1_one_text">
                                    <div class="novel_one_body1_book1_one_text1">
                                        <span class="novel_one_body1_book1_one_text1_write">毒爱</span>
                                    </div>
                                    <div class="novel_one_body1_book1_one_text2">
                                        <span class="novel_one_body1_book1_one_text2_write">作者：第九杯茶</span>
                                    </div>
                                    <div class="novel_one_body1_book1_one_text3">
                                        <img class="novel_one_body1_book1_one_text3_img" src="../../assets/img/douban/book/duaiGrade.png">
                                    </div>
                                    <div class="novel_one_body1_book1_one_text4">
                                        <span class="novel_one_body1_book1_one_text4_write">小律师捡到天上掉的馅饼，没想到是前男友送来的烫手山芋。</span>
                                    </div>
                                </div>
                            </div>
                            <div class="novel_one_body1_book1_two">
                                <div class="novel_one_body1_book1_one_img">
                                    <img class="novel_one_body1_book1_one_img" src="../../assets/img/douban/book/wufadidadenantingshan.png">
                                </div>
                                <div class="novel_one_body1_book1_one_text">
                                    <div class="novel_one_body1_book1_one_text1">
                                        <span class="novel_one_body1_book1_one_text1_write">无法抵达的南亭山</span>
                                    </div>
                                    <div class="novel_one_body1_book1_one_text2">
                                        <span class="novel_one_body1_book1_one_text2_write">作者：兰思思</span>
                                    </div>
                                    <div class="novel_one_body1_book1_one_text3">
                                        <img class="novel_one_body1_book1_one_text3_img" src="../../assets/img/douban/book/wufadidadenantingshanGrade.png">
                                    </div>
                                    <div class="novel_one_body1_book1_one_text4">
                                        <span class="novel_one_body1_book1_one_text4_write">周岚，没有背景但有野心。自踏入大公司艾斯的那一刻起，她的命运发生了天翻...</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="novel_one_body1_book2">
                            <div class="novel_one_body1_book1_one">
                                <div class="novel_one_body1_book1_one_img">
                                    <img class="novel_one_body1_book1_one_img" src="../../assets/img/douban/book/yuwangrichongfeng.png">
                                </div>
                                <div class="novel_one_body1_book1_one_text">
                                    <div class="novel_one_body1_book1_one_text1">
                                        <span class="novel_one_body1_book1_one_text1_write">与往日重逢</span>
                                    </div>
                                    <div class="novel_one_body1_book1_one_text2">
                                        <span class="novel_one_body1_book1_one_text2_write">作者：福宝</span>
                                    </div>
                                    <div class="novel_one_body1_book1_one_text3">
                                        <img class="novel_one_body1_book1_one_text3_img" src="../../assets/img/douban/book/yuwangrichongfengGrade.png">
                                    </div>
                                    <div class="novel_one_body1_book1_one_text4">
                                        <span class="novel_one_body1_book1_one_text4_write">冷战夫妻重回到高中时代，恋爱却居然发生了！</span>
                                    </div>
                                </div>
                            </div>
                            <div class="novel_one_body1_book1_two">
                                <div class="novel_one_body1_book1_one_img">
                                    <img class="novel_one_body1_book1_one_img" src="../../assets/img/douban/book/dongbeiqietinggushi.png">
                                </div>
                                <div class="novel_one_body1_book1_one_text">
                                    <div class="novel_one_body1_book1_one_text1">
                                        <span class="novel_one_body1_book1_one_text1_write">东北窃听故事</span>
                                    </div>
                                    <div class="novel_one_body1_book1_one_text2">
                                        <span class="novel_one_body1_book1_one_text2_write">作者：安之龙</span>
                                    </div>
                                    <div class="novel_one_body1_book1_one_text3">
                                        <img class="novel_one_body1_book1_one_text3_img" src="../../assets/img/douban/book/dongbeiqietinggushiGrade.png">
                                    </div>
                                    <div class="novel_one_body1_book1_one_text4">
                                        <span class="novel_one_body1_book1_one_text4_write">偶然的窃听引发不可告人的秘密，小人物的命运由谁写就？</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        <div class="novel_two">
            <div class="novel_two_head">
                <span class="novel_one_head_write1">最热完本</span>
                <span class="novel_two_head_write2">全部 15</span>
                <van-icon class="novel_two_head_write3" name="arrow" />
            </div>
            <div class="novel_two_body">
                <div class="novel_two_body1">
                    <van-tabs v-model="activeName"   
                    :color="'#000000'">
                        <van-tab title="精选">
                            <div class="novel_two_body1_sift">
                                <div class="novel_two_body1_sift_up">
                                    <div class="novel_two_body1_sift_one">
                                        <div class="novel_two_body1_sift_img">
                                            <img class="novel_two_body1_sift_img_i" src="../../assets/img/douban/book/duai.png">
                                        </div>
                                        <div class="novel_two_body1_sift_title">
                                            <span class="novel_two_body1_sift_title_text">毒爱</span>
                                        </div>
                                        <div class="novel_two_body1_sift_write1">
                                            <span class="novel_two_body1_sift_write1_text">毒爱——有毒，上瘾。大龄剩女汪艳语是一名小...</span>
                                        </div>
                                        <div class="novel_two_body1_sift_write2">
                                            <span class="novel_two_body1_sift_write2_text">9617人读过</span>
                                        </div>
                                    </div>
                                    <div class="novel_two_body1_sift_two">
                                        <div class="novel_two_body1_sift_img">
                                            <img class="novel_two_body1_sift_img_i" src="../../assets/img/douban/book/jijingzhengci2.png">
                                        </div>
                                        <div class="novel_two_body1_sift_title">
                                            <span class="novel_two_body1_sift_title_text">寂静证词2：窃语</span>
                                        </div>
                                        <div class="novel_two_body1_sift_write1">
                                            <span class="novel_two_body1_sift_write1_text">铁面队长与警队新人联手侦查案中案，真相和...</span>
                                        </div>
                                        <div class="novel_two_body1_sift_write2">
                                            <span class="novel_two_body1_sift_write2_text">7497人读过</span>
                                        </div>
                                    </div>
                                    <div class="novel_two_body1_sift_three">
                                        <div class="novel_two_body1_sift_img">
                                            <img class="novel_two_body1_sift_img_i" src="../../assets/img/douban/book/tianxiadaozong2.png">
                                        </div>
                                        <div class="novel_two_body1_sift_title">
                                            <span class="novel_two_body1_sift_title_text">天下刀宗2：乘锋</span>
                                        </div>
                                        <div class="novel_two_body1_sift_write1">
                                            <span class="novel_two_body1_sift_write1_text">传承金古大师气晚的新生代武侠代表作，江湖...</span>
                                        </div>
                                        <div class="novel_two_body1_sift_write2">
                                            <span class="novel_two_body1_sift_write2_text">17023人读过</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="novel_two_body1_sift_down">
                                    <div class="novel_two_body1_sift_one">
                                        <div class="novel_two_body1_sift_img">
                                            <img class="novel_two_body1_sift_img_i" src="../../assets/img/douban/book/qingkongyuxingye.png">
                                        </div>
                                        <div class="novel_two_body1_sift_title">
                                            <span class="novel_two_body1_sift_title_text">晴空与夜</span>
                                        </div>
                                        <div class="novel_two_body1_sift_write1">
                                            <span class="novel_two_body1_sift_write1_text">身为资深乘务员的骆莎桐在感情上屡战屡败，...</span>
                                        </div>
                                        <div class="novel_two_body1_sift_write2">
                                            <span class="novel_two_body1_sift_write2_text">3957人读过</span>
                                        </div>
                                    </div>
                                    <div class="novel_two_body1_sift_two">
                                        <div class="novel_two_body1_sift_img">
                                            <img class="novel_two_body1_sift_img_i" src="../../assets/img/douban/book/yidianyuanwai.png">
                                        </div>
                                        <div class="novel_two_body1_sift_title">
                                            <span class="novel_two_body1_sift_title_text">伊甸园外</span>
                                        </div>
                                        <div class="novel_two_body1_sift_write1">
                                            <span class="novel_two_body1_sift_write1_text">自幼目睹父母糟糕婚姻关系的何亦雯不信任爱...</span>
                                        </div>
                                        <div class="novel_two_body1_sift_write2">
                                            <span class="novel_two_body1_sift_write2_text">16105人读过</span>
                                        </div>
                                    </div>
                                    <div class="novel_two_body1_sift_three">
                                        <div class="novel_two_body1_sift_img">
                                            <img class="novel_two_body1_sift_img_i" src="../../assets/img/douban/book/wufadidadenantingshan.png">
                                        </div>
                                        <div class="novel_two_body1_sift_title">
                                            <span class="novel_two_body1_sift_title_text">无法抵达的南亭山</span>
                                        </div>
                                        <div class="novel_two_body1_sift_write1">
                                            <span class="novel_two_body1_sift_write1_text">周岚、周尧姐弟和徐朗、徐霜兄妹从小一块...</span>
                                        </div>
                                        <div class="novel_two_body1_sift_write2">
                                            <span class="novel_two_body1_sift_write2_text">9538人读过</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </van-tab>
                        <van-tab title="悬疑">
                            <div class="novel_two_body1_sift">
                                <div class="novel_two_body1_sift_up">
                                    <div class="novel_two_body1_sift_one">
                                        <div class="novel_two_body1_sift_img">
                                            <img class="novel_two_body1_sift_img_i" src="../../assets/img/douban/book/jijingzhengci2.png">
                                        </div>
                                        <div class="novel_two_body1_sift_title">
                                            <span class="novel_two_body1_sift_title_text">寂静证词2：窃语</span>
                                        </div>
                                        <div class="novel_two_body1_sift_write1">
                                            <span class="novel_two_body1_sift_write1_text">毒爱——有毒，上瘾。大龄剩女汪艳语是一名小...</span>
                                        </div>
                                        <div class="novel_two_body1_sift_write2">
                                            <span class="novel_two_body1_sift_write2_text">9617人读过</span>
                                        </div>
                                    </div>
                                    <div class="novel_two_body1_sift_two">
                                        <div class="novel_two_body1_sift_img">
                                            <img class="novel_two_body1_sift_img_i" src="../../assets/img/douban/book/tongxuehui.png">
                                        </div>
                                        <div class="novel_two_body1_sift_title">
                                            <span class="novel_two_body1_sift_title_text">同学会</span>
                                        </div>
                                        <div class="novel_two_body1_sift_write1">
                                            <span class="novel_two_body1_sift_write1_text">铁面队长与警队新人联手侦查案中案，真相和...</span>
                                        </div>
                                        <div class="novel_two_body1_sift_write2">
                                            <span class="novel_two_body1_sift_write2_text">7497人读过</span>
                                        </div>
                                    </div>
                                    <div class="novel_two_body1_sift_three">
                                        <div class="novel_two_body1_sift_img">
                                            <img class="novel_two_body1_sift_img_i" src="../../assets/img/douban/book/dongbeiqietinggushi.png">
                                        </div>
                                        <div class="novel_two_body1_sift_title">
                                            <span class="novel_two_body1_sift_title_text">东北窃听故事</span>
                                        </div>
                                        <div class="novel_two_body1_sift_write1">
                                            <span class="novel_two_body1_sift_write1_text">传承金古大师气晚的新生代武侠代表作，江湖...</span>
                                        </div>
                                        <div class="novel_two_body1_sift_write2">
                                            <span class="novel_two_body1_sift_write2_text">17023人读过</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="novel_two_body1_sift_down">
                                    <div class="novel_two_body1_sift_one">
                                        <div class="novel_two_body1_sift_img">
                                            <img class="novel_two_body1_sift_img_i" src="../../assets/img/douban/book/guandongyiren.png">
                                        </div>
                                        <div class="novel_two_body1_sift_title">
                                            <span class="novel_two_body1_sift_title_text">关东异人</span>
                                        </div>
                                        <div class="novel_two_body1_sift_write1">
                                            <span class="novel_two_body1_sift_write1_text">身为资深乘务员的骆莎桐在感情上屡战屡败，...</span>
                                        </div>
                                        <div class="novel_two_body1_sift_write2">
                                            <span class="novel_two_body1_sift_write2_text">3957人读过</span>
                                        </div>
                                    </div>
                                    <div class="novel_two_body1_sift_two">
                                        <div class="novel_two_body1_sift_img">
                                            <img class="novel_two_body1_sift_img_i" src="../../assets/img/douban/book/baijiaotang.png">
                                        </div>
                                        <div class="novel_two_body1_sift_title">
                                            <span class="novel_two_body1_sift_title_text">白教堂的邀请函</span>
                                        </div>
                                        <div class="novel_two_body1_sift_write1">
                                            <span class="novel_two_body1_sift_write1_text">自幼目睹父母糟糕婚姻关系的何亦雯不信任爱...</span>
                                        </div>
                                        <div class="novel_two_body1_sift_write2">
                                            <span class="novel_two_body1_sift_write2_text">16105人读过</span>
                                        </div>
                                    </div>
                                    <div class="novel_two_body1_sift_three">
                                        <div class="novel_two_body1_sift_img">
                                            <img class="novel_two_body1_sift_img_i" src="../../assets/img/douban/book/huanyingguanglin.png">
                                        </div>
                                        <div class="novel_two_body1_sift_title">
                                            <span class="novel_two_body1_sift_title_text">欢迎光临兔子的...</span>
                                        </div>
                                        <div class="novel_two_body1_sift_write1">
                                            <span class="novel_two_body1_sift_write1_text">周岚、周尧姐弟和徐朗、徐霜兄妹从小一块...</span>
                                        </div>
                                        <div class="novel_two_body1_sift_write2">
                                            <span class="novel_two_body1_sift_write2_text">9538人读过</span>
                                        </div>
                                    </div>
                                </div>
                            </div>                          
                        </van-tab>
                        <van-tab title="女性">
                            <div class="novel_two_body1_sift">
                                <div class="novel_two_body1_sift_up">
                                    <div class="novel_two_body1_sift_one">
                                        <div class="novel_two_body1_sift_img">
                                            <img class="novel_two_body1_sift_img_i" src="../../assets/img/douban/book/duai.png">
                                        </div>
                                        <div class="novel_two_body1_sift_title">
                                            <span class="novel_two_body1_sift_title_text">毒爱</span>
                                        </div>
                                        <div class="novel_two_body1_sift_write1">
                                            <span class="novel_two_body1_sift_write1_text">毒爱——有毒，上瘾。大龄剩女汪艳语是一名小...</span>
                                        </div>
                                        <div class="novel_two_body1_sift_write2">
                                            <span class="novel_two_body1_sift_write2_text">9617人读过</span>
                                        </div>
                                    </div>
                                    <div class="novel_two_body1_sift_two">
                                        <div class="novel_two_body1_sift_img">
                                            <img class="novel_two_body1_sift_img_i" src="../../assets/img/douban/book/jijingzhengci2.png">
                                        </div>
                                        <div class="novel_two_body1_sift_title">
                                            <span class="novel_two_body1_sift_title_text">寂静证词2：窃语</span>
                                        </div>
                                        <div class="novel_two_body1_sift_write1">
                                            <span class="novel_two_body1_sift_write1_text">铁面队长与警队新人联手侦查案中案，真相和...</span>
                                        </div>
                                        <div class="novel_two_body1_sift_write2">
                                            <span class="novel_two_body1_sift_write2_text">7497人读过</span>
                                        </div>
                                    </div>
                                    <div class="novel_two_body1_sift_three">
                                        <div class="novel_two_body1_sift_img">
                                            <img class="novel_two_body1_sift_img_i" src="../../assets/img/douban/book/tianxiadaozong2.png">
                                        </div>
                                        <div class="novel_two_body1_sift_title">
                                            <span class="novel_two_body1_sift_title_text">天下刀宗2：乘锋</span>
                                        </div>
                                        <div class="novel_two_body1_sift_write1">
                                            <span class="novel_two_body1_sift_write1_text">传承金古大师气晚的新生代武侠代表作，江湖...</span>
                                        </div>
                                        <div class="novel_two_body1_sift_write2">
                                            <span class="novel_two_body1_sift_write2_text">17023人读过</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="novel_two_body1_sift_down">
                                    <div class="novel_two_body1_sift_one">
                                        <div class="novel_two_body1_sift_img">
                                            <img class="novel_two_body1_sift_img_i" src="../../assets/img/douban/book/qingkongyuxingye.png">
                                        </div>
                                        <div class="novel_two_body1_sift_title">
                                            <span class="novel_two_body1_sift_title_text">晴空与夜</span>
                                        </div>
                                        <div class="novel_two_body1_sift_write1">
                                            <span class="novel_two_body1_sift_write1_text">身为资深乘务员的骆莎桐在感情上屡战屡败，...</span>
                                        </div>
                                        <div class="novel_two_body1_sift_write2">
                                            <span class="novel_two_body1_sift_write2_text">3957人读过</span>
                                        </div>
                                    </div>
                                    <div class="novel_two_body1_sift_two">
                                        <div class="novel_two_body1_sift_img">
                                            <img class="novel_two_body1_sift_img_i" src="../../assets/img/douban/book/yidianyuanwai.png">
                                        </div>
                                        <div class="novel_two_body1_sift_title">
                                            <span class="novel_two_body1_sift_title_text">伊甸园外</span>
                                        </div>
                                        <div class="novel_two_body1_sift_write1">
                                            <span class="novel_two_body1_sift_write1_text">自幼目睹父母糟糕婚姻关系的何亦雯不信任爱...</span>
                                        </div>
                                        <div class="novel_two_body1_sift_write2">
                                            <span class="novel_two_body1_sift_write2_text">16105人读过</span>
                                        </div>
                                    </div>
                                    <div class="novel_two_body1_sift_three">
                                        <div class="novel_two_body1_sift_img">
                                            <img class="novel_two_body1_sift_img_i" src="../../assets/img/douban/book/wufadidadenantingshan.png">
                                        </div>
                                        <div class="novel_two_body1_sift_title">
                                            <span class="novel_two_body1_sift_title_text">无法抵达的南亭山</span>
                                        </div>
                                        <div class="novel_two_body1_sift_write1">
                                            <span class="novel_two_body1_sift_write1_text">周岚、周尧姐弟和徐朗、徐霜兄妹从小一块...</span>
                                        </div>
                                        <div class="novel_two_body1_sift_write2">
                                            <span class="novel_two_body1_sift_write2_text">9538人读过</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </van-tab>
                    </van-tabs>
                </div>
            </div>
        </div>
        <div class="novel_three">
            <div class="novel_three_head">
                <span class="novel_one_head_write1">豆瓣榜单</span>
                <span class="novel_two_head_write2">全部 2</span>
                <van-icon class="novel_two_head_write3" name="arrow" />
            </div>
            <div class="novel_three_body">
                <img class="novel_three_body_img" src="../../assets/img/douban/book/novelExample.png">
            </div>
        </div>
        <div class="novel_four">
            <div class="novel_four_head">
                <span class="novel_four_head_write1">经典高分</span>
            </div>
            <div class="novel_four_body">
                <div class="novel_four_body_one">
                    <div class="novel_four_body_one_up">
                        <div class="novel_four_body_one_img">
                            <img class="novel_four_body_one_img_1" src="../../assets/img/douban/book/nanhuaqu.png">
                        </div>
                        <div class="novel_four_body_one_write">
                            <div class="novel_four_body_one_write1">
                                <span class="novel_four_body_one_write1_text">南华曲</span>
                            </div>
                            <div class="novel_four_body_one_write2">
                                <span class="novel_four_body_one_write2_text">作者：第九杯茶</span>
                            </div>
                            <div class="novel_four_body_one_write3">
                                <img class="novel_four_body_one_write3_img" src="../../assets/img/douban/book/nanhuaquGrade.png">
                            </div>
                            <div class="novel_four_body_one_write4">
                                <span class="novel_four_body_one_write4_text">殉葬的青楼女子被赵匡胤所救。为了复仇，她改名易姓，遁入赵府，却就此卷入了一场暗流涌动的朝...</span>
                            </div>
                        </div>
                    </div>
                    <div class="novel_four_body_one_button">
                        <van-button plain hairline color="#BDBDBD" size="mini">历史小说</van-button>
                    </div>
                    <hr align="left" width="319px" color="#D8D8D8" size="0.5" />
                </div>
                 <div class="novel_four_body_two">
                    <div class="novel_four_body_one_up">
                        <div class="novel_four_body_one_img">
                            <img class="novel_four_body_one_img_1" src="../../assets/img/douban/book/tonghualuojin.png">
                        </div>
                        <div class="novel_four_body_one_write">
                            <div class="novel_four_body_one_write1">
                                <span class="novel_four_body_one_write1_text">桐花落尽</span>
                            </div>
                            <div class="novel_four_body_one_write2">
                                <span class="novel_four_body_one_write2_text">作者：第九杯茶</span>
                            </div>
                            <div class="novel_four_body_one_write3">
                                <img class="novel_four_body_one_write3_img" src="../../assets/img/douban/book/tonghualuojinGrade.png">
                            </div>
                            <div class="novel_four_body_one_write4">
                                <span class="novel_four_body_one_write4_text">一个普通的现代女孩，跌落民国，偶遇军统杀手，开启一场惊心动魄、荡气回肠的生死穿越。每周...</span>
                            </div>
                        </div>
                    </div>
                    <div class="novel_four_body_one_button">
                        <van-button plain hairline color="#BDBDBD" size="mini">历史小说</van-button>
                    </div>
                    <hr align="left" width="319px" color="#D8D8D8" size="0.5" />
                </div>
            </div>
        </div>
        <div class="novel_end"></div>
    </div>
        </van-tab>
        <van-tab title="音乐">
          <div class="music_all">
        <div class="music_one">
            <div class="music_one_head">
                <span class="music_one_head_write1">热门单曲榜</span>
                <span class="music_one_head_write2">全部 30</span>
                <van-icon class="music_one_head_write3" name="arrow" />
            </div>
            <div class="music_one_body">
                <div class="music_one_body_one">
                    <div class="music_one_body_one_up">
                        <div class="music_one_body_one_music">
                            <img class="music_one_body_one_music_img" src="../../assets/img/douban/music/mojitomusic.png">
                        </div>
                        <div class="music_one_body_one_title">
                            <span class="music_one_body_one_title_text">Mojito</span>
                        </div>
                        <div class="music_one_body_one_author">
                            <span class="music_one_body_one_author_name">周杰伦 Jay Chou</span>
                        </div>
                        <div class="music_one_body_one_grade">
                            <img class="music_one_body_one_grade_img" src="../../assets/img/douban/music/mojitomusicGrade.png">
                        </div>
                    </div>
                    <div class="music_one_body_one_down">
                        <div class="music_one_body_one_music">
                            <img class="music_one_body_one_music_img" src="../../assets/img/douban/music/sourcandymusic.png">
                        </div>
                        <div class="music_one_body_one_title">
                            <span class="music_one_body_one_title_text">Sour Candy</span>
                        </div>
                        <div class="music_one_body_one_author">
                            <span class="music_one_body_one_author_name">Lady Gaga</span>
                        </div>
                        <div class="music_one_body_one_grade">
                            <img class="music_one_body_one_grade_img" src="../../assets/img/douban/music/sourcandymusicGrade.png">
                        </div>
                    </div>
                </div>
                <div class="music_one_body_one">
                    <div class="music_one_body_one_up">
                        <div class="music_one_body_one_music">
                            <img class="music_one_body_one_music_img" src="../../assets/img/douban/music/qingrenmusic.png">
                        </div>
                        <div class="music_one_body_one_title">
                            <span class="music_one_body_one_title_text">情人</span>
                        </div>
                        <div class="music_one_body_one_author">
                            <span class="music_one_body_one_author_name">蔡徐坤</span>
                        </div>
                        <div class="music_one_body_one_grade">
                            <img class="music_one_body_one_grade_img" src="../../assets/img/douban/music/qingrenmusicGrade.png">
                        </div>
                    </div>
                    <div class="music_one_body_one_down">
                        <div class="music_one_body_one_music">
                            <img class="music_one_body_one_music_img" src="../../assets/img/douban/music/jiekemusic.png">
                        </div>
                        <div class="music_one_body_one_title">
                            <span class="music_one_body_one_title_text">皆可</span>
                        </div>
                        <div class="music_one_body_one_author">
                            <span class="music_one_body_one_author_name">田馥甄 Hebe</span>
                        </div>
                        <div class="music_one_body_one_grade">
                            <img class="music_one_body_one_grade_img" src="../../assets/img/douban/music/jiekemusicGrade.png">
                        </div>
                    </div>
                </div>
                <div class="music_one_body_one">
                    <div class="music_one_body_one_up">
                        <div class="music_one_body_one_music">
                            <img class="music_one_body_one_music_img" src="../../assets/img/douban/music/jiezoubingmusic.png">
                        </div>
                        <div class="music_one_body_one_title">
                            <span class="music_one_body_one_title_text">节奏病</span>
                        </div>
                        <div class="music_one_body_one_author">
                            <span class="music_one_body_one_author_name">刘雨昕</span>
                        </div>
                        <div class="music_one_body_one_grade">
                            <img class="music_one_body_one_grade_img" src="../../assets/img/douban/music/jiezoubingmusicGrade.png">
                        </div>
                    </div>
                    <div class="music_one_body_one_down">
                        <div class="music_one_body_one_music">
                            <img class="music_one_body_one_music_img" src="../../assets/img/douban/music/zaiyiqimahaobuhaomusic.png">
                        </div>
                        <div class="music_one_body_one_title">
                            <span class="music_one_body_one_title_text">在一起嘛好不好</span>
                        </div>
                        <div class="music_one_body_one_author">
                            <span class="music_one_body_one_author_name">李荣浩</span>
                        </div>
                        <div class="music_one_body_one_grade">
                            <img class="music_one_body_one_grade_img" src="../../assets/img/douban/music/zaiyiqimahaobhaomusicGrade.png">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="music_two">
            <div class="music_two_head">
                <span class="music_two_head_write1">新碟榜</span>
                <span class="music_two_head_write2">全部 30</span>
                <van-icon class="music_two_head_write3" name="arrow" />
            </div>
            <div class="music_two_body">
                <div class="music_two_body1">
                    <van-tabs v-model="activeName"   
                    :color="'#000000'">
                        <van-tab title="华语">
                            <div class="music_two_body2">
                                <div class="music_two_body_one">
                                    <div class="music_two_body_one_up">
                                        <div>
                                            <img class="music_two_body_one_up_img" src="..\..\assets\img\douban\music\lian.png">
                                        </div>
                                        <div>
                                            <span class="music_two_body_one_up_title">莲</span>
                                        </div>
                                        <div>
                                            <span class="music_two_body_one_up_name">张艺兴</span>
                                        </div>
                                        <div>
                                            <img class="music_two_body_one_up_pic" src="..\..\assets\img\douban\music\lianGrade.png">
                                        </div>
                                    </div>
                                    <div class="music_two_body_one_down">
                                        <div>
                                            <img class="music_two_body_one_up_img" src="..\..\assets\img\douban\music\awakentheworld.png">
                                        </div>
                                        <div>
                                            <span class="music_two_body_one_up_title1">Awaken The World</span>
                                        </div>
                                        <div>
                                            <span class="music_two_body_one_up_name">威神V</span>
                                        </div>
                                        <div>
                                            <img class="music_two_body_one_up_pic" src="..\..\assets\img\douban\music\awakentheworldGrade.png">
                                        </div>
                                    </div>
                                </div>
                                <div class="music_two_body_two">
                                    <div class="music_two_body_one_up">
                                        <div>
                                            <img class="music_two_body_one_up_img" src="..\..\assets\img\douban\music\gegeburu.png">
                                        </div>
                                        <div>
                                            <span class="music_two_body_one_up_title">格格不入</span>
                                        </div>
                                        <div>
                                            <span class="music_two_body_one_up_name">陈立农</span>
                                        </div>
                                        <div>
                                            <img class="music_two_body_one_up_pic" src="..\..\assets\img\douban\music\gegeburuGrade.png">
                                        </div>
                                    </div>
                                    <div class="music_two_body_one_down">
                                        <div>
                                            <img class="music_two_body_one_up_img" src="..\..\assets\img\douban\music\nanai.png">
                                        </div>
                                        <div>
                                            <span class="music_two_body_one_up_title">NANA I</span>
                                        </div>
                                        <div>
                                            <span class="music_two_body_one_up_name">欧阳娜娜</span>
                                        </div>
                                        <div>
                                            <img class="music_two_body_one_up_pic" src="..\..\assets\img\douban\music\nanaiGrade.png">
                                        </div>
                                    </div>
                                </div>
                                <div class="music_two_body_three">
                                    <div class="music_two_body_one_up">
                                        <div>
                                            <img class="music_two_body_one_up_img" src="..\..\assets\img\douban\music\volume.png">
                                        </div>
                                        <div>
                                            <span class="music_two_body_one_up_title">Π-volume.3</span>
                                        </div>
                                        <div>
                                            <span class="music_two_body_one_up_name">鹿晗 Luhan</span>
                                        </div>
                                        <div>
                                            <img class="music_two_body_one_up_pic" src="..\..\assets\img\douban\music\volumeGrade.png">
                                        </div>
                                    </div>
                                    <div class="music_two_body_one_down">
                                        <div>
                                            <img class="music_two_body_one_up_img" src="..\..\assets\img\douban\music\yanleibowuguan.png">
                                        </div>
                                        <div>
                                            <span class="music_two_body_one_up_title">眼泪博物馆</span>
                                        </div>
                                        <div>
                                            <span class="music_two_body_one_up_name">郑兴</span>
                                        </div>
                                        <div>
                                            <img class="music_two_body_one_up_pic" src="..\..\assets\img\douban\music\yanleibowuguanGrade.png">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </van-tab>
                        <van-tab title="欧美">
                            <div class="music_two_body2">
                                <div class="music_two_body_one">
                                    <div class="music_two_body_one_up">
                                        <div>
                                            <img class="music_two_body_one_up_img" src="..\..\assets\img\douban\music\chromatica.png">
                                        </div>
                                        <div>
                                            <span class="music_two_body_one_up_title">Chromatica</span>
                                        </div>
                                        <div>
                                            <span class="music_two_body_one_up_name">Lady Gaga</span>
                                        </div>
                                        <div>
                                            <img class="music_two_body_one_up_pic" src="..\..\assets\img\douban\music\chromaticGrade.png">
                                        </div>
                                    </div>
                                    <div class="music_two_body_one_down">
                                        <div>
                                            <img class="music_two_body_one_up_img" src="..\..\assets\img\douban\music\notesonaconditi.png">
                                        </div>
                                        <div>
                                            <span class="music_two_body_one_up_title1">Notes On A Conditi...</span>
                                        </div>
                                        <div>
                                            <span class="music_two_body_one_up_name">THE 1975</span>
                                        </div>
                                        <div>
                                            <img class="music_two_body_one_up_pic" src="..\..\assets\img\douban\music\notesonaconditiGrade.png">
                                        </div>
                                    </div>
                                </div>
                                <div class="music_two_body_two">
                                    <div class="music_two_body_one_up">
                                        <div>
                                            <img class="music_two_body_one_up_img" src="..\..\assets\img\douban\music\runthejewels4.png">
                                        </div>
                                        <div>
                                            <span class="music_two_body_one_up_title">Run the Jewels 4</span>
                                        </div>
                                        <div>
                                            <span class="music_two_body_one_up_name">Run the Jewels</span>
                                        </div>
                                        <div>
                                            <img class="music_two_body_one_up_pic" src="..\..\assets\img\douban\music\runthejewels4Grade.png">
                                        </div>
                                    </div>
                                    <div class="music_two_body_one_down">
                                        <div>
                                            <img class="music_two_body_one_up_img" src="..\..\assets\img\douban\music\dedicatedsideb.png">
                                        </div>
                                        <div>
                                            <span class="music_two_body_one_up_title">Dedicated Side B</span>
                                        </div>
                                        <div>
                                            <span class="music_two_body_one_up_name">卡莉蕾·吉普森 Carly...</span>
                                        </div>
                                        <div>
                                            <img class="music_two_body_one_up_pic" src="..\..\assets\img\douban\music\dedicatedsidebGrade.png">
                                        </div>
                                    </div>
                                </div>
                                <div class="music_two_body_three">
                                    <div class="music_two_body_one_up">
                                        <div>
                                            <img class="music_two_body_one_up_img" src="..\..\assets\img\douban\music\setmyheartonfi.png">
                                        </div>
                                        <div>
                                            <span class="music_two_body_one_up_title">Set My Heart On...</span>
                                        </div>
                                        <div>
                                            <span class="music_two_body_one_up_name">Perfume Genlus</span>
                                        </div>
                                        <div>
                                            <img class="music_two_body_one_up_pic" src="..\..\assets\img\douban\music\setmyheartonfiGrade.png">
                                        </div>
                                    </div>
                                    <div class="music_two_body_one_down">
                                        <div>
                                            <img class="music_two_body_one_up_img" src="..\..\assets\img\douban\music\volume.png">
                                        </div>
                                        <div>
                                            <span class="music_two_body_one_up_title">Π-volume.3</span>
                                        </div>
                                        <div>
                                            <span class="music_two_body_one_up_name">鹿晗 Luhan</span>
                                        </div>
                                        <div>
                                            <img class="music_two_body_one_up_pic" src="..\..\assets\img\douban\music\volumeGrade.png">
                                        </div>
                                    </div>
                                </div>
                            </div>          
                        </van-tab>
                        <van-tab title="日韩">
                            <div class="music_two_body2">
                                <div class="music_two_body_one">
                                    <div class="music_two_body_one_up">
                                        <div>
                                            <img class="music_two_body_one_up_img" src="..\..\assets\img\douban\music\chromatica.png">
                                        </div>
                                        <div>
                                            <span class="music_two_body_one_up_title">Chromatica</span>
                                        </div>
                                        <div>
                                            <span class="music_two_body_one_up_name">Lady Gaga</span>
                                        </div>
                                        <div>
                                            <img class="music_two_body_one_up_pic" src="..\..\assets\img\douban\music\chromaticGrade.png">
                                        </div>
                                    </div>
                                    <div class="music_two_body_one_down">
                                        <div>
                                            <img class="music_two_body_one_up_img" src="..\..\assets\img\douban\music\lian.png">
                                        </div>
                                        <div>
                                            <span class="music_two_body_one_up_title">莲</span>
                                        </div>
                                        <div>
                                            <span class="music_two_body_one_up_name">张艺兴</span>
                                        </div>
                                        <div>
                                            <img class="music_two_body_one_up_pic" src="..\..\assets\img\douban\music\lianGrade.png">
                                        </div>
                                    </div>
                                </div>
                                <div class="music_two_body_two">
                                    <div class="music_two_body_one_up">
                                        <div>
                                            <img class="music_two_body_one_up_img" src="..\..\assets\img\douban\music\runthejewels4.png">
                                        </div>
                                        <div>
                                            <span class="music_two_body_one_up_title">Run the Jewels 4</span>
                                        </div>
                                        <div>
                                            <span class="music_two_body_one_up_name">Run the Jewels</span>
                                        </div>
                                        <div>
                                            <img class="music_two_body_one_up_pic" src="..\..\assets\img\douban\music\runthejewels4Grade.png">
                                        </div>
                                    </div>
                                    <div class="music_two_body_one_down">
                                        <div>
                                            <img class="music_two_body_one_up_img" src="..\..\assets\img\douban\music\dedicatedsideb.png">
                                        </div>
                                        <div>
                                            <span class="music_two_body_one_up_title">Dedicated Side B</span>
                                        </div>
                                        <div>
                                            <span class="music_two_body_one_up_name">卡莉蕾·吉普森 Carly...</span>
                                        </div>
                                        <div>
                                            <img class="music_two_body_one_up_pic" src="..\..\assets\img\douban\music\dedicatedsidebGrade.png">
                                        </div>
                                    </div>
                                </div>
                                <div class="music_two_body_three">
                                    <div class="music_two_body_one_up">
                                        <div>
                                            <img class="music_two_body_one_up_img" src="..\..\assets\img\douban\music\setmyheartonfi.png">
                                        </div>
                                        <div>
                                            <span class="music_two_body_one_up_title">Set My Heart On...</span>
                                        </div>
                                        <div>
                                            <span class="music_two_body_one_up_name">Perfume Genlus</span>
                                        </div>
                                        <div>
                                            <img class="music_two_body_one_up_pic" src="..\..\assets\img\douban\music\setmyheartonfiGrade.png">
                                        </div>
                                    </div>
                                    <div class="music_two_body_one_down">
                                        <div>
                                            <img class="music_two_body_one_up_img" src="..\..\assets\img\douban\music\pickmeupoffth.png">
                                        </div>
                                        <div>
                                            <span class="music_two_body_one_up_title">Pick Me Up off...</span>
                                        </div>
                                        <div>
                                            <span class="music_two_body_one_up_name">Norah Jones</span>
                                        </div>
                                        <div>
                                            <img class="music_two_body_one_up_pic" src="..\..\assets\img\douban\music\pickmeupoffthGrade.png">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </van-tab>
                    </van-tabs>
                </div>
            </div>
        </div>
        <div>
            <img class="music_advertising" src="..\..\assets\img\douban\music\huajianji.png">
        </div>
        <div class="music_three">
            <div class="music_three_head">
                <div class="music_one_head">
                    <span class="music_one_head_write1">分类浏览</span>
                    <span @click="musicclassify" class="music_three_head_write2">全部</span>
                    <van-icon @click="musicclassify" class="music_one_head_write3" name="arrow" />
                </div>
            </div>
        </div>
        <div class="music_four">
            <div class="music_four_head">
                <span class="music_four_head_write1">为你推荐</span>
            </div>
            <div class="music_four_one">
                <div class="music_four_one_up">
                    <img class="music_four_one_img" src="..\..\assets\img\douban\music\pickRecommend.png">
                </div>
                <div class="music_four_one_down">
                    <div class="music_four_one_down_up">
                        <div class="music_four_one_down_up_one">
                            <div>
                                <span class="music_four_one_down_up_one_name">Pick Me Up Off The Floor</span>
                            </div>
                            <div>
                                <img class="music_four_one_down_up_one_img" src="..\..\assets\img\douban\music\pickRecommendGrade.png">
                            </div>
                            <div>
                                <span class="music_four_one_down_up_one_text">Norah Jones/2020</span>
                            </div>
                        </div>
                        <div class="music_four_one_down_up_two">
                            <img class="music_four_one_down_up_two_img" src="..\..\assets\img\douban\music\wantR.png">
                        </div>
                    </div>
                    <div class="music_four_one_down_down">
                        <span class="music_four_one_down_down_text">你可能感兴趣</span>
                    </div>
                </div>
            </div>
            <hr align="left" width="319px" color="#D8D8D8" size="0.5" />
            <div class="music_four_one">
                <div class="music_four_one_up">
                    <img class="music_four_one_img" src="..\..\assets\img\douban\music\pickRecommend.png">
                </div>
                <div class="music_four_one_down">
                    <div class="music_four_one_down_up">
                        <div class="music_four_one_down_up_one">
                            <div>
                                <span class="music_four_one_down_up_one_name">Pick Me Up Off The Floor</span>
                            </div>
                            <div>
                                <img class="music_four_one_down_up_one_img" src="..\..\assets\img\douban\music\pickRecommendGrade.png">
                            </div>
                            <div>
                                <span class="music_four_one_down_up_one_text">Norah Jones/2020</span>
                            </div>
                        </div>
                        <div class="music_four_one_down_up_two">
                            <img class="music_four_one_down_up_two_img" src="..\..\assets\img\douban\music\wantR.png">
                        </div>
                    </div>
                    <div class="music_four_one_down_down">
                        <span class="music_four_one_down_down_text">你可能感兴趣</span>
                    </div>
                </div>
            </div>
            <hr align="left" width="319px" color="#D8D8D8" size="0.5" />
        </div>
        <div class="music_end"></div>
    </div>
        </van-tab>
        <van-tab title="同城">
          <div class="city_all">
        <div class="city_head">
            <div class="city_head_up">
                <span class="city_head_up_one">当前城市：</span>
                <span class="city_head_up_two">南京</span>
                <van-icon @click="citychoice" class="city_head_up_three" color="#A4A4A4" size="10" name="arrow" />
            </div>
            <hr color="#A4A4A4">
            <div class="city_head_down">
                <span class="city_head_up_one">类型 时间 地点</span>
                <van-icon @click="citysort" class="city_head_down_three" color="#A4A4A4" size="10" name="arrow" />
            </div>
        </div>
        <div class="city_one">
            <div class="city_one_head">
                <span class="city_one_head_text1">热门活动</span>
                <span class="city_one_head_text2">全部 13</span>
                <van-icon size="10" name="arrow" />
            </div>
            <div class="city_one_body">
                <div class="city_one_body_1">
                    <div>
                        <img class="city_one_body_1_img" src="..\..\assets\img\douban\city\findyourlove.png">
                    </div>
                    <div class="city_one_body_1_text">
                        <span class="city_one_body_1_text1">2020年你想演戏吗？幸福莊戏剧春...</span>
                    </div>
                    <div>
                        <span class="city_one_body_1_text2">2020-06-07</span> 
                    </div>
                </div>
                <div class="city_one_body_1">
                    <div>
                        <img class="city_one_body_1_img" src="..\..\assets\img\douban\city\zhangshaohan.png">
                    </div>
                    <div class="city_one_body_1_text">
                        <span class="city_one_body_1_text1">【定金预定】张韶涵演唱会常州站</span>
                    </div>
                    <div>
                        <span class="city_one_body_1_text2">2020-07-01</span> 
                    </div>
                </div>
                <div class="city_one_body_1">
                    <div>
                        <img class="city_one_body_1_img" src="..\..\assets\img\douban\city\kaifangmai.png">
                    </div>
                    <div class="city_one_body_1_text">
                        <span class="city_one_body_1_text1">2020年 南京脱口秀开放麦（春夏季）</span>
                    </div>
                    <div>
                        <span class="city_one_body_1_text2">2020-04-19</span> 
                    </div>
                </div>
            </div>
        </div>
        <div class="city_two">
            <div class="city_one_head">
                <span class="city_one_head_text1">官方售票</span>
                <span class="city_one_head_text2">全部 6</span>
                <van-icon size="10" name="arrow" />
            </div>
            <div class="city_one_body">
                <div class="city_one_body_1">
                    <div>
                        <img class="city_one_body_1_img" src="..\..\assets\img\douban\city\shuiyaori.png">
                    </div>
                    <div class="city_one_body_1_text">
                        <span class="city_one_body_1_text1">音乐剧《水曜日》韩国高口碑悬疑推理...</span>
                    </div>
                    <div>
                        <span class="city_one_body_1_text2">2020-11-06</span> 
                    </div>
                </div>
                <div class="city_one_body_1">
                    <div>
                        <img class="city_one_body_1_img" src="..\..\assets\img\douban\city\balishengmuyuan.png">
                    </div>
                    <div class="city_one_body_1_text">
                        <span class="city_one_body_1_text1">【定金预定】法语音乐剧《巴黎圣母院》</span>
                    </div>
                    <div>
                        <span class="city_one_body_1_text2">2020-03-02</span> 
                    </div>
                </div>
                <div class="city_one_body_1">
                    <div>
                        <img class="city_one_body_1_img" src="..\..\assets\img\douban\city\weinisishangren.png">
                    </div>
                    <div class="city_one_body_1_text">
                        <span class="city_one_body_1_text1">【定金预定】话剧《威尼斯商人》</span>
                    </div>
                    <div>
                        <span class="city_one_body_1_text2">2020-03-02</span> 
                    </div>
                </div>
            </div>
        </div>
        <div class="city_three">
            <div class="city_one_head">
                <span class="city_one_head_text1">票牛精选</span>
            </div>
            <div class="city_three_body">
                <div class="city_three_body1">
                    <div class="city_three_body2">
                        <img class="city_three_body2_img1" src="..\..\assets\img\douban\city\piao1.png">
                        <img class="city_three_body2_img1" src="..\..\assets\img\douban\city\piao2.png">
                        <img class="city_three_body2_img1" src="..\..\assets\img\douban\city\piao3.png">
                        <img class="city_three_body2_img1" src="..\..\assets\img\douban\city\piao4.png">
                    </div>
                </div>
            </div>
        </div> 
        <div class="city_two">
            <div class="city_one_head">
                <span class="city_one_head_text1">戏剧类</span>
                <span class="city_four_head_text2">全部 11</span>
                <van-icon size="10" name="arrow" />
            </div>
            <div class="city_one_body">
                <div class="city_one_body_1">
                    <div>
                        <img class="city_one_body_1_img" src="..\..\assets\img\douban\city\kaifangmai.png">
                    </div>
                    <div class="city_one_body_1_text">
                        <span class="city_one_body_1_text1">2020年 南京脱口秀开放麦（春夏季）</span>
                    </div>
                    <div>
                        <span class="city_one_body_1_text2">2020-04-19</span> 
                    </div>
                </div>
                <div class="city_one_body_1">
                    <div>
                        <img class="city_one_body_1_img" src="..\..\assets\img\douban\city\findyourlove.png">
                    </div>
                    <div class="city_one_body_1_text">
                        <span class="city_one_body_1_text1">2020年你想演戏吗？幸福莊戏剧春...</span>
                    </div>
                    <div>
                        <span class="city_one_body_1_text2">2020-06-07</span> 
                    </div>
                </div>
                <div class="city_one_body_1">
                    <div>
                        <img class="city_one_body_1_img" src="..\..\assets\img\douban\city\shuiyaori.png">
                    </div>
                    <div class="city_one_body_1_text">
                        <span class="city_one_body_1_text1">音乐剧《水曜日》韩国高口碑悬疑推理...</span>
                    </div>
                    <div>
                        <span class="city_one_body_1_text2">2020-11-06</span> 
                    </div>
                </div>
            </div>
        </div> 
        <div class="city_end"></div>
    </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</div>
</template>

<script>
export default {
    methods:{
        musicclassify(){
            this.$router.push("/music_classify")
        },
        search(){
            this.$router.push("/search")
        },
        citychoice(){
            this.$router.push("/city_choice")
        },
        citysort(){
            this.$router.push("/city_sort")
        },
        message(){
            this.$router.push("/message")
        }
    },
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
.douban_home_search{
  display: flex;
}
.douban_home_search_1{
  width: 96%;
}
.douban_home_search_2{
  padding-right: 4%;
  margin:auto;
}
.douban_home_body_bar{
  width: 320px;
}
.film_button{
    margin-top: 20px;
    display: flex;
    width: 320px;
    height: 60px;
}
.film_button_1{
    width: 70px;
    height: 50px;
    border-radius: 12%;
    box-shadow: 0 0 0.5px 1px #d8d8d8;
    margin-left: 5px;
}
.film_button_1_img{
    padding-top: 8px;
}
.film_button_1_write{
    font-size: 12px;
    margin-top: 2px;
}
.film_button_2{
    width: 70px;
    height: 50px;
    border-radius: 12%;
    box-shadow: 0 0 0.5px 1px #d8d8d8;
    margin-left: 10px;
}
.film_button_2_img{
    padding-top: 8px;
}
.film_button_2_write{
    font-size: 12px;
    margin-top: 2px;
}
.film_button_3{
    width: 70px;
    height: 50px;
    border-radius: 12%;
    box-shadow: 0 0 0.5px 1px #d8d8d8;
    margin-left: 10px;
}
.film_button_3_img{
    padding-top: 8px;
}
.film_button_3_write{
    font-size: 12px;
    margin-top: 2px;
}
.film_button_4{
    width: 70px;
    height: 50px;
    border-radius: 12%;
    box-shadow: 0 0 0.5px 1px #d8d8d8;
    margin-left: 10px;
}
.film_button_4_img{
    padding-top: 8px;
}
.film_button_4_write{
    font-size: 12px;
    margin-top: 2px;
}
.film_hot_title{
    margin-top: 20px;
    width: 320px;
}
.film_hot_title_1{
    font-weight: 1000;
    padding-right: 158px;
    font-size: 17px;
}
.film_hot_title_2{
    font-weight: 1000;
    font-size: 12px;
}
.film_hot_movie{
    margin-top: 10px;
    height: 165px;
    width: 100%;
    box-sizing: border-box;
    overflow-x: scroll;
}
.film_hot_movie_all{
    display: flex;
    height: 160px;
    width: 450px;
}
.film_hot_movie_one{
    height: 160px;
    width: 80px;
    margin-left: 10px;
}
.film_hot_movie_img_1{
    height: 120px;
    width: 80px;
    border-radius: 3px;
}
.film_hot_movie_write_1{
    text-align: left;
}
.film_hot_movie_write_1_2{
    font-size: 12px;
    margin-left: 5px;
    font-weight: 1000;    
}
.film_hot_movie_grade_1{
    height: 12px;
    width: 80px;
}

.film_hot_movie_two{
    height: 160px;
    width: 80px;
    margin-left: 10px;
}
.film_hot_movie_img_2{
    height: 120px;
    width: 80px;
    border-radius: 3px;
}
.film_hot_movie_write_2{
    font-size:12px;
    font-weight:1000;
    margin-right: 32px;
}
.film_hot_movie_grade_2{
    height: 12px;
    width: 80px;
}
.film_hot_movie_three{
    height: 160px;
    width: 80px;
    margin-left: 10px;
}
.film_hot_movie_img_3{
    height: 120px;
    width: 80px;
    border-radius: 3px;
}
.film_hot_movie_write_3{
    font-size:12px;
    font-weight:1000;
    margin-right: 56px;
}
.film_hot_movie_grade_3{
    height: 12px;
    width: 80px;
}
.film_hot_movie_four{
    height: 160px;
    width: 80px;
    margin-left: 10px;
}
.film_hot_movie_img_4{
    height: 120px;
    width: 80px;
    border-radius: 3px;
}
.film_hot_movie_write_4{
    font-size:12px;
    font-weight:1000;
    margin-right: 32px;
}
.film_hot_movie_grade_4{
    height: 12px;
    width: 80px;
}
.film_hot_movie_five{
    height: 160px;
    width: 80px;
    margin-left: 10px;
}
.film_hot_movie_img_5{
    height: 120px;
    width: 80px;
    border-radius: 3px;
}
.film_hot_movie_write_5{
    font-size:12px;
    font-weight:1000;
    margin-right: 32px;
}
.film_hot_movie_grade_5{
    height: 12px;
    width: 80px;
}
.film_to{
    margin-top: 100px;
    height: 220px;
    width: 100%;
    /* box-sizing: border-box;
    overflow-x: hidden; */
}
.film_update{
    /* display: flex;  */
    height: 220px;
    /* width: 704px; */
    width: 100%;
}
.film_to_update_1{
    height: 220px;
    width: 320px;
    /* margin-left: 10px; */
    margin-top: 10px;

}
.film_update_img_1{
    height: 220px;
    width: 275px;
    text-align: center;
}
/* .film_to_update_2{
    height: 220px;
    width: 275px;
    margin-left: 10px;
}
.film_update_img_2{
    height: 220px;
    width: 275px;
}
.film_to_update_3{
    height: 220px;
    width: 124px;
    margin-left: 10px;
}
.film_to_update_bg{
    height: 220px;
    width: 124px;
    background: rgb(241, 241, 241);
    border-radius: 2%;
}
.film_to_update_bg_write{
    font-size: 13px;
    line-height: 220px;
} */
.film_advertising{
    height: 90px;
    width: 320px;
    margin-top: 10px;
}
.film_advertising_img{
    height: 90px;
    width: 300px;
}
.film_set{
    height: 85px;
    width: 320px;
    margin-top: 10px;
}
.film_set_img{
    height: 83px;
    width: 247px;
}
.film_search_title{
    height: 30px;
    width: 100%;
    margin-top: 30px;
}
.film_search_title_write{
    font-weight: 1000;
    font-size: 17px;
    text-align: left;
    padding-left: 10px;
}
.film_search_main{
    height: 40px;
    width: 320px;
    display: flex;    
    
}
.film_search_main_click{
    margin-top: 15px;
    display: flex;
    height: 12px;
    width: 17%;
}
.film_search_main_click_write{
    font-size: 12px;
    height: 12px;
    padding-left: 1px;
}
.film_search_main_down{
    width:65%;
    height: 10%;
}
.film_search_main_screen{
    margin-top: 15px;
    display: flex;
    height: 12px;
    width: 12%;
    margin-left: 10px;
}
.film_search_main_screen_write{
    font-size: 12px;
    height: 12px;
    padding-left: 1px;
}
.film_search_bottom{
    height: 22px;
    width: 100%;
    display: flex;
    margin-top: 10px;
}
.film_search_introduce{
    width: 100%;
}
.film_search_introduce_img{
    margin-top: 15px;
    height: 120px;
    width: 100%;
    display: flex;
}
.film_search_introduce_img_1{
    height: 120px;
    width: 80px;
    margin-left: 10px;
    border-radius: 4px;
}
.film_search_introduce_img_2{
    height: 120px;
    margin-left: 10px;
    width: 220px;
    border-radius: 4px;
}
.film_search_introduce_text{
    display: flex;
}
.film_search_introduce_text_name{
    height: 45px;
    width: 70%;
}
.film_search_introduce_text_name_write{
    text-align: left;
    margin-left: 10px;
}
.film_search_introduce_text_name_write_1{
    font-size: 16px;
    font-weight: 1000;
}
.film_search_introduce_text_name_write_2{
    font-size: 16px;
    font-weight: 600;
    color: rgb(182, 182, 182);
}
.film_search_introduce_text_name_write_img{
    text-align: left;
    margin-left: 9px;
}
.film_search_introduce_text_name_write_img_1{
    height: 18px;
    width: 80px;
}
.film_search_introduce_text_want{
    display: flex;
}
.film_search_introduce_text_want_img{
    margin-left: 30px;
}
.film_search_introduce_text_want_img_1{
    padding-top: 5px;
}
.film_search_introduce_text_want_line_1{
    height: 40px;
    width: 9px;
}

.film_search_introduce_text_want_img_write_1{
    font-size: 12px;
    height: 13px;
    color: #efb336;
    font-weight: 500;
}
.film_end{
  height: 60px;
}
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
.teleplay_end{
  height: 60px;
}
.book_two_body_new_up_img1{
    height: 82px;
    width: 52px;
}
.book_two_body_new_up{
    display:flex;
}
.book_two_body_new_up_text1{
    font-size: 14px;
    font-weight:600;
    margin-left: 10px;
}
.book_two_body_new_up_text2{
    font-size: 11px;
    color: #BDBDBD;
    margin-left: 10px;
}
.book_two_body_new_up_text3{
    color: #000;
    margin-left: 10px;
    margin-top: 10px;
}
.book_two_body_new_up_text{
    text-align: left;
}
.book_two_body_new_up_text4{
    margin-top: 5px;
}
.book_two_body_new_down_text{
    font-size: 9px;
}
.book_two_body_new_down
{
    background: #F2F2F2;
    height: 35px;
    width: 200px;
    text-align: left;
    margin-left: 15px;
    border-radius: 5px;
    margin-bottom: 10px;
}
.book_two_body_new_up{
    margin-left: 10px;
    margin-top: 10px;
}
.book_two_body_new{
    background-color: white;
    border: 0.5px solid #E6E6E6;
    width: 230px;
    height: 142px;
    margin-left: 10px;
    border-radius: 6px;
    box-sizing: border-box;
    padding-right: 10px;

}
.book_two_body1{
    display: flex;
    width: 668px;
    height: 142px;
}
.book_two_body{
    box-sizing: border-box;
    height: 142px;
    width: 320px;
    overflow-x: scroll;
    margin-top: 10px;
}
.book_three_img_i{
    width: 278px;
    height: 222px;
    margin-left: 10px;
    box-sizing: border-box;
}
.book_three_img_e{
    width: 124px;
    height: 222px;
    margin-left: 10px;
    box-sizing: border-box;
}
.book_three_img1{
    display: flex;
    width: 998px;
    height: 222px;

}
.book_three_img{
    height: 222px;
    width: 320px;
    overflow-x: scroll;
    box-sizing: border-box;
    margin-top: 10px;
}
.book_four_button_t{
    margin-left: 10px;
}
.book_four_button{
    margin-top: 10px;
}
.book_four{
    text-align: left;
}
.book_five_up1_img1{
    height: 134px;
    width: 96px;
}
.book_five_up1_text{
    font-size:13px;
}
.book_five_up1_img2{
    height: 16px;
    width: 76px;
}
.book_five_up1{
    text-align: left;
    margin-left: 8px;
}
.book_five_up{
    display: flex;
    margin-top: 10px;
}
.book_five_down1_img{
    height: 96px;
    width: 96px;
}
.book_five_down2_text{
    font-size:12px;
}
.book_five_down2{
    width: 96px;
    text-align: left;
}
.book_five_down3_text{
    font-size: 10px;
    color: #BDBDBD;
}
.book_five_down1{
    text-align: left;
    margin-left: 8px;
}
.book_five_down{
    margin-top: 10px;
    display: flex;
}
.book_six_img{
    height: 84px;
    width: 280px;
}
.book_six{
    margin-top: 10px;
}
.book_seven_body2{
    display: flex;
}
.book_seven_body2_img{
    height: 94px;
    width: 60px;
}
.book_seven_body2_text1{
    font-size: 14px;
    font-weight: 800;
}
.book_seven_body2_text2{
    font-size: 10px;
}
.book_seven_body2_text3{
    font-size: 10px;
    color: red;
}
.book_seven_body2_down{
    text-align: left;
    margin-top: 2px;
}
.book_seven_body2_text{
    width: 135px;
    margin-top: 7px;
}
.book_seven_body2_down{
    margin-left: 10px;
}
.book_seven_body2{
    height: 116px;
    width: 225px;
    background: #FAFAFA;
    border-radius: 3px;
    margin-left: 10px;
    box-sizing: border-box;
    padding-top: 10px;
    padding-left: 10px;
}
.book_seven_body1{
    display: flex;
    width: 940px;
    height: 116px;
}
.book_seven_body{
    width: 320px;
    height: 116px;
    box-sizing: border-box;
    overflow-x: scroll;
    margin-top: 10px;
}
.book_nine_title_1{
    font-size: 17px;
    font-weight: 800;
}
.book_nine_title{
    text-align: left;
    margin-left: 17px;
    margin-top: 10px;
}
.book_nine_body_up1_img{
    height: 40px;
    width: 280px;
}
.book_nine_body_up2_text{
    font-size: 13px;
}
.book_nine_body_up3_text{
    font-size: 6px;
    color:  #BDBDBD;
}
.book_nine_body_up{
    text-align: left;
}
.book_nine_body_up2{
    margin-left: 5px;
}
.book_nine_body_up3{
    margin-left: 5px;
}
.book_nine_body_centre1_img1{
    height: 82px;
    width: 58px;
}
.book_nine_body_centre1{
    display: flex;
}
.book_nine_body_centre1_text1{
    font-size: 14px;
    font-weight: 800;
}
.book_nine_body_centre1_img2{
    height: 15px;
    width: 70px;
}
.book_nine_body_centre1_text2{
    font-size: 10px;
    color: #BDBDBD;
}
.book_nine_body_centre1_text{
    text-align: left;
    margin-left: 10px;
    margin-top: 10px;
}
.book_nine_body_centre2_img{
    height: 82px;
    width: 19px;
}
.book_nine_body_centre{
    display: flex;
}
.book_nine_body_centre3_img{
    height: 82px;
    width: 73px;
}
.book_nine_body_bottom{
    margin-top: 10px;
    text-align: left;
}
.book_nine_body_bottom1{
    margin-left: 10px;
    color: #815704;
    background: #DFC898;
}
.book_nine_body{
    padding-left: 5px;
    border:1px solid #E6E6E6;
    margin-top: 10px;
}
.book_end{
  height: 60px;
}
.novel_one_head_write1{
    font-size: 17px;
    font-weight: 800;
    margin-left: 10px;
}
.novel_one_head_write2{
    font-size: 10px;
    font-weight: 1000;
    margin-left: 5px;
}
.novel_one_head{
    text-align: left;
    margin-top: 10px;
}
.novel_one_body1_book1_one_img{
    height: 115px;
    width: 76px;
}
.novel_one_body1_book1_one_text1_write{
    font-size: 14px;
    font-weight: 1000;
}
.novel_one_body1_book1_one_text2_write{
    font-size: 12px;
    color: rgb(190, 190, 190);
}
.novel_one_body1_book1_one_text3_img{
    height: 14px;
    width: 75px;
}
.novel_one_body1_book1_one_text4_write{
    font-size: 12px;
    
}
.novel_one_body1_book1_one_text4{
    text-align: left;  
    width: 235px;
    height: 45px;
    background:rgb(231, 231, 231); 
    padding-left: 4px;
    border-radius: 2px;
    padding-top: 5px;
    margin-top: 5px;
}
.novel_one_body1_book1_one_text{
    text-align: left;
    margin-left: 10px;
}
.novel_one_body1_book1_one{
    display: flex;
    margin-left: 10px;
}
.novel_one_body1_book1_two{
    display: flex;
    margin-left: 10px;
    margin-top: 25px;
}
.novel_one_body1_book{
    display: flex;
    margin-top: 10px;
    height: 265px;
    width: 670px;
}
.novel_one_body{
    height: 280px;
    width: 100%;
    overflow-x: scroll;
    box-sizing: border-box;
    

}
.novel_one_body1_book1{
    box-sizing: border-box;
    height: 265px;
    width: 335px;
}
.novel_one_body1_book2{
    box-sizing: border-box;
    height: 265px;
    width: 335px;
}
.novel_two_head_write2{
    font-size: 10px;
    font-weight: 1000;
    margin-left: 5px;
    line-height: 24px;
    padding-left: 180px;
}
.novel_two_body1{
    width: 60%;
}
.novel_two_head{
    width: 100vw;
    margin-top: 10px;
}
.novel_two_body1_sift_img_i{
    height: 116px;
    width: 78px;
}
.novel_two_body1_sift_title{
    width: 100px;
    text-align: left;
}
.novel_two_body1_sift_title_text{
    font-size: 12px;
    font-weight: 1000;
}
.novel_two_body1_sift_write1_text{
    font-size: 8px;
}
.novel_two_body1_sift_write1{
    text-align: left;
    width: 100px;
}
.novel_two_body1_sift_write2_text{
    font-size: 8px;
}
.novel_two_body1_sift_write2{
    text-align: left;
}
.novel_two_body1_sift_img{
    text-align: left;
}
.novel_two_body1_sift_up{
    display: flex;
}
.novel_two_body1_sift_one{
    margin-left: 6px;
}
.novel_two_body1_sift_two{
    margin-left: 7px;
}
.novel_two_body1_sift_two{
    margin-left: 7px;
}
.novel_two_body1_sift_down{
    display: flex;
}
.novel_two_body1_sift{
    margin-top: 10px;
}
.novel_three_body_img{
    height: 233px;
    width: 276px;
}
.novel_three_body{
    margin-top: 10px;
}
.novel_three{
    margin-top: 10px;
}
.novel_four_head_write1{
    font-size: 17px;
    font-weight: 800;
    margin-left: 10px;
    
}
.novel_four_head{
    text-align: left;
}
.novel_four_body_one_img_1{
    height: 115px;
    width: 76px;
}
.novel_four_body_one_write1_text{
    font-size: 14px;
    font-weight:1000;
}
.novel_four_body_one_write2_text{
    font-size: 11px;
}
.novel_four_body_one_write3_img{
    height: 14px;
    width: 75px;
}
.novel_four_body_one_write4_text{
    font-size: 10px;
}
.novel_four_body_one_up{
    text-align: left;
    display: flex;
    margin-left: 10px;
    margin-top: 10px;
}
.novel_four_body_one_write{
    margin-left: 10px;
}
.novel_four_body_one_button{
    padding-left: 250px;
}
.novel_end{
    height: 60px;
}
.music_one{
    margin-top: 10px;
}
.music_one_head_write1{
    font-size: 17px;
    font-weight: 800;
    margin-left: 10px;
}
.music_one_head_write2{
    font-size: 12px;
    font-weight: 600;
    margin-left: 160px;
}
.music_two_head_write2{
    font-size: 12px;
    font-weight: 600;
    margin-left: 190px;
}
.music_one_head{
    text-align: left;
}
.music_one_body_one_music_img{
    height: 96px;
    width: 96px;
}
.music_one_body_one_title_text{
    font-size: 11px;
    font-weight:600;
}
.music_one_body_one_author_name{
    font-size: 9px;
    color: #A4A4A4;
}
.music_one_body_one_grade_img{
    height: 14px;
    width: 74px;
}
.music_one_body_one_up{
    text-align: left;

}
.music_one_body_one_down{
    text-align: left;
    margin-top: 5px;
}
.music_one_body{
    display: flex;
}
.music_one_body_one{
    margin-left: 7px;
}
.music_one_body{
    margin-top: 10px;
}
.music_two_body_one_up_img{
    height: 96px;
    width: 96px;
}
.music_two_body_one_up_title{
    font-size: 11px;
    font-weight:600;
}
.music_two_body_one_up_title1{
    font-size: 9px;
    font-weight:600;
}
.music_two_body_one_up_name{
    font-size: 9px;
    color: #A4A4A4;
}
.music_two_body_one_up_pic{
    height: 14px;
    width: 74px;
}
.music_two_body_one_up{
    text-align: left;
}
.music_two_head_write1{
    font-size: 17px;
    font-weight: 800;
    margin-left: -2px;
}
.music_two_body1{
    width: 40%;
}
.music_two_body_one_down{
    text-align: left;
    margin-top: 10px;
}
.music_two_body2{
    display: flex;
}
.music_two_body_two{
    margin-left: 7px;
}
.music_two_body_three{
    margin-left: 7px;
}
.music_two_body_one{
    margin-left: 7px;
}
.music_two_body2{
    margin-top: 10px;
}
.music_advertising{
    margin-top: 10px;
    height: 86px;
    width: 274px;
}
.music_three_head_write2{
    font-size: 12px;
    font-weight: 800;
    margin-left: 185px;
}
.music_three_head{
    margin-top: 10px;
}
.music_four_head_write1{
    font-size: 17px;
    font-weight: 800;
    margin-left: -230px;
    
}
.music_four_one{
    display: flex;
}
.music_four_one_img{
    height: 77px;
    width: 77px;
}
.music_four_one_down_up_one_name{
    font-size: 14px;
}
.music_four_one_down_up_one_img{
    height: 18px;
    width: 80px;
}
.music_four_one_down_up_one_text{
    font-size: 10px;
    color: #A4A4A4;
}
.music_four_one_down_up_one{
    text-align: left;
    margin-left: 10px;
}
.music_four_one_down_up{
    display: flex;
}
.music_four_one_down_up_two_img{
    height: 68px;
    width: 54px;
}
.music_four_one_down_down_text{
    font-size: 13px;
    color: #848484;
}
.music_four_one_down_down{
    background: #E6E6E6;
    height: 25px;
    width: 200px;
    border-radius: 4px;
    margin-left: 10px;
}
.music_four_one{
    margin-top: 15px;
    margin-left: 10px;
}
.music_four{
    margin-top: 20px;
}
.music_end{
    height: 60px;
}
.city_head_up_one{
    font-size: 12px;
    margin-left:10px;
    color: #A4A4A4;
}
.city_head_up_two{
    font-size: 12px;
    color: #01DF01;
}
.city_head_up{
    text-align: left;
    line-height: 40px;
}
.city_head_down{
    text-align: left;
    line-height: 40px;
}
.city_head_up{
    width: 150px;
}
.city_head_down{
    width: 150px;
    height: 40px;
}
.city_head{
    display: flex;
}
.city_head_up_three{
    margin-left: 45px;
}
.city_head_down_three{
    margin-left: 35px;
}
.city_one_head_text1{
    font-size: 17px;
    font-weight: 800;
    margin-left: 10px;
}
.city_one_head_text2{
    font-size: 12px;
    font-weight: 800;
    margin-left: 180px;
}
.city_one_head{
    text-align: left;
}
.city_one_body_1_img{
    height: 145px;
    width: 100px;
}
.city_one_body_1_text1{
    font-size: 11px;
    font-weight: 600;
}
.city_one_body_1_text{
    width: 100px;
}
.city_one_body_1_text2{
    font-size: 8px;
     color: #A4A4A4;
}
.city_one_body_1{
    text-align: left;
    margin-left: 5px;
}
.city_one_body{
    display: flex;
    margin-top: 10px;
}
.city_two{
    margin-top: 20px;
}
.city_three_body2_img1{
    margin-left: 10px;
    height: 158px;
    width: 153px;
}
.city_three_body2{
    display: flex;
    box-sizing: border-box;
}
.city_three_body1{
    width: 652px;
    height: 158px;
}
.city_three_body{
    width: 320px;
    height: 158px;
    overflow-x: scroll;
    box-sizing: border-box;
    margin-top: 10px;

}
.city_four_head_text2{
    font-size: 12px;
    font-weight: 800;
    margin-left: 195px;
}
.city_end{
    height: 60px;
}
</style>