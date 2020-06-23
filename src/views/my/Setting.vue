<template>
    <div class="setting_all">
        <van-nav-bar
            left-text="设置"
            left-arrow
            @click-left="my"
            fixed="true"
            placeholder="true"
        />
        <div class="setting_tiao"></div>
        <div class="setting_one">
            <span class="setting_one_text1">夜间模式</span>
            <span class="setting_one_text2">关<van-icon name="arrow" /></span>
        </div>
        <div class="setting_tiao"></div>
        <div class="setting_two">
            <span class="setting_two_text1">账号与安全</span>
            <van-icon @click="settingnumber" class="setting_two_text2" name="arrow" />
        </div>
        <div class="setting_tiao"></div>
        <div class="setting_three">
            <span class="setting_three_text1">推送</span>
           <van-icon @click="push" class="setting_three_text2" name="arrow" />
        </div>
        <div class="setting_tiao"></div>
        <div class="setting_four">
            <span class="setting_four_text1">清理存储空间</span>
            <span class="setting_four_text2">441.1MB <van-icon name="arrow" /></span>
        </div>
        <div class="setting_tiao"></div>
        <div class="setting_five">
            <span class="setting_five_text">将[小组]放在桌面</span>
        </div>
        <hr align="left" width="319px" color="#D8D8D8" size="0.5" />
        <div class="setting_six">
            <span class="setting_six_text">开启悬浮窗权限，以更好地显示通知</span>
        </div>
        <div class="setting_tiao"></div>
        <div class="setting_7">
            <span class="setting_7_text1">将[小组]放在桌面</span>
            <span class="setting_7_text2">来尽情吐槽吧</span>
            <img class="setting_7_text3" src="..\..\assets\img\my\shezhi.png" > 
            <van-icon class="setting_7_text4" name="arrow" />
        </div>
        <hr align="left" width="319px" color="#D8D8D8" size="0.5" />
        <div class="setting_8">
            <span class="setting_8_text">网络诊断</span>
            <van-icon class="setting_8_text2" name="arrow" />
        </div>
        <hr align="left" width="319px" color="#D8D8D8" size="0.5" />
        <div class="setting_six">
            <span class="setting_six_text">更新模板文件</span>
        </div>
        <div class="setting_tiao"></div>
        <div class="setting_9">
            <span class="setting_9_text1">关于</span>
            <van-icon class="setting_9_text2" name="arrow" />
        </div>
        <hr align="left" width="319px" color="#D8D8D8" size="0.5" />
        <div class="setting_10">
            <span class="setting_10_text1">开源许可</span>
            <van-icon class="setting_10_text2" name="arrow" />
        </div>
        <div class="setting_tiao"></div>
        <div class="setting_one">
            <span class="setting_one_text1">实验室</span>
            <van-icon class="setting_12_text2" name="arrow" />
        </div>
        <div class="setting_tiao"></div>
        <div class="setting_11">
            <span class="setting_11_text">退出登录</span>
        </div>
        <div class="setting_tiao"></div>
        <div class="setting_tiao"></div>
    </div>
</template>

<script>
export default {
    methods:{
        my(){
            this.$router.push("/my")
        },
        settingnumber(){
            this.$router.push("/setting_number")
        },
        push(){
            this.$router.push("/push")
        }
    }
}
</script>

<style scoped>
.setting_tiao{
    height: 15px;
    width: 100%;
    background-color: #E6E6E6;
}
.setting_one{
    height: 35px;
    width: 100%;
    text-align: left;
}
.setting_one_text1{
    font-size: 13px;
    line-height: 35px;
    margin-left: 10px;
}
.setting_one_text2{
    font-size: 13px;
    line-height: 35px;
    margin-left: 210px;
}
.setting_two{
    height: 35px;
    width: 100%;
    text-align: left;
}
.setting_two_text1{
    font-size: 13px;
    line-height: 35px;
    margin-left: 10px;
}
.setting_two_text2{
    font-size: 13px;
    line-height: 35px;
    margin-left: 210px;
}
.setting_three{
    height: 35px;
    width: 100%;
    text-align: left;
}
.setting_three_text1{
    font-size: 13px;
    line-height: 35px;
    margin-left: 10px;
}
.setting_three_text2{
    font-size: 13px;
    line-height: 35px;
    margin-left: 250px;
}
.setting_four{
    height: 35px;
    width: 100%;
    text-align: left;
}
.setting_four_text1{
    font-size: 13px;
    line-height: 35px;
    margin-left: 10px;
}
.setting_four_text2{
    font-size: 13px;
    line-height: 35px;
    margin-left: 140px;
}
.setting_five{
    height: 35px;
    width: 100%;
    text-align: left;
}
.setting_five_text{
    font-size: 13px;
    line-height: 40px;
    margin-left: 10px;
}
.setting_six{
    height: 35px;
    width: 100%;
    text-align: left;
}
.setting_six_text{
    font-size: 13px;
    line-height: 30px;
    margin-left: 10px;
}
.setting_7{
    height: 35px;
    width: 100%;
    text-align: left;
}
.setting_7_text1{
    font-size: 13px;
    line-height: 40px;
    margin-left: 10px;
}
.setting_7_text2{
    font-size: 13px;
    line-height: 35px;
    margin-left: 80px;
}
.setting_7_text3{
    height: 16px;
    width: 16px;
}
.setting_7_text4{
    font-size: 13px;
    line-height: 35px;
}
.setting_8{
    height: 35px;
    width: 100%;
    text-align: left;
}
.setting_8_text{
    font-size: 13px;
    line-height: 35px;
    margin-left: 10px;
}
.setting_8_text2{
    font-size: 13px;
    line-height: 35px;
    margin-left: 220px;
}
.setting_9{
    height: 35px;
    width: 100%;
    text-align: left;
}
.setting_9_text1{
    font-size: 13px;
    line-height: 40px;
    margin-left: 10px;
}
.setting_9_text2{
    font-size: 13px;
    line-height: 40px;
    margin-left: 245px;
}
.setting_10{
    height: 35px;
    width: 100%;
    text-align: left;
}
.setting_10_text1{
    font-size: 13px;
    line-height: 30px;
    margin-left: 10px;
}
.setting_10_text2{
    font-size: 13px;
    line-height: 30px;
    margin-left: 220px;
}
.setting_11{
    height: 35px;
    width: 100%;
    text-align: center;
}
.setting_11_text{
    font-size: 13px;
    line-height: 35px;
}
.setting_12_text2{
    font-size: 13px;
    line-height: 30px;
    margin-left: 230px;
}
</style>