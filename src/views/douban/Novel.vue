<template>
    <div class="novel_all">
        <div class="novel_one">
            <div class="novel_one_head">
                <span class="novel_one_head_write1">重磅推荐</span>
                <span class="novel_one_head_write2">豆瓣阅读优质原创小说</span>
            </div>
            <div class="novel_one_body">
                    <div class="novel_one_body1_book">
                        <div class="novel_one_body1_book1">
                            <div class="novel_one_body1_book1_one">
                                <div class="novel_one_body1_book1_one_img">
                                    <img class="novel_one_body1_book1_one_img" src="../../assets/img/douban/book/duai.png">
                                </div>
                                <div class="novel_one_body1_book1_one_text">
                                    <div class="novel_one_body1_book1_one_text1">
                                        <span class="novel_one_body1_book1_one_text1_write">毒爱</span>
                                    </div>
                                    <div class="novel_one_body1_book1_one_text2">
                                        <span class="novel_one_body1_book1_one_text2_write">作者：第九杯茶</span>
                                    </div>
                                    <div class="novel_one_body1_book1_one_text3">
                                        <img class="novel_one_body1_book1_one_text3_img" src="../../assets/img/douban/book/duaiGrade.png">
                                    </div>
                                    <div class="novel_one_body1_book1_one_text4">
                                        <span class="novel_one_body1_book1_one_text4_write">小律师捡到天上掉的馅饼，没想到是前男友送来的烫手山芋。</span>
                                    </div>
                                </div>
                            </div>
                            <div class="novel_one_body1_book1_two">
                                <div class="novel_one_body1_book1_one_img">
                                    <img class="novel_one_body1_book1_one_img" src="../../assets/img/douban/book/wufadidadenantingshan.png">
                                </div>
                                <div class="novel_one_body1_book1_one_text">
                                    <div class="novel_one_body1_book1_one_text1">
                                        <span class="novel_one_body1_book1_one_text1_write">无法抵达的南亭山</span>
                                    </div>
                                    <div class="novel_one_body1_book1_one_text2">
                                        <span class="novel_one_body1_book1_one_text2_write">作者：兰思思</span>
                                    </div>
                                    <div class="novel_one_body1_book1_one_text3">
                                        <img class="novel_one_body1_book1_one_text3_img" src="../../assets/img/douban/book/wufadidadenantingshanGrade.png">
                                    </div>
                                    <div class="novel_one_body1_book1_one_text4">
                                        <span class="novel_one_body1_book1_one_text4_write">周岚，没有背景但有野心。自踏入大公司艾斯的那一刻起，她的命运发生了天翻...</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="novel_one_body1_book2">
                            <div class="novel_one_body1_book1_one">
                                <div class="novel_one_body1_book1_one_img">
                                    <img class="novel_one_body1_book1_one_img" src="../../assets/img/douban/book/yuwangrichongfeng.png">
                                </div>
                                <div class="novel_one_body1_book1_one_text">
                                    <div class="novel_one_body1_book1_one_text1">
                                        <span class="novel_one_body1_book1_one_text1_write">与往日重逢</span>
                                    </div>
                                    <div class="novel_one_body1_book1_one_text2">
                                        <span class="novel_one_body1_book1_one_text2_write">作者：福宝</span>
                                    </div>
                                    <div class="novel_one_body1_book1_one_text3">
                                        <img class="novel_one_body1_book1_one_text3_img" src="../../assets/img/douban/book/yuwangrichongfengGrade.png">
                                    </div>
                                    <div class="novel_one_body1_book1_one_text4">
                                        <span class="novel_one_body1_book1_one_text4_write">冷战夫妻重回到高中时代，恋爱却居然发生了！</span>
                                    </div>
                                </div>
                            </div>
                            <div class="novel_one_body1_book1_two">
                                <div class="novel_one_body1_book1_one_img">
                                    <img class="novel_one_body1_book1_one_img" src="../../assets/img/douban/book/dongbeiqietinggushi.png">
                                </div>
                                <div class="novel_one_body1_book1_one_text">
                                    <div class="novel_one_body1_book1_one_text1">
                                        <span class="novel_one_body1_book1_one_text1_write">东北窃听故事</span>
                                    </div>
                                    <div class="novel_one_body1_book1_one_text2">
                                        <span class="novel_one_body1_book1_one_text2_write">作者：安之龙</span>
                                    </div>
                                    <div class="novel_one_body1_book1_one_text3">
                                        <img class="novel_one_body1_book1_one_text3_img" src="../../assets/img/douban/book/dongbeiqietinggushiGrade.png">
                                    </div>
                                    <div class="novel_one_body1_book1_one_text4">
                                        <span class="novel_one_body1_book1_one_text4_write">偶然的窃听引发不可告人的秘密，小人物的命运由谁写就？</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        <div class="novel_two">
            <div class="novel_two_head">
                <span class="novel_one_head_write1">最热完本</span>
                <span class="novel_two_head_write2">全部 15</span>
                <van-icon class="novel_two_head_write3" name="arrow" />
            </div>
            <div class="novel_two_body">
                <div class="novel_two_body1">
                    <van-tabs v-model="activeName"   
                    :color="'#000000'">
                        <van-tab title="精选">
                            <div class="novel_two_body1_sift">
                                <div class="novel_two_body1_sift_img">
                                    <img class="novel_two_body1_sift_img_i" src="../../assets/img/douban/book/duai.png">
                                </div>
                                <div class="novel_two_body1_sift_title">
                                    <span class="novel_two_body1_sift_title_text">毒爱</span>
                                </div>
                                <div class="novel_two_body1_sift_write1">
                                    <span class="novel_two_body1_sift_write1_text">毒爱——有毒，上瘾。大龄剩女汪艳语是一名小...</span>
                                </div>
                                <div class="novel_two_body1_sift_write2">
                                    <span class="novel_two_body1_sift_write2_text">9617人读过</span>
                                </div>
                                
                            </div>
                        </van-tab>
                        <van-tab title="悬疑">
                        </van-tab>
                        <van-tab title="女性">
                        </van-tab>
                    </van-tabs>
                </div>
            </div>
        </div>
        <div class="novel_three">
        </div>
        <div class="novel_four">
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.novel_one_head_write1{
    font-size: 17px;
    font-weight: 800;
    margin-left: 10px;
}
.novel_one_head_write2{
    font-size: 10px;
    font-weight: 1000;
    margin-left: 5px;
}
.novel_one_head{
    text-align: left;
    margin-top: 10px;
}
.novel_one_body1_book1_one_img{
    height: 115px;
    width: 76px;
}
.novel_one_body1_book1_one_text1_write{
    font-size: 14px;
    font-weight: 1000;
}
.novel_one_body1_book1_one_text2_write{
    font-size: 12px;
    color: rgb(190, 190, 190);
}
.novel_one_body1_book1_one_text3_img{
    height: 14px;
    width: 75px;
}
.novel_one_body1_book1_one_text4_write{
    font-size: 12px;
    
}
.novel_one_body1_book1_one_text4{
    text-align: left;  
    width: 235px;
    height: 45px;
    background:rgb(231, 231, 231); 
    padding-left: 4px;
    border-radius: 2px;
    padding-top: 5px;
    margin-top: 5px;
}
.novel_one_body1_book1_one_text{
    text-align: left;
    margin-left: 10px;
}
.novel_one_body1_book1_one{
    display: flex;
    margin-left: 10px;
}
.novel_one_body1_book1_two{
    display: flex;
    margin-left: 10px;
    margin-top: 25px;
}
.novel_one_body1_book{
    display: flex;
    margin-top: 10px;
    height: 265px;
    width: 670px;
}
.novel_one_body{
    height: 270px;
    width: 100%;
    overflow-x: scroll;
    box-sizing: border-box;
    

}
.novel_one_body1_book1{
    box-sizing: border-box;
    height: 265px;
    width: 335px;
}
.novel_one_body1_book2{
    box-sizing: border-box;
    height: 265px;
    width: 335px;
}
.novel_two_head_write2{
    font-size: 10px;
    font-weight: 1000;
    margin-left: 5px;
    line-height: 24px;
    padding-left: 180px;
}
.novel_two_body1{
    width: 60%;
}
.novel_two_head5{
    width: 100vw;
}
.novel_two_body1_sift_img_i{
    height: 116px;
    width: 78px;
}
.novel_two_body1_sift_title_text{
    font-size: 12px;
    font-weight: 1000;
}
</style>