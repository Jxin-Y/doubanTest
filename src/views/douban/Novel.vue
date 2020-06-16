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
                                <div class="novel_two_body1_sift_up">
                                    <div class="novel_two_body1_sift_one">
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
                                    <div class="novel_two_body1_sift_two">
                                        <div class="novel_two_body1_sift_img">
                                            <img class="novel_two_body1_sift_img_i" src="../../assets/img/douban/book/jijingzhengci2.png">
                                        </div>
                                        <div class="novel_two_body1_sift_title">
                                            <span class="novel_two_body1_sift_title_text">寂静证词2：窃语</span>
                                        </div>
                                        <div class="novel_two_body1_sift_write1">
                                            <span class="novel_two_body1_sift_write1_text">铁面队长与警队新人联手侦查案中案，真相和...</span>
                                        </div>
                                        <div class="novel_two_body1_sift_write2">
                                            <span class="novel_two_body1_sift_write2_text">7497人读过</span>
                                        </div>
                                    </div>
                                    <div class="novel_two_body1_sift_three">
                                        <div class="novel_two_body1_sift_img">
                                            <img class="novel_two_body1_sift_img_i" src="../../assets/img/douban/book/tianxiadaozong2.png">
                                        </div>
                                        <div class="novel_two_body1_sift_title">
                                            <span class="novel_two_body1_sift_title_text">天下刀宗2：乘锋</span>
                                        </div>
                                        <div class="novel_two_body1_sift_write1">
                                            <span class="novel_two_body1_sift_write1_text">传承金古大师气晚的新生代武侠代表作，江湖...</span>
                                        </div>
                                        <div class="novel_two_body1_sift_write2">
                                            <span class="novel_two_body1_sift_write2_text">17023人读过</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="novel_two_body1_sift_down">
                                    <div class="novel_two_body1_sift_one">
                                        <div class="novel_two_body1_sift_img">
                                            <img class="novel_two_body1_sift_img_i" src="../../assets/img/douban/book/qingkongyuxingye.png">
                                        </div>
                                        <div class="novel_two_body1_sift_title">
                                            <span class="novel_two_body1_sift_title_text">晴空与夜</span>
                                        </div>
                                        <div class="novel_two_body1_sift_write1">
                                            <span class="novel_two_body1_sift_write1_text">身为资深乘务员的骆莎桐在感情上屡战屡败，...</span>
                                        </div>
                                        <div class="novel_two_body1_sift_write2">
                                            <span class="novel_two_body1_sift_write2_text">3957人读过</span>
                                        </div>
                                    </div>
                                    <div class="novel_two_body1_sift_two">
                                        <div class="novel_two_body1_sift_img">
                                            <img class="novel_two_body1_sift_img_i" src="../../assets/img/douban/book/yidianyuanwai.png">
                                        </div>
                                        <div class="novel_two_body1_sift_title">
                                            <span class="novel_two_body1_sift_title_text">伊甸园外</span>
                                        </div>
                                        <div class="novel_two_body1_sift_write1">
                                            <span class="novel_two_body1_sift_write1_text">自幼目睹父母糟糕婚姻关系的何亦雯不信任爱...</span>
                                        </div>
                                        <div class="novel_two_body1_sift_write2">
                                            <span class="novel_two_body1_sift_write2_text">16105人读过</span>
                                        </div>
                                    </div>
                                    <div class="novel_two_body1_sift_three">
                                        <div class="novel_two_body1_sift_img">
                                            <img class="novel_two_body1_sift_img_i" src="../../assets/img/douban/book/wufadidadenantingshan.png">
                                        </div>
                                        <div class="novel_two_body1_sift_title">
                                            <span class="novel_two_body1_sift_title_text">无法抵达的南亭山</span>
                                        </div>
                                        <div class="novel_two_body1_sift_write1">
                                            <span class="novel_two_body1_sift_write1_text">周岚、周尧姐弟和徐朗、徐霜兄妹从小一块...</span>
                                        </div>
                                        <div class="novel_two_body1_sift_write2">
                                            <span class="novel_two_body1_sift_write2_text">9538人读过</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </van-tab>
                        <van-tab title="悬疑">
                            <div class="novel_two_body1_sift">
                                <div class="novel_two_body1_sift_up">
                                    <div class="novel_two_body1_sift_one">
                                        <div class="novel_two_body1_sift_img">
                                            <img class="novel_two_body1_sift_img_i" src="../../assets/img/douban/book/jijingzhengci2.png">
                                        </div>
                                        <div class="novel_two_body1_sift_title">
                                            <span class="novel_two_body1_sift_title_text">寂静证词2：窃语</span>
                                        </div>
                                        <div class="novel_two_body1_sift_write1">
                                            <span class="novel_two_body1_sift_write1_text">毒爱——有毒，上瘾。大龄剩女汪艳语是一名小...</span>
                                        </div>
                                        <div class="novel_two_body1_sift_write2">
                                            <span class="novel_two_body1_sift_write2_text">9617人读过</span>
                                        </div>
                                    </div>
                                    <div class="novel_two_body1_sift_two">
                                        <div class="novel_two_body1_sift_img">
                                            <img class="novel_two_body1_sift_img_i" src="../../assets/img/douban/book/tongxuehui.png">
                                        </div>
                                        <div class="novel_two_body1_sift_title">
                                            <span class="novel_two_body1_sift_title_text">同学会</span>
                                        </div>
                                        <div class="novel_two_body1_sift_write1">
                                            <span class="novel_two_body1_sift_write1_text">铁面队长与警队新人联手侦查案中案，真相和...</span>
                                        </div>
                                        <div class="novel_two_body1_sift_write2">
                                            <span class="novel_two_body1_sift_write2_text">7497人读过</span>
                                        </div>
                                    </div>
                                    <div class="novel_two_body1_sift_three">
                                        <div class="novel_two_body1_sift_img">
                                            <img class="novel_two_body1_sift_img_i" src="../../assets/img/douban/book/dongbeiqietinggushi.png">
                                        </div>
                                        <div class="novel_two_body1_sift_title">
                                            <span class="novel_two_body1_sift_title_text">东北窃听故事</span>
                                        </div>
                                        <div class="novel_two_body1_sift_write1">
                                            <span class="novel_two_body1_sift_write1_text">传承金古大师气晚的新生代武侠代表作，江湖...</span>
                                        </div>
                                        <div class="novel_two_body1_sift_write2">
                                            <span class="novel_two_body1_sift_write2_text">17023人读过</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="novel_two_body1_sift_down">
                                    <div class="novel_two_body1_sift_one">
                                        <div class="novel_two_body1_sift_img">
                                            <img class="novel_two_body1_sift_img_i" src="../../assets/img/douban/book/guandongyiren.png">
                                        </div>
                                        <div class="novel_two_body1_sift_title">
                                            <span class="novel_two_body1_sift_title_text">关东异人</span>
                                        </div>
                                        <div class="novel_two_body1_sift_write1">
                                            <span class="novel_two_body1_sift_write1_text">身为资深乘务员的骆莎桐在感情上屡战屡败，...</span>
                                        </div>
                                        <div class="novel_two_body1_sift_write2">
                                            <span class="novel_two_body1_sift_write2_text">3957人读过</span>
                                        </div>
                                    </div>
                                    <div class="novel_two_body1_sift_two">
                                        <div class="novel_two_body1_sift_img">
                                            <img class="novel_two_body1_sift_img_i" src="../../assets/img/douban/book/baijiaotang.png">
                                        </div>
                                        <div class="novel_two_body1_sift_title">
                                            <span class="novel_two_body1_sift_title_text">白教堂的邀请函</span>
                                        </div>
                                        <div class="novel_two_body1_sift_write1">
                                            <span class="novel_two_body1_sift_write1_text">自幼目睹父母糟糕婚姻关系的何亦雯不信任爱...</span>
                                        </div>
                                        <div class="novel_two_body1_sift_write2">
                                            <span class="novel_two_body1_sift_write2_text">16105人读过</span>
                                        </div>
                                    </div>
                                    <div class="novel_two_body1_sift_three">
                                        <div class="novel_two_body1_sift_img">
                                            <img class="novel_two_body1_sift_img_i" src="../../assets/img/douban/book/huanyingguanglin.png">
                                        </div>
                                        <div class="novel_two_body1_sift_title">
                                            <span class="novel_two_body1_sift_title_text">欢迎光临兔子的...</span>
                                        </div>
                                        <div class="novel_two_body1_sift_write1">
                                            <span class="novel_two_body1_sift_write1_text">周岚、周尧姐弟和徐朗、徐霜兄妹从小一块...</span>
                                        </div>
                                        <div class="novel_two_body1_sift_write2">
                                            <span class="novel_two_body1_sift_write2_text">9538人读过</span>
                                        </div>
                                    </div>
                                </div>
                            </div>                          
                        </van-tab>
                        <van-tab title="女性">
                            <div class="novel_two_body1_sift">
                                <div class="novel_two_body1_sift_up">
                                    <div class="novel_two_body1_sift_one">
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
                                    <div class="novel_two_body1_sift_two">
                                        <div class="novel_two_body1_sift_img">
                                            <img class="novel_two_body1_sift_img_i" src="../../assets/img/douban/book/jijingzhengci2.png">
                                        </div>
                                        <div class="novel_two_body1_sift_title">
                                            <span class="novel_two_body1_sift_title_text">寂静证词2：窃语</span>
                                        </div>
                                        <div class="novel_two_body1_sift_write1">
                                            <span class="novel_two_body1_sift_write1_text">铁面队长与警队新人联手侦查案中案，真相和...</span>
                                        </div>
                                        <div class="novel_two_body1_sift_write2">
                                            <span class="novel_two_body1_sift_write2_text">7497人读过</span>
                                        </div>
                                    </div>
                                    <div class="novel_two_body1_sift_three">
                                        <div class="novel_two_body1_sift_img">
                                            <img class="novel_two_body1_sift_img_i" src="../../assets/img/douban/book/tianxiadaozong2.png">
                                        </div>
                                        <div class="novel_two_body1_sift_title">
                                            <span class="novel_two_body1_sift_title_text">天下刀宗2：乘锋</span>
                                        </div>
                                        <div class="novel_two_body1_sift_write1">
                                            <span class="novel_two_body1_sift_write1_text">传承金古大师气晚的新生代武侠代表作，江湖...</span>
                                        </div>
                                        <div class="novel_two_body1_sift_write2">
                                            <span class="novel_two_body1_sift_write2_text">17023人读过</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="novel_two_body1_sift_down">
                                    <div class="novel_two_body1_sift_one">
                                        <div class="novel_two_body1_sift_img">
                                            <img class="novel_two_body1_sift_img_i" src="../../assets/img/douban/book/qingkongyuxingye.png">
                                        </div>
                                        <div class="novel_two_body1_sift_title">
                                            <span class="novel_two_body1_sift_title_text">晴空与夜</span>
                                        </div>
                                        <div class="novel_two_body1_sift_write1">
                                            <span class="novel_two_body1_sift_write1_text">身为资深乘务员的骆莎桐在感情上屡战屡败，...</span>
                                        </div>
                                        <div class="novel_two_body1_sift_write2">
                                            <span class="novel_two_body1_sift_write2_text">3957人读过</span>
                                        </div>
                                    </div>
                                    <div class="novel_two_body1_sift_two">
                                        <div class="novel_two_body1_sift_img">
                                            <img class="novel_two_body1_sift_img_i" src="../../assets/img/douban/book/yidianyuanwai.png">
                                        </div>
                                        <div class="novel_two_body1_sift_title">
                                            <span class="novel_two_body1_sift_title_text">伊甸园外</span>
                                        </div>
                                        <div class="novel_two_body1_sift_write1">
                                            <span class="novel_two_body1_sift_write1_text">自幼目睹父母糟糕婚姻关系的何亦雯不信任爱...</span>
                                        </div>
                                        <div class="novel_two_body1_sift_write2">
                                            <span class="novel_two_body1_sift_write2_text">16105人读过</span>
                                        </div>
                                    </div>
                                    <div class="novel_two_body1_sift_three">
                                        <div class="novel_two_body1_sift_img">
                                            <img class="novel_two_body1_sift_img_i" src="../../assets/img/douban/book/wufadidadenantingshan.png">
                                        </div>
                                        <div class="novel_two_body1_sift_title">
                                            <span class="novel_two_body1_sift_title_text">无法抵达的南亭山</span>
                                        </div>
                                        <div class="novel_two_body1_sift_write1">
                                            <span class="novel_two_body1_sift_write1_text">周岚、周尧姐弟和徐朗、徐霜兄妹从小一块...</span>
                                        </div>
                                        <div class="novel_two_body1_sift_write2">
                                            <span class="novel_two_body1_sift_write2_text">9538人读过</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </van-tab>
                    </van-tabs>
                </div>
            </div>
        </div>
        <div class="novel_three">
            <div class="novel_three_head">
                <span class="novel_one_head_write1">豆瓣榜单</span>
                <span class="novel_two_head_write2">全部 2</span>
                <van-icon class="novel_two_head_write3" name="arrow" />
            </div>
            <div class="novel_three_body">
                <img class="novel_three_body_img" src="../../assets/img/douban/book/novelExample.png">
            </div>
        </div>
        <div class="novel_four">
            <div class="novel_four_head">
                <span class="novel_four_head_write1">经典高分</span>
            </div>
            <div class="novel_four_body">
                <div class="novel_four_body_one">
                    <div class="novel_four_body_one_up">
                        <div class="novel_four_body_one_img">
                            <img class="novel_four_body_one_img_1" src="../../assets/img/douban/book/nanhuaqu.png">
                        </div>
                        <div class="novel_four_body_one_write">
                            <div class="novel_four_body_one_write1">
                                <span class="novel_four_body_one_write1_text">南华曲</span>
                            </div>
                            <div class="novel_four_body_one_write2">
                                <span class="novel_four_body_one_write2_text">作者：第九杯茶</span>
                            </div>
                            <div class="novel_four_body_one_write3">
                                <img class="novel_four_body_one_write3_img" src="../../assets/img/douban/book/nanhuaquGrade.png">
                            </div>
                            <div class="novel_four_body_one_write4">
                                <span class="novel_four_body_one_write4_text">殉葬的青楼女子被赵匡胤所救。为了复仇，她改名易姓，遁入赵府，却就此卷入了一场暗流涌动的朝...</span>
                            </div>
                        </div>
                    </div>
                    <div class="novel_four_body_one_button">
                        <van-button plain hairline color="#BDBDBD" size="mini">历史小说</van-button>
                    </div>
                    <hr align="left" width="320px" color="#D8D8D8" size="0.5" />
                </div>
                 <div class="novel_four_body_two">
                    <div class="novel_four_body_one_up">
                        <div class="novel_four_body_one_img">
                            <img class="novel_four_body_one_img_1" src="../../assets/img/douban/book/tonghualuojin.png">
                        </div>
                        <div class="novel_four_body_one_write">
                            <div class="novel_four_body_one_write1">
                                <span class="novel_four_body_one_write1_text">桐花落尽</span>
                            </div>
                            <div class="novel_four_body_one_write2">
                                <span class="novel_four_body_one_write2_text">作者：第九杯茶</span>
                            </div>
                            <div class="novel_four_body_one_write3">
                                <img class="novel_four_body_one_write3_img" src="../../assets/img/douban/book/tonghualuojinGrade.png">
                            </div>
                            <div class="novel_four_body_one_write4">
                                <span class="novel_four_body_one_write4_text">一个普通的现代女孩，跌落民国，偶遇军统杀手，开启一场惊心动魄、荡气回肠的生死穿越。每周...</span>
                            </div>
                        </div>
                    </div>
                    <div class="novel_four_body_one_button">
                        <van-button plain hairline color="#BDBDBD" size="mini">历史小说</van-button>
                    </div>
                    <hr align="left" width="320px" color="#D8D8D8" size="0.5" />
                </div>
            </div>
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
    height: 280px;
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
.novel_two_head{
    width: 100vw;
    margin-top: 10px;
}
.novel_two_body1_sift_img_i{
    height: 116px;
    width: 78px;
}
.novel_two_body1_sift_title{
    width: 100px;
    text-align: left;
}
.novel_two_body1_sift_title_text{
    font-size: 12px;
    font-weight: 1000;
}
.novel_two_body1_sift_write1_text{
    font-size: 8px;
}
.novel_two_body1_sift_write1{
    text-align: left;
    width: 100px;
}
.novel_two_body1_sift_write2_text{
    font-size: 8px;
}
.novel_two_body1_sift_write2{
    text-align: left;
}
.novel_two_body1_sift_img{
    text-align: left;
}
.novel_two_body1_sift_up{
    display: flex;
}
.novel_two_body1_sift_one{
    margin-left: 6px;
}
.novel_two_body1_sift_two{
    margin-left: 7px;
}
.novel_two_body1_sift_two{
    margin-left: 7px;
}
.novel_two_body1_sift_down{
    display: flex;
}
.novel_two_body1_sift{
    margin-top: 10px;
}
.novel_three_body_img{
    height: 233px;
    width: 276px;
}
.novel_three_body{
    margin-top: 10px;
}
.novel_three{
    margin-top: 10px;
}
.novel_four_head_write1{
    font-size: 17px;
    font-weight: 800;
    margin-left: 10px;
    
}
.novel_four_head{
    text-align: left;
}
.novel_four_body_one_img_1{
    height: 115px;
    width: 76px;
}
.novel_four_body_one_write1_text{
    font-size: 14px;
    font-weight:1000;
}
.novel_four_body_one_write2_text{
    font-size: 11px;
}
.novel_four_body_one_write3_img{
    height: 14px;
    width: 75px;
}
.novel_four_body_one_write4_text{
    font-size: 10px;
}
.novel_four_body_one_up{
    text-align: left;
    display: flex;
    margin-left: 10px;
    margin-top: 10px;
}
.novel_four_body_one_write{
    margin-left: 10px;
}
.novel_four_body_one_button{
    padding-left: 250px;
}
</style>