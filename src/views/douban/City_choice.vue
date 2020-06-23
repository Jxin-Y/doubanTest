<template>
    <div class="choice_all">
        <div class="choice_head">
            <van-icon @click="doubanhome" class="choice_head_icon" name="arrow-left" />
            <span class="choice_head_text">选择城市</span>
            <hr align="left" width="318px" color="#D8D8D8" size="0.5" />
        </div>
        <div class="choice_body">
            <van-tabs v-model="active"
            :color="'#000000'"
            line-width="25px"
            line-height="2px"
            >
                <van-tab title="国内">
                    <div class="choice_body_domestic">
                        <div class="choice_body_domestic_head">
                            <van-search 
                                v-model="value"
                                background="#ffffff"
                                placeholder="输入城市名称查询"
                            />
                        </div>
                        <div class="choice_body_domestic_body">
                            <van-index-bar highlight-color="#000000">
                                <van-index-anchor  
                                index="热门城市" />
                                <div class="choice_body_domestic_body1">
                                    <div>
                                        <div class="choice_body_domestic_body2">
                                            <span class="choice_body_domestic_body_name">北京</span>
                                        </div>
                                        <div class="choice_body_domestic_body2">
                                            <span class="choice_body_domestic_body_name">深圳</span>
                                        </div>
                                        <div class="choice_body_domestic_body2">
                                            <span class="choice_body_domestic_body_name">武汉</span>
                                        </div>
                                        <div class="choice_body_domestic_body2">
                                            <span class="choice_body_domestic_body_name">南京</span>
                                        </div>
                                        <div class="choice_body_domestic_body2">
                                            <span class="choice_body_domestic_body_name">长沙</span>
                                        </div>
                                    </div>
                                     <div>
                                        <div class="choice_body_domestic_body2">
                                            <span class="choice_body_domestic_body_name">上海</span>
                                        </div>
                                        <div class="choice_body_domestic_body2">
                                            <span class="choice_body_domestic_body_name">成都</span>
                                        </div>
                                        <div class="choice_body_domestic_body2">
                                            <span class="choice_body_domestic_body_name">重庆</span>
                                        </div>
                                        <div class="choice_body_domestic_body2">
                                            <span class="choice_body_domestic_body_name">西安</span>
                                        </div>
                                        <div class="choice_body_domestic_body2">
                                            <span class="choice_body_domestic_body_name">天津</span>
                                        </div>
                                    </div>
                                     <div>
                                        <div class="choice_body_domestic_body2">
                                            <span class="choice_body_domestic_body_name">广州</span>
                                        </div>
                                        <div class="choice_body_domestic_body2">
                                            <span class="choice_body_domestic_body_name">杭州</span>
                                        </div>
                                        <div class="choice_body_domestic_body2">
                                            <span class="choice_body_domestic_body_name">郑州</span>
                                        </div>
                                        <div class="choice_body_domestic_body2">
                                            <span class="choice_body_domestic_body_name">苏州</span>
                                        </div>
                                        <div class="choice_body_domestic_body2">
                                            <span class="choice_body_domestic_body_name">福州</span>
                                        </div>
                                    </div>
                                </div>

                                <van-index-anchor 
                                index="A" />
                                <van-cell title="安徽" />
                                <van-cell title="澳门" />

                                <van-index-anchor 
                                index="B" />
                                <van-cell title="北京" />
                                
                                <van-index-anchor 
                                index="C" />
                                <van-cell title="重庆" />

                                <van-index-anchor 
                                index="F" />
                                <van-cell title="福建" />

                                <van-index-anchor 
                                index="G" />
                                <van-cell title="甘肃" />
                                <van-cell title="广东" />
                                <van-cell title="广西" />
                                <van-cell title="贵州" />

                                <van-index-anchor 
                                index="H" />
                                <van-cell title="海南" />
                                <van-cell title="河北" />
                                <van-cell title="黑龙江" />
                                <van-cell title="河南" />
                                <van-cell title="香港" />
                                <van-cell title="湖北" />
                                <van-cell title="湖南" />
                            </van-index-bar>
                        </div>
                    </div>
                </van-tab>
                <van-tab title="海外">
                    <div class="choice_body_overseas">
                        <div class="choice_body_domestic_head">
                            <van-search 
                                v-model="value"
                                background="#ffffff"
                                placeholder="输入城市名称查询"
                            />
                        </div>
                        <div class="choice_body_overseas_body">
                            <van-index-bar highlight-color="#000000">
                                <van-index-anchor index="A" />
                                <van-cell title="Afghanistan" />
                                <van-cell title="Aland Islands" />
                                <van-cell title="Albania" />
                                <van-cell title="Algeria" />
                                <van-cell title="American Samoa" />
                                <van-cell title="Andorra" />
                                <van-cell title="Angola" />
                                <van-cell title="Anguilla" />
                                <van-cell title="Antarctica" />
                                <van-cell title="Antigua" />
                                <van-cell title="Antigua and Barbuda" />
                                <van-cell title="Argentina" />
                                <van-cell title="Aruba" />
                                <van-cell title="Australis" />
                                <van-cell title="Austria" />
                                <van-cell title="Azerbaijan" />

                                <van-index-anchor index="B" />
                                <van-cell title="Bahamas" />
                                <van-cell title="Bahrain" />
                                <van-cell title="Bangladesh" />

                                <van-index-anchor index="C" />
                                <van-cell title="Cambodia" />
                                <van-cell title="Cameroon" />
                                <van-cell title="Canada" />

                            </van-index-bar>
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
        doubanhome(){
            this.$router.push("/douban_home")
        }
    }
}
</script>

<style scoped>
.choice_head_icon{
    line-height: 30px;
}
.choice_head_text{
    font-size: 15px;
    font-weight: 800;
    margin-left: 15px;
}
.choice_head{
    text-align: left;
}
.choice_body_domestic_body{
    text-align: left;
    background: #F2F2F2;
}
.choice_body_domestic_body_name{
    font-size: 14px;
    line-height: 30px;
    
    
}
.choice_body_domestic_body1{
    display: flex;
}
.choice_body_domestic_body2{
    height: 30px;
    width: 93px;
    background: #ffffff;
    margin-left: 10px;
    margin-top: 10px;
    text-align:center;
}
.choice_body_overseas_body{
    text-align: left;
}
</style>