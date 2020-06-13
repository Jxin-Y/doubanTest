<template>
<div>
  <div class="douban_home_search">
    <div class="douban_home_search_1">
      <van-search
        shape="round"
        placeholder="请输入搜索关键词"
        right-icon="scan"
      />
    </div>
    <div class="douban_home_search_2">
      <van-icon  name="envelop-o" />
    </div>
  </div>
  <div class="douban_home_body">
    <div class="douban_home_body1">
      <van-tabs
        @click="onClick"
        class="douban_home_body_bar" 
        line-height="1.5px"
        line-width="27px"
        >
        <van-tab title="动态">内容 1</van-tab>
        <van-tab title="推荐">内容 2</van-tab>
        <van-tab title="动态">内容 1</van-tab>
        <van-tab title="动态">内容 1</van-tab>
        <van-tab title="动态">内容 1</van-tab>
        <van-tab title="动态">内容 1</van-tab>
      </van-tabs>
    </div>
  </div>
</div>
</template>

<style scoped>
.douban_home_search{
  display: flex;
}
.douban_home_search_1{
  width: 96%;
}
.douban_home_search_2{
  padding-right: 4%;
  margin:auto;
}
.douban_home_body_bar{
  width: 320px;
}
</style>