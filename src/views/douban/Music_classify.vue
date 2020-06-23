<template>
    <div class="classify_all">
        <div class="classify_head">
            <van-icon @click="doubanhome" name="arrow-left" />
            <span class="classify_head_text">分类找音乐</span>
        </div>
        <div class="classify_one">
            <img class="classify_one_img" src="..\..\assets\img\douban\music\screen.png">
            <span class="classify_one_text1">分类找音乐</span>
            <span @click="musicclassifyin" class="classify_one_text2">地区、流派、特色<van-icon name="arrow" /></span>
        </div>
        <div class="classify_two">
            <div class="classify_two_text">
                <span class="classify_two_text1">风格</span>
            </div>
            <div class="classify_two_fengge">
                <div>
                    <img class="classify_two_img1" src="..\..\assets\img\douban\music\musicfengge1.png">
                    <img class="classify_two_img1" src="..\..\assets\img\douban\music\musicfenge2.png">
                    <img class="classify_two_img1" src="..\..\assets\img\douban\music\musicfenge3.png">
                </div>
                <div>
                    <img class="classify_two_img1" src="..\..\assets\img\douban\music\musicfenge4.png">
                    <img class="classify_two_img1" src="..\..\assets\img\douban\music\musicfenge5.png">
                    <img class="classify_two_img1" src="..\..\assets\img\douban\music\musicfenge6.png">
                </div>
                <div>
                    <img class="classify_two_img1" src="..\..\assets\img\douban\music\musicfenge7.png">
                    <img class="classify_two_img1" src="..\..\assets\img\douban\music\musicfenge8.png">
                    <img class="classify_two_img1" src="..\..\assets\img\douban\music\musicfenge9.png">
                </div>
            </div>
        </div>
        <div class="classify_two">
            <div class="classify_two_text">
                <span class="classify_two_text1">地区</span>
            </div>
            <div class="classify_two_area">
                <div>
                    <img class="classify_two_img1" src="..\..\assets\img\douban\music\musicarea1.png">
                    <img class="classify_two_img1" src="..\..\assets\img\douban\music\musicarea2.png">
                    <img class="classify_two_img1" src="..\..\assets\img\douban\music\musicarea3.png">
                </div>
                <div>
                    <img class="classify_two_img1" src="..\..\assets\img\douban\music\musicarea4.png">
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
        musicclassifyin(){
            this.$router.push("/music_classify_in")
        }
    }
}
</script>

<style scoped>
.classify_head{
    text-align: left;
    margin-left: 10px;
    margin-top: 10px;
}
.classify_head_text{
    margin-left: 20px;
}
.classify_one{
    width: 300px;
    height: 35px;
    border: 1px solid #E6E6E6;
    border-radius: 3px;
    margin-top: 20px;
    margin-left: 10px;
    text-align: left;
}
.classify_one_img{
    height: 15px;
    width: 15px;
    margin-left: 10px;
    line-height: 35px;
}
.classify_one_text1{
    margin-left: 5px;
    font-size: 14px;
    font-weight: 1000;
    line-height: 35px;
}
.classify_one_text2{
    font-size: 12px;
    line-height: 35px;
    margin-left: 80px;
}
.classify_two_text1{
    font-size: 13px;
    font-weight: 1000;
}
.classify_two_text{
    text-align: left;
    margin-left: 10px;
}
.classify_two{
    margin-top: 20px;
}
.classify_two_img1{
    width: 93px;
    height: 46px;
    margin-left: 10px;
    margin-top: 5px;
}
.classify_two_fengge{
    margin-top: 10px;
    text-align: left;
}
.classify_two_area{
    text-align: left;
    margin-top: 10px;
}
</style>