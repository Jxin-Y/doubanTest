<template>
<div>
    <div class="top">
        <div class="top1">
        <div><img src="..\..\assets\img\home\back.png"></div>
        <p class="top-title">提醒</p>
        <p class="top-title1">私信</p>
        </div>
        <div class="line"></div>
    </div>  

    <div class="tip">
        <div>
            <span class="tip-title">1条</span>
        </div>
        <div>
            <span class="tip-title1">全部已读</span>
        </div>
        
        <div class="border">
            <span class="border-title">发私信</span>
        </div>
    </div>  

    <div class="message">
        <div class="message-image"><img src="..\..\assets\img\home\douban_news.png"></div>
        <div class="message-title">
            <p class="message-title1">豆瓣</p>
            <p class="message-title2">欢迎使用豆瓣。</p>
        </div>
        <p class="message-time">21分钟前</p>
        <p class="message-more">...</p>
    </div>

</div>
</template>

<style>
.top{
    width: 100%;
    height: 40px;
}
.top1{
    display: flex;
}
.top-title{
    font-size: 15px;
    color: #bfbfbf;
    margin-left: 80px;
}
.top-title1{
    font-size: 15px;
    margin-left: 60px;
}
.line{
    width: 37px;
    height: 1px;
    margin-left: 200px;
    margin-top: -13px;
    background-color: black;
}
.tip{
    width: 100%;
    height: 30px;
    display: flex;
    background-color: #ededed;
}
.tip-title{
    font-size: 13px;
    color: #bfbfbf;
    margin-left: 10px;
    margin-top: 5px;    
}
.tip-title1{
    font-size: 13px;
    color: #bfbfbf;
    margin-left: 170px;
    margin-top: 5px;
}
.border{
    width: 50px;
    height: 20px;
    border-radius: 5px;
    margin-left: 10px;
    margin-top: 2px;
    border: #63a76c 1px solid;
}
.border-title{
    color: #63a76c;
    font-size: 13px;
    margin-top: 2px;
}
.message{
    width: 100%;
    height: 60px;
    display: flex;
}
.message-image{
    margin-left: 20px;
    margin-top: 8px;
}
.message-title1{
    font-size: 15px;
    margin-left: -50px;
}
.message-title2{
    font-size: 12px;
    margin-top: -15px;
    margin-left: 5px;
    color: #bfbfbf;
}
.message-time{
    font-size: 12px;
    color: #bfbfbf;
    margin-left: 90px;
}
.message-more{
    margin-top: 8px;
    margin-left: 5px;
}

</style>