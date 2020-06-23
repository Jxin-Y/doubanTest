<template>
    <div class="sort_all">
        <div class="sort_head">
            <van-icon @click="doubanhome" class="sort_head_icon" name="arrow-left" />
            <span class="sort_head_text">分类筛选</span>
        </div>
        <div class="sort_neck">
            <div class="sort_neck_up">
                <span class="sort_neck_up_name">类型</span>
                <div class="sort_neck_up_text">
                    <div class="sort_neck_up_text1">
                        <van-button class="sort_neck_up_text1_button" size="mini">全部</van-button>
                        <van-button class="sort_neck_up_text1_button" size="mini">音乐</van-button>
                        <van-button class="sort_neck_up_text1_button" size="mini">戏剧</van-button>
                        <van-button class="sort_neck_up_text1_button" size="mini">展览</van-button>
                        <van-button class="sort_neck_up_text1_button" size="mini">讲座</van-button>
                        <van-button class="sort_neck_up_text1_button" size="mini">电影</van-button>
                        <van-button class="sort_neck_up_text1_button" size="mini">聚会</van-button>
                        <van-button class="sort_neck_up_text1_button" size="mini">运动</van-button>
                        <van-button class="sort_neck_up_text1_button" size="mini">公益</van-button>
                        <van-button class="sort_neck_up_text1_button" size="mini">旅行</van-button>
                        <van-button class="sort_neck_up_text1_button" size="mini">课程</van-button>
                        <van-button class="sort_neck_up_text1_button" size="mini">赛事</van-button>
                        <van-button class="sort_neck_up_text1_button" size="mini">亲子</van-button>
                        <van-button class="sort_neck_up_text1_button" size="mini">其他</van-button>
                    </div>
                </div>
            </div>
            <div class="sort_neck_down">
                <span class="sort_neck_up_name">地点</span>
                <div class="sort_neck_up_text">
                    <div class="sort_neck_up_text1">
                        <van-button class="sort_neck_up_text1_button" size="mini">全部</van-button>
                        <van-button class="sort_neck_up_text1_button" size="mini">玄武区</van-button>
                        <van-button class="sort_neck_up_text1_button" size="mini">白下区</van-button>
                        <van-button class="sort_neck_up_text1_button" size="mini">秦淮区</van-button>
                        <van-button class="sort_neck_up_text1_button" size="mini">建邺区</van-button>
                        <van-button class="sort_neck_up_text1_button" size="mini">鼓楼区</van-button>
                        <van-button class="sort_neck_up_text1_button" size="mini">下关区</van-button>
                        <van-button class="sort_neck_up_text1_button" size="mini">浦口区</van-button>
                        <van-button class="sort_neck_up_text1_button" size="mini">栖霞区</van-button>
                        <van-button class="sort_neck_up_text1_button" size="mini">雨花台区</van-button>
                        <van-button class="sort_neck_up_text1_button" size="mini">江宁区</van-button>
                        <van-button class="sort_neck_up_text1_button" size="mini">六合区</van-button>
                        <van-button class="sort_neck_up_text1_button" size="mini">溧水县</van-button>
                        <van-button class="sort_neck_up_text1_button" size="mini">高淳县</van-button>
                    </div>
                </div>
            </div>
        </div>
        <div class="sort_body">
            <div class="sort_body1"></div>
            <div class="sort_body_head">
                <div class="sort_body_head_up">
                    <span class="sort_body_head_up_text">活动列表</span>
                    <van-button round class="sort_body_head_up_button" size="mini">活动时间<van-icon size="5px" name="arrow-down" /></van-button>
                    <span class="sort_body_head_up_search"><img class="sort_body_head_up_img1" src="..\..\assets\img\douban\city\screen.png">筛选</span>
                </div>
                <div class="sort_body_head_down">
                    <div class="sort_body_head_down_up">
                        <img class="sort_body_head_down_up_img" src="..\..\assets\img\douban\city\sort1.png">
                    </div>
                    <div class="sort_body_head_down_down">
                        <div>
                            <span class="sort_body_head_down_down_text1">课程</span>
                            <span class="sort_body_head_down_down_text2">12693.16km</span>
                        </div>
                        <div>
                            <span class="sort_body_head_down_down_text3">初级英语沙龙课</span>
                        </div>
                        <div class="sort_body_head_down_down_text6">
                            <span class="sort_body_head_down_down_text4">时间：</span>
                            <span class="sort_body_head_down_down_text5">2020.05.01 周五 起</span>
                        </div>
                        <div>
                            <span class="sort_body_head_down_down_text4">地点：</span>
                            <span class="sort_body_head_down_down_text5">南京 建邺区 江东中路98号建邺万达广场</span>
                        </div>
                        <div>
                            <span class="sort_body_head_down_down_text4">费用：</span>
                            <span class="sort_body_head_down_down_text5">免费</span>
                        </div>
                    </div>
                </div>
                                <div class="sort_body_head_down">
                    <div class="sort_body_head_down_up">
                        <img class="sort_body_head_down_up_img" src="..\..\assets\img\douban\city\sort1.png">
                    </div>
                    <div class="sort_body_head_down_down">
                        <div>
                            <span class="sort_body_head_down_down_text1">课程</span>
                            <span class="sort_body_head_down_down_text2">12693.16km</span>
                        </div>
                        <div>
                            <span class="sort_body_head_down_down_text3">初级英语沙龙课</span>
                        </div>
                        <div class="sort_body_head_down_down_text6">
                            <span class="sort_body_head_down_down_text4">时间：</span>
                            <span class="sort_body_head_down_down_text5">2020.05.01 周五 起</span>
                        </div>
                        <div>
                            <span class="sort_body_head_down_down_text4">地点：</span>
                            <span class="sort_body_head_down_down_text5">南京 建邺区 江东中路98号建邺万达广场</span>
                        </div>
                        <div>
                            <span class="sort_body_head_down_down_text4">费用：</span>
                            <span class="sort_body_head_down_down_text5">免费</span>
                        </div>
                    </div>
                </div>
                                <div class="sort_body_head_down">
                    <div class="sort_body_head_down_up">
                        <img class="sort_body_head_down_up_img" src="..\..\assets\img\douban\city\sort1.png">
                    </div>
                    <div class="sort_body_head_down_down">
                        <div>
                            <span class="sort_body_head_down_down_text1">课程</span>
                            <span class="sort_body_head_down_down_text2">12693.16km</span>
                        </div>
                        <div>
                            <span class="sort_body_head_down_down_text3">初级英语沙龙课</span>
                        </div>
                        <div class="sort_body_head_down_down_text6">
                            <span class="sort_body_head_down_down_text4">时间：</span>
                            <span class="sort_body_head_down_down_text5">2020.05.01 周五 起</span>
                        </div>
                        <div>
                            <span class="sort_body_head_down_down_text4">地点：</span>
                            <span class="sort_body_head_down_down_text5">南京 建邺区 江东中路98号建邺万达广场</span>
                        </div>
                        <div>
                            <span class="sort_body_head_down_down_text4">费用：</span>
                            <span class="sort_body_head_down_down_text5">免费</span>
                        </div>
                    </div>
                </div>
                                <div class="sort_body_head_down">
                    <div class="sort_body_head_down_up">
                        <img class="sort_body_head_down_up_img" src="..\..\assets\img\douban\city\sort1.png">
                    </div>
                    <div class="sort_body_head_down_down">
                        <div>
                            <span class="sort_body_head_down_down_text1">课程</span>
                            <span class="sort_body_head_down_down_text2">12693.16km</span>
                        </div>
                        <div>
                            <span class="sort_body_head_down_down_text3">初级英语沙龙课</span>
                        </div>
                        <div class="sort_body_head_down_down_text6">
                            <span class="sort_body_head_down_down_text4">时间：</span>
                            <span class="sort_body_head_down_down_text5">2020.05.01 周五 起</span>
                        </div>
                        <div>
                            <span class="sort_body_head_down_down_text4">地点：</span>
                            <span class="sort_body_head_down_down_text5">南京 建邺区 江东中路98号建邺万达广场</span>
                        </div>
                        <div>
                            <span class="sort_body_head_down_down_text4">费用：</span>
                            <span class="sort_body_head_down_down_text5">免费</span>
                        </div>
                    </div>
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
        }
    }
}
</script>

