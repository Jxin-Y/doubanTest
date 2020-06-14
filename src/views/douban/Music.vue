<template>
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
                    <span class="music_three_head_write2">全部</span>
                    <van-icon class="music_one_head_write3" name="arrow" />
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
            <hr>
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
            <hr>
        </div>
    </div>
</template>

<style scoped>
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
</style>