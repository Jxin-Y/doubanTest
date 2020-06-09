<template>
    <div class="news_bar">

        <div class="news_bar_laber">
            <van-tabs v-model="active">
                <van-tab title="标签 1">内容 1</van-tab>
                <van-tab title="标签 1">内容 1</van-tab>
                <van-tab title="标签 2">内容 2</van-tab>
            </van-tabs>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

.news_bar_laber{
    background: wheat;
}
</style>