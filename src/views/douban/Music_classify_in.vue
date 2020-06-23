<template>
    <div class="classifyin_all">
        <div class="classify_head">
            <van-icon @click="musicclassify" name="arrow-left" />
            <span class="classify_head_text">分类找音乐</span>
        </div>
        <div class="classifyin_one">
            <div class="classifyin_one_body">
                <span class="classifyin_one_text">风格</span>
                <div class="classifyin_one_search">
                    <div class="classifyin_one_search1">
                        <van-button class="classifyin_one_bottom" type="primary" size="mini">全部</van-button>
                        <van-button class="classifyin_one_bottom" size="mini">流行</van-button>
                        <van-button class="classifyin_one_bottom" size="mini">摇滚</van-button>
                        <van-button class="classifyin_one_bottom" size="mini">民谣</van-button>
                        <van-button class="classifyin_one_bottom" size="mini">独立</van-button>
                        <van-button class="classifyin_one_bottom" size="mini">古典</van-button>
                        <van-button class="classifyin_one_bottom" size="mini">电子</van-button>
                        <van-button class="classifyin_one_bottom" size="mini">原声</van-button>
                        <van-button class="classifyin_one_bottom" size="mini">爵士</van-button>
                        <van-button class="classifyin_one_bottom" size="mini">R&B</van-button>
                        <van-button class="classifyin_one_bottom" size="mini">说唱</van-button>
                        <van-button class="classifyin_one_bottom" size="mini">轻音乐</van-button>
                    </div>
                </div>
            </div>
            <div class="classifyin_one_body">
                <span class="classifyin_one_text">地区</span>
                <div class="classifyin_one_search2">
                    <div class="classifyin_one_search3">
                        <van-button class="classifyin_one_bottom2" type="primary" size="mini">全部</van-button>
                        <van-button class="classifyin_one_bottom2" size="mini">华语</van-button>
                        <van-button class="classifyin_one_bottom2" size="mini">欧美</van-button>
                        <van-button class="classifyin_one_bottom2" size="mini">日本</van-button>
                        <van-button class="classifyin_one_bottom2" size="mini">韩国</van-button>
                        <van-button class="classifyin_one_bottom2" size="mini">其他</van-button>
                    </div>
                </div>
            </div>
            <div class="classifyin_one_body">
                <span class="classifyin_one_text">其他</span>
                <van-button class="classifyin_one_bottom2" type="primary" size="mini">全部</van-button>
                <span class="classifyin_one_text1">+自定义标签</span>
            </div>
        </div>
        <div class="classify_tiao">
        </div>
        <div class="classifyin_two">
            <div class="classifyin_two_head">
                <div class="classifyin_two_head1">
                    <span class="classifyin_two_head_text">专辑列表</span> 
                </div>
                <img class="classifyin_two_head_img" src="..\..\assets\img\douban\music\musiczhuanji.png">
            </div>
           <div class="classifyin_two_body">
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
                    </div>
                </div>
                <hr align="left" width="319px" color="#D8D8D8" size="0.5" />
           </div>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        musicclassify(){
            this.$router.push("/music_classify")
        }
    }
}
</script>

<style scoped>
.classify_head{
    text-align: left;
    margin-left: 10px;
    margin-top: 10px;
}
.classify_head_text{
    margin-left: 100px;
    font-size: 16px;
}
.classifyin_one_bottom{
    box-sizing: border-box;
    margin-left: 5px;
}
.classifyin_one_search1{
    height: 23px;
    width: 660px;
    text-align: left;
}
.classifyin_one_search{
    height: 23px;
    width: 280px;
    overflow-x: scroll;
    box-sizing: border-box;
}
.classifyin_one_body{
    display:flex;
    margin-top: 10px;
}
.classifyin_one_text{
    font-size: 13px;
    font-weight: 1000;
    margin-left: 10px;
}
.classifyin_one_search3{
    text-align: left;
    height: 23px;
    width: 330px;
}
.classifyin_one_search2{
    height: 23px;
    width: 280px;
    overflow-x: scroll;
    box-sizing: border-box;
}
.classifyin_one_bottom2{
    margin-left: 5px;
    box-sizing: border-box;
}
.classifyin_one_text1{
    margin-left: 5px;
    font-size:12px;
    color: #04B404;
}
.classify_tiao{
    margin-top: 10px;
    height: 10px;
    width: 100%;
    background-color: #E6E6E6;
}
.classifyin_two_head_text{
    font-size: 13px;
    margin-left: 10px;
    margin-top: -10px;
}
.classifyin_two_head1{
    text-align: left;
    margin-top: 10px;
}
.classifyin_two_head_img{
    height: 25px;
    margin-top: 7px;
    margin-left: 80px;
}
.classifyin_two_head{
    display: flex;
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
</style>