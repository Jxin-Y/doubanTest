import Vue from "vue";
import VueRouter from "vue-router";
import Home from '@/views/home/Home';
import News from '@/views/home/news/News';
import Dynamic from '@/views/home/Dynamic';
import Douban_home from '@/views/douban/Douban_home';
import Film from '@/views/douban/Film';
import Recommend from '@/views/home/Recommend';
import Search from '@/views/home/Search';
import Novel from '@/views/douban/Novel';
import Music from '@/views/douban/Music';


Vue.use(VueRouter);

const routes = [
  {
    path:'/',
    name:'Home',
    component:Home
  },
  {
    path:'/news',
    name:'News',
    component:News
  },
  {
    path:'/dynamic',
    name:'Dynamic',
    component:Dynamic
  },
  {
    path:'/douban_home',
    name:'Douban_home',
    component:Douban_home
  },
  {
    path:'/film',
    name:'Film',
    component:Film
  },
  {
    path:'/recommend',
    name:'Recommend',
    component:Recommend
  },
  {
    path:'/search',
    name:'Search',
    component:Search
  },
  {
    path:'/novel',
    name:'Novel',
    component:Novel
  },
  {
    path:'/music',
    name:'Music',
    component:Music
  }
];

const router = new VueRouter({
  routes
});

export default router;
