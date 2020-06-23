<template>
<div>
    <div class="top">
        <div><img @click="message" src="..\..\assets\img\home\back.png"></div>
        <p class="top-title">豆瓣</p>
        <p class="top-more">...</p>
    </div> 
    <div class="xian">
          <van-divider  :style="{ borderColor: '#b5b5b5' }" />
             </div> 

    <div class="content">
        <div class="content1">
             <div class="content-image"><img src="..\..\assets\img\home\douban_chat.png" ></div>
             <p class="content-title">豆瓣</p>
        </div>
        <div class="text">
            <p class="text1">欢迎使用豆瓣。</p>
            <p class="text2">在这里你可以：查看影视、图书、唱片的评分和评论，学习豆瓣达人们的生活经验，跟志趣相同的朋友们交流</p>
        </div>
    </div>  

    <div class="send">
        <div class="send1">
            <div class="input"></div>
            <div class="input1"><img src="..\..\assets\img\home\chat_fly.png"></div>
        </div>
        <div><img src="..\..\assets\img\home\chat_buttom.png"></div>
    </div>

   
</div>
</template>

<script>
export default {
    methods:{
        message(){
            this.$router.push("/message")
        }
     }
}
</script>

<style>
.top{
    width: 100%;
    height: 20px;
    display: flex;
} 
.top-title{
    font-weight: bold;
    margin-left: 110px;
    margin-top: 5px;
}  
.top-more{
    font-weight: bold;
    margin-left: 110px;
    margin-top: 5px;
}
.content{
    width: 100%;
    height: 400px;
}
.content1{
    display: flex;
}
.content-image{
    margin-left: 5px;
    margin-top: 10px;
}
.content-title{
    font-size: 12px;
    color: #bfbfbf;
    margin-left: 10px;
    margin-top: 20px;
}
.text{
    width: 250px;
    height: 90px;
    margin-left: 50px;
    text-align: left;
    margin-top: -25px;
    border-radius: 10px;
    background-color: #f6f6f6;
}
.text1{
    font-size: 13px;
    margin-left: 10px;
}
.text2{
    font-size: 13px;
    margin-left: 10px;
}
.send{
    width: 100%;
    height: 90px;
    margin-top: 60px;
    background-color: #f6f6f6;
}
.send1{
    display: flex;
}
.input{
    width: 250px;
    background-color: #FFFFFF;
    border-radius: 20px;
    margin-left: 15px;
    margin-top: 10px;
    height: 30px;
}
.send-title{
    margin-left: 10px;
    font-size: 15px;
}
.input1{
    margin-left: 3px;
    margin-top: 8px;
}
</style>