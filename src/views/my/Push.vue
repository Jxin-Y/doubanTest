<template>
    <div class="push_all">
        <div class="number_head">
            <van-icon @click="setting" class="number_head_icon" name="arrow-left" />
            <span class="number_head_text1">推送</span>
        </div>
        <div class="push_tiao"></div>
        <div class="push_one">
            <div class="push_one1">
                <div>
                    <span class="push_one_text1">兴趣精选</span>
                </div>
                <div>
                    <span class="push_one_text2">你感兴趣的领域中值得关注的内容</span>
                </div>
            </div>
            <van-switch class="push_one_botton" v-model="checked" active-color="#07c160" inactive-color="#848484" size="13px" />
        </div>
        <hr align="left" width="319px" color="#D8D8D8" size="0.5" />
        <div class="push_two">
            <div class="push_two1">
                <div>
                    <span class="push_two_text1">私信消息</span>
                </div>
                <div>
                    <span class="push_two_text2">已有私信对话中，有了新的回复</span>
                </div>
            </div>
            <van-switch class="push_two_botton" v-model="checked" active-color="#07c160" inactive-color="#848484" size="13px" />
        </div>
        <hr align="left" width="319px" color="#D8D8D8" size="0.5" />
        <div class="push_three">
            <span class="push_three_text">我的日记被回复</span>
            <van-switch class="push_three_botton" v-model="checked" active-color="#07c160" inactive-color="#848484" size="13px" />
        </div>
        <hr align="left" width="319px" color="#D8D8D8" size="0.5" />
        <div class="push_three">
            <span class="push_three_text">我的相册图片被回复</span>
            <van-switch class="push_four_botton" v-model="checked" active-color="#07c160" inactive-color="#848484" size="13px" />
        </div>
        <hr align="left" width="319px" color="#D8D8D8" size="0.5" />
        <div class="push_three">
            <span class="push_three_text">想读/想看/想听的书影音有资源上架</span>
            <van-switch class="push_five_botton" v-model="checked" active-color="#07c160" inactive-color="#848484" size="13px" />
        </div>
        <hr align="left" width="319px" color="#D8D8D8" size="0.5" />
        <div class="push_three">
            <span class="push_three_text">想看的电影在电影院上映</span>
            <van-switch class="push_six_botton" v-model="checked" active-color="#07c160" inactive-color="#848484" size="13px" />
        </div>
        <hr align="left" width="319px" color="#D8D8D8" size="0.5" />
        <div class="push_three">
            <span class="push_three_text">想读的书打折了</span>
            <van-switch class="push_seven_botton" v-model="checked" active-color="#07c160" inactive-color="#848484" size="13px" />
        </div>
        <div class="push_tiao1"></div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      checked: true,
    };
  },
  methods:{
        setting(){
            this.$router.push("/setting")
        }
    }
};
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
.push_tiao{
    height: 20px;
    width: 100%;
    background-color: #f2f1ed;
}
.push_one{
    height: 30px;
    text-align: left;
    display: flex;
}
.push_one_text1{
    font-size: 13px;
}
.push_one_text2{
    font-size: 10px;
}
.push_one1{
    margin-left: 10px;
}
.push_one_botton{
    margin-top: 12px;
    margin-left: 120px;
}
.push_two{
    height: 30px;
    text-align: left;
    display: flex;
}
.push_two_text1{
    font-size: 13px;
}
.push_two_text2{
    font-size: 10px;
}
.push_two1{
    margin-left: 10px;
}
.push_two_botton{
    margin-top: 12px;
    margin-left: 130px;
}
.push_three{
    height: 25px;
    text-align: left;
}
.push_three_text{
    font-size: 13px;
    margin-left: 10px;
    line-height: 25px;
}
.push_three_botton{
    margin-left:179px;
}
.push_four_botton{
    margin-left:152px;
}
.push_five_botton{
    margin-left:67px;
}
.push_six_botton{
    margin-left:125px;
}
.push_seven_botton{
    margin-left:177px;
}
.push_tiao1{
    height: 252px;
    width: 100%;
    background-color: #f2f1ed;
}
</style>