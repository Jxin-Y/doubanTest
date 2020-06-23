<template>
    <div class="money_all">
        <div class="money_head">
            <van-icon @click="my" class="money_head_icon" name="arrow-left" />
            <span class="money_head_text1">我的钱包</span>
        </div>
        <div class="money_one">
            <img @click="moneyticket" class="money_one_img" src="..\..\assets\img\my\mymoney.png">
        </div>
        <div class="money_tiao"></div>
        <div class="money_two">
            <div class="money_two1"></div>
            <span class="money_two2">零钱</span>
            <span class="money_two3">￥0.00</span>
            <van-icon class="money_two4" name="arrow" />
        </div>
        <div class="money_tiao1"></div>
    </div>
</template>

<script>
export default {
    methods:{
        my(){
            this.$router.push("/my")
        },
        moneyticket(){
            this.$router.push("/money_ticket")
        }
    }
}
</script>

<style scoped>
.money_head{
    text-align: left;
    margin-top: 10px;
    margin-bottom: 10px;
}
.money_head_icon{
    margin-left: 10px;
}
.money_head_text1{
    margin-left: 30px;
    font-weight: 1000;
}
.money_one_img{
    width: 321px;
}
.money_one{
    height: 96.16px;
  
}
.money_tiao{
    height: 15px;
    background-color: #f2f1ed;
}
.money_tiao1{
    height: 400px;
    background-color: #f2f1ed;
}
.money_two{
    height: 50px;
    text-align: left;
    display: flex;
}
.money_two1{
    height: 50px;
    width: 2px;
    background-color: #4887ea;
}
.money_two2{
    line-height: 50px;
    margin-left: 10px;
    color:#4887ea;
}
.money_two3{
    line-height: 50px;
    margin-left: 205px;
}
.money_two4{
    line-height: 50px;
}
</style>