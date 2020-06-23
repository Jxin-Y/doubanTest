<template>
    <div class="number_all">
        <div class="number_head">
            <van-icon @click="setting" class="number_head_icon" name="arrow-left" />
            <span class="number_head_text1">账户与安全</span>
        </div>
        <div class="number_one">
            <span class="number_one_text">密码设置</span>
        </div>
        <div class="number_two">
            <span class="number_two_text">重置密码</span>
            <van-icon class="number_two_icon" name="arrow" />
        </div>
        <div class="number_three">
            <div class="number_three_t"></div>
            <span class="number_three_text">安全绑定（有助于账号丢失后快速找回）</span>
        </div>
        <div class="number_four">
            <span class="number_four_text1">手机号</span>
            <span class="number_four_text2">135****9819</span>
            <span class="number_four_text3">已绑定<van-icon name="arrow" /></span>
        </div>
        <hr align="left" width="319px" color="#D8D8D8" size="0.5" />
        <div class="number_five">
            <span class="number_five_text1">邮箱</span>
            <van-button class="number_five_icon" plain type="primary" size="mini">去绑定</van-button>
        </div>
        <hr align="left" width="319px" color="#D8D8D8" size="0.5" />
        <div class="number_five">
            <span class="number_five_text1">微信</span>
            <van-button class="number_five_icon" plain type="primary" size="mini">去绑定</van-button>
        </div>
        <hr align="left" width="319px" color="#D8D8D8" size="0.5" />
        <div class="number_six">
            <span class="number_six_text1">微博</span>
            <span class="number_six_text2">秋</span>
            <span class="number_six_text3">已绑定<van-icon name="arrow" /></span>
        </div>
        <div class="number_three">
            <div class="number_three_t"></div>
            <span class="number_three_text">其他</span>
        </div>
        <div class="number_seven">
            <span class="number_seven_text">隐私设置</span>
            <van-icon class="number_seven_icon" name="arrow" />
        </div>
        <hr align="left" width="319px" color="#D8D8D8" size="0.5" />
        <div class="number_eight">
            <span class="number_eight_text">豆瓣安全中心</span>
            <van-icon class="number_eight_icon" name="arrow" />
        </div>
        <div class="number_nine">
            <div class="number_nine_text1">
                <span class="number_nine_text3">《豆瓣使用协议》</span>
                <span class="number_nine_text4">和</span>
                <span class="number_nine_text5">《豆瓣隐私政策》</span>
            </div>
            <div class="number_nine_text2">
                <span class="number_nine_text6">豆瓣ID:213013794</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        setting(){
            this.$router.push("/setting")
        }
    }
}
</script>

<style scoped>
.number_head{
    text-align: left;
    margin-top: 10px;
    margin-bottom: 10px;
}
.number_head_icon{
    margin-left: 10px;
}
.number_head_text1{
    margin-left: 30px;
    font-weight: 1000;
}
.number_one{
    height: 35px;
    text-align: left;
    width: 100%;
    background-color: #f2f1ed;
}
.number_one_text{
    font-size: 13px;
    line-height: 35px;
    margin-left: 10px;
    color: #848484;
}
.number_two{
    height: 35px;
    text-align: left;
    width: 100%;
}
.number_two_text{
    font-size: 13px;
    line-height: 35px;
    margin-left: 10px;
}
.number_two_icon{
    font-size: 13px;
    line-height: 35px;
    margin-left: 10px;
    margin-left:230px;
}
.number_three{
    height: 40px;
    text-align: left;
    width: 100%;
    background-color: #f2f1ed;
}
.number_three_t{
    height: 18px;
}
.number_three_text{
    font-size: 13px;
    margin-left: 10px;
    color: #848484;
}
.number_four{
    height: 30px;
    text-align: left;
}
.number_four_text1{
    font-size: 13px;
    margin-left: 10px;
}
.number_four_text2{
    line-height: 40px;
    font-size: 13px;
    margin-left: 70px;
}
.number_four_text3{
    line-height: 40px;
    font-size: 13px;
    margin-left: 65px;
}
.number_five{
    height: 25px;
    text-align: left;
}
.number_five_text1{
    font-size: 13px;
    margin-left: 10px;
    line-height: 25px;
}
.number_five_icon{
    margin-left: 220px;
    line-height: 25px;
}
.number_six{
    height: 30px;
    text-align: left;
}
.number_six_text1{
    font-size: 13px;
    line-height: 30px;
    margin-left: 10px;
}
.number_six_text2{
    font-size: 13px;
    line-height: 25px;
    margin-left: 100px;
}
.number_six_text3{
    font-size: 13px;
    line-height: 25px;
    margin-left: 105px;
}
.number_seven{
    height: 30px;
    text-align: left;
}
.number_seven_text{
    font-size: 13px;
    margin-left: 10px;
    line-height:35px;
}
.number_seven_icon{
    font-size: 13px;
    margin-left: 230px;
    line-height:35px;
}
.number_eight{
    height: 30px;
    text-align: left;
}
.number_eight_text{
    font-size: 13px;
    margin-left: 10px;
    line-height:20px;
}
.number_eight_icon{
    font-size: 13px;
    margin-left:200px;
    line-height:20px;
}
.number_nine{
    background-color: #f2f1ed;
    height: 151px;
}
.number_nine{
    padding-top: 20px;
}
.number_nine_text3{
    font-size: 13px;
    color: #04B404;
}
.number_nine_text4{
    font-size: 13px;
    color: #848484;
}
.number_nine_text5{
    font-size: 13px;
    color: #04B404;
}
.number_nine_text2{
    margin-top: 15px;
}
.number_nine_text6{
    font-size: 13px;
    color: #848484;
}
</style>