<template>
    <div class="my_all">
        <div class="my_head">
            <van-icon @click="setting" class="my_head_botton1" size="20px" color="#ffffff" name="setting-o" />
            <van-icon class="my_head_botton2" size="20px" color="#ffffff" name="envelop-o" />
        </div>
        <div class="my_one">
            <div class="my_one_img">
                <van-image
                    round
                    width="40px"
                    height="40px"
                    src="https://img.yzcdn.cn/vant/cat.jpeg"
                />
            </div>
            <div class="my_one_text">
                <div>
                    <span class="my_one_text1">秋<van-icon size="13px" color="#ffffff" name="friends" /></span>
                    <span @click="myself" class="my_one_text2">个人主页<van-icon name="arrow" /></span>
                </div>
                <div>
                    <span class="my_one_text3">关注 0</span>
                    <span class="my_one_text4">被关注 0</span>
                </div>
            </div>
        </div>
        <div class="my_tiao"></div>
        <div class="my_two">
            <img class="my_two_img" src="..\..\assets\img\my\mydang.png">
        </div>
        <div class="my_three">
            <div class="my_three1">
                <span class="my_three1_text1">影视</span>
                <span class="my_three1_text2">图书</span>
                <span class="my_three1_text3">音乐</span>
            </div>
            <div class="line"></div>
            <hr align="left" width="319px" color="#D8D8D8" size="0.5" />        
        </div>
        <div class="my_four">
            <img class="my_four_img" src="..\..\assets\img\my\myfilm.png">
            <img class="my_four_img" src="..\..\assets\img\my\mybook.png">
            <img class="my_four_img" src="..\..\assets\img\my\mymusic.png">
        </div>
        <div class="my_tiao"></div>
        <div class="my_five">
            <img class="my_five_img" src="..\..\assets\img\my\myicon1.png">
            <span class="my_five_text">看电影</span>
            <van-icon class="my_five_icon1" name="arrow" />
        </div>
        <div class="my_tiao"></div>
        <div class="my_five">
            <img class="my_five_img" src="..\..\assets\img\my\myicon2.png">
            <span class="my_five_text">我的发布</span>
            <van-icon class="my_five_icon2" name="arrow" />
        </div>
        <div class="my_five">
            <img class="my_five_img" src="..\..\assets\img\my\myicon3.png">
            <span class="my_five_text">我的日记</span>
            <van-icon class="my_five_icon3" name="arrow" />
        </div>
        <div class="my_five">
            <img class="my_five_img" src="..\..\assets\img\my\myicon4.png">
            <span class="my_five_text">我的关注</span>
            <van-icon class="my_five_icon4" name="arrow" />
        </div>
        <div class="my_five">
            <img class="my_five_img" src="..\..\assets\img\my\myicon5.png">
            <span class="my_five_text">相册</span>
            <van-icon class="my_five_icon5" name="arrow" />
        </div>
        <div class="my_five">
            <img class="my_five_img" src="..\..\assets\img\my\myicon6.png">
            <span class="my_five_text">豆列/收藏</span>
            <van-icon class="my_five_icon6" name="arrow" />
        </div>
        <div class="my_tiao"></div>
        <div class="my_five">
            <img class="my_five_img" src="..\..\assets\img\my\myicon7.png">
            <span class="my_five_text">钱包</span>
            <van-icon @click="money" class="my_five_icon5" name="arrow" />
        </div>
        <div class="my_tiao"></div>
        <div class="my_tiao1"></div>
    </div>
</template>

<script>
export default {
    methods:{
        setting(){
            this.$router.push("/setting")
        },
        myself(){
            this.$router.push("/myself")
        },
        money(){
            this.$router.push("/money")
        }
    }
}
</script>

<style scoped>
.my_head{
    text-align: left;
    padding-top: 10px;
    background-color: #03C506;
}
.my_head_botton1{
    margin-left: 10px;
}
.my_head_botton2{
    margin-left: 260px;
}
.my_one{
    text-align: left;
    padding-top: 15px;
    display: flex;
    background-color: #03C506;
    padding-bottom: 15px;
}
.my_one_img{
    margin-left: 10px;
}
.my_one_text{
    margin-left: 10px;
}
.my_one_text1{
    font-size: 14px;
    font-weight: 1000;
    color: #ffffff;
}
.my_one_text2{
    font-size: 14px;
    color: #ffffff;
    margin-left: 160px;
}
.my_one_text3{
    font-size: 14px;
    color: #ffffff;
}
.my_one_text4{
    font-size: 14px;
    color: #ffffff;
    margin-left: 20px;
}
.my_tiao{
    height: 5px;
    background-color: #E6E6E6;
}
.my_two_img{
    width: 300px;
    margin-top: 10px;
}
.my_three1{
    margin-top: 10px;
    text-align: left;
}
.my_three1_text1{
    font-size: 15px;
    
    margin-left: 20px;
}
.my_three1_text2{
    font-size: 15px;
    color: #BDBDBD;
    margin-left: 20px;
}
.my_three1_text3{
    font-size: 15px;
    color: #BDBDBD;
    margin-left: 20px;
}
.line{
    margin-top: 5px;
    height: 2px;
    width: 30px;
    background-color: black;
    margin-left: 20px;
}
.my_four{
    text-align: left;
    margin-bottom: 10px;
}
.my_four_img{
    height: 90px;
    margin-left: 10px;
}
.my_five{
    height: 35px;
    width: 100%;
    text-align: left;
    display: flex;
    
}
.my_five_img{
    height: 25px;
    margin-left: 10px;
    line-height: 35px;
}
.my_five_text{
    font-size: 13px;
    line-height: 35px;
    margin-left: 10px;
}
.my_five_icon1{
    line-height: 35px;
    margin-left: 210px;
}
.my_five_icon2{
    line-height: 35px;
    margin-left: 200px;
}
.my_five_icon3{
    line-height: 35px;
    margin-left: 200px;
}
.my_five_icon4{
    line-height: 35px;
    margin-left: 200px;
}
.my_five_icon5{
    line-height: 35px;
    margin-left: 225px;
}
.my_five_icon6{
    line-height: 35px;
    margin-left: 195px;
}
.my_tiao1{
    height: 50px;
    background-color: #E6E6E6;
}
</style>