<style scoped>
.sort_head_icon{
    line-height: 30px;
}
.sort_head_text{
    font-size: 15px;
    font-weight: 800;
    margin-left: 15px;
}
.sort_head{
    text-align: left;
}
.sort_neck{
    text-align: left;
    margin-top: 10px;
}
.sort_neck_up_name{
    font-size: 15px;
    font-weight: 800;
    margin-left: 10px;
}
.sort_neck_up_text1_button{
    color: #000000;
    background-color: #F2F2F2;
    margin-left: 5px;
    box-sizing: border-box;
}
.sort_neck_up_text1{
    width: 765px;
    height: 25px;
}
.sort_neck_up_text{
    width: 260px;
    height: 25px;
    overflow-x: scroll;
    box-sizing: border-box;
    margin-left: 10px;
}
.sort_neck_up{
    display: flex;
}
.sort_neck_down{
    display: flex;
}
.sort_neck{
    background:#FAFAFA ;
    height: 60px;
    width: 320px;
    padding-top: 10px;
}
.sort_body1{
    height: 10px;
    width: 320px;
    background: #E6E6E6;
}
.sort_body_head_up_text{
    font-size: 12px;
    font-weight: 900;
}
.sort_body_head_up_img{
    height: 22px;
    width: 3px;
}
.sort_body_head_up_img1{
    height: 8px;
    width: 8px;
}
.sort_body_head_up_search{
    font-size: 12px;
}
.sort_body_head_up{
    text-align: left;
    margin-top: 10px;
    margin-left: 10px;
    background: white;
}
.sort_body_head_up_button{
    margin-left: 150px;
}
.sort_body_head_up_search{
    margin-left: 15px;
}
.sort_body_head_down_up_img{
    height: 135px;
    width: 97px;
}
.sort_body_head_down{
    display: flex;
    text-align: left;
    margin-top: 10px;
    margin-left: 10px;
}
.sort_body_head_down_down_text1{
    font-size: 9px;
    color:#A4A4A4;
}
.sort_body_head_down_down_text2{
    font-size: 9px;
    color:#A4A4A4;
    margin-left: 120px;
}
.sort_body_head_down_down{
    margin-left: 10px;
}
.sort_body_head_down_down_text3{
    font-size: 15px;
    font-weight: 800;
}
.sort_body_head_down_down_text4{
    font-size: 13px;
    font-weight: 600;
    color:#848484;
}
.sort_body_head_down_down_text5{
    font-size: 13px;
    color:#A4A4A4;
}
.sort_body_head_down_down_text6{
    margin-top: 10px;
}
</style>