<template>
    <div class="macommend_all">
        <div class="number_head">
            <van-icon @click="market" class="number_head_icon" name="arrow-left" />
            <span class="number_head_text1">豆瓣豆品</span>
        </div>
        <div class="macommend_body">
            <van-tabs v-model="active"
            :color="'#000000'">
                <van-tab title="推荐">
                    <div class="market_doupin_four_body">
                        <div class="market_doupin_four_body1">
                            <div class="market_doupin_four_body1_up">
                                <div>
                                    <img class="market_doupin_four_body1_img1" src="..\..\assets\img\market\doupintuijian1.png">
                                </div>
                                <div>
                                    <span class="market_doupin_four_body1_write1">电影徽章</span>
                                </div>
                                <div>
                                    <span class="market_doupin_four_body1_write2">致敬光影造梦者</span>
                                </div>
                                <div>
                                    <span class="market_doupin_four_body1_write3">￥35</span>
                                </div>
                            </div>
                            <div class="market_doupin_four_body1_down">
                                <div>
                                    <img class="market_doupin_four_body1_img1" src="..\..\assets\img\market\doupindanpin3.png">
                                </div>
                                <div>
                                    <span class="market_doupin_four_body1_write1">豆瓣咖啡</span>
                                </div>
                                <div>
                                    <span class="market_doupin_four_body1_write2">收藏世界风味</span>
                                </div>
                                <div>
                                    <span class="market_doupin_four_body1_write3">￥56</span>
                                </div>
                            </div>
                            <div class="market_doupin_four_body1_down">
                                <div>
                                    <img class="market_doupin_four_body1_img1" src="..\..\assets\img\market\doupindanpin3.png">
                                </div>
                                <div>
                                    <span class="market_doupin_four_body1_write1">豆瓣咖啡</span>
                                </div>
                                <div>
                                    <span class="market_doupin_four_body1_write2">收藏世界风味</span>
                                </div>
                                <div>
                                    <span class="market_doupin_four_body1_write3">￥56</span>
                                </div>
                            </div>
                        </div>
                        <div class="market_doupin_four_body1">
                            <div class="market_doupin_four_body1_up">
                                <div>
                                    <img class="market_doupin_four_body1_img1" src="..\..\assets\img\market\doupindanpin2.png">
                                </div>
                                <div>
                                    <span class="market_doupin_four_body1_write1">豆瓣收藏夹</span>
                                </div>
                                <div>
                                    <span class="market_doupin_four_body1_write2">万千票据，一本搞定</span>
                                </div>
                                <div>
                                    <span class="market_doupin_four_body1_write3">￥99</span>
                                </div>
                            </div>
                            <div class="market_doupin_four_body1_down">
                                <div>
                                    <img class="market_doupin_four_body1_img1" src="..\..\assets\img\market\doupindanpin4.png">
                                </div>
                                <div>
                                    <span class="market_doupin_four_body1_write1">藏书票帆布袋</span>
                                </div>
                                <div>
                                    <span class="market_doupin_four_body1_write2">书籍与爱，如影随行</span>
                                </div>
                                <div>
                                    <span class="market_doupin_four_body1_write3">￥79</span>
                                </div>
                            </div>
                            <div class="market_doupin_four_body1_down">
                                <div>
                                    <img class="market_doupin_four_body1_img1" src="..\..\assets\img\market\doupindanpin3.png">
                                </div>
                                <div>
                                    <span class="market_doupin_four_body1_write1">豆瓣咖啡</span>
                                </div>
                                <div>
                                    <span class="market_doupin_four_body1_write2">收藏世界风味</span>
                                </div>
                                <div>
                                    <span class="market_doupin_four_body1_write3">￥56</span>
                                </div>
                            </div>
                        </div>
                    </div>
                            </van-tab>
                            <van-tab title="豆瓣经典">
                                <div class="market_doupin_four_body">
                        <div class="market_doupin_four_body1">
                            <div class="market_doupin_four_body1_up">
                                <div>
                                    <img class="market_doupin_four_body1_img1" src="..\..\assets\img\market\doupintuijian2.png">
                                </div>
                                <div>
                                    <span class="market_doupin_four_body1_write1">豆瓣逆向手表</span>
                                </div>
                                <div>
                                    <span class="market_doupin_four_body1_write2">摆脱“惯性”，逆势而行</span>
                                </div>
                                <div>
                                    <span class="market_doupin_four_body1_write3">￥329</span>
                                </div>
                            </div>
                            <div class="market_doupin_four_body1_down">
                                <div>
                                    <img class="market_doupin_four_body1_img1" src="..\..\assets\img\market\doupindanpin3.png">
                                </div>
                                <div>
                                    <span class="market_doupin_four_body1_write1">豆瓣咖啡</span>
                                </div>
                                <div>
                                    <span class="market_doupin_four_body1_write2">收藏世界风味</span>
                                </div>
                                <div>
                                    <span class="market_doupin_four_body1_write3">￥56</span>
                                </div>
                            </div>
                            <div class="market_doupin_four_body1_up">
                                <div>
                                    <img class="market_doupin_four_body1_img1" src="..\..\assets\img\market\doupintuijian2.png">
                                </div>
                                <div>
                                    <span class="market_doupin_four_body1_write1">豆瓣逆向手表</span>
                                </div>
                                <div>
                                    <span class="market_doupin_four_body1_write2">摆脱“惯性”，逆势而行</span>
                                </div>
                                <div>
                                    <span class="market_doupin_four_body1_write3">￥329</span>
                                </div>
                            </div>
                        </div>
                        <div class="market_doupin_four_body1">
                            <div class="market_doupin_four_body1_up">
                                <div>
                                    <img class="market_doupin_four_body1_img1" src="..\..\assets\img\market\doupindanpin2.png">
                                </div>
                                <div>
                                    <span class="market_doupin_four_body1_write1">豆瓣收藏夹</span>
                                </div>
                                <div>
                                    <span class="market_doupin_four_body1_write2">万千票据，一本搞定</span>
                                </div>
                                <div>
                                    <span class="market_doupin_four_body1_write3">￥99</span>
                                </div>
                            </div>
                            <div class="market_doupin_four_body1_down">
                                <div>
                                    <img class="market_doupin_four_body1_img1" src="..\..\assets\img\market\doupindanpin4.png">
                                </div>
                                <div>
                                    <span class="market_doupin_four_body1_write1">藏书票帆布袋</span>
                                </div>
                                <div>
                                    <span class="market_doupin_four_body1_write2">书籍与爱，如影随行</span>
                                </div>
                                <div>
                                    <span class="market_doupin_four_body1_write3">￥79</span>
                                </div>
                            </div>
                        </div>
                    </div>
                            </van-tab>
                            <van-tab title="家居生活">
                                <div class="market_doupin_four_body">
                        <div class="market_doupin_four_body1">
                            <div class="market_doupin_four_body1_up">
                                <div>
                                    <img class="market_doupin_four_body1_img1" src="..\..\assets\img\market\doupintuijian3.png">
                                </div>
                                <div>
                                    <span class="market_doupin_four_body1_write1">豆瓣 × 威尼斯花神咖啡</span>
                                </div>
                                <div>
                                    <span class="market_doupin_four_body1_write2">意大利原装进口咖啡豆</span>
                                </div>
                                <div>
                                    <span class="market_doupin_four_body1_write3">￥128</span>
                                </div>
                            </div>
                            <div class="market_doupin_four_body1_down">
                                <div>
                                    <img class="market_doupin_four_body1_img1" src="..\..\assets\img\market\doupindanpin3.png">
                                </div>
                                <div>
                                    <span class="market_doupin_four_body1_write1">豆瓣咖啡</span>
                                </div>
                                <div>
                                    <span class="market_doupin_four_body1_write2">收藏世界风味</span>
                                </div>
                                <div>
                                    <span class="market_doupin_four_body1_write3">￥56</span>
                                </div>
                            </div>
                            <div class="market_doupin_four_body1_up">
                                <div>
                                    <img class="market_doupin_four_body1_img1" src="..\..\assets\img\market\doupintuijian3.png">
                                </div>
                                <div>
                                    <span class="market_doupin_four_body1_write1">豆瓣 × 威尼斯花神咖啡</span>
                                </div>
                                <div>
                                    <span class="market_doupin_four_body1_write2">意大利原装进口咖啡豆</span>
                                </div>
                                <div>
                                    <span class="market_doupin_four_body1_write3">￥128</span>
                                </div>
                            </div>
                            <div class="market_doupin_four_body1_up">
                                <div>
                                    <img class="market_doupin_four_body1_img1" src="..\..\assets\img\market\doupintuijian3.png">
                                </div>
                                <div>
                                    <span class="market_doupin_four_body1_write1">豆瓣 × 威尼斯花神咖啡</span>
                                </div>
                                <div>
                                    <span class="market_doupin_four_body1_write2">意大利原装进口咖啡豆</span>
                                </div>
                                <div>
                                    <span class="market_doupin_four_body1_write3">￥128</span>
                                </div>
                            </div>
                        </div>
                        <div class="market_doupin_four_body1">
                            <div class="market_doupin_four_body1_up">
                                <div>
                                    <img class="market_doupin_four_body1_img1" src="..\..\assets\img\market\doupindanpin2.png">
                                </div>
                                <div>
                                    <span class="market_doupin_four_body1_write1">豆瓣收藏夹</span>
                                </div>
                                <div>
                                    <span class="market_doupin_four_body1_write2">万千票据，一本搞定</span>
                                </div>
                                <div>
                                    <span class="market_doupin_four_body1_write3">￥99</span>
                                </div>
                            </div>
                            <div class="market_doupin_four_body1_down">
                                <div>
                                    <img class="market_doupin_four_body1_img1" src="..\..\assets\img\market\doupindanpin4.png">
                                </div>
                                <div>
                                    <span class="market_doupin_four_body1_write1">藏书票帆布袋</span>
                                </div>
                                <div>
                                    <span class="market_doupin_four_body1_write2">书籍与爱，如影随行</span>
                                </div>
                                <div>
                                    <span class="market_doupin_four_body1_write3">￥79</span>
                                </div>
                            </div>
                            <div class="market_doupin_four_body1_up">
                                <div>
                                    <img class="market_doupin_four_body1_img1" src="..\..\assets\img\market\doupintuijian3.png">
                                </div>
                                <div>
                                    <span class="market_doupin_four_body1_write1">豆瓣 × 威尼斯花神咖啡</span>
                                </div>
                                <div>
                                    <span class="market_doupin_four_body1_write2">意大利原装进口咖啡豆</span>
                                </div>
                                <div>
                                    <span class="market_doupin_four_body1_write3">￥128</span>
                                </div>
                            </div>
                        </div>
                    </div>
                            </van-tab>
                            <van-tab title="外出旅行">
                                <div class="market_doupin_four_body">
                        <div class="market_doupin_four_body1">
                            <div class="market_doupin_four_body1_up">
                                <div>
                                    <img class="market_doupin_four_body1_img1" src="..\..\assets\img\market\doupintuijian4.png">
                                </div>
                                <div>
                                    <span class="market_doupin_four_body1_write1">豆猫彩袜2020</span>
                                </div>
                                <div>
                                    <span class="market_doupin_four_body1_write2">又一年，温暖随行</span>
                                </div>
                                <div>
                                    <span class="market_doupin_four_body1_write3">￥56</span>
                                </div>
                            </div>
                            <div class="market_doupin_four_body1_down">
                                <div>
                                    <img class="market_doupin_four_body1_img1" src="..\..\assets\img\market\doupindanpin3.png">
                                </div>
                                <div>
                                    <span class="market_doupin_four_body1_write1">豆瓣咖啡</span>
                                </div>
                                <div>
                                    <span class="market_doupin_four_body1_write2">收藏世界风味</span>
                                </div>
                                <div>
                                    <span class="market_doupin_four_body1_write3">￥56</span>
                                </div>
                            </div>
                            <div class="market_doupin_four_body1_up">
                                <div>
                                    <img class="market_doupin_four_body1_img1" src="..\..\assets\img\market\doupintuijian4.png">
                                </div>
                                <div>
                                    <span class="market_doupin_four_body1_write1">豆猫彩袜2020</span>
                                </div>
                                <div>
                                    <span class="market_doupin_four_body1_write2">又一年，温暖随行</span>
                                </div>
                                <div>
                                    <span class="market_doupin_four_body1_write3">￥56</span>
                                </div>
                            </div>
                        </div>
                        <div class="market_doupin_four_body1">
                            <div class="market_doupin_four_body1_up">
                                <div>
                                    <img class="market_doupin_four_body1_img1" src="..\..\assets\img\market\doupindanpin2.png">
                                </div>
                                <div>
                                    <span class="market_doupin_four_body1_write1">豆瓣收藏夹</span>
                                </div>
                                <div>
                                    <span class="market_doupin_four_body1_write2">万千票据，一本搞定</span>
                                </div>
                                <div>
                                    <span class="market_doupin_four_body1_write3">￥99</span>
                                </div>
                            </div>
                            <div class="market_doupin_four_body1_down">
                                <div>
                                    <img class="market_doupin_four_body1_img1" src="..\..\assets\img\market\doupindanpin4.png">
                                </div>
                                <div>
                                    <span class="market_doupin_four_body1_write1">藏书票帆布袋</span>
                                </div>
                                <div>
                                    <span class="market_doupin_four_body1_write2">书籍与爱，如影随行</span>
                                </div>
                                <div>
                                    <span class="market_doupin_four_body1_write3">￥79</span>
                                </div>
                            </div>
                            <div class="market_doupin_four_body1_up">
                                <div>
                                    <img class="market_doupin_four_body1_img1" src="..\..\assets\img\market\doupintuijian4.png">
                                </div>
                                <div>
                                    <span class="market_doupin_four_body1_write1">豆猫彩袜2020</span>
                                </div>
                                <div>
                                    <span class="market_doupin_four_body1_write2">又一年，温暖随行</span>
                                </div>
                                <div>
                                    <span class="market_doupin_four_body1_write3">￥56</span>
                                </div>
                            </div>
                        </div>
                    </div>
                            </van-tab>
                            <van-tab title="文具小物">
                                <div class="market_doupin_four_body">
                        <div class="market_doupin_four_body1">
                            <div class="market_doupin_four_body1_up">
                                <div>
                                    <img class="market_doupin_four_body1_img1" src="..\..\assets\img\market\doupindanpin1.png">
                                </div>
                                <div>
                                    <span class="market_doupin_four_body1_write1">豆瓣 晴雨伞下的印象派</span>
                                </div>
                                <div>
                                    <span class="market_doupin_four_body1_write2">防水防晒，真正的晴雨两用</span>
                                </div>
                                <div>
                                    <span class="market_doupin_four_body1_write3">￥138</span>
                                </div>
                            </div>
                            <div class="market_doupin_four_body1_down">
                                <div>
                                    <img class="market_doupin_four_body1_img1" src="..\..\assets\img\market\doupindanpin3.png">
                                </div>
                                <div>
                                    <span class="market_doupin_four_body1_write1">豆瓣咖啡</span>
                                </div>
                                <div>
                                    <span class="market_doupin_four_body1_write2">收藏世界风味</span>
                                </div>
                                <div>
                                    <span class="market_doupin_four_body1_write3">￥56</span>
                                </div>
                            </div>
                            <div class="market_doupin_four_body1_down">
                                <div>
                                    <img class="market_doupin_four_body1_img1" src="..\..\assets\img\market\doupindanpin3.png">
                                </div>
                                <div>
                                    <span class="market_doupin_four_body1_write1">豆瓣咖啡</span>
                                </div>
                                <div>
                                    <span class="market_doupin_four_body1_write2">收藏世界风味</span>
                                </div>
                                <div>
                                    <span class="market_doupin_four_body1_write3">￥56</span>
                                </div>
                            </div>
                        </div>
                        <div class="market_doupin_four_body1">
                            <div class="market_doupin_four_body1_up">
                                <div>
                                    <img class="market_doupin_four_body1_img1" src="..\..\assets\img\market\doupindanpin2.png">
                                </div>
                                <div>
                                    <span class="market_doupin_four_body1_write1">豆瓣收藏夹</span>
                                </div>
                                <div>
                                    <span class="market_doupin_four_body1_write2">万千票据，一本搞定</span>
                                </div>
                                <div>
                                    <span class="market_doupin_four_body1_write3">￥99</span>
                                </div>
                            </div>
                            <div class="market_doupin_four_body1_down">
                                <div>
                                    <img class="market_doupin_four_body1_img1" src="..\..\assets\img\market\doupindanpin4.png">
                                </div>
                                <div>
                                    <span class="market_doupin_four_body1_write1">藏书票帆布袋</span>
                                </div>
                                <div>
                                    <span class="market_doupin_four_body1_write2">书籍与爱，如影随行</span>
                                </div>
                                <div>
                                    <span class="market_doupin_four_body1_write3">￥79</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </van-tab>
            </van-tabs>
        </div>
        
    </div>
</template>

<script>
export default {
  methods:{
        market(){
            this.$router.push("/market")
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
.market_doupin_four{
    margin-top: 10px;
}
.market_doupin_four_body1_img1{
    height: 145px;
    width: 145px;
}
.market_doupin_four_body1_write1{
    font-size: 13px;
    font-weight: 1000;
}
.market_doupin_four_body1_write2{
    font-size: 9px;
    color: #A4A4A4;
    
}
.market_doupin_four_body1_write3{
    font-size: 13px;
    font-weight: 1000;
    color: red;
}
.market_doupin_four_body1_up{
    text-align: left;
}
.market_doupin_four_body1_down{
    text-align: left;
    margin-top: 10px;
}
.market_doupin_four_body{
    display: flex;
}
.market_doupin_four_body1{
    margin-left: 10px;
    margin-top: 10px;
}
</style>