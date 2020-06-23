<template>
    <div class="myself_all">
        <div class="myself_head">
            <van-icon @click="my" class="myself_head_icon" color="#ffffff" name="arrow-left" />
            <span class="myself_head_text1">个人主页</span>
            <span class="myself_head_text2">···</span>
        </div>
        <div class="myself_one">
            <div class="myself_one_img">
                <van-image
                    round
                    width="80px"
                    height="80px"
                    src="https://img.yzcdn.cn/vant/cat.jpeg"
                />
            </div>
            <div class="myself_one_botton">
                <van-button plain type="primary" size="mini"><van-icon name="video-o" />封面</van-button>
            </div>
        </div>
        <div class="myself_two">
            <span class="myself_two_text">秋</span>
            <van-icon  color="blue" size="16px" name="friends" />
            <van-button class="myself_two_botton" plain type="primary" size="mini">编辑个人资料</van-button>
        </div>
        <hr align="left" width="319px" color="#D8D8D8" size="0.5" /> 
        <div class="myself_three">
            <img class="myself_three_img" src="..\..\assets\img\my\myselfdang.png">
        </div>
        <div class="myself_four">
            <img class="myself_four_img" src="..\..\assets\img\my\myselffilm.png">
        </div>
        <div class="myeslf_five">
            <span class="myeslf_five_text1">看过</span>
            <span class="myeslf_five_text2"> 70</span>
        </div>
        <div class="myself_tiap"></div>
        <div class="myeslf_six">
            <div class="myeslf_six_up">
                <div><span class="myeslf_six_up_text1">0</span></div>
                <div><span class="myeslf_six_up_text2">关注</span></div>
            </div>
            <img class="myself_six_img" src="..\..\assets\img\my\myselfxian.png">
            <div class="myeslf_six_up">
                <div><span class="myeslf_six_up_text1">0</span></div>
                <div><span class="myeslf_six_up_text2">关注</span></div>
            </div>
        </div>
        <div class="myself_seven">
            <span class="myself_seven_text">暂无内容</span>
        </div>
        <div class="myself_eight">
            <span class="myself_eight_text">2020</span>
        </div>
        <div class="myself_nine">
            <span class="myself_nine_text1">看过</span>
            <span class="myself_nine_text2">6月19日</span>
        </div>
        <div class="myself_ten">
            <img class="myself_ten_img" src="..\..\assets\img\my\myselffilm1.png">
        </div>
        <div class="myself_eleven">
            <div><span class="myself_eleven_text1">2020</span></div>
            <div><span class="myself_eleven_text2">三月</span></div>
            <van-divider>加入</van-divider>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        my(){
            this.$router.push("/my")
        }
    }
}
</script>

<style scoped>
.myself_head{
    padding-top: 10px;
    background-color: #03C506;
    text-align: left;
}
.myself_head_icon{
    margin-left: 10px;
}
.myself_head_text1{
    font-size: 16px;
    color:#ffffff;
    margin-left: 100px;
}
.myself_head_text2{
    font-size: 16px;
    color:#ffffff;
    margin-left: 100px;
}
.myself_one{
    background-color: #03C506;
    padding-top: 30px;
    padding-bottom: 10px;
}
.myself_one_botton{
    text-align: left;
    margin-left: 10px;
}
.myself_two{
    margin-top: 10px;
    text-align: left;
}
.myself_two_text{
    margin-left: 10px;
    font-weight: 1000;
}
.myself_two_botton{
    margin-left: 200px;
}
.myself_three{
    margin-top: 10px;
}
.myself_three_img{
    width: 300px;
}
.myself_four{
    margin-top: 10px;
}
.myself_four_img{
    width: 260px;
}
.myeslf_five_text1{
    font-size: 10px;
}
.myeslf_five_text2{
    font-size: 10px;
    color: rgb(78, 78, 250);
}
.myself_tiap{
    margin-top: 10px;
    height: 12px;
    width: 100%;
    background-color: #E6E6E6;
}
.myeslf_six{
    display: flex;
    margin-top: 10px;
}
.myeslf_six_up_text1{
    font-size: 12px;
}
.myeslf_six_up_text2{
    font-size: 10px;
}
.myself_six_img{
    height: 60px;
}
.myeslf_six_up{
    margin-left: 70px;
}
.myself_six_img{
    margin-left: 70px;
}
.myself_seven_text{
    font-size: 10px;
    color: #D8D8D8;
}
.myself_eight{
    margin-top: 30px;
}
.myself_eight_text{
    font-size: 10px;
    color: #BDBDBD;
}
.myself_nine{
    margin-top: 20px;
    text-align: left;
}
.myself_nine_text1{
    font-size: 10px;
    color: #D8D8D8;
    margin-left: 10px;
}
.myself_nine_text2{
    font-size: 10px;
    color: #D8D8D8;
    margin-left: 240px;
}
.myself_ten{
    margin-top: 10px;
    margin-bottom: 10px;
}
.myself_ten_img{
    width: 290px;
}
.myself_eleven_text1{
    font-size: 12px;
    font-weight: 1000;
    color: #D8D8D8;
}
.myself_eleven_text2{
    margin-top: 10px;
    font-size: 14px;
    font-weight: 1000;
    color: #D8D8D8;
}
</style>