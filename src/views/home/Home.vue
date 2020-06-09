<template>
<div>
  <div class="home_search">
    <div class="home_search_1">
      <van-search
        shape="round"
        background="#4fc08d"
        placeholder="请输入搜索关键词"
        right-icon="scan"
      />
    </div>
    <div class="home_search_2">
      <van-icon  name="envelop-o" />
    </div>
  </div>
  <div class="home_body">
    <div >
      <van-tabs 
        @click="onClick"
        class="home_body_bar" 
        title-active-color="#0fc23a"
        line-height="1.5px"
        line-width="27px">
        <van-tab title="动态">内容 1</van-tab>
        <van-tab title="推荐">内容 2</van-tab>
      </van-tabs>
    </div>
  </div>
</div>
</template>

<script>
import { Toast } from 'vant';

export default {
  methods: {
    onClick(name, title) {
      Toast(title);
    },
  },
};
</script>

<style>
.home_search{
  display: flex;
  background:#4fc08d;
}
.home_search_1{
  width: 96%;
}
.home_search_2{
  padding-right: 4%;
  margin:auto;
}
</style>