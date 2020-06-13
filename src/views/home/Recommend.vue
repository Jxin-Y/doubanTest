<template>
    <div class="recommend_all">
        <div class="recommend_dynamic">
            <div class="recommend_dynamic_1">
                <div class="recommend_dynamic_title">
                   <div class="recommend_dynamic_title_img">
                       <img class="recommend_dynamic_title_img_1" src="../../assets/img/home/header.png">
                   </div>   
                   <div class="recommend_dynamic_title_text">
                       <span>Coriopo</span>
                   </div>
                   <div class="recommend_dynamic_title_ellipsis">
                       <span>...</span>
                   </div>
                </div>
                <div class="recommend_dynamic_topic">
                    <div class="recommend_dynamic_topic_background">
                        <img class="recommend_dynamic_topic_img" src="../../assets/img/home/topic.png">
                        <span class="recommend_dynamic_topic_write">电影里的电影</span>
                    </div> 
                </div>
                <div class="recommend_dynamic_body">
                    <div class="recommend_dynamic_body_write">
                        <span>跑这个题 这个实在忍不住 (弄得我又得去看了一遍闪灵哈哈哈哈)</span>
                    </div>
                    <div class="recommend_dynamic_body_img">
                        <img class="recommend_dynamic_body_img_1" src="../../assets/img/home/body1.png">
                        <img class="recommend_dynamic_body_img_2" src="../../assets/img/home/body2.png">
                    </div>
                </div>
                <div class="recommend_dynamic_bottom">
                    <img class="recommend_dynamic_good" src="../../assets/img/home/good.png">
                    <img class="recommend_dynamic_comment" src="../../assets/img/home/comment.png">
                    <img class="recommend_dynamic_forward" src="../../assets/img/home/forward.png">
                </div>
            </div>
            
        </div>
    </div>
</template>

<style scoped>
/* .recommend_all{
    height: 586px;
    width: 320px;
    background: rgb(226, 226, 226);
} */
.recommend_dynamic_1{
    background: white;
}
/* .recommend_dynamic_2{
    background: white;
    margin-top: 10px;
}
.recommend_dynamic_3{
    background: white;
    margin-top: 10px;
} */
.recommend_dynamice_title{
    height: 30px;
    width: 100%;
    display: flex;

}
.recommend_dynamic_title_img_1{
    height: 25px;
    width: 25px;
    margin-left: -270px;
    margin-top: 10px;
}
.recommend_dynamic_title_text{
    line-height: 30px;
    margin-top: -35px;
    margin-left: 50px;
    width: 57px;
    font-size: 15px;
}
.recommend_dynamic_title_ellipsis{
    margin-left: 280px;
    margin-top: -20px;
}
.recommend_dynamic_topic{
    margin-left: 10px;
    margin-top: 10px;
}
.recommend_dynamic_topic_background{
    background: #F2F2F2;
    height: 18px;
    width: 120px;
    border-radius: 9px;

}
.recommend_dynamic_topic_img{
    height: 14px;
    width: 14px;
}
.recommend_dynamic_topic_write{
    font-size: 12px;
    color: #31B404;
    margin-left: 5px;
}
.recommend_dynamic_body_write{
    width: 290px;
    font-size: 12px;
    margin-top: 10px;
    margin-left: 10px;
    text-align: left;
}
/* .recommend_dynamic_body_img{
    height: 90px;
    width: 100%;
    text-align: left;
    margin-left: 10px;
} */
.recommend_dynamic_body_img_1{
    height: 90px;
    width: 90px;
}
.recommend_dynamic_body_img_2{
    height: 90px;
    width: 90px;
    margin-left: 8px;
}
.recommend_dynamic_bottom{
    margin-top: 10px;
    margin-left: 10px;
    display: flex;
}
.recommend_dynamic_good{
    margin-left: 35px;
}
.recommend_dynamic_comment{
    margin-left: 70px;
}
.recommend_dynamic_forward{
    margin-left: 70px;
}
</style>