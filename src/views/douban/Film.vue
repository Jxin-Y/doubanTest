<template>

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

<style>
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
</style>