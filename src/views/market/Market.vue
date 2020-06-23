<template>
<div class="market_all">
    <van-tabs v-model="active"
    :color="'#04B404'"
    line-width="60px"
    line-height="2.5px"
    title-active-color="#04B404">
        <van-tab title="豆瓣豆品">
            <div class="market_doupin">
                <div class="market_doupin_one">
                    <img class="market_doupin_one_img" src="..\..\assets\img\market\doupin1.png">
                </div>
                <div class="market_doupin_two">
                    <div @click="macommend" class="market_doupin_two1">
                        <img class="market_doupin_two1_img" src="..\..\assets\img\market\doupinicon1.png">
                        <div>
                            <span class="market_doupin_two1_text">豆瓣经典</span>
                        </div>
                    </div>
                     <div class="market_doupin_two1">
                        <img class="market_doupin_two1_img" src="..\..\assets\img\market\doupinicon2.png">
                        <div>
                            <span class="market_doupin_two1_text">家具生活</span>
                        </div>
                    </div>
                     <div class="market_doupin_two1">
                        <img class="market_doupin_two1_img" src="..\..\assets\img\market\doupinicon3.png">
                        <div>
                            <span class="market_doupin_two1_text">外出旅行</span>
                        </div>
                    </div>
                     <div class="market_doupin_two1">
                        <img class="market_doupin_two1_img" src="..\..\assets\img\market\doupinicon4.png">
                        <div>
                            <span class="market_doupin_two1_text">文具小物</span>
                        </div>
                    </div>
                </div>
                <div class="market_tiao">
                </div>
                <div class="market_doupin_three">
                    <div class="market_doupin_three_head">
                        <span class="market_doupin_three_head_text">新品首发</span>
                    </div>
                    <div class="market_doupin_three_body">
                        <div class="market_doupin_three_body_img">
                            <img class="market_doupin_three_body_img1" src="..\..\assets\img\market\doupinnew.png">
                        </div>
                        <div class="market_doupin_three_body_text">
                            <div class="market_doupin_three_body_text1">
                                <div>
                                    <span class="market_doupin_three_body_text1_write1">电影徽章</span>
                                </div>
                                <div>
                                    <span class="market_doupin_three_body_text1_write2">致敬光影造梦者</span>
                                </div>
                            </div>
                            <div class="market_doupin_three_body_text2">
                                <div>
                                    <span class="market_doupin_three_body_text2_write1">￥35</span>
                                </div>
                                <div>
                                    <van-button round type="danger" size="mini">立即购买</van-button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="market_doupin_three_body">
                        <div class="market_doupin_three_body_img">
                            <img class="market_doupin_three_body_img1" src="..\..\assets\img\market\doupinmacth.png">
                        </div>
                        <div class="market_doupin_three_body_text">
                            <div class="market_doupin_three_body_text1">
                                <div>
                                    <span class="market_doupin_three_body_text1_write1">豆瓣逆向手表</span>
                                </div>
                                <div>
                                    <span class="market_doupin_three_body_text1_write2">摆脱“惯性”，逆势而行</span>
                                </div>
                            </div>
                            <div class="market_doupin_three_body_text3">
                                <div>
                                    <span class="market_doupin_three_body_text2_write1">￥329</span>
                                </div>
                                <div>
                                    <van-button round type="danger" size="mini">立即购买</van-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="market_doupin_four">
                    <div class="market_doupin_three_head">
                        <span class="market_doupin_three_head_text">人气单品</span>
                    </div>
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
                </div>
                <div class="market_doupin_five">
                    <div class="market_doupin_three_head">
                        <span class="market_doupin_three_head_text">精选专题</span>
                        <span class="market_doupin_three_head_text1">更多<van-icon name="arrow" size="mini" /></span>
                    </div>
                    <div class="market_doupin_five_body">
                        <div class="market_doupin_five_body1">
                            <div class="market_doupin_five_body1_o">
                                <img class="market_doupin_five_body1_img1" src="..\..\assets\img\market\doupinjingxuan1.png">
                                <div>
                                    <span class="market_doupin_five_body1_text">豆瓣收藏系列</span>
                                </div>
                            </div>
                            <div class="market_doupin_five_body1_o">
                                <img class="market_doupin_five_body1_img1" src="..\..\assets\img\market\doupinjingxuan2.png">
                                <div>
                                    <span class="market_doupin_five_body1_text">豆瓣收藏书票系列</span>
                                </div>
                            </div>
                            <div class="market_doupin_five_body1_o">
                                <img class="market_doupin_five_body1_img1" src="..\..\assets\img\market\doupinjingxuan3.png">
                                <div>
                                    <span class="market_doupin_five_body1_text">豆瓣经典艺术系列</span>
                                </div>
                            </div>
                            <div class="market_doupin_five_body1_o">
                                <img class="market_doupin_five_body1_img1" src="..\..\assets\img\market\doupinjingxuan4.png">
                                <div>
                                    <span class="market_doupin_five_body1_text">豆猫来了</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="market_doupin_six">
                    <div class="market_doupin_three_head">
                        <span class="market_doupin_three_head_text">用户测评</span>
                    </div>
                    <div class="market_doupin_six_body">
                        <div class="market_doupin_six_body_up">
                            <div>
                               <div>
                                    <img class="market_doupin_six_body_up_img1" src="..\..\assets\img\market\doupinyonghu11.png">
                                </div>
                                <div class="market_doupin_six_body_up_write1">
                                    <span class="market_doupin_six_body_up_write1">每天翻页总有惊喜，一句句触动心底的台词，记忆里的碎···</span>
                                </div>
                                <div>
                                    <img class="market_doupin_six_body_up_img2" src="..\..\assets\img\market\doupinyonghu12.png">
                                </div> 
                            </div>
                            <div>
                               <div>
                                    <img class="market_doupin_six_body_up_img3" src="..\..\assets\img\market\doupinyonghu31.png">
                                </div>
                                <div class="market_doupin_six_body_up_write1">
                                    <span class="market_doupin_six_body_up_write1">吃饭都变成愉悦美好的事</span>
                                </div>
                                <div>
                                    <img class="market_doupin_six_body_up_img2" src="..\..\assets\img\market\doupinyonghu12.png">
                                </div> 
                            </div>
                            
                        </div>
                        <div class="market_doupin_six_body_up">
                            <div>
                                <div>
                                    <img class="market_doupin_six_body_up_img1" src="..\..\assets\img\market\doupinyonghu21.png">
                                </div>
                                <div class="market_doupin_six_body_up_write1">
                                    <span class="market_doupin_six_body_up_write1">这顿早餐吃的很满足了~</span>
                                </div>
                                <div>
                                    <img class="market_doupin_six_body_up_img2" src="..\..\assets\img\market\doupinyonghu22.png">
                                </div>
                            </div>
                            <div>
                                <div>
                                    <img class="market_doupin_six_body_up_img4" src="..\..\assets\img\market\doupinyonghu41.png">
                                </div>
                                <div class="market_doupin_six_body_up_write1">
                                    <span class="market_doupin_six_body_up_write1">被一带咖啡改变的带娃经历</span>
                                </div>
                                <div>
                                    <img class="market_doupin_six_body_up_img2" src="..\..\assets\img\market\doupinyonghu22.png">
                                </div>
                            </div>
                           
                        </div>
                    </div>
                    <div class="market_doupin_six_body_buttom">
                        <span class="market_doupin_six_body_buttom_text">查看更多测评</span>
                    </div>
                </div>
                <div class="market_doupin_seven">
                    <div class="market_doupin_three_head">
                        <span class="market_doupin_three_head_text">官方小组</span>
                        <span class="market_doupin_three_head_text1">更多<van-icon name="arrow" size="mini" /></span>
                    </div>
                    <div class="market_doupin_seven_body">
                        <div class="market_doupin_seven_body1">
                            <img class="market_doupin_seven_body1_img1" src="..\..\assets\img\market\doupinguanfang1.png">
                            <span class="market_doupin_seven_body1_text1">具有“春天气息”的单品都有哪些？</span>
                        </div>
                        <div class="market_doupin_seven_body1">
                            <img class="market_doupin_seven_body1_img1" src="..\..\assets\img\market\doupinguanfang2.png">
                            <span class="market_doupin_seven_body1_text1">帆布包装豆猫挂饰的盒子好适合上墙！</span>
                        </div>
                    </div>
                </div>
                <div class="market_doupin_eight">
                    <div class="market_doupin_eight1">
                        <van-tabs v-model="active"
                        title-active-color="#000000"
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
                <div class="market_doupin_nine"></div>
            </div>
        </van-tab>
        <van-tab title="豆瓣时间">
            <div class="market_time">
                <div class="market_time_head">
                    <img class="market_time_head_img" src="..\..\assets\img\market\timehead.png">
                </div>
                <div class="market_time_one">
                    <div class="market_time_one_icon">
                        <div>
                            <img class="market_time_one_img" src="..\..\assets\img\market\timeicon1.png">
                        </div>
                        <span class="market_time_one_write">青椒学院</span>
                    </div>
                    <div class="market_time_one_icon">
                        <div>
                            <img class="market_time_one_img" src="..\..\assets\img\market\timeicon2.png">
                        </div>
                        <span class="market_time_one_write">时间发现</span>
                    </div>
                    <div class="market_time_one_icon">
                        <div>
                            <img class="market_time_one_img" src="..\..\assets\img\market\timeicon3.png">
                        </div>
                        <span class="market_time_one_write">全部专栏</span>
                    </div>
                    <div class="market_time_one_icon">
                        <div>
                            <img class="market_time_one_img" src="..\..\assets\img\market\timeicon4.png">
                        </div>
                        <span class="market_time_one_write">签到</span>
                    </div>
                    <div class="market_time_one_icon">
                        <div>
                            <img class="market_time_one_img" src="..\..\assets\img\market\timeicon5.png">
                        </div>
                        <span class="market_time_one_write">我的</span>
                    </div>
                </div>
                <div class="market_time_two">
                    <div class="market_time_two_up">
                        <span class="market_time_two_text">新品尝鲜：“生而为人，我很抱歉。”</span>
                    </div>
                    <div class="market_time_two_down">
                        <div class="market_time_two_down1">
                            <img class="market_time_two_img" src="..\..\assets\img\market\timenew.png">
                        </div>
                        <div class="market_time_two_down2">
                            <div class="market_time_two_down3">
                                <span class="market_time_two_down2_write1">一切美好的事物都与你有关—21天走出低自尊</span>  
                            </div>
                            <div class="market_time_two_down4">
                                <span class="market_time_two_down2_write4">主讲人 王亚南</span>
                            </div>
                            <div class="market_time_two_down5">
                                <span class="market_time_two_down2_write5">21天打破负面核心信念，构建积极思维模式，相...</span>
                            </div>
                        </div>
                    </div>
                    <div class="market_time_two_buttom">
            
                            <div class="market_time_two_buttom3">
                                <div class="market_time_two_buttom2">
                                    <img class="market_time_two_buttom1_img" src="..\..\assets\img\market\timenewshiting.png">
                                </div>
                                <div>
                                    <span class="market_time_two_buttom1_write">发刊词：如何从低自尊到相信自己？</span>
                                </div>
                            </div>
    
                    </div>
                </div>
                <div class="market_time_three">
                    <div class="market_doupin_three_head">
                        <span class="market_doupin_three_head_text">夏日特惠</span>
                    </div>
                    <div class="market_time_three_body">
                        <div class="market_time_three_body1">
                            <div class="market_time_three_body1_one">
                                <div>
                                    <img class="market_time_three_body1_img" src="..\..\assets\img\market\timesummer1.png">
                                </div>
                                <div class="market_time_head_text">
                                    <span class="market_time_head_text1">童话交响乐——古典音乐这样听</span>
                                </div>
                                <div>
                                    <span class="market_time_head_text2">79.00元</span>
                                </div>
                                <div>
                                    <span class="market_time_head_text3">99.00元</span>
                                </div>
                            </div>
                            <div class="market_time_three_body1_one">
                                <div>
                                    <img class="market_time_three_body1_img" src="..\..\assets\img\market\timesummer2.png">
                                </div>
                                <div class="market_time_head_text">
                                    <span class="market_time_head_text1">生死之间：10堂课学会如何与疾...</span>
                                </div>
                                <div>
                                    <span class="market_time_head_text2">38.00元</span>
                                </div>
                                <div>
                                    <span class="market_time_head_text3">48.00元</span>
                                </div>
                            </div>
                            <div class="market_time_three_body1_one">
                                <div>
                                    <img class="market_time_three_body1_img" src="..\..\assets\img\market\timesummer3.png">
                                </div>
                                <div class="market_time_head_text">
                                    <span class="market_time_head_text1">52倍人生——戴锦华大师电影课</span>
                                </div>
                                <div>
                                    <span class="market_time_head_text2">158.00元</span>
                                </div>
                                <div>
                                    <span class="market_time_head_text3">168.00元</span>
                                </div>
                            </div>
                            <div class="market_time_three_body1_one">
                                <div>
                                    <img class="market_time_three_body1_img" src="..\..\assets\img\market\timesummer4.png">
                                </div>
                                <div class="market_time_head_text">
                                    <span class="market_time_head_text1">人心可测——姜振宇的微表情读心...</span>
                                </div>
                                <div>
                                    <span class="market_time_head_text2">69.00元</span>
                                </div>
                                <div>
                                    <span class="market_time_head_text3">99.00元</span>
                                </div>
                            </div>
                            <div class="market_time_three_body1_one">
                                <div>
                                    <img class="market_time_three_body1_img" src="..\..\assets\img\market\timesummer5.png">
                                </div>
                                <div class="market_time_head_text">
                                    <span class="market_time_head_text1">花鸟鱼虫的生活意见——博物馆...</span>
                                </div>
                                <div>
                                    <span class="market_time_head_text2">72.00元</span>
                                </div>
                                <div>
                                    <span class="market_time_head_text3">78.00元</span>
                                </div>
                            </div>
                            <div class="market_time_three_body1_one">
                                <div>
                                    <img class="market_time_three_body1_img" src="..\..\assets\img\market\timesummer6.png">
                                </div>
                                <div class="market_time_head_text">
                                    <span class="market_time_head_text1">花知道答案——中日名师插花课</span>
                                </div>
                                <div>
                                    <span class="market_time_head_text2">298.00元</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="market_time_four">
                    <div class="market_doupin_three_head">
                        <span class="market_doupin_three_head_text">大咖驾到</span>
                        <span class="market_doupin_four_head_text1">查看更多<van-icon name="arrow" size="mini" /></span>
                    </div>
                        
                    
                    <div class="market_time_four_body">
                        <div class="market_time_four_b">
                           <div>
                                <img class="market_time_four_body_img" src="..\..\assets\img\market\timedaka1.png">
                            </div>
                            <div class="market_time_four_body_text">
                                <div class="market_time_four_body_t">
                                    <span class="market_time_four_body_text1">醒来——北岛和朋友们的诗歌集</span> 
                                    <div>
                                        <span class="market_time_four_body_text2">128.00元</span><br>
                                        <!-- <span class="market_time_four_body_text3">168.00元</span> -->
                                    </div> 
                                </div>
                                <div>
                                    <span class="market_time_four_body_text4">主讲人 北岛和朋友们</span>
                                </div>
                                <div>
                                    <span class="market_time_four_body_text5">北岛和朋友们为你讲述诗人传奇故事，解读文化...</span>
                                </div> 
                            </div>
                        </div>
                        <div class="market_time_four_b">
                           <div>
                                <img class="market_time_four_body_img" src="..\..\assets\img\market\timesummer1.png">
                            </div>
                            <div class="market_time_four_body_text">
                                <div class="market_time_four_body_t">
                                    <span class="market_time_four_body_text1">52倍人生——戴锦华大师电影课</span> 
                                    <div>
                                        <span class="market_time_four_body_text2">158.00元</span><br>
                                        <span class="market_time_four_body_text3">168.00元</span>
                                    </div> 
                                </div>
                                <div>
                                    <span class="market_time_four_body_text4">主讲人 戴锦华</span>
                                </div>
                                <div>
                                    <span class="market_time_four_body_text5">每周为你深度解析一部世界经典电影。52周全年...</span>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
                <div class="market_time_five"></div>
            </div>
        </van-tab>
    </van-tabs>
