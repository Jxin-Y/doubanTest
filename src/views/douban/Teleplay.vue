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
            <van-tabs 
            v-model="active"
            >
                <van-tab title="热播新剧">内容 1</van-tab>
                <van-tab title="热播综艺">内容 2</van-tab>
            </van-tabs>
        </div>
    </div>
</template>