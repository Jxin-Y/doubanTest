<template>
    <div class="ticket_all">
        <div class="ticket_head">
            <van-icon @click="money" class="ticket_head_icon" name="arrow-left" />
            <span class="ticket_head_text1">兑换码 - 豆瓣</span>
            <span class="ticket_head_text2">···</span>
        </div>
        <hr align="left" width="319px" color="#D8D8D8" size="0.5" />
        <div class="ticket_one">
            <span class="ticket_one_text">兑换码</span>
        </div>
        <div class="ticket_two">
            <span class="ticket_two_text">输入兑换码</span>
        </div>
        <div class="ticket_three">
            <span class="ticket_three_text">立即兑换</span>
        </div>
        <div class="ticket_four">
            <span class="ticket_four_text1">当前登录账号：秋</span>
            <span class="ticket_four_text2">更换账号</span>
        </div>
        <div class="ticket_five">
            <span class="ticket_five_text1">兑换说明</span>
            <div  class="ticket_five1">
                <span class="ticket_five_text2">1.目前只支持豆瓣时间兑换码；</span>
            </div>
            <div>
                <span class="ticket_five_text2">2.兑换成功后，得到的物品会绑定到当前登录账号；</span>
            </div>
            <div>
                <span class="ticket_five_text2">3.兑换成功后，不能转赠他人或者退款。</span>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        money(){
            this.$router.push("/money")
        }
    }
}
</script>

<style scoped>
.ticket_head{
    height: 35px;
    text-align: left;
}
.ticket_head_icon{
    margin-left: 10px;
    line-height: 35px;
    
}
.ticket_head_text1{
    font-size: 15px;
    line-height: 35px;
    margin-left: 20px;
}
.ticket_head_text2{
    font-size: 15px;
    line-height: 35px;
    margin-left: 160px;
}
.ticket_one{
    text-align: left;
}
.ticket_one_text{
    font-size: 15px;
    margin-left: 10px;
}
.ticket_two{
    height: 35px;
    width: 300px;
    border: 1px solid black;
    border-radius: 3px;
    margin-left: 10px;
    margin-top: 20px;
    text-align: left;
}
.ticket_two_text{
    line-height: 35px;
    margin-left: 10px;
    font-size: 14px;
    color: #D8D8D8;
}
.ticket_three{
    margin-top: 20px;
    height: 35px;
    width: 300px;
    background-color: #04B404;
    margin-left: 10px;
    border-radius: 3px;
}
.ticket_three_text{
    font-size: 14px;
    color: #ffffff;
    line-height: 35px;
}
.ticket_four{
    text-align: left;
    margin-top: 20px;
}
.ticket_four_text1{
    margin-left: 10px;
    font-size: 13px;
    color: #BDBDBD;
}
.ticket_four_text2{
    margin-left: 140px;
    font-size: 13px;
    color: #04B404;
}
.ticket_five{
    margin-top: 60px;
    text-align: left;
    margin-left: 10px;
}
.ticket_five_text1{
    font-size: 13px;
    font-weight: 1000;
    color: #BDBDBD;
}
.ticket_five_text2{
    font-size: 13px;
    color: #A4A4A4;
}
.ticket_five1{
    margin-top: 10px;
}
</style>