</div>
</template>

<script>
export default {
  methods:{
        macommend(){
            this.$router.push("/market_recommend")
        }
    }
};
</script>

<style scoped>
.market_doupin_one_img{
    height: 161px;
    width: 320px;

}
.market_doupin_one{
    margin-top: 5px;
}
.market_doupin_two1_img{
    height: 52px;
    width: 52px;
}
.market_doupin_two1_text{
    font-size: 12px;
    color: #A4A4A4;
}
.market_doupin_two1{
    margin-left: 22.4px;
}
.market_doupin_two{
    display: flex;
    margin-top: 5px;
}
.market_tiao{
    margin-top: 10px;
    height: 8px;
    width: 100%;
    background-color: #F2F2F2;
}
.market_doupin_three_head_text{
    font-size: 16px;
    font-weight: 1000;
}
.market_doupin_three_head{
    text-align: left;
    margin-left: 10px;
}
.market_doupin_three_body_img1{
    height: 169px;
    width: 300px;
}
.market_doupin_three_body_text1_write1{
    font-size: 14px;
    font-weight: 1000;
}
.market_doupin_three_body_text1_write2{
    font-size: 12px;
    color: #A4A4A4;
}
.market_doupin_three_body_text2_write1{
    font-size: 13px;
    font-weight: 1000;
    color: red;
}
.market_doupin_three_body_text{
    display: flex;
    margin-top: 10px;
}
.market_doupin_three_body_text1{
    text-align: left;
    margin-left: 10px;
}
.market_doupin_three_body_text2{
    text-align:right;
    margin-left: 160px;
}
.market_doupin_three_body{
    margin-top: 10px;
}
.market_doupin_three_body_text3{
    text-align:right;
    margin-left: 130px;
}
.market_doupin_three{
    margin-top: 10px;
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
.market_doupin_three_head_text1{
    font-size: 11px;
    margin-left: 200px;
}
.market_doupin_five{
    margin-top: 10px;
}
.market_doupin_five_body1_img1{
    height: 154px;
    width: 258px;
}
.market_doupin_five_body1_text{
    font-size: 12.5px;
    font-weight: 1000;
    margin-top: 10px;
}
.market_doupin_five_body1_o{
    text-align: left;
    margin-left: 10px;
    box-sizing: border-box;
}
.market_doupin_five_body1{
    display: flex;
    height: 185px;
    width: 1072px;
}
.market_doupin_five_body{
    height: 185px;
    width: 320px;
    overflow-x: scroll;
    box-sizing: border-box;
    margin-top: 10px;
}
.market_doupin_six_body_up_img1{
    height: 97px;
    width: 145px;
}
.market_doupin_six_body_up_write1{
    font-size: 11px;
}
.market_doupin_six_body_up_write1{
    width: 145px;
    text-align: left;
}
.market_doupin_six_body_up_img2{
    width: 145px;
    height: 19px;
}
.market_doupin_six_body{
    display: flex;
    margin-top: 10px;
}
.market_doupin_six_body_up{
    margin-left: 10px;
}
.market_doupin_six_body_up_img3{
    height: 216px;
    width: 145px;
}
.market_doupin_six_body_up_img4{
    height: 165px;
    width: 145px;
}
.market_doupin_six_body_buttom_text{
    font-size: 11px;
    line-height: 25px;
}
.market_doupin_six_body_buttom{
    height: 25px;
    width: 300px;
    background-color: #F2F2F2;
    margin-left: 10px;
    border-radius: 3px;
    margin-top: 20px;
}
.market_doupin_seven{
    margin-top: 20px;
}
.market_doupin_seven_body1_img1{
    height: 44px;
    width: 23px;
    margin-left: 10px;
    padding-top: 11px;
}
.market_doupin_seven_body1_text1{
    font-size: 13px;
    margin-left: 5px;
    line-height: 60px;

}
.market_doupin_seven_body1{
    height: 60px;
    width: 300px;
    background-color:rgb(245, 245, 245);
    margin-left: 10px;
    margin-top: 10px;
    text-align: left;
    display: flex;
}
.market_doupin_eight{
    margin-top: 30px;
}
.market_time_head_img{
    width: 320px;
}
.market_time_one_img{
    height: 52px;
    width: 52px;
}
.market_time_one_write{
    font-size: 12px;
}
.market_time_one_icon{
    margin-left: 10px;
}
.market_time_one{
    margin-top: 20px;
    display: flex;
}
.market_time_two{
    margin-top: 20px;
}
.market_time_two_up{
    text-align: left;
    margin-left: 10px;
}
.market_time_two_text{
    font-size: 15px;
    font-weight: 1000;
}
.market_time_two_down{
    margin-top: 10px;
    text-align: left;
    display: flex;
}
.market_time_two_img{
    height: 80px;
    width: 80px;
}
.market_time_two_down1{
    margin-left: 10px;
}
.market_time_two_down2_write1{
    font-size: 12px;
    font-weight: 1000;
}
.market_time_two_down2_div1{
    width: 160px;
}
.market_time_two_down2_write4{
    font-size: 11px;
    color: #A4A4A4;
}
.market_time_two_down2_write5{
    font-size: 7px;
    color: #A4A4A4;
}
.market_time_two_down4{
    margin-top: 5px;
}
.market_time_two_down5{
    margin-top: 5px;
}
.market_time_two_down2{
    margin-left: 10px;
}
.market_time_two_buttom1_img{
    height: 25px;
}
.market_time_two_buttom1_write{
    font-size: 10px;
    margin-left: 5px;
    line-height: 30px;
}
.market_time_two_buttom3{
    display: flex;
    height: 30px;
    width: 200px;
    border:0.5px solid rgb(223, 223, 223);
    margin-left: 10px;
    border-radius: 3px;
    margin-top: 10px;
}
.market_time_two_buttom2{
    margin-left: 5px;
    padding-top: 3px;
}

.market_time_three_body1_img{
    height: 90px;
    width: 90px;
}
.market_time_head_text1{
    font-size: 11.5px;
}
.market_time_head_text{
    width: 95px;
}
.market_time_head_text2{
    font-size: 10px;
    font-weight: normal;
    color: red;
}
.market_time_head_text3{
    font-size: 10px;
    text-decoration: line-through;
}
.market_time_three_body1_one{
    text-align: left;
    margin-left: 10px;
    box-sizing: border-box;
}
.market_time_three_body1{
    height: 168px;
    width: 600px;
    display: flex;
}
.market_time_three_body{
    height: 168px;
    width: 320px;
    box-sizing: border-box;
    overflow-x: scroll;
    margin-top: 10px;
}
.market_time_four{
    margin-top: 10px;
}
.market_time_three{
    margin-top: 10px;
}
.market_doupin_four_head_text1{
    font-size: 10px;
    padding-left: 180px;
}

.market_time_four_body_img{
    height: 85px;
    width: 85px;
}
.market_time_four_body_text1{
    font-size: 10px;
    font-weight: 1000;
}
.market_time_four_body_text2{
    font-size: 10px;
    color: red;
    margin-left: 20px;
}
.market_time_four_body_t{
    display: flex;
}
.market_time_four_body_text3{
    font-size: 10px;
    margin-left: 20px;
    text-decoration: line-through;
}
.market_time_four_body_text4{
    font-size: 10px;
    color: #A4A4A4;
}
.market_time_four_body_text5{
    font-size: 6px;
    color: #A4A4A4;
}
.market_time_four_body_text{
    text-align: left;
    margin-left: 10px;
}
.market_time_four_b{
    margin-left: 10px;
    margin-top: 10px;
    display: flex;
}
.market_doupin_nine{
    height: 60px;
}
.market_time_five{
    height: 60px;
}
</style>