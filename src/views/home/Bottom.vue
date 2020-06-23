<template>
     <div class="bottom_all">
        <router-view></router-view>
        <van-tabbar v-model="active" active-color="#07c160">
            <van-tabbar-item to="/home" icon="wap-home-o">首页</van-tabbar-item>
            <van-tabbar-item to="/douban_home" icon="coupon-o">书影音</van-tabbar-item>
            <van-tabbar-item to="/group" icon="friends-o">小组</van-tabbar-item>
            <van-tabbar-item to="/market" icon="shop-o">市集</van-tabbar-item>
            <van-tabbar-item to="/my" icon="user-o">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style>

</style>