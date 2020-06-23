<template>
    <div class="message_all">
        <div class="message_head">
            <div class="message_head1">
                <van-icon @click="doubanhome" name="arrow-left" />
                <span class="message_head1_text1">提醒</span>
                <span class="message_head1_text2">私信</span>
            </div>
            <div class="line"></div>        
        </div>
        <div class="message_one">
            <span class="message_one_text1">1条</span>
            <span class="message_one_text2">全部已读</span>
            <van-button plain type="primary" size="mini">发私信</van-button>
        </div>
        <div @click="chat" class="message_two">
            <img class="message_two_img" src="..\..\assets\img\home\douban_news.png">
            <div class="message_two_text">
                <div class="message_two_text_up">
                    <span class="message_two_text_up_text1">豆瓣</span>
                    <span  class="message_two_text_up_text2">3月6日</span>
                    <span class="message_two_text_up_text3">···</span>
                </div>
                <div class="message_two_text_down">
                    <span class="message_two_text_down_text1">欢迎使用豆瓣。...</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
     methods:{
        doubanhome(){
            this.$router.push("/douban_home")
        },
        chat(){
            this.$router.push("/chat")
        }
     }
}
</script>

<style>
.message_head1{
    margin-top: 10px;
    text-align: left;
}
.message_head1_text1{
    font-size: 15px;
    color: #BDBDBD;
    margin-left: 100px;
}
.message_head1_text2{
    font-size: 15px;
    margin-left: 40px;
}
.line{
    margin-top: 5px;
    height: 1px;
    width: 30px;
    background-color: black;
    margin-left: 186px;
}
.message_one{
    height: 35px;
    width: 100%;
    background-color: #E6E6E6;
    text-align: left;
}
.message_one_text1{
    font-size: 13px;
    line-height: 35px;
    margin-left: 10px;
    color: #BDBDBD;
}
.message_one_text2{
    font-size: 13px;
    line-height: 35px;
    margin-left: 160px;
    margin-right: 15px;
    color: #BDBDBD;
}
.message_two_img{
    height: 30px;
}
.message_two{
    margin-top: 10px;
    display: flex;
    margin-left: 20px;
}
.message_two_text{
    text-align: left;
    margin-left: 10px;
}
.message_two_text_up_text1{
    font-size: 14px;
}
.message_two_text_up_text2{
    font-size: 10px;
    margin-left: 170px;
    color: #BDBDBD;
}
.message_two_text_up_text3{
    font-size: 10px;
    font-weight: 1000;
    margin-left: 10px;
}
.message_two_text_down_text1{
    font-size: 11px;
    color: #BDBDBD;
}
</style>