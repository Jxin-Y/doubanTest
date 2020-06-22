<template>
<div> 
    <div class="top">
        <div class="top-icon">
            <img class="top-icon1" src="..\..\assets\img\my\豆瓣设置.png" alt="">
            <img class="top-icon2" src="..\..\assets\img\my\豆瓣消息.png" alt="">
        </div>

        <div class="top-title">
            <van-image class="top-image" round width="50px" height="50px" src="https://img.yzcdn.cn/vant/cat.jpeg"/>
            <div>
                <p class="top-title1">哦哦</p>
                <p class="top-title2">关注0</p>
            </div>
            <p class="top-title3">被关注0</p>
            <p class="top-title4">个人主页</p>
        </div>
    </div>  

    <div class="bg">
        <p class="bg-title">在这里，记录你的书影音生活</p>
        <p class="bg-title1">开启我的书影音档案</p>
    </div>   

    <div class="title">
        <p class="title1">影视</p>
        <p class="title2">图书</p>
        <p class="title3">音乐</p>
    </div>
    <div class="line"></div>
    <div class="line1"></div>

    <div class="kind">
        <div class="kind1">
            <p class="kind1-title">影视</p> 
            <img src="..\..\assets\img\my\影视.png" alt="">
            <p class="kind1-title1">记录你想看、在看、看过的影视</p>
        </div>
         <div class="kind2">
            <p class="kind2-title">图书</p> 
            <img src="..\..\assets\img\my\图书.png" alt="">
            <p class="kind2-title1">记录你想读、在读、读过的图书</p>
        </div>
         <div class="kind3">
            <p class="kind3-title">音乐</p> 
            <img src="..\..\assets\img\my\音乐.png" alt="">
            <p class="kind3-title1">记录你想听、在听、听过的音乐</p>
        </div>
    </div>

    <div class="bg1"></div>

    <div class="text">
        <div><img class="text-icon" src="..\..\assets\img\my\看电影.png" alt=""></div>
        <p class="text-title">看电影</p>
        <div><img class="text-icon1" src="..\..\assets\img\my\豆瓣更多.png" alt=""></div>
    </div>
    <div class="bg2"></div>

    <div class="text1">
        <div><img class="text1-icon" src="..\..\assets\img\my\我的发布.png" alt=""></div>
        <p class="text1-title">我的发布</p>
        <div><img class="text1-icon1" src="..\..\assets\img\my\豆瓣更多.png" alt=""></div>
    </div>
    <div class="xian">
          <van-divider  :style="{ borderColor: '#b5b5b5' }" />
             </div>
    
     <div class="text2">
        <div><img class="text2-icon" src="..\..\assets\img\my\我的关注.png" alt=""></div>
        <p class="text2-title">我的关注</p>
        <div><img class="text2-icon1" src="..\..\assets\img\my\豆瓣更多.png" alt=""></div>
    </div>
    <div class="xian">
          <van-divider  :style="{ borderColor: '#b5b5b5' }" />
             </div>

     <div class="text3">
        <div><img class="text3-icon" src="..\..\assets\img\my\相册.png" alt=""></div>
        <p class="text3-title">相册</p>
        <div><img class="text3-icon1" src="..\..\assets\img\my\豆瓣更多.png" alt=""></div>
    </div>
    <div class="xian">
          <van-divider  :style="{ borderColor: '#b5b5b5' }" />
             </div>

    <div class="text4">
        <div><img class="text4-icon" src="..\..\assets\img\my\豆列.png" alt=""></div>
        <p class="text4-title">豆列/收藏</p>
        <div><img class="text4-icon1" src="..\..\assets\img\my\豆瓣更多.png" alt=""></div>
    </div>
 
    <div class="bg3"></div>

     <div class="text5">
        <div><img class="text5-icon" src="..\..\assets\img\my\钱包.png" alt=""></div>
        <p class="text5-title">钱包</p>
        <div><img class="text5-icon1" src="..\..\assets\img\my\豆瓣更多.png" alt=""></div>
    </div>
</div>
</template>

<script>
export default {
    
}
</script>

<style>
.top{
    width: 100%;
    height: 130px;
    background-color: #5cc66c;
}
.top-icon{
    display: flex;
}
.top-icon1{
    margin-left: 10px;
}
.top-icon2{
    margin-left: 250px;
}
.top-title{
    display: flex;
}
.top-image{
    margin-left: 10px;
    margin-top: 40px;
}
.top-title1{
    color: #FFFFFF;
    font-weight: bold;
    font-size: 15px;
    margin-left: 15px;
    margin-top: 45px;
}
.top-title2{
    font-size: 11px;
    color: #FFFFFF;
    margin-left: 15px;
    margin-top: -10px;
}
.top-title3{
    font-size: 11px;
    color: #FFFFFF;
    margin-left: 20px;
    margin-top: 70px;
}
.top-title4{
    font-size: 11px;
    color: #FFFFFF;
    margin-top: 50px;
    margin-left: 100px;
}
.bg{
    width: 280px;
    height: 60px;
    margin-left: 20px;
    margin-top: 10px;
    border-radius: 10px;
    background-color: #000000;
}
.bg-title{
    font-size: 12px;
    color: #FFFFFF;
    padding-top: 15px;
}
.bg-title1{
    font-size: 12px;
    color: #2b934f;
    margin-top: -10px;
}
.title{
    display: flex;
}
.title1{
    margin-left: 20px;
    font-size: 15px;
}
.title2{
    margin-left: 20px;
    font-size: 15px;
    color: #bfbfbf;
}
.title3{
    margin-left: 20px;
    font-size: 15px;
    color: #bfbfbf;
}
.line{
    width: 28px;
    margin-top: -10px;
    height: 2px;
    margin-left: 20px;
    background-color: #000000;
}
.line1{
    width: 100%;
    height: 1px;
    background-color: #dfdfdf;
}
.kind{
    width: 100%;
    height: 120px;
    margin-top: 10px;
    display: flex;
}
.kind1{
    width: 90px;
    height: 110px;
    margin-left: 20px;
    border-radius: 5px;
    border: #dfdfdf 1px solid;
}
.kind1-title{
    font-size: 10px;
    font-weight: bold;
    margin-left: -50px;
}
.kind1-title1{
    font-size: 10px;
    color: #bfbfbf;
    text-align: left;
}
.kind2{
    width: 90px;
    height: 110px;
    margin-left: 10px;
    border-radius: 5px;
    border: #dfdfdf 1px solid;
}
.kind2-title{
    font-size: 10px;
    font-weight: bold;
    margin-left: -50px;
}
.kind2-title1{
    font-size: 10px;
    color: #bfbfbf;
    text-align: left;
}
.kind3{
    width: 90px;
    height: 110px;
    margin-left: 10px;
    border-radius: 5px;
    border: #dfdfdf 1px solid;
}
.kind3-title{
    font-size: 10px;
    font-weight: bold;
    margin-left: -50px;
}
.kind3-title1{
    font-size: 10px;
    color: #bfbfbf;
    text-align: left;
}
.bg1{
    width: 100%;
    height: 10px;
    background-color: #ededed;
}
.text{
    display: flex;
    width: 100%;
    height: 40px;
}
.text-icon{
    margin-left: 20px;
    padding-top: 5px;
}
.text-title{
    margin-left: 15px;
    font-size: 15px;
    margin-top: 8px;
}
.text-icon1{
    margin-left: 180px;
    margin-top: 5px;
}
.bg2{
    width: 100%;
    height: 10px;
    background-color: #ededed;
}
.text1{
    display: flex;
    width: 100%;
    height: 40px;
}
.text1-icon{
    margin-left: 20px;
    padding-top: 5px;
}
.text1-title{
    margin-left: 15px;
    font-size: 15px;
    margin-top: 8px;
}
.text1-icon1{
    margin-left: 165px;
    margin-top: 5px;
}
.xian{
    margin-top: -15px;
}
.text2{
    display: flex;
    width: 100%;
    margin-top: -15px;
    height: 40px;
}
.text2-icon{
    margin-left: 20px;
    padding-top: 5px;
}
.text2-title{
    margin-left: 15px;
    font-size: 15px;
    margin-top: 8px;
}
.text2-icon1{
    margin-left: 165px;
    margin-top: 5px;
}
.xian{
    margin-top: -15px;
}
.text3{
    display: flex;
    width: 100%;
    margin-top: -15px;
    height: 40px;
}
.text3-icon{
    margin-left: 20px;
    padding-top: 5px;
}
.text3-title{
    margin-left: 15px;
    font-size: 15px;
    margin-top: 8px;
}
.text3-icon1{
    margin-left: 190px;
    margin-top: 5px;
}
.xian{
    margin-top: -15px;
}
.text4{
    display: flex;
    width: 100%;
    margin-top: -15px;
    height: 40px;
}
.text4-icon{
    margin-left: 20px;
    padding-top: 5px;
}
.text4-title{
    margin-left: 15px;
    font-size: 15px;
    margin-top: 8px;
}
.text4-icon1{
    margin-left: 160px;
    margin-top: 5px;
}
.xian{
    margin-top: -15px;
}
.bg3{
    width: 100%;
    height: 10px;
    background-color: #ededed;
}
.text5{
    display: flex;
    width: 100%;
    height: 40px;
}
.text5-icon{
    margin-left: 20px;
    padding-top: 5px;
}
.text5-title{
    margin-left: 15px;
    font-size: 15px;
    margin-top: 8px;
}
.text5-icon1{
    margin-left: 190px;
    margin-top: 5px;
}
</style>